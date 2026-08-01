# Maison DZ — site indépendant

Site statique (HTML/CSS/JS pur, aucun framework, aucun serveur requis).
Compatible avec n'importe quel hébergement, y compris gratuit.

## 1. À faire avant de mettre en ligne

1. **Numéro WhatsApp** — ouvre `js/cart.js`, ligne ~13 :
   ```js
   const WHATSAPP_NUMBER = "213000000000";
   ```
   Remplace par ton vrai numéro pro, format international, sans "+" ni espace
   (ex : `213555123456`). C'est ce numéro qui reçoit les commandes.

2. **Images produits** — les images utilisées pointent encore vers le CDN de
   ton ancienne boutique Shopify (`maisondz.net/cdn/shop/files/...`). Elles
   restent en ligne et fonctionnent tant que le compte Shopify existe, mais
   pour être 100% indépendant :
   - télécharge tes photos depuis l'admin Shopify (Produits → chaque fiche → images),
   - crée un dossier `images/` dans ce projet,
   - remplace les URLs dans `js/products.js` par ex. `images/mektoub-1.jpg`.

3. **E-mail de contact** — remplace `contact@maisondz.net` dans `contact.html`,
   `index.html`, etc. si besoin (recherche/remplace global).

4. **Adresse du site** — une fois en ligne, mets à jour les liens Instagram/TikTok
   si tes identifiants changent.

## 2. Ajouter / modifier un produit

Tout est dans `js/products.js`. Copie un bloc existant dans le tableau
`PRODUCTS`, change `id` (unique, sans espace, utilisé dans l'URL
`produit.html?id=...`), le nom, le prix, les images et la description.
Aucune autre page à toucher : catalogue, accueil et fiche produit se
mettent à jour automatiquement.

## 3. Comment ça marche (pas de backend)

- Le **panier** est stocké dans le navigateur du client (`localStorage`) —
  pas de base de données à gérer.
- La **commande** se termine par un bouton "Confirmer via WhatsApp" qui ouvre
  WhatsApp avec un message pré-rempli (produits, tailles, quantités, adresse).
  Le client n'a plus qu'à l'envoyer. C'est la méthode la plus fiable pour un
  site 100% statique avec paiement à la livraison — pas de passerelle de
  paiement à intégrer, pas de frais de transaction.
- Si tu veux plus tard un vrai paiement en ligne (carte bancaire, CIB/Edahabia…)
  ou une vraie base de commandes, il faudra ajouter un petit backend — dis-le
  moi et je peux t'aider à en construire un.

## 4. Mise en ligne — options simples et gratuites

- **Netlify / Vercel** : glisse-dépose le dossier entier sur netlify.com/drop —
  le site est en ligne en quelques secondes.
- **GitHub Pages** : pousse ce dossier dans un repo GitHub, active Pages dans
  les réglages du repo.
- **Hébergement mutualisé classique (cPanel, etc.)** : upload de tous les
  fichiers dans le dossier `public_html` via FTP.

Dans tous les cas, garde la structure de dossiers telle quelle
(`css/`, `js/`, et les fichiers `.html` à la racine).

## 5. Nom de domaine

Ton nom de domaine `maisondz.net` t'appartient indépendamment de Shopify
(sauf s'il a été acheté via Shopify — vérifie dans Réglages → Domaines).
Une fois le nouveau site hébergé, il suffit de pointer les DNS de
`maisondz.net` vers ton nouvel hébergeur.

## Structure du projet

```
maisondz-site/
├── index.html                     Accueil
├── catalogue.html                 Tous les produits
├── produit.html                   Fiche produit (dynamique, ?id=...)
├── panier.html                    Panier + formulaire de commande
├── contact.html                   Formulaire de contact
├── politique-confidentialite.html
├── css/style.css                  Design complet
└── js/
    ├── products.js                Données produits (à éditer pour ajouter/modifier)
    ├── cart.js                    Logique panier + commande WhatsApp
    └── main.js                    Menu mobile, FAQ, grilles produits
```
