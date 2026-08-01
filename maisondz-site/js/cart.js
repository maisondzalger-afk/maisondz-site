/* ==========================================================================
   Panier — stocké dans le navigateur du client (localStorage), pas de serveur.
   La commande est finalisée par un message WhatsApp pré-rempli envoyé à la
   boutique (paiement à la livraison), comme demandé pour rester 100% autonome
   de Shopify sans avoir à héberger de backend.

   ⚠️ IMPORTANT : remplace WHATSAPP_NUMBER ci-dessous par ton numéro pro,
   au format international SANS le "+" (ex: 213555123456).
   ========================================================================== */

const WHATSAPP_NUMBER = "213000000000"; // TODO: remplace par ton numéro WhatsApp

const CART_KEY = "maisondz_cart";

function readCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){ return []; }
}
function writeCart(items){
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartCount();
}

function addToCart(productId, size, color, qty){
  const items = readCart();
  const key = productId + "|" + size + "|" + color;
  const existing = items.find(i => i.key === key);
  if(existing){
    existing.qty += qty;
  }else{
    items.push({ key, productId, size, color, qty });
  }
  writeCart(items);
  renderCartDrawer();
  openCartDrawer();
}

function setQty(key, qty){
  let items = readCart();
  if(qty <= 0){
    items = items.filter(i => i.key !== key);
  }else{
    const line = items.find(i => i.key === key);
    if(line) line.qty = qty;
  }
  writeCart(items);
  renderCartDrawer();
  renderCartPage();
}

function removeLine(key){ setQty(key, 0); }

