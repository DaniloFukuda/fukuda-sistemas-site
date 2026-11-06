const SITE_CONFIG = {
  WHATSAPP_NUMBER: "5561998266551",
  EMAIL: "contato@fukudasistemas.com.br",
  DOMAIN: "fukudasistemas.com.br",
  BRAND_NAME: "Fukuda Sistemas",
};

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Fukuda Sistemas e gostaria de conversar sobre uma solução digital para meu negócio. Origem: SITE_FUKUDA";

const PLAN_CONFIG = {
  essencial: {
    name: "Essencial",
    implementation: "R$ 699",
    installments: "3x de R$ 233",
    monthly: "R$ 349,90",
    firstThree: "R$ 1.748,70",
    summary: "Implantação de R$ 699, em até 3 parcelas de R$ 233, e mensalidade de R$ 349,90.",
    fallbackMessage:
      "Olá! Tenho interesse no plano Essencial (implantação R$ 699, 3x R$ 233, mensalidade R$ 349,90). Origem: SITE_FUKUDA",
  },
  comercial: {
    name: "Comercial",
    implementation: "R$ 1.299",
    installments: "3x de R$ 433",
    monthly: "R$ 449,90",
    firstThree: "R$ 2.648,70",
    summary: "Implantação de R$ 1.299, em até 3 parcelas de R$ 433, e mensalidade de R$ 449,90.",
    fallbackMessage:
      "Olá! Tenho interesse no plano Comercial (implantação R$ 1.299, 3x R$ 433, mensalidade R$ 449,90). Origem: SITE_FUKUDA",
  },
  erp: {
    name: "Integrado ao ERP",
    implementation: "a partir de R$ 2.499",
    installments: "3x a partir de R$ 833",
    monthly: "a partir de R$ 699,90",
    firstThree: "a partir de R$ 4.598,70",
    summary:
      "Implantação a partir de R$ 2.499, em até 3 parcelas a partir de R$ 833, e mensalidade a partir de R$ 699,90, sujeita à análise técnica.",
    fallbackMessage:
      "Olá! Tenho interesse no plano Integrado ao ERP (implantação a partir de R$ 2.499, 3x a partir de R$ 833, mensalidade a partir de R$ 699,90). Origem: SITE_FUKUDA",
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const header = document.querySelector(".site-header");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const emailLinks = document.querySelectorAll(".email-link");
const domainLinks = document.querySelectorAll(".domain-link");
const currentYear = document.querySelector("#current-year");
const brandImages = document.querySelectorAll(".brand img");

brandImages.forEach((image) => {
  image.addEventListener("error", () => {
    image.hidden = true;
    image.parentElement.classList.add("logo-failed");
  });
});

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("open");
  mainNav.setAttribute("aria-hidden", String(window.innerWidth < 900));
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("open", !isOpen);
  mainNav.setAttribute("aria-hidden", String(isOpen));
  document.body.classList.toggle("menu-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    closeMenu();
  }
});

