 
      // ===== GLOBALS =====
      const products = [
        // Super Negin Grade
        {
          id: 1,
          name: "Super Negin",
          cat: "super_negin",
          price: 1200,
          rating: 5,
          badge: "Premium Quality",
          desc: " Super Negin Grade A threads from Marghob Heray. Highest purity, vibrant crimson color, authentic Herat aroma. Crocin level: 270+. Hand-sorted for excellence.",
          weight: "1g",
          color1: "#8B1A1A",
          color2: "#C8963E",
          image: "photos/shop/pho1.jpg",
        },
        {
          id: 2,
          name: "Super Negin ",
          cat: "super_negin",
          price: 700,
          rating: 4.5,
          badge: "Best Value",
          desc: " Super Negin Grade B with excellent quality standards. Premium color and aroma. Perfect for cooking and traditional use. Crocin level: 250+.",
          weight: "1g",
          color1: "#A02020",
          color2: "#D4A853",
          image: "photos/shop/pho2.jpg",
        },

        // Negin Standard
        {
          id: 3,
          name: "Negin Saffron Select",
          cat: "negin",
          price: 550,
          rating: 4,
          badge: "Popular",
          desc: "Standard grade Negin saffron from women farmer cooperatives in Herat. Consistent quality, rich flavor. Ideal for daily cooking. Crocin level: 230+.",
          weight: "1g",
          color1: "#B82828",
          color2: "#D4A853",
          image: "photos/shop/pho3.jpg",
        },
        {
          id: 4,
          name: "Negin Bulk 5g",
          cat: "negin",
          price: 2750,
          rating: 4.5,
          badge: "Value Pack",
          desc: "5 grams of quality Negin saffron. Bulk pricing for restaurants, professional chefs, and commercial use. Consistent quality throughout.",
          weight: "5g",
          color1: "#8B1A1A",
          color2: "#C8963E",
          image: "photos/shop/pho4.jpg",
        },

        // Pushal Grade
        {
          id: 5,
          name: "Pushal Threads Premium",
          cat: "pushal",
          price: 300,
          rating: 4,
          badge: null,
          desc: "Pushal Saffron has superior quality and a rich, authentic flavor. it also has excellent color retention.",
          weight: "1g",
          color1: "#9B2C2C",
          color2: "#D4A853",
          image: "photos/shop/pho5.jpg",
        },
        {
          id: 6,
          name: "Pushal Bulk 2.5kg",
          cat: "pushal",
          price: 750,
          rating: 4.5,
          badge: "Commercial",
          desc: "2.5kg of Pushal saffron for commercial use.",
          weight: "2.5kg",
          color1: "#8B1A1A",
          color2: "#C8963E",
          image: "photos/shop/pho6.jpg",
        },

        // Pushal grade A
        {
          id: 7,
          name: "Pushal Premium",
          cat: "pushal A",
          price: 300,
          rating: 5,
          badge: "Finest pushal",
          desc: " Grade A saffron Pushal: The threads are thick,mostly red, clean, and long. They are very uniform, with few broken pieces,and give strong color and aroma.",
          weight: "1g",
          color1: "#C41E3A",
          color2: "#8B1A1A",
          image: "photos/shop/pho7.jpg",
        },
        {
          id: 8,
          name: "Pushal Grade A Bulk 500g",
          cat: "pushal A",
          price: 150000,
          rating: 4.5,
          badge: "Restaurant Grade",
          desc: "500g of Pushal Grade A saffron for professional kitchens.",
          weight: "500g",
          color1: "#8B1A1A",
          color2: "#D4A853",
          image: "photos/shop/pho8.jpg",
        },

        // pushal grade B
        {
          id: 9,
          name: "Pushal grade B",
          cat: "powder",
          price: 300,
          rating: 4.5,
          badge: "Processed",
          desc: "The threads are thinner and shorter,with more yellow or white parts.They are less potent but still offer good flavor.",
          weight: "2g",
          color1: "#D4A853",
          color2: "#8B5E1A",
          image: "photos/shop/pho9.jpg",
        },
        {
          id: 10,
          name: "Pushal Grade B Bulk 30g",
          cat: "powder",
          price: 9000,
          rating: 5,
          badge: "Easy Use",
          desc: "30g of Pushal Grade B saffron powder for convenient use in cooking and baking.",
          weight: "30g",
          color1: "#A02020",
          color2: "#C8963E",
          image: "photos/shop/pho10.jpg",
        },
      ];

      const hiddenCategories = ["gift", "premium"];

      let cart = [],
        currentFilter = "all",
        currentPage = "shop";

      // ===== STORAGE =====
      function saveCart() {
        localStorage.setItem("saffron-cart", JSON.stringify(cart));
      }

      function loadCart() {
        try {
          const saved = localStorage.getItem("saffron-cart");
          cart = saved ? JSON.parse(saved) : [];
          cart = cart.filter((item) => {
            const product = products.find((p) => p.id === item.id);
            return product && !hiddenCategories.includes(product.cat);
          });
        } catch (e) {
          cart = [];
        }
      }

      // ===== PAGE NAVIGATION =====
      function goToShop() {
        currentPage = "shop";
        document.getElementById("shopPage").style.display = "block";
        document.getElementById("cartPage").style.display = "none";
        window.scrollTo(0, 0);
      }

      function goToCart() {
        currentPage = "cart";
        document.getElementById("shopPage").style.display = "none";
        document.getElementById("cartPage").style.display = "block";
        window.scrollTo(0, 0);
        renderCartPage();
      }

      function scrollToShop() {
        const shopElement = document.getElementById("shop");
        if (shopElement) {
          shopElement.scrollIntoView({ behavior: "smooth" });
        }
      }

      function showToast(msg) {
        const t = document.getElementById("toast");
        document.getElementById("toastText").textContent = msg;
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 2200);
      }

      function formatPrice(amount) {
        return `${amount.toFixed(0)} AFS`;
      }

      // ===== SVG GENERATION =====
      function generateSVG(p, size = 160) {
        const s = size;
        return `<svg viewBox="0 0 ${s} ${s}" width="${s}" height="${s}" style="display:block;margin:auto" fill="none">
        <defs><linearGradient id="pg${p.id}${size}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${p.color1}"/><stop offset="1" stop-color="${p.color2}"/></linearGradient></defs>
        <circle cx="${s / 2}" cy="${s / 2}" r="${s * 0.32}" fill="url(#pg${p.id}${size})" opacity=".12"/>
        <g transform="translate(${s / 2},${s / 2})">
          ${[0, 72, 144, 216, 288].map((a) => `<path d="M0,-8 C12,-40 8,-55 0,-62 C-8,-55 -12,-40 0,-8Z" fill="url(#pg${p.id}${size})" opacity=".8" transform="rotate(${a})"/>`).join("")}
          <circle r="8" fill="${p.color1}"/>
        </g>
      </svg>`;
      }

      function buildProductImage(p, variant = "card") {
        const alt = p.name;
        if (variant === "modal") {
          return `<img src="${p.image}" alt="${alt}" loading="lazy" data-product-image="${p.id}" data-image-variant="modal" class="modal-photo">`;
        }

        return `<img src="${p.image}" alt="${alt}" loading="lazy" data-product-image="${p.id}" data-image-variant="card" class="product-photo">`;
      }

      function attachProductImageFallbacks(scope = document) {
        scope.querySelectorAll("img[data-product-image]").forEach((img) => {
          if (img.dataset.fallbackBound === "true") return;
          img.dataset.fallbackBound = "true";

          img.addEventListener(
            "error",
            function handleImageError() {
              const productId = Number(this.dataset.productImage);
              const product = products.find((item) => item.id === productId);
              if (!product || this.dataset.fallbackApplied === "true") return;

              this.dataset.fallbackApplied = "true";
              const size = this.dataset.imageVariant === "modal" ? 200 : 160;
              const fallbackMarkup = generateSVG(product, size);
              this.insertAdjacentHTML("afterend", fallbackMarkup);
              this.remove();
            },
            { once: true },
          );
        });
      }

      function stars(r) {
        let s = "";
        for (let i = 1; i <= 5; i++) {
          if (i <= Math.floor(r))
            s +=
              '<svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;color:var(--accent);display:inline;vertical-align:middle"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
          else if (i - r < 1)
            s +=
              '<svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;color:var(--accent);opacity:.5;display:inline;vertical-align:middle"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
          else
            s +=
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;color:var(--accent);opacity:.3;display:inline;vertical-align:middle"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
        }
        return s;
      }

      // ===== PRODUCTS =====
      function getFilteredProducts() {
        let list = products.filter((p) => !hiddenCategories.includes(p.cat));
        if (currentFilter !== "all")
          list = list.filter((p) => p.cat === currentFilter);
        const sort = document.getElementById("sortSelect").value;
        if (sort === "low") list.sort((a, b) => a.price - b.price);
        else if (sort === "high") list.sort((a, b) => b.price - a.price);
        else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
        return list;
      }

      function renderProducts() {
        const grid = document.getElementById("productGrid");
        const filtered = getFilteredProducts();
        document.getElementById("noResults").style.display = filtered.length
          ? "none"
          : "block";

        grid.innerHTML = filtered
          .map(
            (p, i) => `
        <div class="product-card reveal${i < 8 ? " visible" : ""}" style="animation-delay: ${i * 80}ms">
          <div class="card-img-wrap" style="cursor: pointer; background: linear-gradient(135deg, var(--bg2), var(--bg));" onclick="openModal(${p.id})">
            ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
            ${buildProductImage(p)}
          </div>
          <div class="card-body">
            <h3 class="card-title">${p.name}</h3>
            <div class="card-rating">${stars(p.rating)}</div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="card-price">${formatPrice(p.price)}</span>
              <button class="btn-primary" style="padding: 8px 14px; font-size: 0.8rem; gap: 4px;" onclick="addToCart(${p.id})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      `,
          )
          .join("");
        attachProductImageFallbacks(grid);
        observeReveal();
      }

      function openModal(id) {
        const p = products.find((x) => x.id === id);
        if (!p) return;
        const m = document.getElementById("modalBody");
        m.innerHTML = `
        <button class="modal-close" onclick="closeModal()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div class="modal-img-section">
          ${buildProductImage(p, "modal")}
        </div>
        <div class="modal-body">
          ${p.badge ? `<span style="background: var(--primary); color: white; font-size: 0.7rem; font-weight: 600; padding: 3px 10px; border-radius: 6px; display: inline-block; margin-bottom: 8px;">${p.badge}</span>` : ""}
          <h2 class="font-display" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">${p.name}</h2>
          <div class="card-rating mb-2">${stars(p.rating)}<span style="opacity: 0.5; font-size: 0.8rem; margin-left: 8px;">(${p.rating})</span></div>
          <p style="opacity: 0.7; line-height: 1.7; margin-bottom: 1rem;">${p.desc}</p>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 1.25rem;">
            <span style="font-size: 1.75rem; font-weight: 700; color: var(--primary);">${formatPrice(p.price)}</span>
            <span style="opacity: 0.5; font-size: 0.8rem;">Weight: ${p.weight}</span>
          </div>
          <button class="btn-primary w-100" style="padding: 12px 28px; font-size: 0.95rem;" onclick="addToCart(${p.id}); closeModal();">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;display:inline"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>Add to Cart</span>
          </button>
        </div>
      `;
        attachProductImageFallbacks(m);
        document.getElementById("productModal").classList.add("open");
      }

      function closeModal() {
        document.getElementById("productModal").classList.remove("open");
      }

      // ===== CART =====
      function addToCart(id) {
        const existing = cart.find((c) => c.id === id);
        if (existing) existing.qty++;
        else cart.push({ id, qty: 1 });
        saveCart();
        updateCartBadge();
        showToast("Added to cart!");
      }

      function updateCartBadge() {
        const total = cart.reduce((s, c) => s + c.qty, 0);
        ["cartBadge", "mobileCartBadge"].forEach((id) => {
          const badge = document.getElementById(id);
          if (!badge) return;
          badge.textContent = total;
          badge.style.display = total ? "flex" : "none";
        });
      }

      function removeFromCart(id) {
        cart = cart.filter((c) => c.id !== id);
        saveCart();
        updateCartBadge();
        renderCartPage();
      }

      function updateQty(id, qty) {
        const item = cart.find((c) => c.id === id);
        if (!item) return;
        item.qty = qty;
        if (item.qty <= 0) removeFromCart(id);
        else {
          saveCart();
          renderCartPage();
        }
      }

      function renderCartPage() {
        const itemsList = document.getElementById("cartItemsList");
        const summary = document.getElementById("orderSummary");

        if (!cart.length) {
          itemsList.innerHTML = `<p style="text-align: center; opacity: 0.5; padding: 40px; font-size: 0.9rem;">Your cart is empty</p>`;
          summary.innerHTML = "";
          document.getElementById("summarySubtotal").textContent =
            formatPrice(0);
          document.getElementById("summaryTotal").textContent = formatPrice(0);
          return;
        }

        let subtotal = 0;
        itemsList.innerHTML = cart
          .map((c) => {
            const p = products.find((x) => x.id === c.id);
            const itemTotal = p.price * c.qty;
            subtotal += itemTotal;
            return `
          <div style="display: flex; gap: 16px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--card-border);">
            <div style="width: 100px; height: 100px; border-radius: 12px; background: var(--bg2); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <img src="${p.image}" alt="${p.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;" onerror="console.error('Image failed to load:', this.src); this.style.display='none';">
            </div>
            <div style="flex: 1;">
              <h4 style="font-weight: 700; margin-bottom: 4px; font-size: 0.95rem;">${p.name}</h4>
              <p style="opacity: 0.6; font-size: 0.85rem; margin-bottom: 8px;">$${p.price} × ${c.qty}</p>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button onclick="updateQty(${p.id}, ${c.qty - 1})" style="width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--card-border); background: var(--bg2); cursor: pointer; color: var(--text); font-weight: 600;">−</button>
                <span style="min-width: 30px; text-align: center; font-weight: 600;">${c.qty}</span>
                <button onclick="updateQty(${p.id}, ${c.qty + 1})" style="width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--card-border); background: var(--bg2); cursor: pointer; color: var(--text); font-weight: 600;">+</button>
              </div>
            </div>
            <div style="text-align: right;">
              <p style="font-weight: 700; font-size: 1rem; color: var(--primary); margin-bottom: 12px;">$${itemTotal.toFixed(2)}</p>
              <button onclick="removeFromCart(${p.id})" style="background: transparent; border: none; color: var(--accent); cursor: pointer; text-decoration: underline; font-size: 0.85rem; font-weight: 500;">Remove</button>
            </div>
          </div>
        `;
          })
          .join("");
        itemsList.innerHTML = itemsList.innerHTML.replace(
          /\$([0-9]+(?:\.[0-9]+)?)/g,
          "$1 AFS",
        );

        summary.innerHTML = cart
          .map((c) => {
            const p = products.find((x) => x.id === c.id);
            return `
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; opacity: 0.7;">
            <span>${p.name} ×${c.qty}</span>
            <span>${formatPrice(p.price * c.qty)}</span>
          </div>
        `;
          })
          .join("");
        summary.innerHTML = summary.innerHTML.replace(
          /\$([0-9]+(?:\.[0-9]+)?)/g,
          "$1 AFS",
        );

        document.getElementById("summarySubtotal").textContent =
          formatPrice(subtotal);
        document.getElementById("summaryTotal").textContent =
          formatPrice(subtotal);
      }

      // ===== CHECKOUT =====
      function handleCheckout(e) {
        e.preventDefault();
        if (cart.length === 0) {
          showToast("Cart is empty");
          return;
        }

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();

        if (!fullName || !phone || !address) {
          showToast("Please fill all fields");
          return;
        }

        document.getElementById("checkoutForm").style.display = "none";
        document.getElementById("successMessage").style.display = "block";

        setTimeout(() => {
          cart = [];
          saveCart();
          updateCartBadge();
          document.getElementById("fullName").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("address").value = "";
          document.getElementById("checkoutForm").style.display = "block";
          document.getElementById("successMessage").style.display = "none";
          goToShop();
        }, 2500);
      }

      // ===== EVENTS =====
      document.getElementById("filterBar").addEventListener("click", (e) => {
        if (!e.target.classList.contains("filter-pill")) return;
        document
          .querySelectorAll(".filter-pill")
          .forEach((p) => p.classList.remove("active"));
        e.target.classList.add("active");
        currentFilter = e.target.dataset.filter;
        renderProducts();
      });

      document
        .getElementById("sortSelect")
        .addEventListener("change", renderProducts);

      document.getElementById("productModal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeModal();
      });

      // ===== REVEAL OBSERVER =====
      function observeReveal() {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) e.target.classList.add("visible");
            });
          },
          { threshold: 0.1 },
        );
        document
          .querySelectorAll(".reveal:not(.visible)")
          .forEach((el) => obs.observe(el));
      }

      // ===== SAFFRON THREADS =====
      function createThreads() {
        const c = document.getElementById("saffronThreads");
        if (!c) return;
        for (let i = 0; i < 8; i++) {
          const t = document.createElement("div");
          t.className = "shop-thread";
          t.style.left = Math.random() * 100 + "%";
          t.style.height = 20 + Math.random() * 30 + "px";
          t.style.animationDuration = 4 + Math.random() * 6 + "s";
          t.style.animationDelay = Math.random() * 5 + "s";
          c.appendChild(t);
        }
      }

      // ===== SKELETONS =====
      function showSkeletons() {
        const g = document.getElementById("skeletonGrid");
        g.innerHTML = Array(16)
          .fill(0)
          .map(
            () => `
        <div style="border-radius: 16px; overflow: hidden; border: 1px solid var(--card-border);">
          <div class="skeleton" style="height: 180px;"></div>
          <div style="padding: 16px;">
            <div class="skeleton" style="height: 16px; width: 70%; margin-bottom: 8px;"></div>
            <div class="skeleton" style="height: 12px; width: 40%; margin-bottom: 12px;"></div>
            <div class="d-flex justify-content-between">
              <div class="skeleton" style="height: 20px; width: 50px;"></div>
              <div class="skeleton" style="height: 34px; width: 100px; border-radius: 10px;"></div>
            </div>
          </div>
        </div>
      `,
          )
          .join("");
      }

      // ===== INIT =====
      loadCart();
      updateCartBadge();
      showSkeletons();
      createThreads();
      renderProducts();

      setTimeout(() => {
        document.getElementById("skeletonGrid").style.display = "none";
        document.getElementById("productGrid").style.display = "grid";
        renderProducts();
        observeReveal();
      }, 1200);
    