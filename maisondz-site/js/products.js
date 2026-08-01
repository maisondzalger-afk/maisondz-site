/* ==========================================================================
   Catalogue produits — MAISON DZ
   Pour ajouter un produit : copie un bloc, change le "id" (unique, sans espace)
   et les infos. "cdn" images conservées depuis l'ancienne boutique le temps
   que tu remplaces par tes propres photos (voir README.md).
   ========================================================================== */

const CDN = "https://maisondz.net/cdn/shop/files/";

const PRODUCTS = [
  {
    id: "no-risk-no-risq",
    name: "Tee-shirt No Risk No Risq",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Message direct",
    description: "Prendre des risques, avancer, tenter. Parce que rien n'arrive sans mouvement.\n\n« No risk, no risq » joue sur deux idées : l'action et ce qui est écrit.\n\nUn message simple, direct, entre ambition et réalité.",
    image: CDN + "Gemini_Generated_Image_wm0j0ywm0j0ywm0j.png?v=1778075647",
    hoverImage: CDN + "Gemini_Generated_Image_8emc7n8emc7n8emc.png?v=1778075872",
    gallery: [
      CDN + "Gemini_Generated_Image_wm0j0ywm0j0ywm0j.png?v=1778075647",
      CDN + "Gemini_Generated_Image_8emc7n8emc7n8emc.png?v=1778075872",
      CDN + "Gemini_Generated_Image_kranshkranshkran.png?v=1778075040",
      CDN + "Gemini_Generated_Image_iwq1a9iwq1a9iwq1.png?v=1778075088",
      CDN + "IMG_6336.jpg?v=1777716222",
      CDN + "1780432110266.jpg?v=1781541605"
    ]
  },
  {
    id: "mektoub",
    name: "Tee-shirt Mektoub",
    price: 3900,
    oldPrice: 4200,
    colors: ["Noir", "Blanc"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Ce qui est écrit",
    description: "Un mot, une idée. « Mektoub », ce qui est écrit, ce qui arrive, ce qui devait être.\n\nEntre acceptation et confiance, un rappel discret que tout a son sens, même quand on ne le voit pas encore.",
    image: CDN + "Gemini_Generated_Image_t4o1jft4o1jft4o1_1.png?v=1778076124",
    hoverImage: CDN + "Gemini_Generated_Image_1vtnqq1vtnqq1vtn.png?v=1778076227",
    gallery: [
      CDN + "Gemini_Generated_Image_t4o1jft4o1jft4o1_1.png?v=1778076124",
      CDN + "Gemini_Generated_Image_1vtnqq1vtnqq1vtn.png?v=1778076227",
      CDN + "Gemini_Generated_Image_d97n5xd97n5xd97n.png?v=1778075972",
      CDN + "Gemini_Generated_Image_lesjvslesjvslesj.png?v=1778076072",
      CDN + "IMG_6258.jpg?v=1777982490",
      CDN + "IMG_6043.jpg?v=1777982598"
    ]
  },
  {
    id: "algerie-pays-du-soleil",
    name: "Tee-shirt Algérie Pays du Soleil",
    price: 3900,
    oldPrice: 4200,
    colors: ["Noir", "Blanc"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "L'âme du Sahara",
    description: "Porter l'âme de l'Algérie, la chaleur du Sahara et la fierté de notre identité dans chaque fil.\n\nUn design unique, une qualité exceptionnelle, une pièce qui raconte notre histoire.",
    image: CDN + "Gemini_Generated_Image_b1npu3b1npu3b1np.png?v=1778074006",
    hoverImage: CDN + "Gemini_Generated_Image_47a0y947a0y947a0.png?v=1778074046",
    gallery: [
      CDN + "Gemini_Generated_Image_b1npu3b1npu3b1np.png?v=1778074006",
      CDN + "Gemini_Generated_Image_47a0y947a0y947a0.png?v=1778074046",
      CDN + "Gemini_Generated_Image_lst1o0lst1o0lst1.png?v=1778074106",
      CDN + "Gemini_Generated_Image_nbcxyvnbcxyvnbcx.png?v=1778074260",
      CDN + "IMG_6314.jpg?v=1777982666",
      CDN + "IMG_6075.jpg?v=1777983055"
    ]
  },
  {
    id: "hayk",
    name: "Tee-shirt Hayk",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Héritage revisité",
    description: "Un mot chargé d'histoire, symbole de pudeur, d'élégance et d'identité.\n\nLe hayk, plus qu'un vêtement, une présence, une manière d'être.\n\nIci, une interprétation moderne, simple, sans en faire trop.",
    image: CDN + "Gemini_Generated_Image_b76eujb76eujb76e.png?v=1778073106",
    hoverImage: CDN + "Gemini_Generated_Image_174kld174kld174k.png?v=1778073352",
    gallery: [
      CDN + "Gemini_Generated_Image_b76eujb76eujb76e.png?v=1778073106",
      CDN + "Gemini_Generated_Image_174kld174kld174k.png?v=1778073352",
      CDN + "Gemini_Generated_Image_wc93amwc93amwc93.png?v=1778073451",
      CDN + "Gemini_Generated_Image_8zkfm28zkfm28zkf.png?v=1778073501",
      CDN + "IMG_6323.jpg?v=1777715939",
      CDN + "1780432110354.jpg?v=1781542077"
    ]
  },
  {
    id: "fiha-kheir",
    name: "Tee-shirt Fiha Kheir",
    price: 3900,
    oldPrice: 4200,
    colors: ["Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Patience & espoir",
    description: "Une phrase qu'on dit souvent, parfois avec conviction, parfois juste pour avancer.\n\n« Fiha kheir », c'est accepter sans tout comprendre.\n\nUn mélange de patience, de recul, et d'espoir, même discret.",
    image: CDN + "Gemini_Generated_Image_takaldtakaldtaka.png?v=1778076716",
    hoverImage: CDN + "Gemini_Generated_Image_vu0urrvu0urrvu0u.png?v=1778076820",
    gallery: [
      CDN + "Gemini_Generated_Image_takaldtakaldtaka.png?v=1778076716",
      CDN + "Gemini_Generated_Image_vu0urrvu0urrvu0u.png?v=1778076820",
      CDN + "Gemini_Generated_Image_5wqiy65wqiy65wqi.png?v=1778076427",
      CDN + "Gemini_Generated_Image_f5kyu2f5kyu2f5ky.png?v=1778076475",
      CDN + "1780432110521.jpg?v=1781541869",
      CDN + "1780432110550.jpg?v=1781541893"
    ]
  },
  {
    id: "nomade",
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