closeMenu();

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function buildWhatsAppUrl(message) {
  return `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const isWhatsappConfigured = /^\d{10,15}$/.test(SITE_CONFIG.WHATSAPP_NUMBER);
const whatsappUrl = isWhatsappConfigured ? buildWhatsAppUrl(WHATSAPP_MESSAGE) : "#contato";

whatsappLinks.forEach((link) => {
  link.href = whatsappUrl;
  if (!isWhatsappConfigured) {
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.setAttribute("title", "Configure o número do WhatsApp em script.js");
  }
});

document.querySelectorAll("[data-whatsapp]").forEach((element) => {
  element.textContent = SITE_CONFIG.WHATSAPP_NUMBER;
});

emailLinks.forEach((link) => {
  link.href = `mailto:${SITE_CONFIG.EMAIL}`;
});

document.querySelectorAll("[data-email]").forEach((element) => {
  element.textContent = SITE_CONFIG.EMAIL;
});

const domainUrl = `https://${SITE_CONFIG.DOMAIN.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

domainLinks.forEach((link) => {
  link.href = domainUrl;
});

document.querySelectorAll("[data-domain]").forEach((element) => {
  element.textContent = SITE_CONFIG.DOMAIN;
});

document.querySelectorAll("[data-brand-name]").forEach((element) => {
  element.textContent = SITE_CONFIG.BRAND_NAME;
});

currentYear.textContent = new Date().getFullYear();

const planSelectButtons = document.querySelectorAll("[data-plan-select]");
const planCards = document.querySelectorAll("[data-plan-card]");
const planName = document.querySelector("[data-plan-name]");
const planSummaryCopy = document.querySelector("[data-plan-summary-copy]");
const planFirstThree = document.querySelector("[data-plan-first-three]");
const planAfter = document.querySelector("[data-plan-after]");
const planWhatsApp = document.querySelector("[data-plan-whatsapp]");

function updatePlanSelection(planKey, moveFocus = false) {
  const plan = PLAN_CONFIG[planKey];
  if (!plan) return;

  planCards.forEach((card) => {
    const isSelected = card.dataset.planCard === planKey;
    card.classList.toggle("is-selected", isSelected);
    const button = card.querySelector("[data-plan-select]");
    if (button) {
      button.setAttribute("aria-checked", String(isSelected));
      button.tabIndex = isSelected ? 0 : -1;
      if (moveFocus && isSelected) button.focus();
    }
  });

  if (planName) planName.textContent = plan.name;
  if (planSummaryCopy) planSummaryCopy.textContent = plan.summary;
  if (planFirstThree) planFirstThree.textContent = plan.firstThree;
  if (planAfter) planAfter.textContent = `${plan.monthly}/mês`;
  if (planWhatsApp && isWhatsappConfigured) {
    planWhatsApp.href = buildWhatsAppUrl(plan.fallbackMessage);
  }
}

if (planSelectButtons.length > 0) {
  planSelectButtons.forEach((button, index) => {
    button.addEventListener("click", () => updatePlanSelection(button.dataset.planSelect));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) return;
      event.preventDefault();
      const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const nextIndex = (index + direction + planSelectButtons.length) % planSelectButtons.length;
      const nextButton = planSelectButtons[nextIndex];
      updatePlanSelection(nextButton.dataset.planSelect, true);
    });
  });

  const selectedButton = document.querySelector('[data-plan-select][aria-checked="true"]');
  updatePlanSelection(selectedButton?.dataset.planSelect || "comercial");
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const DEMO_FLOWS = {
  olt: {
    title: "OLT",
    subtitle: "Gestão de resíduos e demolições",
    initial:
      "👋 Olá! Esta é uma demonstração do sistema OLT.\n\nEscolha uma operação:",
    startOptions: [
      { label: "1️⃣ Novo pedido", next: "newOrder" },
      { label: "2️⃣ Entrega", next: "delivery" },
      { label: "3️⃣ Recolha", next: "pickup" },
      { label: "4️⃣ Despejo", next: "dump" },
      { label: "5️⃣ Resumo operacional", next: "summary" },
    ],
    steps: {
      newOrder: {
        response: "Qual tipo de serviço deseja registrar?",
        options: [
          { label: "🟦 Contentor", next: "containerQty" },
          { label: "🚐 Carrinha", next: "vanInfo" },
        ],
      },
      containerQty: {
        response: "Quantos contentores serão necessários?",
        options: [
          { label: "1 contentor", next: "containerDone", data: { quantity: "1 contentor" } },
          { label: "2 contentores", next: "containerDone", data: { quantity: "2 contentores" } },
          { label: "3 contentores", next: "containerDone", data: { quantity: "3 contentores" } },
        ],
      },
      containerDone: {
        response: ({ quantity }) =>
          `Pedido demonstrativo registrado ✅\n\nResumo:\nTipo: Contentor\nQuantidade: ${quantity}\nStatus: Aguardando programação\n\nNa operação real, o sistema também pode registrar cliente, localização, fotos, pagamento, entrega e recolha.`,
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      vanInfo: {
        response:
          "No fluxo real, a carrinha pode registrar cliente, endereço, volume, fotos e encaminhamento para a equipe responsável.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      delivery: {
        response:
          "Registra fotos, localização, contentores entregues e informações operacionais.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      pickup: {
        response: "Controla contentores recolhidos, avarias e pendências.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      dump: {
        response: "Registra cargas e operações de despejo.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      summary: {
        response:
          "Apresenta pedidos, contentores e pendências em um painel organizado.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
    },
  },
  ciclus: {
    title: "Ciclus Agro",
    subtitle: "Gestão agrícola",
    initial:
      "🌱 Olá! Esta é uma demonstração da Ciclus Agro.\n\nEscolha uma função:",
    startOptions: [
      { label: "1️⃣ Registrar RDV", next: "rdv" },
      { label: "2️⃣ Visita técnica", next: "visit" },
      { label: "3️⃣ Transcrever áudio", next: "transcribe" },
      { label: "4️⃣ Ver relatórios", next: "reports" },
    ],
    steps: {
      rdv: {
        response:
          "Registra despesas, comprovantes e permite revisar os dados antes de salvar.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      visit: {
        response:
          "Durante uma visita, o sistema pode organizar informações da fazenda, localização, áudios, fotos e vídeos.",
        options: [{ label: "📍 Enviar localização simulada", next: "location" }],
      },
      location: {
        userLabel: "📍 Localização enviada",
        response: "Localização registrada ✅",
        options: [{ label: "🎙️ Enviar áudio simulado", next: "audio" }],
      },
      audio: {
        userLabel: "🎙️ Áudio da visita enviado",
        typingText: "Organizando informações...",
        response:
          "Resumo da visita gerado ✅\n\nDescrição:\nO produtor relatou o andamento da lavoura e informou os pontos observados durante a visita.\n\nObservações:\nAcompanhar a área novamente na próxima visita e registrar a evolução.\n\nNa operação real, o relatório pode reunir localização, contatos, áudios, fotos, vídeos e observações em um único documento.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      transcribe: {
        response: "Transforma áudios em textos literais ou revisados.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
      reports: {
        response:
          "Organiza informações em relatórios e planilhas para consulta.",
        options: [{ label: "Voltar ao menu inicial", next: "menu", showUserMessage: false }],
      },
    },
  },
};

const demoTabs = document.querySelectorAll("[data-demo-tab]");
const demoTitle = document.querySelector("[data-demo-title]");
const demoSubtitle = document.querySelector("[data-demo-subtitle]");
const demoMessages = document.querySelector("[data-demo-messages]");
const demoOptions = document.querySelector("[data-demo-options]");
const demoReset = document.querySelector("[data-demo-reset]");
const demoPhone = document.querySelector("#demo-phone");
const demoDelay = prefersReducedMotion ? 0 : 360;
let activeDemo = "olt";
let demoState = {};
let isDemoBusy = false;
let demoRunId = 0;

function getDemoFlow() {
  return DEMO_FLOWS[activeDemo];
}

function setDemoBusy(isBusy) {
  isDemoBusy = isBusy;
  demoOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = isBusy;
  });
  demoReset.disabled = isBusy;
}

function addDemoMessage(text, type = "system", extraClass = "") {
  const message = document.createElement("div");
  message.className = `demo-message demo-message-${type}${extraClass ? ` ${extraClass}` : ""}`;
  message.textContent = text;
  demoMessages.append(message);
  demoMessages.scrollTop = demoMessages.scrollHeight;
  return message;
}

function addTypingMessage(text = "digitando...") {
  const typing = document.createElement("div");
  typing.className = "demo-message demo-message-system";
  typing.innerHTML = `<span class="demo-typing" aria-label="${text}"><span></span><span></span><span></span></span>`;
  demoMessages.append(typing);
  demoMessages.scrollTop = demoMessages.scrollHeight;
  return typing;
}

function renderDemoOptions(options) {
  demoOptions.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "demo-option";
    button.type = "button";
    button.textContent = option.label;
    button.dataset.next = option.next;
    button.dataset.option = JSON.stringify(option);
    demoOptions.append(button);
  });
}

