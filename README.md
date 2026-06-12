# Fukuda Sistemas

Landing page institucional estática da Fukuda Sistemas, criada com HTML, CSS e JavaScript puros. O site apresenta serviços de desenvolvimento de sistemas, automações, sites profissionais, painéis e integrações para pequenas empresas.

## Configuração

Os dados de contato ficam centralizados no início do arquivo `script.js`, dentro de `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  WHATSAPP_NUMBER: "5561998266551",
  EMAIL: "contato@fukudasistemas.com.br",
  DOMAIN: "fukudasistemas.com.br",
  BRAND_NAME: "Fukuda Sistemas",
};
```

Dados públicos configurados:

- WhatsApp: `5561998266551`
- E-mail público: `contato@fukudasistemas.com.br`
- Domínio: `https://fukudasistemas.com.br`

O número do WhatsApp usa o formato internacional, somente com números, sem `+`, espaços ou traços.

> O e-mail profissional pode estar em propagação de DNS na Umbler/Registro.br e está configurado para ser usado publicamente no site.

## Abrir localmente

Abra o arquivo `index.html` diretamente no navegador. Não é necessário instalar dependências ou executar um servidor.

## Publicação

### Publicação no GitHub Pages

Este é o site estático institucional da Fukuda Sistemas, preparado para publicação via GitHub Pages.

- Link provisório: `https://danilofukuda.github.io/fukuda-sistemas-site/`
- Domínio final planejado: `https://fukudasistemas.com.br`

Enquanto o domínio personalizado não for configurado, o projeto pode ser acessado pelo endereço provisório do GitHub Pages.

### GitHub Pages

1. Envie os arquivos para um repositório no GitHub.
2. Acesse **Settings > Pages**.
3. Em **Build and deployment**, escolha a branch principal e a pasta raiz.
4. Salve e aguarde a publicação.

### Netlify

Arraste a pasta do projeto para o painel de deploy do Netlify ou conecte o repositório Git. Não é necessário informar comando de build; a pasta de publicação é a raiz do projeto.

### Vercel

Importe o repositório no Vercel e selecione **Other** como framework. Não informe comando de build e use `.` como diretório de saída.

## Arquivos principais

- `index.html`: conteúdo, SEO e estrutura da página.
- `styles.css`: identidade visual e responsividade.
- `script.js`: contatos, menu mobile e animações.
- `assets/`: logo, favicon e ícone para dispositivos Apple.
- `robots.txt` e `sitemap.xml`: arquivos de indexação.
