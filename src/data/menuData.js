export const WHATSAPP_NUMBER = "573163508206";
export const WHATSAPP_DEFAULT_MSG = "¡Hola Restaurante Delicia Sureña! Quisiera consultar la carta y hacer un pedido.";

export const SIGNATURE_DISHES = [
  {
    id: "cuy-entero",
    title: "Cuy Entero Asado",
    badge: "Plato Insignia",
    price: "$75.000 en mesa",
    takeawayPrice: "$80.000 para llevar",
    description: "Cuy seleccionado marinado con adobo tradicional de huerta nariñense, asado a fuego lento a la brasa hasta lograr una piel crocante y carne tierna. Acompañado de papas pastusas al vapor con ají de maní casero, crispetas y huevo duro.",
    image: "/foto_cuy.jpg",
    tags: ["A la leña", "Catambuco clásico", "Para compartir"],
    orderMsg: "Hola Delicia Sureña, me gustaría pedir un Cuy Entero Asado ($75.000 en mesa / $80.000 para llevar)."
  },
  {
    id: "frito-pastuso",
    title: "Frito Pastuso Tradicional",
    badge: "Bestseller Fin de Semana",
    price: "$22.000 en mesa",
    takeawayPrice: "$23.500 para llevar",
    description: "Trozos dorados de carne de cerdo cocinada en su propia sazón campesina, servidos con papas al vapor, arroz blanco, crispetas tradicionales y abundante ají de maní.",
    image: "/gallery/delicia_surena_03.jpg",
    tags: ["Domingos y Festivos", "Receta de la abuela", "Sabor pastuso"],
    orderMsg: "Hola Delicia Sureña, quiero pedir el Frito Pastuso Tradicional ($22.000 en mesa / $23.500 para llevar)."
  },
  {
    id: "trucha-frita",
    title: "Trucha Fresca Frita",
    badge: "Especialidad",
    price: "$22.000 en mesa",
    takeawayPrice: "$23.500 para llevar",
    description: "Trucha fresca frita al punto dorado crocante con limón andino, arroz blanco, fríjoles campesinos con papa y cazuela de sopa tradicional en barro.",
    image: "/gallery/delicia_surena_28.jpg",
    tags: ["Trucha fresca", "Incluye cazuela", "Sazón sureña"],
    orderMsg: "Hola Delicia Sureña, me gustaría pedir la Trucha Fresca Frita ($22.000 en mesa / $23.500 para llevar)."
  },
  {
    id: "gallina-criolla",
    title: "Gallina Criolla en Hogao",
    badge: "Tradicional",
    price: "$21.000 en mesa",
    takeawayPrice: "$22.500 para llevar",
    description: "Presa de gallina de campo tierna cocinada a fuego lento en hogao campesino de tomate y cebolla, servida con arroz blanco, ensalada fresca y medio aguacate.",
    image: "/gallery/delicia_surena_17.jpg",
    tags: ["Gallina de campo", "Hogao casero", "Aguacate fresco"],
    orderMsg: "Hola Delicia Sureña, me interesa ordenar la Gallina Criolla en Hogao ($21.000 en mesa / $22.500 para llevar)."
  },
  {
    id: "mixto-cuy-fritos",
    title: "Plato Mixto: 1/2 Cuy + 2 Fritos",
    badge: "Para Compartir",
    price: "$58.000",
    takeawayPrice: "Ideal 2-3 personas",
    description: "La mejor combinación de Catambuco: medio cuy asado a la brasa junto a dos porciones de frito pastuso con papas al vapor, crispetas y ají de maní.",
    image: "/gallery/delicia_surena_45.jpg",
    tags: ["Súper banquete", "Cuy + Frito", "Catambuco auténtico"],
    orderMsg: "Hola Delicia Sureña, quisiera pedir el Plato Mixto de 1/2 Cuy + 2 Fritos ($58.000)."
  },
  {
    id: "costilla-casera",
    title: "Costilla Casera al Fogón",
    badge: "Sazón de Hogar",
    price: "$15.000 en mesa",
    takeawayPrice: "$16.500 para llevar",
    description: "Tiernas costillas de cerdo campesino glaseadas con aliño tradicional de la casa y doradas a la brasa. Servidas con arroz blanco, frijoles caseros y ensalada fresca.",
    image: "/gallery/delicia_surena_61.jpg",
    tags: ["Ahumado natural", "Porción abundante", "Sazón casera"],
    orderMsg: "Hola Delicia Sureña, quiero pedir la Costilla Casera al Fogón ($15.000 en mesa / $16.500 para llevar)."
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 1,
    title: "Cuy Asado Tradicional en Catambuco",
    category: "platos",
    src: "/foto_cuy.jpg",
    desc: "Crocante a la brasa con papas pastusas, crispetas y ají de maní."
  },
  {
    id: 2,
    title: "Costilla Casera al Fogón",
    category: "platos",
    src: "/gallery/delicia_surena_61.jpg",
    desc: "Glaseado artesanal con arroz, frijoles y ensalada fresca."
  },
  {
    id: 3,
    title: "Trucha Fresca Frita con Cazuela de Barro",
    category: "platos",
    src: "/gallery/delicia_surena_28.jpg",
    desc: "Pescado fresco frito al limón con guarnición andina y sopa tradicional."
  },
  {
    id: 4,
    title: "Gallina Criolla Campesina con Aguacate",
    category: "platos",
    src: "/gallery/delicia_surena_17.jpg",
    desc: "Cocción lenta con hogao de la huerta, arroz y ensalada."
  },
  {
    id: 5,
    title: "Cazuelas de Barro con Locro Tradicional",
    category: "sopas",
    src: "/gallery/delicia_surena_12.jpg",
    desc: "Tres cazuelas humeantes servidas en canastillas de mimbre tejidas a mano."
  },
  {
    id: 6,
    title: "Frito Pastuso con Crispetas y Papas",
    category: "platos",
    src: "/gallery/delicia_surena_03.jpg",
    desc: "La tradicional combinación nariñense con cazuela y papas cocidas."
  },
  {
    id: 7,
    title: "Churrasco de Pollo con Papa Pastusa",
    category: "platos",
    src: "/gallery/delicia_surena_20.jpg",
    desc: "Corte jugoso a la brasa con papa pastusa al vapor y ají casero."
  },
  {
    id: 8,
    title: "Comedor Campestre & Calidez Familiar",
    category: "ambiente",
    src: "/gallery/delicia_surena_26.jpg",
    desc: "Espacio acogedor y tranquilo decorado con plantas en Catambuco."
  },
  {
    id: 9,
    title: "Sopas de la Abuela en Cazuela",
    category: "sopas",
    src: "/gallery/delicia_surena_24.jpg",
    desc: "Locro, cebada y arrancadas cocinadas a fuego lento."
  },
  {
    id: 10,
    title: "Fachada & Zona de Atención",
    category: "ambiente",
    src: "/foto_local.jpg",
    desc: "Atención cálida donde cada cliente se siente como en su propia casa."
  }
];

