const SITE_CONFIG = {
  WHATSAPP_NUMBER: '5561998266551',
  EMAIL: 'contato@fukudasistemas.com.br',
  DOMAIN: 'fukudasistemas.com.br',
  BRAND_NAME: 'Fukuda Sistemas',
};

const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Fukuda Sistemas e quero conversar sobre uma solução prática para minha operação.';
const AUTOMATION_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Fukuda Sistemas e quero fazer um diagnóstico de automação para WhatsApp, painel ou processo interno.';

const PRACTICAL_STYLES = `
  .proof-strip {
    padding-block: clamp(2rem, 4vw, 3rem);
    border-bottom: 1px solid rgba(255, 255, 255, 0.045);
    background: var(--color-bg-deep);
  }

  .proof-grid,
  .case-grid,
  .tag-list,
  .flow-preview {
    display: grid;
    gap: 1rem;
  }

  .proof-card {
    padding: 1.25rem;
    border: 1px solid rgba(1, 164, 223, 0.16);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.02);
  }

  .proof-card strong,
  .proof-card span {
    display: block;
  }

  .proof-card strong {
    margin-bottom: 0.45rem;
    color: var(--color-white);
  }

  .proof-card span {
    color: var(--color-muted);
    font-size: 0.84rem;
  }

  .cases-section {
    border-block: 1px solid rgba(255, 255, 255, 0.045);
    background: var(--color-bg-deep);
  }

  .case-grid {
    grid-template-columns: 1fr;
  }

  .case-card {
    position: relative;
    display: flex;
    min-height: 100%;
    padding: clamp(1.35rem, 4vw, 2rem);
    overflow: hidden;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: linear-gradient(145deg, rgba(12, 39, 61, 0.68), rgba(7, 26, 43, 0.8));
    transition: transform var(--transition), border-color var(--transition), background var(--transition);
  }

  .case-card::after {
    position: absolute;
    right: -70px;
    bottom: -70px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(1, 164, 223, 0.04);
    content: '';
    filter: blur(30px);
  }

  .case-card:hover {
    transform: translateY(-6px);
    border-color: rgba(1, 164, 223, 0.42);
    background: linear-gradient(145deg, rgba(13, 48, 74, 0.82), rgba(7, 26, 43, 0.9));
  }

  .case-card-featured {
    background:
      radial-gradient(circle at top right, rgba(1, 164, 223, 0.16), transparent 34%),
      linear-gradient(145deg, rgba(12, 39, 61, 0.9), rgba(7, 26, 43, 0.88));
  }

  .case-header {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.65rem;
  }

  .case-header span {
    color: var(--color-primary);
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .case-header strong {
    padding: 0.35rem 0.55rem;
    border: 1px solid rgba(1, 164, 223, 0.2);
    border-radius: 999px;
    background: rgba(1, 164, 223, 0.08);
    color: var(--color-text);
    font-size: 0.66rem;
  }

  .case-card h3,
  .case-card p,
  .case-card ul,
  .tag-list {
    position: relative;
    z-index: 2;
  }

  .case-card h3 {
    font-size: clamp(1.3rem, 3vw, 1.9rem);
  }

  .case-card p,
  .case-card li {
    font-size: 0.88rem;
  }

  .case-card ul {
    display: grid;
    gap: 0.45rem;
    color: var(--color-muted);
    list-style: none;
  }

  .case-card li {
    padding-left: 1.25rem;
  }

  .case-card li::before {
    display: inline-block;
    width: 1.25rem;
    margin-left: -1.25rem;
    color: var(--color-primary);
    content: '✓';
  }

  .tag-list {
    display: flex;
    margin-top: auto;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .tag-list span {
    padding: 0.38rem 0.55rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
    color: var(--color-text);
    font-size: 0.65rem;
  }

  .flow-preview {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }

  .flow-preview span {
    padding: 0.55rem 0.75rem;
    border: 1px solid rgba(1, 164, 223, 0.22);
    border-radius: 999px;
    background: rgba(1, 164, 223, 0.08);
    color: var(--color-white);
    font-size: 0.68rem;
    font-weight: 700;
  }

  .flow-preview i {
    width: 18px;
    height: 1px;
    background: rgba(1, 164, 223, 0.55);
  }

  @media (min-width: 560px) {
    .proof-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 900px) {
    .case-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .case-card-featured {
      grid-column: span 2;
    }
  }
`;

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setHTML(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function updateMeta(name, content) {
  const meta = document.querySelector(`meta[name='${name}']`);
  if (meta) meta.setAttribute('content', content);
}

function updateProperty(property, content) {
  const meta = document.querySelector(`meta[property='${property}']`);
  if (meta) meta.setAttribute('content', content);
}

function injectPracticalStyles() {
  if (document.querySelector('[data-practical-styles]')) return;
  const style = document.createElement('style');
  style.setAttribute('data-practical-styles', 'true');
  style.textContent = PRACTICAL_STYLES;
  document.head.appendChild(style);
}

function enhanceNavigation() {
  const nav = document.querySelector('.main-nav');
  if (!nav || nav.querySelector('a[href="#cases"]')) return;

  const processLink = nav.querySelector('a[href="#processo"]');
  const casesLink = document.createElement('a');
  casesLink.href = '#cases';
  casesLink.textContent = 'Na prática';

  if (processLink) {
    nav.insertBefore(casesLink, processLink);
  } else {
    nav.appendChild(casesLink);
  }
}

function enhanceHero() {
  document.title = 'Fukuda Sistemas | Automações WhatsApp, sistemas e painéis para negócios reais';
  updateMeta('description', 'Sistemas sob medida, automações com WhatsApp, painéis operacionais, RDV, controle de contentores, cardápios digitais e validação documental para pequenas empresas.');
  updateProperty('og:title', 'Fukuda Sistemas | Tecnologia prática para negócios reais');
  updateProperty('og:description', 'Automatizamos rotinas reais: WhatsApp, comprovantes, relatórios, documentos, pedidos, contentores e painéis de gestão.');
  updateMeta('twitter:title', 'Fukuda Sistemas | Sistemas e automações sob medida');
  updateMeta('twitter:description', 'Soluções práticas para WhatsApp, painéis, documentos, pedidos, RDV e operações de campo.');

  setHTML('.hero-copy .eyebrow', '<span></span> Tecnologia aplicada na operação');
  setHTML('.hero-copy h1', 'Sistemas práticos para negócios que dependem de <em>WhatsApp, controle e rotina.</em>');
  setText('.hero-text', 'A Fukuda Sistemas cria automações, painéis e sites que saem do discurso e entram no dia a dia: comprovantes, relatórios, pedidos, documentos, contentores, atendimentos e fluxos operacionais.');

  const primaryButton = document.querySelector('.hero-actions .button:not(.button-secondary)');
  if (primaryButton) primaryButton.innerHTML = 'Solicitar diagnóstico <span aria-hidden="true">↗</span>';

  const secondaryButton = document.querySelector('.hero-actions .button-secondary');
  if (secondaryButton) {
    secondaryButton.href = '#cases';
    secondaryButton.innerHTML = 'Ver exemplos práticos <span aria-hidden="true">↓</span>';
  }

  setHTML('.trust-line', '<span>✓ WhatsApp Cloud API e fluxos guiados</span><span>✓ Deploy, domínio, HTTPS e suporte</span><span>✓ Evolução por MVP com testes</span>');

  setText('.dashboard-label', 'OPERAÇÃO DIGITAL');
  setText('.dashboard-header strong', 'Central Fukuda Sistemas');
  setText('.dashboard-highlight span', 'Foco atual');
  setText('.dashboard-highlight strong', 'menos retrabalho');

  const chart = document.querySelector('.dashboard-highlight .chart');
  if (chart) {
    chart.outerHTML = '<div class="flow-preview" aria-hidden="true"><span>WhatsApp</span><i></i><span>Banco</span><i></i><span>Painel</span></div>';
  }

  setHTML('.dashboard-stats', `
    <article>
      <span class='stat-icon'>☑</span>
      <div><strong>RDV</strong><span>comprovantes, KM e planilha</span></div>
      <small>Excel</small>
    </article>
    <article>
      <span class='stat-icon'>▣</span>
      <div><strong>OLT</strong><span>contentores, entrega e recolha</span></div>
      <small>Campo</small>
    </article>
    <article>
      <span class='stat-icon'>◎</span>
      <div><strong>Docs</strong><span>CPF/CNPJ e validações</span></div>
      <small>Web</small>
    </article>
  `);

  setHTML('.activity', `
    <div class='activity-title'><strong>Fluxos que já saíram do papel</strong><span>em evolução</span></div>
    <div class='activity-row'><i></i><span>Comprovante recebido pelo WhatsApp e registrado no sistema</span><small>RDV</small></div>
    <div class='activity-row'><i></i><span>Contentor entregue, status atualizado e histórico preservado</span><small>OLT</small></div>
    <div class='activity-row'><i></i><span>Pedido do cardápio montado e enviado para o WhatsApp</span><small>Food</small></div>
  `);
}

function insertProofStrip() {
  if (document.querySelector('.proof-strip')) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.insertAdjacentHTML('afterend', `
    <section class='section proof-strip' aria-label='Resumo de entregas práticas'>
      <div class='container proof-grid'>
        <article class='proof-card reveal'>
          <strong>WhatsApp como sistema</strong>
          <span>Menus, botões, sessões, webhooks, autorização de usuários e respostas automáticas.</span>
        </article>
        <article class='proof-card reveal'>
          <strong>Operação de campo</strong>
          <span>Fotos, comprovantes, avarias, recolhas, entregas, status e histórico por item.</span>
        </article>
        <article class='proof-card reveal'>
          <strong>Painéis e relatórios</strong>
          <span>Dashboards, exportação Excel, resumos semanais e indicadores operacionais.</span>
        </article>
      </div>
    </section>
  `);
}

function updateServices() {
  setHTML('#servicos .section-heading', `
    <div>
      <p class='eyebrow'><span></span> O que fazemos</p>
      <h2>Automação simples o bastante para usar, robusta o bastante para operar.</h2>
    </div>
    <p>Criamos ferramentas digitais conectadas ao fluxo real da empresa: sem sistema pesado, sem tela desnecessária e com foco no que economiza tempo.</p>
  `);

  const titles = ['Automação com WhatsApp', 'Painéis e relatórios', 'Sistemas sob medida', 'Sites e cardápios digitais'];
  const descriptions = [
    'Atendimento guiado, botões, comprovantes, documentos, comandos internos e integração com banco de dados.',
    'Dashboards, relatórios semanais, exportação Excel e visão operacional para gestor e equipe.',
    'Ferramentas para cadastro, status, histórico, permissões, documentos, fotos e processos internos.',
    'Landing pages, cardápios mobile-first, carrinho, pedido via WhatsApp e presença profissional.'
  ];
  const links = ['Quero automatizar', 'Organizar operação', 'Criar sistema', 'Melhorar presença'];

  document.querySelectorAll('#servicos .service-card').forEach((card, index) => {
    const title = card.querySelector('h3');
    const paragraph = card.querySelector('p');
    const link = card.querySelector('a');
    if (title) title.textContent = titles[index];
    if (paragraph) paragraph.textContent = descriptions[index];
    if (link) link.innerHTML = `${links[index]} <span>→</span>`;
  });
}

function insertCases() {
  if (document.querySelector('#cases')) return;

  const solutions = document.querySelector('#solucoes');
  if (!solutions) return;

  solutions.insertAdjacentHTML('beforebegin', `
    <section class='section cases-section' id='cases'>
      <div class='container'>
        <div class='section-heading reveal'>
          <div>
            <p class='eyebrow'><span></span> Na prática</p>
            <h2>O site agora mostra o que já foi construído de verdade.</h2>
          </div>
          <p>Exemplos de módulos e MVPs criados para resolver gargalos concretos: receber informação, organizar dados, reduzir retrabalho e dar visibilidade à operação.</p>
        </div>

        <div class='case-grid'>
          <article class='case-card case-card-featured reveal'>
            <div class='case-header'><span>RDV / Ciclus Agro</span><strong>WhatsApp + comprovantes + Excel</strong></div>
            <h3>Controle de despesas e quilometragem por colaborador.</h3>
            <p>Fluxo para receber fotos de comprovantes pelo WhatsApp, registrar valor, categoria, colaborador, KM rodado e gerar relatório semanal em planilha.</p>
            <ul>
              <li>Identificação por telefone e permissões por colaborador.</li>
              <li>Leitura de QR/OCR quando possível e fallback para valor manual.</li>
              <li>Resumo e planilha semanal enviados pelo WhatsApp.</li>
            </ul>
            <div class='tag-list'><span>WhatsApp API</span><span>SQLite</span><span>Excel</span><span>Deploy VPS</span></div>
          </article>

          <article class='case-card reveal'>
            <div class='case-header'><span>OLT</span><strong>Operação de contentores</strong></div>
            <h3>Controle operacional para aluguel, entrega e recolha.</h3>
            <p>Fluxos por WhatsApp para cadastro unitário de contentores, reserva, entrega, recolha, status, autorização de operadores e visão para gestor.</p>
            <ul>
              <li>Botões nativos de Sim/Não para reduzir erro de digitação.</li>
              <li>Histórico de avarias, fotos, carga errada e cliente problemático.</li>
              <li>Separação entre visão operacional e visão financeira.</li>
            </ul>
            <div class='tag-list'><span>Campo</span><span>Fotos</span><span>Status</span><span>Gestor</span></div>
          </article>

          <article class='case-card reveal'>
            <div class='case-header'><span>Cardápio digital</span><strong>Pedido direto no WhatsApp</strong></div>
            <h3>Cardápio mobile-first para restaurantes pequenos.</h3>
            <p>Site de cardápio com itens, carrinho, resumo do pedido e envio para o WhatsApp do restaurante, evitando a complexidade de um app próprio no começo.</p>
            <ul>
              <li>Experiência pensada para divulgação no Instagram.</li>
              <li>Pedido organizado antes de chegar no atendimento.</li>
              <li>Modelo reutilizável para outros restaurantes.</li>
            </ul>
            <div class='tag-list'><span>HTML</span><span>Mobile</span><span>WhatsApp</span><span>Pix</span></div>
          </article>

          <article class='case-card reveal'>
            <div class='case-header'><span>Lucre Agro</span><strong>Documentos e cadastro</strong></div>
            <h3>Recepção documental com validação antes do envio.</h3>
            <p>Fluxo para pedir CPF/CNPJ, orientar envio de documentos, classificar arquivos e sinalizar pendências antes de depender de conferência manual.</p>
            <ul>
              <li>Menu simples com caminho para novos cadastros e documentos.</li>
              <li>Validação matemática de CPF/CNPJ e tipos documentais.</li>
              <li>Painel para consulta e curadoria.</li>
            </ul>
            <div class='tag-list'><span>Documentos</span><span>CPF/CNPJ</span><span>OCR</span><span>Painel</span></div>
          </article>
        </div>
      </div>
    </section>
  `);
}

function updateSolutionsProcessAndAudience() {
  setHTML('#solucoes .solutions-copy', `
    <p class='eyebrow'><span></span> Soluções para empresas</p>
    <h2>Não é sobre ter um sistema. É sobre tirar peso da rotina.</h2>
    <p>O primeiro passo costuma ser pequeno: automatizar uma conversa, organizar uma planilha, registrar fotos, padronizar um atendimento ou criar um painel simples.</p>
    <a class='text-link whatsapp-link' href='#contato' target='_blank' rel='noopener noreferrer' aria-label='Conversar sobre um projeto pelo WhatsApp'>Conversar sobre meu fluxo <span aria-hidden='true'>→</span></a>
  `);

  const solutionItems = [
    ['WhatsApp operacional', 'Menus, botões, comandos, sessões, autorizações, envio de arquivos e respostas automáticas.'],
    ['Controle de campo', 'Registro de fotos, status, entrega, recolha, avarias, localização e histórico de operação.'],
    ['Documentos e comprovantes', 'Recebimento, classificação, validação, pendências e consulta em painel.'],
    ['Relatórios para decisão', 'Resumo semanal, exportação Excel, indicadores por colaborador, pedido, cliente ou contentor.']
  ];

  document.querySelectorAll('#solucoes .solution-item').forEach((item, index) => {
    const title = item.querySelector('h3');
    const text = item.querySelector('p');
    if (title) title.textContent = solutionItems[index][0];
    if (text) text.textContent = solutionItems[index][1];
  });

  setText('#processo .section-heading h2', 'Começamos pelo essencial e evoluímos com segurança.');
  setText('#processo .section-heading > p', 'O objetivo é entregar valor rápido, sem prometer um ERP gigante antes de validar o fluxo que realmente importa.');

  const process = [
    ['Mapeamento da rotina', 'Entendemos como o trabalho acontece hoje: WhatsApp, planilhas, papéis, retrabalho e pontos de erro.'],
    ['MVP enxuto', 'Desenhamos a primeira versão com o mínimo necessário para resolver o gargalo principal.'],
    ['Teste na operação', 'Validamos com dados reais, ajustamos mensagens, permissões, telas, relatórios e fluxos.'],
    ['Deploy e evolução', 'Colocamos no ar com domínio, HTTPS, backups, suporte e melhorias por etapas.']
  ];

  document.querySelectorAll('#processo .process-step').forEach((step, index) => {
    const title = step.querySelector('h3');
    const text = step.querySelector('p');
    if (title) title.textContent = process[index][0];
    if (text) text.textContent = process[index][1];
  });

  setText('.differentials-intro h2', 'Próximo da operação, não distante em reunião.');
  setText('.differentials-intro > p:not(.eyebrow)', 'A proposta é construir junto, olhando para o que a equipe realmente consegue usar. O WhatsApp pode virar porta de entrada, o painel vira visão de controle e os relatórios viram decisão.');
  setHTML('.terminal-card', '<div><i></i><i></i><i></i></div><code><span>&gt;</span> recebendo mensagem...</code><code><span>✓</span> validando dados</code><code><span>✓</span> registrando no banco</code><code class="terminal-active"><span>_</span> relatório pronto</code>');

  const differentials = [
    ['Foco em uso real', 'Fluxos pensados para celular, equipe de campo, atendente e gestor.'],
    ['Entrega por etapas', 'Começamos pelo problema mais caro e evoluímos com base no uso.'],
    ['Integração com rotina atual', 'WhatsApp, Excel, painéis, fotos, documentos e processos já existentes.'],
    ['Validação e testes', 'Fluxos testados antes de publicar, com cuidado para não quebrar operação.'],
    ['Suporte próximo', 'Acompanhamento para corrigir mensagens, ajustar regras e melhorar adoção.'],
    ['Base para crescer', 'A solução nasce simples, mas preparada para novos módulos quando fizer sentido.']
  ];

  document.querySelectorAll('.differential-card').forEach((card, index) => {
    const title = card.querySelector('h3');
    const text = card.querySelector('p');
    if (title) title.textContent = differentials[index][0];
    if (text) text.textContent = differentials[index][1];
  });

  setHTML('#para-quem .section-heading', `
    <p class='eyebrow'><span></span> Para quem faz sentido</p>
    <h2>Negócios pequenos e médios que precisam de controle sem burocracia.</h2>
    <p>Especialmente empresas que ainda dependem de conversas soltas, fotos no celular, planilhas manuais e muito confere depois.</p>
  `);

  const audience = [
    'Empresas que recebem pedidos, comprovantes ou documentos pelo WhatsApp',
    'Operações de campo com entrega, recolha, fotos, status e histórico',
    'Restaurantes que querem organizar pedidos sem app complexo',
    'Escritórios e negócios que precisam classificar documentos',
    'Gestores que querem relatório, painel e menos controle manual'
  ];

  document.querySelectorAll('.audience-card p').forEach((item, index) => {
    if (audience[index]) item.textContent = audience[index];
  });
}

function updateCtaAndFooter() {
  setHTML('.cta-card .eyebrow', '<span></span> Vamos tirar isso do papel?');
  setText('.cta-card h2', 'Me conte qual parte da sua operação ainda depende de improviso.');
  setText('.cta-card > p:not(.eyebrow)', 'A partir daí dá para desenhar um MVP: atendimento pelo WhatsApp, painel, relatório, controle de fotos, documentos, pedidos ou qualquer fluxo que esteja tomando tempo demais.');
  const ctaButton = document.querySelector('.cta-card .button');
  if (ctaButton) ctaButton.innerHTML = 'Fazer diagnóstico de automação <span aria-hidden="true">↗</span>';

  setText('.footer-brand p', 'Desenvolvimento de sistemas, automações e soluções digitais para operações reais.');
  setText('.footer-automation-text', 'Automatize atendimentos, pedidos, documentos, comprovantes, relatórios e processos de campo.');
  const footerButton = document.querySelector('.footer-automation-button');
  if (footerButton) footerButton.innerHTML = 'Fazer diagnóstico <span aria-hidden="true">↗</span>';
}

function applyPracticalUpgrade() {
  injectPracticalStyles();
  enhanceNavigation();
  enhanceHero();
  insertProofStrip();
  updateServices();
  insertCases();
  updateSolutionsProcessAndAudience();
  updateCtaAndFooter();
}

applyPracticalUpgrade();

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');
const whatsappLinks = document.querySelectorAll('.whatsapp-link');
const automationWhatsappLinks = document.querySelectorAll('.automation-whatsapp-link');
const emailLinks = document.querySelectorAll('.email-link');
const domainLinks = document.querySelectorAll('.domain-link');
const currentYear = document.querySelector('#current-year');
const brandImages = document.querySelectorAll('.brand img');

brandImages.forEach((image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
  });
});