function showDemoMenu() {
  const flow = getDemoFlow();
  addDemoMessage(flow.initial);
  renderDemoOptions(flow.startOptions);
}

function resetDemo() {
  demoRunId += 1;
  demoState = {};
  setDemoBusy(false);
  const flow = getDemoFlow();
  demoTitle.textContent = flow.title;
  demoSubtitle.textContent = flow.subtitle;
  demoMessages.innerHTML = "";
  showDemoMenu();
}

function resolveDemoResponse(step) {
  return typeof step.response === "function" ? step.response(demoState) : step.response;
}

function handleDemoOption(option) {
  if (isDemoBusy) return;

  if (option.next === "menu") {
    resetDemo();
    return;
  }

  const flow = getDemoFlow();
  const step = flow.steps[option.next];
  if (!step) return;

  demoState = { ...demoState, ...(option.data || {}) };
  const userMessage = step.userLabel || option.label;
  if (option.showUserMessage !== false) {
    addDemoMessage(userMessage, "user");
  }

  setDemoBusy(true);
  demoOptions.innerHTML = "";
  const runId = demoRunId;
  const typing = addTypingMessage(step.typingText);

  window.setTimeout(() => {
    if (runId !== demoRunId) return;
    typing.remove();
    addDemoMessage(resolveDemoResponse(step));
    renderDemoOptions(step.options || []);
    setDemoBusy(false);
  }, demoDelay);
}

if (demoMessages && demoOptions && demoReset) {
  demoTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeDemo = tab.dataset.demoTab;
      demoTabs.forEach((item) => {
        item.setAttribute("aria-selected", String(item === tab));
      });
      if (demoPhone) demoPhone.setAttribute("aria-labelledby", tab.id);
      resetDemo();
    });
  });

  demoOptions.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-option]");
    if (!button) return;
    handleDemoOption(JSON.parse(button.dataset.option));
  });

  demoReset.addEventListener("click", resetDemo);
  resetDemo();
}

const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