export const MENU_CHAPTERS = [
  {
    id: "01",
    name: "Nuestras Especialidades de Cuy",
    tagline: "El auténtico sabor del cuy asado a la brasa en Catambuco",
    image: "/foto_cuy.jpg",
    items: [
      {
        name: "Cuy Entero Asado",
        mesaPrice: "$75.000",
        llevarPrice: "$80.000",
        desc: "Servido con papas pastusas al vapor, ají de maní casero, crispetas y huevo duro."
      },
      {
        name: "Medio Cuy (1/2)",
        mesaPrice: "$38.000",
        llevarPrice: "$38.000",
        desc: "Porción ideal para 1 a 2 personas con todas sus guarniciones tradicionales."
      },
      {
        name: "Cuarto de Cuy (1/4)",
        mesaPrice: "$20.000",
        llevarPrice: "$20.000",
        desc: "Porción individual con papas al vapor y ají de maní."
      },
      {
        name: "Almuerzo con Cuy",
        mesaPrice: "$35.000",
        llevarPrice: "$35.000",
        desc: "Plato completo con porción de cuy asado, sopa de la casa, arroz y ensalada."
      },
      {
        name: "Mixto: 1/2 Cuy + 2 Fritos",
        mesaPrice: "$58.000",
        llevarPrice: "$58.000",
        desc: "Banquete familiar con medio cuy y dos porciones de frito pastuso."
      },
      {
        name: "Mixto: 1/4 Cuy + 2 Fritos",
        mesaPrice: "$48.000",
        llevarPrice: "$48.000",
        desc: "Combinación perfecta de cuarto de cuy y dos fritos pastusos."
      }
    ]
  },
  {
    id: "02",
    name: "Fin de Semana (Domingos y Festivos)",
    tagline: "El plan perfecto para compartir en familia. Nuestros clásicos para escapar de la rutina.",
    image: "/gallery/delicia_surena_03.jpg",
    items: [
      {
        name: "Frito Pastuso",
        mesaPrice: "$22.000",
        llevarPrice: "$23.500",
        desc: "Carne de cerdo dorada artesanalmente con papas al vapor, crispetas y ají de maní."
      },
      {
        name: "Trucha Fresca Frita",
        mesaPrice: "$22.000",
        llevarPrice: "$23.500",
        desc: "Trucha dorada con limón andino, arroz, fríjoles campesinos y cazuela de sopa."
      },
      {
        name: "Gallina Criolla",
        mesaPrice: "$21.000",
        llevarPrice: "$22.500",
        desc: "Presa cocinada a fuego lento en hogao campesino con arroz y aguacate."
      },
      {
        name: "Churrasco de Pollo",
        mesaPrice: "$21.000",
        llevarPrice: "$22.500",
        desc: "Pechuga asada a la plancha/brasa con papa pastusa y ensalada fresca."
      },
      {
        name: "Costilla",
        mesaPrice: "$15.000",
        llevarPrice: "$16.500",
        desc: "Costilla de cerdo casera dorada con arroz blanco, frijoles y ensalada."
      },
      {
        name: "Chuleta",
        mesaPrice: "$14.000",
        llevarPrice: "$15.500",
        desc: "Corte jugoso apanado o a la plancha con acompañamientos de la casa."
      }
    ]
  },
  {
    id: "03",
    name: "Almuerzos Diarios (Lunes a Sábado)",
    tagline: "Nuestras opciones diarias con la frescura de siempre",
    image: "/gallery/delicia_surena_20.jpg",
    items: [
      {
        name: "Pollo o Cerdo a la plancha / Sudado",
        mesaPrice: "$11.000",
        llevarPrice: "$12.500",
        desc: "Opciones caseras del día preparadas al instante con sopa, arroz y ensalada."
      },
      {
        name: "Chuleta, Bistec, Pollo Broaster, Res, Frito",
        mesaPrice: "$12.000",
        llevarPrice: "$13.500",
        desc: "Variedad de carnes seleccionadas con la sazón y abundancia de Catambuco."
      },
      {
        name: "Costilla, Trucha, Churrasco de Pollo",
        mesaPrice: "$13.000",
        llevarPrice: "$14.500",
        desc: "Nuestros cortes especiales entre semana servidos con sopa del día y guarniciones."
      }
    ]
  },
  {
    id: "04",
    name: "Sopas Tradicionales de la Abuela",
    tagline: "Locro, Cebada, Arrancadas cocinadas a fuego lento en cazuela de barro",
    image: "/gallery/delicia_surena_12.jpg",
    items: [
      {
        name: "Sopa Grande en Cazuela",
        mesaPrice: "$9.000",
        llevarPrice: "$10.000",
        desc: "Porción grande de locro nariñense, sopa de cebada o arrancadas con cilantro fresco."
      },
      {
        name: "Sopa Pequeña en Cazuela",
        mesaPrice: "$6.000",
        llevarPrice: "$7.000",
        desc: "Porción tradicional ideal para acompañar tus platos fuertes."
      },
      {
        name: "Mazamorra con Leche",
        mesaPrice: "$6.000",
        llevarPrice: "$7.000",
        desc: "Maíz tierno cocido lentamente servido con leche fresca campesina y panela."
      },
      {
        name: "Mazamorra sin Leche",
        mesaPrice: "$4.000",
        llevarPrice: "$5.000",
        desc: "La tradicional mazamorra andina pura servida caliente o tibia."
      }
    ]
  },
  {
    id: "05",
    name: "Desayunos Caseros",
    tagline: "Para empezar el día con toda la energía de Nariño",
    image: "/gallery/delicia_surena_26.jpg",
    items: [
      {
        name: "Desayuno con Carne",
        mesaPrice: "$9.000 (L-S)",
        llevarPrice: "$9.500 (D-F)",
        desc: "Carne a la plancha, huevos al gusto, tajada de plátano, pan caliente y café o chocolate."
      },
      {
        name: "Desayuno Ranchero",
        mesaPrice: "$8.500 (L-S)",
        llevarPrice: "$9.000 (D-F)",
        desc: "Huevos rancheros con salchicha o chorizo, tajada, pan y bebida caliente."
      },
      {
        name: "Desayuno Sencillo",
        mesaPrice: "$7.500 (L-S)",
        llevarPrice: "$8.000 (D-F)",
        desc: "Huevos al gusto con tajada de maduro, pan fresco y café de la tierra."
      },
      {
        name: "Huevos, Tajada, Pan y Café",
        mesaPrice: "$7.000",
        llevarPrice: "$7.000",
        desc: "Combinación clásica y ligera para un desayuno reconfortante."
      },
      {
        name: "Cacerola",
        mesaPrice: "$6.000",
        llevarPrice: "$6.000",
        desc: "Huevos fritos o pericos preparados al momento en cacerola."
      }
    ]
  },
  {
    id: "06",
    name: "Bebidas y Antojos",
    tagline: "El acompañamiento perfecto para tu comida",
    image: "/foto_local.jpg",
    items: [
      {
        name: "Jarra de Limonada Natural",
        mesaPrice: "$11.000",
        desc: "Refrescante jarra preparada con limones frescos y panela o azúcar."
      },
      {
        name: "Jugo Natural en Leche / Guanábana",
        mesaPrice: "$7.500 / $8.000",
        desc: "Mora, lulo, mango o guanábana cremosa con leche de campo."
      },
      {
        name: "Coca-Cola / Jugo en Agua",
        mesaPrice: "$4.000 / $6.500",
        desc: "Gaseosa personal bien fría o vaso de jugo de fruta en agua."
      },
      {
        name: "Café con Leche / Chocolate",
        mesaPrice: "$3.500 / $4.500",
        desc: "Café nariñense recién pasado o chocolate espumoso con canela."
      },
      {
        name: "Choclo con Queso Campesino",
        mesaPrice: "$6.000",
        desc: "Mazorca tierna dulce servida con generosa tajada de quesillo de Pasto."
      },
      {
        name: "Patacones (x2) / Papa al Vapor",
        mesaPrice: "$3.000 / $7.000",
        desc: "Porción de patacones crocantes o papas pastusas al vapor con ají."
      },
      {
        name: "Ensalada de Frutas con Helado",
        mesaPrice: "Desde $9.500",
        desc: "Variedad de frutas frescas picadas con bola de helado y crema."
      },
      {
        name: "Oblea con Helado",
        mesaPrice: "$6.500",
        desc: "Oblea artesanal crujiente rellena con arequipe, queso y helado."
      }
    ]
  }
];

export const REVIEWS = [
  {
    name: "Carlos Mario Delgado",
    location: "Turista de Cali",
    rating: 5,
    text: "El mejor cuy asado que he probado en todo Nariño. La piel es súper crocante y la carne muy tierna. El ají de maní y las papas son otro nivel. La atención familiar te hace sentir en casa.",
    date: "Hace 1 semana"
  },
  {
    name: "Dra. Sofía Benavides",
    location: "San Juan de Pasto",
    rating: 5,
    text: "Parada obligatoria cada domingo en Catambuco con la familia. Todo se siente fresco, hecho al momento y en leña de verdad. Se nota el amor y la tradición de la cocina nariñense.",
    date: "Hace 2 semanas"
  },
  {
    name: "Julián E. Narváez",
    location: "Bogotá",
    rating: 5,
    text: "Pedimos por WhatsApp para un almuerzo empresarial y el servicio fue impecable: llegó caliente, bien empacado y las porciones son generosas. ¡100% recomendado!",
    date: "Hace 3 semanas"
  }
];