function closeMenu() {
  if (!menuToggle || !mainNav) return;

  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  mainNav.classList.remove('open');
  document.body.classList.remove('menu-open');
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mainNav.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    closeMenu();
  }
});

function updateHeader() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const isWhatsappConfigured = /^\d{10,15}$/.test(SITE_CONFIG.WHATSAPP_NUMBER);
const whatsappUrl = isWhatsappConfigured
  ? `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : '#contato';
const automationWhatsappUrl = isWhatsappConfigured
  ? `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(AUTOMATION_WHATSAPP_MESSAGE)}`
  : '#contato';

function applyWhatsappUrl(link, url) {
  link.href = url;

  if (!isWhatsappConfigured) {
    link.removeAttribute('target');
    link.removeAttribute('rel');
    link.setAttribute('title', 'Configure o número do WhatsApp em script.js');
  }
}

whatsappLinks.forEach((link) => applyWhatsappUrl(link, whatsappUrl));
automationWhatsappLinks.forEach((link) => applyWhatsappUrl(link, automationWhatsappUrl));

document.querySelectorAll('[data-whatsapp]').forEach((element) => {
  element.textContent = SITE_CONFIG.WHATSAPP_NUMBER;
});

emailLinks.forEach((link) => {
  link.href = `mailto:${SITE_CONFIG.EMAIL}`;
});

document.querySelectorAll('[data-email]').forEach((element) => {
  element.textContent = SITE_CONFIG.EMAIL;
});

const domainUrl = `https://${SITE_CONFIG.DOMAIN.replace(/^https?:\/\//, '').replace(/\/+$/, '')}`;

domainLinks.forEach((link) => {
  link.href = domainUrl;
});

document.querySelectorAll('[data-domain]').forEach((element) => {
  element.textContent = SITE_CONFIG.DOMAIN;
});

document.querySelectorAll('[data-brand-name]').forEach((element) => {
  element.textContent = SITE_CONFIG.BRAND_NAME;
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
