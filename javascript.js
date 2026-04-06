/* =========================
   NAVBAR SCRIPT
   ========================= */

function setLang(lang) {
  const attr = lang === "dr" ? "data-dr" : "data-en";

  try {
    localStorage.setItem("zafaran-lang", lang);
  } catch (err) {
    // Ignore storage errors in restricted environments.
  }

  document.querySelectorAll("[data-en]").forEach((el) => {
    const val = el.getAttribute(attr);
    if (!val) return;

    if (el.id === "hero-title" || el.id === "hero-desc") {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  const tagline = document.getElementById("brand-tagline");
  if (tagline) {
    const translated = tagline.getAttribute(attr);
    if (translated) tagline.textContent = translated;
  }

  ["lang-en", "lang-dr", "mob-lang-en", "mob-lang-dr"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.classList.toggle(
      "active",
      (lang === "en" && id.includes("en")) || (lang === "dr" && id.includes("dr"))
    );
  });

  document.documentElement.dir = lang === "dr" ? "rtl" : "ltr";
}

function toggleMobileMenu() {
  const overlay = document.getElementById("mobileOverlay");
  const hamburger = document.getElementById("hamburgerBtn");
  if (!overlay || !hamburger) return;

  overlay.classList.toggle("open");
  hamburger.classList.toggle("active");
  document.body.style.overflow = overlay.classList.contains("open") ? "hidden" : "";
}

function closeMobileMenu() {
  const overlay = document.getElementById("mobileOverlay");
  const hamburger = document.getElementById("hamburgerBtn");
  if (!overlay || !hamburger) return;

  overlay.classList.remove("open");
  hamburger.classList.remove("active");
  document.body.style.overflow = "";
}

function toggleMobileSubmenu() {
  const submenu = document.getElementById("mobileSubmenu");
  const chevron = document.getElementById("mobileChevron");
  if (!submenu || !chevron) return;

  submenu.classList.toggle("open");
  chevron.style.transform = submenu.classList.contains("open") ? "rotate(180deg)" : "";
}

(function initNavbar() {
  const mainNav = document.getElementById("mainNav");

  if (mainNav) {
    window.addEventListener("scroll", () => {
      mainNav.classList.toggle("scrolled", window.scrollY > 30);
    });
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
})();

/* =========================
   FOOTER SCRIPT
   ========================= */

(function initFooter() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const subscribeForm = document.getElementById("subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector("input");
      const success = document.getElementById("sub-success");
      if (!input || !success) return;

      if (input.value.includes("@")) {
        success.classList.remove("hidden");
        input.value = "";
        setTimeout(() => success.classList.add("hidden"), 3000);
      }
    });
  }

  const fadeSections = document.querySelectorAll(".fade-section");
  if (fadeSections.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeSections.forEach((el) => observer.observe(el));
  }
})();
