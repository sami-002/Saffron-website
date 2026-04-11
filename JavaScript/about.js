  
      // Scroll reveal animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
      );

      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el) => {
          observer.observe(el);
        });

      // Element SDK Integration
      const defaultConfig = {
        page_title: "Marghob Heray",
        page_subtitle: "Women-Owned Saffron Excellence",
        company_name: "Marghob Heray",
        mission_title: "Our Mission",
        background_color: "#0f0d0a",
        surface_color: "#0f0d0a",
        text_color: "#e8dcc8",
        primary_action_color: "#d4af37",
        secondary_action_color: "#f59e0b",
        font_family: "Playfair Display",
        font_size: 16,
      };

      function applyConfig(config) {
        const el = (id) => document.getElementById(id);
        const c = (k) => config[k] || defaultConfig[k];

        if (el("title-el")) el("title-el").textContent = c("page_title");
        if (el("subtitle-el"))
          el("subtitle-el").textContent = c("page_subtitle");
        if (el("mission-title-el"))
          el("mission-title-el").textContent = c("mission_title");

        const bgGradient = `linear-gradient(135deg, ${c("background_color")} 0%, ${c("surface_color")} 50%, ${c("background_color")} 100%)`;
        document.body.style.background = bgGradient;

        const font = c("font_family");
        const baseSize = c("font_size");

        document.querySelectorAll(".display-font").forEach((el) => {
          el.style.fontFamily = `${font}, serif`;
        });
      }

      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange: async (config) => applyConfig(config),
          mapToCapabilities: (config) => ({
            recolorables: [
              {
                get: () =>
                  config.background_color || defaultConfig.background_color,
                set: (v) => {
                  config.background_color = v;
                  window.elementSdk.setConfig({ background_color: v });
                },
              },
              {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (v) => {
                  config.surface_color = v;
                  window.elementSdk.setConfig({ surface_color: v });
                },
              },
              {
                get: () => config.text_color || defaultConfig.text_color,
                set: (v) => {
                  config.text_color = v;
                  window.elementSdk.setConfig({ text_color: v });
                },
              },
              {
                get: () =>
                  config.primary_action_color ||
                  defaultConfig.primary_action_color,
                set: (v) => {
                  config.primary_action_color = v;
                  window.elementSdk.setConfig({ primary_action_color: v });
                },
              },
              {
                get: () =>
                  config.secondary_action_color ||
                  defaultConfig.secondary_action_color,
                set: (v) => {
                  config.secondary_action_color = v;
                  window.elementSdk.setConfig({ secondary_action_color: v });
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
              ["page_title", config.page_title || defaultConfig.page_title],
              [
                "page_subtitle",
                config.page_subtitle || defaultConfig.page_subtitle,
              ],
              [
                "company_name",
                config.company_name || defaultConfig.company_name,
              ],
              [
                "mission_title",
                config.mission_title || defaultConfig.mission_title,
              ],
            ]),
        });
      }
    
    
      (function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'9e80c07b1341292c',t:'MTc3NTQ3ODA4Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
    