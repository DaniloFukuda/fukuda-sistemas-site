const SITE_CONFIG = {
  WHATSAPP_NUMBER: "5561998266551",
  EMAIL: "contato@fukudasistemas.com.br",
  DOMAIN: "fukudasistemas.com.br",
  BRAND_NAME: "Fukuda Sistemas",
};

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Fukuda Sistemas e gostaria de conversar sobre uma solução digital para meu negócio.";
const AUTOMATION_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Fukuda Sistemas e quero fazer um orçamento para uma automação no meu negócio.";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const header = document.querySelector(".site-header");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const automationWhatsappLinks = document.querySelectorAll(".automation-whatsapp-link");
const emailLinks = document.querySelectorAll(".email-link");
const domainLinks = document.querySelectorAll(".domain-link");
const currentYear = document.querySelector("#current-year");
const brandImages = document.querySelectorAll(".brand img");

brandImages.forEach((image) => {
  image.addEventListener("error", () => {
    image.hidden = true;
  });
});

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("open", !isOpen);
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

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const isWhatsappConfigured = /^\d{10,15}$/.test(SITE_CONFIG.WHATSAPP_NUMBER);
const whatsappUrl = isWhatsappConfigured
  ? `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "#contato";
const automationWhatsappUrl = isWhatsappConfigured
  ? `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(AUTOMATION_WHATSAPP_MESSAGE)}`
  : "#contato";

whatsappLinks.forEach((link) => {
  link.href = whatsappUrl;
  if (!isWhatsappConfigured) {
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.setAttribute("title", "Configure o número do WhatsApp em script.js");
  }
});

automationWhatsappLinks.forEach((link) => {
  link.href = automationWhatsappUrl;
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
