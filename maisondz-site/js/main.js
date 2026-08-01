/* ==========================================================================
   Comportements communs à toutes les pages : menu mobile, accordéon FAQ,
   rendu des grilles produits, newsletter (mailto), année du footer.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Menu mobile ---- */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if(toggle && nav){
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- Accordéon FAQ ---- */
  document.querySelectorAll(".faq-item .faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".faq-item").classList.toggle("open");
    });
  });

  /* ---- Année footer ---- */
  document.querySelectorAll(".js-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Newsletter (mailto simple, à remplacer par un vrai service si besoin) ---- */
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input[type=email]").value.trim();
      if(!email) return;
      window.location.href = `mailto:contact@maisondz.net?subject=${encodeURIComponent("Inscription newsletter")}&body=${encodeURIComponent(email)}`;
    });
  });
});

/* ---------- Rendu d'une grille de produits ---------- */
function renderProductGrid(containerId, productList){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = productList.map(p => `
    <article class="product-card">
      <a href="produit.html?id=${p.id}" class="product-card__media">
        <span class="product-card__tag">Promo</span>
        <img src="${p.image}" alt="${p.name}">
        <img src="${p.hoverImage}" alt="" class="hover-img">
      </a>
      <div class="product-card__body">
        <h3><a href="produit.html?id=${p.id}">${p.name}</a></h3>
        <div class="price-row">
          <span class="price">${formatDA(p.price)}</span>
          <span class="price--old">${formatDA(p.oldPrice)}</span>
        </div>
        <a class="btn btn--ghost btn--block" href="produit.html?id=${p.id}">Choisir</a>
      </div>
    </article>
  `).join("");
}
