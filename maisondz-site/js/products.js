/* ==========================================================================
   Catalogue produits — MAISON DZ
   Pour ajouter un produit : copie un bloc, change le "id" (unique, sans espace)
   et les infos. "cdn" images conservées depuis l'ancienne boutique le temps
   que tu remplaces par tes propres photos (voir README.md).
   ========================================================================== */

const PRODUCTS = [
  {
    id: "no-risk-no-risq",
    collection: "Héritage 001",
    name: "Tee-shirt No Risk No Risq",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Message direct",
    description: "Prendre des risques, avancer, tenter. Parce que rien n'arrive sans mouvement.\n\n« No risk, no risq » joue sur deux idées : l'action et ce qui est écrit.\n\nUn message simple, direct, entre ambition et réalité.",
    image: "images/no-risk-no-risq-front-blanc.png",
    hoverImage: "images/no-risk-no-risq-back-blanc.png",
    gallery: [
      "images/no-risk-no-risq-front-blanc.png",
      "images/no-risk-no-risq-back-blanc.png",
      "images/no-risk-no-risq-front-noir.png",
      "images/no-risk-no-risq-back-noir.png",
      "images/no-risk-no-risq-lifestyle-blanc.jpg",
      "images/no-risk-no-risq-lifestyle-noir.jpg"
    ]
  },
  {
    id: "mektoub",
    collection: "Héritage 001",
    name: "Tee-shirt Mektoub",
    price: 3900,
    oldPrice: 4200,
    colors: ["Noir", "Blanc"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Ce qui est écrit",
    description: "Un mot, une idée. « Mektoub », ce qui est écrit, ce qui arrive, ce qui devait être.\n\nEntre acceptation et confiance, un rappel discret que tout a son sens, même quand on ne le voit pas encore.",
    image: "images/mektoub-front-noir.png",
    hoverImage: "images/mektoub-back-noir.png",
    gallery: [
      "images/mektoub-front-noir.png",
      "images/mektoub-back-noir.png",
      "images/mektoub-front-blanc.png",
      "images/mektoub-back-blanc.png",
      "images/mektoub-lifestyle-1.jpg",
      "images/mektoub-lifestyle-2.jpg",
      "images/mektoub-lifestyle-3.jpg"
    ]
  },
  {
    id: "algerie-pays-du-soleil",
    collection: "Héritage 001",
    name: "Tee-shirt Algérie Pays du Soleil",
    price: 3900,
    oldPrice: 4200,
    colors: ["Noir", "Blanc"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "L'âme du Sahara",
    description: "Porter l'âme de l'Algérie, la chaleur du Sahara et la fierté de notre identité dans chaque fil.\n\nUn design unique, une qualité exceptionnelle, une pièce qui raconte notre histoire.",
    image: "images/algerie-pays-du-soleil-front-noir.png",
    hoverImage: "images/algerie-pays-du-soleil-back-noir.png",
    gallery: [
      "images/algerie-pays-du-soleil-front-noir.png",
      "images/algerie-pays-du-soleil-back-noir.png",
      "images/algerie-pays-du-soleil-front-blanc.png",
      "images/algerie-pays-du-soleil-back-blanc.png",
      "images/algerie-pays-du-soleil-lifestyle-1.jpg",
      "images/algerie-pays-du-soleil-lifestyle-2.jpg",
      "images/algerie-pays-du-soleil-lifestyle-3.jpg"
    ]
  },
  {
    id: "hayk",
    collection: "Héritage 001",
    name: "Tee-shirt Hayk",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Héritage revisité",
    description: "Un mot chargé d'histoire, symbole de pudeur, d'élégance et d'identité.\n\nLe hayk, plus qu'un vêtement, une présence, une manière d'être.\n\nIci, une interprétation moderne, simple, sans en faire trop.",
    image: "images/hayk-front-blanc.png",
    hoverImage: "images/hayk-back-blanc.png",
    gallery: [
      "images/hayk-front-blanc.png",
      "images/hayk-back-blanc.png",
      "images/hayk-front-noir.png",
      "images/hayk-back-noir.png",
      "images/hayk-lifestyle-blanc.jpg",
      "images/hayk-lifestyle-noir.jpg"
    ]
  },
  {
    id: "fiha-kheir",
    collection: "Héritage 001",
    name: "Tee-shirt Fiha Kheir",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Patience & espoir",
    description: "Une phrase qu'on dit souvent, parfois avec conviction, parfois juste pour avancer.\n\n« Fiha kheir », c'est accepter sans tout comprendre.\n\nUn mélange de patience, de recul, et d'espoir, même discret.",
    image: "images/fiha-kheir-front-blanc.png",
    hoverImage: "images/fiha-kheir-back-blanc.png",
    gallery: [
      "images/fiha-kheir-front-blanc.png",
      "images/fiha-kheir-back-blanc.png",
      "images/fiha-kheir-front-noir.png",
      "images/fiha-kheir-back-noir.png",
      "images/fiha-kheir-lifestyle-1.jpg",
      "images/fiha-kheir-lifestyle-2.jpg"
    ]
  },
  {
    id: "nomade",
    collection: "Héritage 002",
    name: "Tee-shirt Nomade",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Grand Sud algérien",
    description: "L'esprit du désert rencontre l'art de la céramique.\n\nLe t-shirt Nomade met en scène l'emblématique homme bleu du Sahara, enveloppé dans son chèche traditionnel à la calligraphie dorée, se dévoilant à travers une faïence bleue déstructurée.\n\nUne pièce artistique et mystérieuse qui rend un hommage puissant à la culture du Grand Sud algérien.",
    image: "images/nomade-front-blanc.png",
    hoverImage: "images/nomade-back-blanc.png",
    gallery: [
      "images/nomade-front-blanc.png",
      "images/nomade-back-blanc.png",
      "images/nomade-front-noir.png",
      "images/nomade-back-noir.png"
    ]
  },
  {
    id: "tapestry",
    collection: "Héritage 002",
    name: "Tee-shirt Tapestry",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Patrimoine textile",
    description: "Réinventer la tradition avec une touche contemporaine.\n\nCe t-shirt arbore un visuel minimaliste représentant trois tapis de prière stylisés aux couleurs vibrantes, rendant hommage à l'art textile et au patrimoine algérien.\n\nFabriqué en coton lourd de qualité supérieure pour une coupe nette et un confort quotidien.",
    image: "images/tapestry-front-blanc.png",
    hoverImage: "images/tapestry-back-blanc.png",
    gallery: [
      "images/tapestry-front-blanc.png",
      "images/tapestry-back-blanc.png",
      "images/tapestry-front-noir.png",
      "images/tapestry-back-noir.png"
    ]
  },
  {
    id: "zellige",
    collection: "Héritage 002",
    name: "Tee-shirt Zellige",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Héritage architectural",
    description: "Quand l'artisanat traditionnel rencontre le streetwear contemporain.\n\nLe t-shirt Zellige met à l'honneur l'héritage architectural algérien à travers une arche mauresque majestueuse imprimée au dos, composée d'un assemblage de faïences bleues et jaunes et rehaussée d'une touche d'agrumes méditerranéens.\n\nUne pièce forte, graphique et empreinte de fraîcheur.",
    image: "images/zellige-front-blanc.png",
    hoverImage: "images/zellige-back-blanc.png",
    gallery: [
      "images/zellige-front-blanc.png",
      "images/zellige-back-blanc.png",
      "images/zellige-front-noir.png",
      "images/zellige-back-noir.png"
    ]
  },
  {
    id: "trust-god",
    collection: "Héritage 001",
    name: "Tee-shirt Trust God",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Confiance & lâcher prise",
    description: "Faire ce qu'il faut, puis laisser le reste.\n\n« Trust God », un rappel simple de confiance, de patience et de lâcher prise.\n\nUn message discret, porté avec intention.",
    image: "images/trust-god-front-blanc.png",
    hoverImage: "images/trust-god-back-blanc.png",
    gallery: [
      "images/trust-god-front-blanc.png",
      "images/trust-god-back-blanc.png",
      "images/trust-god-front-noir.png",
      "images/trust-god-back-noir.png"
    ]
  },
  {
    id: "sabr",
    collection: "Héritage 001",
    name: "Tee-shirt Patience Brings Power Sabr",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "La patience est une force",
    description: "Une pièce pensée autour d'une idée simple : la patience n'est pas une faiblesse, c'est une force.\n\n« Patience brings power » s'associe à « Sabr », un mot chargé de sens, profondément ancré dans la culture.\n\nUn message discret, mais puissant. À porter sans en faire trop.",
    image: "images/sabr-front-blanc.png",
    hoverImage: "images/sabr-back-blanc.png",
    gallery: [
      "images/sabr-front-blanc.png",
      "images/sabr-back-blanc.png",
      "images/sabr-front-noir.png",
      "images/sabr-back-noir.png"
    ]
  },
  {
    id: "tawakul",
    collection: "Héritage 001",
    name: "Tee-shirt Trust The Process Tawakul",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Effort & foi",
    description: "Avancer sans tout contrôler. Faire les choses, puis lâcher prise.\n\n« Trust the process » s'associe à « Tawakul », une notion ancrée dans la confiance et la patience.\n\nUn équilibre entre effort et foi. Un message simple, porté avec intention.",
    image: "images/tawakul-front-blanc.png",
    hoverImage: "images/tawakul-back-blanc.png",
    gallery: [
      "images/tawakul-front-blanc.png",
      "images/tawakul-back-blanc.png",
      "images/tawakul-front-noir.png",
      "images/tawakul-back-noir.png"
    ]
  }
];

function getProduct(id){
  return PRODUCTS.find(p => p.id === id);
}

function formatDA(n){
  return "DA " + n.toLocaleString("fr-FR") + ".00";
}
