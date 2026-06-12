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

const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
