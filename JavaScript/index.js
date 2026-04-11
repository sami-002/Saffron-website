lucide.createIcons();

// Subscribe form
document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const input = this.querySelector("input");
    if (input.value.includes("@")) {
      document.getElementById("sub-success").classList.remove("hidden");
      input.value = "";
      setTimeout(
        () => document.getElementById("sub-success").classList.add("hidden"),
        3000,
      );
    }
  });

// Fade-in on scroll / on load
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 150);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".fade-section")
  .forEach((el) => observer.observe(el));

// Element SDK
const defaultConfig = {
  brand_name: "Zafran",
  tagline:
    "Pure Afghan Saffron â€” harvested with care, delivered with trust. The essence of authenticity in every thread.",
  email: "info@zafran.com",
  phone: "+93 700 123 456",
  location: "Herat, Afghanistan",
  copyright_text: "Â© 2025 Zafran. All rights reserved.",
  background_color: "#1a1209",
  accent_color: "#ffc13b",
  text_color: "#e8dcc8",
  font_family: "Playfair Display",
  font_size: 16,
};

function applyConfig(config) {
  document.getElementById("brand-name").textContent =
    config.brand_name || defaultConfig.brand_name;
  document.getElementById("tagline").textContent =
    config.tagline || defaultConfig.tagline;
  document.getElementById("email-text").textContent =
    config.email || defaultConfig.email;
  document.getElementById("phone-text").textContent =
    config.phone || defaultConfig.phone;
  document.getElementById("location-text").textContent =
    config.location || defaultConfig.location;
  document.getElementById("copyright-text").textContent =
    config.copyright_text || defaultConfig.copyright_text;

  const bg = config.background_color || defaultConfig.background_color;
  const accent = config.accent_color || defaultConfig.accent_color;
  const txt = config.text_color || defaultConfig.text_color;
  const font = config.font_family || defaultConfig.font_family;
  const size = config.font_size || defaultConfig.font_size;

  document.getElementById("footer-root").style.background =
    `linear-gradient(160deg, ${bg} 0%, ${lighten(bg, 10)} 40%, ${bg} 100%)`;
  document.body.style.background = bg;

  document.getElementById("brand-name").style.color = accent;
  document.querySelectorAll(".brand-font").forEach((el) => {
    if (el.id !== "brand-name") el.style.color = accent;
    el.style.fontFamily = `${font}, serif`;
  });
  document.getElementById("brand-name").style.fontFamily = `${font}, serif`;

  document
    .querySelectorAll(".nav-link")
    .forEach((el) => (el.style.color = txt));
  document.getElementById("tagline").style.color = txt;

  const base = size;
  document.getElementById("brand-name").style.fontSize = `${base * 1.5}px`;
  document.getElementById("tagline").style.fontSize = `${base * 0.875}px`;
}

function lighten(hex, pct) {
  let r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  r = Math.min(255, r + Math.round(pct * 2.55));
  g = Math.min(255, g + Math.round(pct * 2.55));
  b = Math.min(255, b + Math.round(pct * 2.55));
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => applyConfig(config),
  mapToCapabilities: (config) => ({
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (v) => {
          config.background_color = v;
          window.elementSdk.setConfig({ background_color: v });
        },
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (v) => {
          config.accent_color = v;
          window.elementSdk.setConfig({ accent_color: v });
        },
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (v) => {
          config.text_color = v;
          window.elementSdk.setConfig({ text_color: v });
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (v) => {
        config.font_family = v;
        window.elementSdk.setConfig({ font_family: v });
      },
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (v) => {
        config.font_size = v;
        window.elementSdk.setConfig({ font_size: v });
      },
    },
  }),
  mapToEditPanelValues: (config) =>
    new Map([
      ["brand_name", config.brand_name || defaultConfig.brand_name],
      ["tagline", config.tagline || defaultConfig.tagline],
      ["email", config.email || defaultConfig.email],
      ["phone", config.phone || defaultConfig.phone],
      ["location", config.location || defaultConfig.location],
      ["copyright_text", config.copyright_text || defaultConfig.copyright_text],
    ]),
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9e806a16b61a292c',t:'MTc3NTQ3NDU0My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();

// LANGUAGE
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("zafaran-lang", lang);
  const attr = lang === "dr" ? "data-dr" : "data-en";

  document.querySelectorAll("[data-en]").forEach((el) => {
    const val = el.getAttribute(attr);
    if (val) {
      if (el.id === "hero-title" || el.id === "hero-desc") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  document.getElementById("brand-tagline").textContent = document
    .getElementById("brand-tagline")
    .getAttribute(attr);

  ["lang-en", "lang-dr", "mob-lang-en", "mob-lang-dr"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.classList.toggle(
        "active",
        (lang === "en" && id.includes("en")) ||
          (lang === "dr" && id.includes("dr")),
      );
    }
  });

  document.documentElement.dir = lang === "dr" ? "rtl" : "ltr";
}

// Scroll effect
window.addEventListener("scroll", () => {
  document
    .getElementById("mainNav")
    .classList.toggle("scrolled", window.scrollY > 30);
});

// Hamburger menu
function toggleMobileMenu() {
  const overlay = document.getElementById("mobileOverlay");
  const hamburger = document.getElementById("hamburgerBtn");
  overlay.classList.toggle("open");
  hamburger.classList.toggle("active");
  document.body.style.overflow = overlay.classList.contains("open")
    ? "hidden"
    : "";
}

function closeMobileMenu() {
  document.getElementById("mobileOverlay").classList.remove("open");
  document.getElementById("hamburgerBtn").classList.remove("active");
  document.body.style.overflow = "";
}

function toggleMobileSubmenu() {
  const submenu = document.getElementById("mobileSubmenu");
  const chevron = document.getElementById("mobileChevron");
  submenu.classList.toggle("open");
  chevron.style.transform = submenu.classList.contains("open")
    ? "rotate(180deg)"
    : "";
}

// Desktop nav active state
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Initialize Lucide icons
lucide.createIcons();
