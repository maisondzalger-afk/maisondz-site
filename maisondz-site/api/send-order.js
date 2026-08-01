// ==========================================================================
// Fonction serverless Vercel — reçoit la commande depuis panier.html et
// envoie un e-mail récapitulatif via Resend. La clé API reste côté serveur,
// lue depuis les variables d'environnement Vercel (jamais dans le code).
// URL une fois déployé : https://ton-site.vercel.app/api/send-order
// ==========================================================================

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.ORDER_EMAIL_TO || "maisondz.alger@gmail.com";

  if (!RESEND_API_KEY) {
    res.status(500).json({ error: "RESEND_API_KEY manquante dans les variables d'environnement Vercel." });
    return;
  }

  const { items, total, nom, tel, wilaya, commune, adresse } = req.body || {};

  if (!nom || !tel || !wilaya || !commune || !adresse || !items || items.length === 0) {
    res.status(400).json({ error: "Informations de commande incomplètes." });
    return;
  }

  const itemsHtml = items
    .map(i => `<li>${i.name} — ${i.color}, taille ${i.size} — x${i.qty} — ${i.lineTotal} DA</li>`)
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:520px;">
      <h2 style="margin-bottom:4px;">🛒 Nouvelle commande — Maison DZ</h2>
      <p style="color:#666;margin-top:0;">Reçue le ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Algiers" })}</p>

      <h3>Articles</h3>
      <ul>${itemsHtml}</ul>
      <p style="font-size:1.1em;"><strong>Total : ${total} DA</strong> (paiement à la livraison)</p>

      <hr>

      <h3>Client</h3>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Téléphone :</strong> ${tel}</p>
      <p><strong>Wilaya :</strong> ${wilaya}</p>
      <p><strong>Commune :</strong> ${commune}</p>
      <p><strong>Adresse :</strong> ${adresse}</p>
    </div>
  `;

  try {
    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Maison DZ <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: TO_EMAIL,
        subject: `Nouvelle commande — ${nom} (${total} DA)`,
        html
      })
    });

    const result = await resendResp.json();

    if (!resendResp.ok) {
      res.status(502).json({ error: result });
      return;
    }

    res.status(200).json({ success: true, id: result.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
