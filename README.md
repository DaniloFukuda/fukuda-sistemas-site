# Fukuda Sistemas

Landing page institucional estática da Fukuda Sistemas, criada com HTML, CSS e JavaScript puros.

O site apresenta a Fukuda Sistemas como uma empresa de sistemas práticos para negócios reais, com foco em automações via WhatsApp, painéis operacionais, relatórios, sites/cardápios digitais e ferramentas sob medida para pequenas empresas.

## Conteúdo principal

A página deve destacar exemplos práticos já trabalhados na operação:

- **Ciclus Agro / RDV**: recebimento de comprovantes pelo WhatsApp, identificação por colaborador, controle de KM, categorias e relatório semanal em Excel.
- **OLT / Contentores**: fluxos de cadastro, entrega, recolha, status, fotos, avarias, histórico e visão operacional/financeira.
- **Cardápio digital**: cardápio mobile-first com carrinho e envio do pedido para o WhatsApp do restaurante.
- **Lucre Agro / Documentos**: recepção documental, CPF/CNPJ antes do envio, classificação e validação de documentos.

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

## Abrir localmente

Abra o arquivo `index.html` diretamente no navegador. Não é necessário instalar dependências ou executar um servidor.

## Publicação

### Publicação no GitHub Pages

Este é o site estático institucional da Fukuda Sistemas, preparado para publicação via GitHub Pages.

- Link provisório: `https://danilofukuda.github.io/fukuda-sistemas-site/`
- Domínio final: `https://fukudasistemas.com.br`

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
- `script.js`: contatos, mensagens do WhatsApp, menu mobile e animações.
- `assets/`: logo, favicon e ícone para dispositivos Apple.
- `robots.txt` e `sitemap.xml`: arquivos de indexação.
