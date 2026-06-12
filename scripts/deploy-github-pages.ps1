[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$Repository = "DaniloFukuda/fukuda-sistemas-site"
$RepositoryUrl = "https://github.com/$Repository"
$RemoteUrl = "$RepositoryUrl.git"
$PagesUrl = "https://danilofukuda.github.io/fukuda-sistemas-site/"
$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

Set-Location -LiteralPath $ProjectRoot

function Write-Step {
    param([Parameter(Mandatory)][string]$Message)
    Write-Host "`n==> $Message" -ForegroundColor Cyan
}

function Invoke-External {
    param(
        [Parameter(Mandatory)][string]$Command,
        [Parameter()][string[]]$Arguments = @(),
        [Parameter()][switch]$AllowFailure
    )

    Write-Host "> $Command $($Arguments -join ' ')" -ForegroundColor DarkGray
    $commandOutput = @(& $Command @Arguments 2>&1)
    $exitCode = $LASTEXITCODE

    foreach ($line in $commandOutput) {
        Write-Host $line
    }

    if (-not $AllowFailure -and $exitCode -ne 0) {
        throw "O comando falhou com código $exitCode`: $Command $($Arguments -join ' ')"
    }

    return $exitCode
}

try {
    Write-Step "Validando arquivos obrigatórios"
    $requiredFiles = @(
        "index.html",
        "styles.css",
        "script.js",
        "assets/logo-fukuda-sistemas.jpg",
        "README.md",
        "robots.txt",
        "sitemap.xml",
        ".nojekyll"
    )

    $missingFiles = @($requiredFiles | Where-Object {
        -not (Test-Path -LiteralPath (Join-Path $ProjectRoot $_) -PathType Leaf)
    })

    if ($missingFiles.Count -gt 0) {
        throw "Arquivos obrigatórios ausentes: $($missingFiles -join ', ')"
    }

    Write-Host "Todos os arquivos obrigatórios foram encontrados." -ForegroundColor Green

    Write-Step "Validando ausência de placeholders e contatos privados"
    $forbiddenValues = @(
        ("SEU_NUMERO" + "_AQUI"),
        ("seu" + "dominio.com.br"),
        ("contato@" + "seu" + "dominio.com.br"),
        ("vantufukuda@" + "gmail.com")
    )
    $searchFiles = Get-ChildItem -LiteralPath $ProjectRoot -Recurse -File |
        Where-Object {
            -not $_.FullName.StartsWith((Join-Path $ProjectRoot ".git")) -and
            $_.Extension -notin @(".jpg", ".jpeg", ".png", ".gif", ".ico")
        }

    foreach ($value in $forbiddenValues) {
        $matches = @($searchFiles | Select-String -SimpleMatch -Pattern $value)
        if ($matches.Count -gt 0) {
            $locations = $matches | ForEach-Object {
                "$($_.Path):$($_.LineNumber)"
            }
            throw "Valor proibido encontrado: '$value' em $($locations -join ', ')"
        }
    }

    Write-Host "Nenhum placeholder ou Gmail pessoal foi encontrado." -ForegroundColor Green

    Write-Step "Validando Git e árvore de trabalho"
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        throw "Git não foi encontrado no PATH."
    }

    Invoke-External git @("status", "--short", "--branch") | Out-Null
    $branch = (& git branch --show-current).Trim()
    if ($LASTEXITCODE -ne 0) {
        throw "Não foi possível identificar a branch Git atual."
    }
    if ($branch -ne "main") {
        throw "A branch atual é '$branch'. A publicação exige a branch 'main'."
    }

    $dirtyFiles = @(& git status --porcelain)
    if ($LASTEXITCODE -ne 0) {
        throw "Não foi possível verificar a árvore de trabalho."
    }
    if ($dirtyFiles.Count -gt 0) {
        throw "A árvore de trabalho não está limpa:`n$($dirtyFiles -join "`n")"
    }

    Write-Host "Branch main confirmada e árvore de trabalho limpa." -ForegroundColor Green

    Write-Step "Validando GitHub CLI"
    if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
        throw "GitHub CLI (gh) não foi encontrado no PATH."
    }

    Invoke-External gh @("--version") | Out-Null
    $authExitCode = Invoke-External gh @("auth", "status") -AllowFailure
    if ($authExitCode -ne 0) {
        Write-Host "Autenticação necessária. Conclua o login no navegador ou usando o código exibido." -ForegroundColor Yellow
        Invoke-External gh @("auth", "login", "--web", "--git-protocol", "https") | Out-Null
        Invoke-External gh @("auth", "status") | Out-Null
    }

    Write-Step "Criando ou conectando o repositório remoto"
    $repoExists = (Invoke-External gh @("repo", "view", $Repository) -AllowFailure) -eq 0

    if (-not $repoExists) {
        Invoke-External gh @(
            "repo", "create", $Repository,
            "--public",
            "--description", "Landing page institucional da Fukuda Sistemas",
            "--source=.",
            "--remote=origin",
            "--push"
        ) | Out-Null
    }
    else {
        $originExists = (& git remote) -contains "origin"
        if ($originExists) {
            Invoke-External git @("remote", "set-url", "origin", $RemoteUrl) | Out-Null
        }
        else {
            Invoke-External git @("remote", "add", "origin", $RemoteUrl) | Out-Null
        }
        Invoke-External git @("push", "-u", "origin", "main") | Out-Null
    }

    Write-Step "Ativando GitHub Pages em main e pasta raiz"
    $pagesEndpoint = "repos/$Repository/pages"
    $pagesExists = (Invoke-External gh @(
        "api", $pagesEndpoint,
        "-H", "Accept: application/vnd.github+json"
    ) -AllowFailure) -eq 0

    $pagesMethod = if ($pagesExists) { "PUT" } else { "POST" }
    Invoke-External gh @(
        "api", $pagesEndpoint,
        "--method", $pagesMethod,
        "-H", "Accept: application/vnd.github+json",
        "-f", "source[branch]=main",
        "-f", "source[path]=/"
    ) | Out-Null

    Write-Step "Solicitando build do GitHub Pages"
    $buildExitCode = Invoke-External gh @(
        "api", "repos/$Repository/pages/builds",
        "--method", "POST",
        "-H", "Accept: application/vnd.github+json"
    ) -AllowFailure

    if ($buildExitCode -ne 0) {
        Write-Warning "Não foi possível solicitar um build adicional. O GitHub pode já ter iniciado o build automaticamente."
    }

    Write-Step "Consultando status final do GitHub Pages"
    Invoke-External gh @(
        "api", $pagesEndpoint,
        "-H", "Accept: application/vnd.github+json"
    ) | Out-Null

    Write-Host "`nPublicação configurada com sucesso." -ForegroundColor Green
    Write-Host "Repositório: $RepositoryUrl"
    Write-Host "GitHub Pages: $PagesUrl"
    Write-Host "Domínio personalizado não configurado; nenhum CNAME foi criado."
}
catch {
    Write-Error "PUBLICAÇÃO INTERROMPIDA: $($_.Exception.Message)"
    exit 1
}