function cartTotal(){
  const items = readCart();
  return items.reduce((sum, i) => {
    const p = getProduct(i.productId);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}
function cartCount(){
  return readCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartCount(){
  document.querySelectorAll(".cart-count").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

/* ---------- Drawer ---------- */
function openCartDrawer(){
  document.getElementById("cartOverlay")?.classList.add("open");
  document.getElementById("cartDrawer")?.classList.add("open");
}
function closeCartDrawer(){
  document.getElementById("cartOverlay")?.classList.remove("open");
  document.getElementById("cartDrawer")?.classList.remove("open");
}

function renderCartDrawer(){
  const wrap = document.getElementById("cartDrawerItems");
  const foot = document.getElementById("cartDrawerFoot");
  if(!wrap) return;
  const items = readCart();

  if(items.length === 0){
    wrap.innerHTML = '<div class="cart-empty">Ton panier est vide pour le moment.<br><br><a class="btn btn--ghost" href="catalogue.html">Voir le catalogue</a></div>';
    if(foot) foot.style.display = "none";
    return;
  }
  if(foot) foot.style.display = "block";

  wrap.innerHTML = items.map(i => {
    const p = getProduct(i.productId);
    if(!p) return "";
    return `
      <div class="cart-line">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-line__info">
          <h4>${p.name}</h4>
          <div class="cart-line__meta">${i.color} · ${i.size}</div>
          <div class="qty-stepper">
            <button onclick="setQty('${i.key}', ${i.qty - 1})" aria-label="Diminuer la quantité">−</button>
            <span>${i.qty}</span>
            <button onclick="setQty('${i.key}', ${i.qty + 1})" aria-label="Augmenter la quantité">+</button>
          </div>
          <div style="margin-top:8px;font-weight:700;font-size:0.9rem;">${formatDA(p.price * i.qty)}</div>
          <button class="cart-line__remove" onclick="removeLine('${i.key}')">Retirer</button>
        </div>
      </div>`;
  }).join("");

  const subtotalEl = document.getElementById("cartDrawerSubtotal");
  if(subtotalEl) subtotalEl.textContent = formatDA(cartTotal());
}

/* ---------- Cart page (panier.html) ---------- */
function renderCartPage(){
  const wrap = document.getElementById("cartPageItems");
  if(!wrap) return;
  const items = readCart();

  if(items.length === 0){
    wrap.innerHTML = '<div class="cart-empty">Ton panier est vide.<br><br><a class="btn btn--carmin" href="catalogue.html">Découvrir le catalogue →</a></div>';
    document.getElementById("cartSummary")?.style.setProperty("display","none");
    return;
  }
  document.getElementById("cartSummary")?.style.setProperty("display","block");

  wrap.innerHTML = items.map(i => {
    const p = getProduct(i.productId);
    if(!p) return "";
    return `
      <div class="cart-line">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-line__info">
          <h4>${p.name}</h4>
          <div class="cart-line__meta">${i.color} · Taille ${i.size}</div>
          <div class="qty-stepper">
            <button onclick="setQty('${i.key}', ${i.qty - 1})" aria-label="Diminuer la quantité">−</button>
            <span>${i.qty}</span>
            <button onclick="setQty('${i.key}', ${i.qty + 1})" aria-label="Augmenter la quantité">+</button>
          </div>
          <div style="margin-top:8px;font-weight:700;">${formatDA(p.price * i.qty)}</div>
          <button class="cart-line__remove" onclick="removeLine('${i.key}')">Retirer du panier</button>
        </div>
      </div>`;
  }).join("");

  const totalEl = document.getElementById("cartPageTotal");
  if(totalEl) totalEl.textContent = formatDA(cartTotal());
}

/* ---------- Commande — envoi direct par e-mail (Resend via fonction Netlify) ---------- */
function buildOrderPayload(){
  const items = readCart();
  const form = document.getElementById("checkoutForm");

  const orderItems = items.map(i => {
    const p = getProduct(i.productId);
    return p ? {
      name: p.name,
      color: i.color,
      size: i.size,
      qty: i.qty,
      lineTotal: p.price * i.qty
    } : null;
  }).filter(Boolean);

  return {
    items: orderItems,
    total: cartTotal(),
    nom: form.querySelector("#ckNom")?.value.trim(),
    tel: form.querySelector("#ckTel")?.value.trim(),
    wilaya: form.querySelector("#ckWilaya")?.value.trim(),
    commune: form.querySelector("#ckCommune")?.value.trim(),
    adresse: form.querySelector("#ckAdresse")?.value.trim()
  };
}

async function submitOrder(e){
  e.preventDefault();
  const form = document.getElementById("checkoutForm");
  if(form && !form.reportValidity()) return;
  if(cartCount() === 0){
    alert("Ton panier est vide. Ajoute un article avant de commander.");
    return;
  }

  const submitBtn = form.querySelector("button[type=submit]");
  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Envoi de la commande...";

  try{
    const payload = buildOrderPayload();
    const res = await fetch("/api/send-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if(!res.ok){
      throw new Error("Échec de l'envoi");
    }

    // Succès : on vide le panier et on affiche la confirmation
    writeCart([]);
    renderCartPage();
    const wrap = document.querySelector(".cart-page");
    if(wrap){
      wrap.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:70px 20px;">
          <h2 style="margin-bottom:14px;">Commande reçue ✅</h2>
          <p style="color:var(--pierre);max-width:46ch;margin:0 auto 26px;">
            Merci ${payload.nom} ! Ta commande a bien été transmise à Maison DZ.
            On te contacte au ${payload.tel} pour confirmer la livraison.
            Paiement à la livraison (Cash).
          </p>
          <a href="catalogue.html" class="btn btn--carmin">Continuer les achats</a>
        </div>`;
    }
  }catch(err){
    alert("Un souci est survenu pendant l'envoi de ta commande. Réessaie, ou contacte-nous directement sur Instagram.");
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCartDrawer();
  renderCartPage();

  document.getElementById("cartOverlay")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cartDrawerClose")?.addEventListener("click", closeCartDrawer);
  document.querySelectorAll("[data-open-cart]").forEach(btn => {
    btn.addEventListener("click", (e) => { e.preventDefault(); renderCartDrawer(); openCartDrawer(); });
  });
  document.getElementById("checkoutForm")?.addEventListener("submit", submitOrder);
});
