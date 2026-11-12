export const WHATSAPP_NUMBER = "573163508206";
export const WHATSAPP_DEFAULT_MSG = "¡Hola Restaurante Delicia Sureña! Quisiera consultar la carta y hacer un pedido.";

export const SIGNATURE_DISHES = [
  {
    id: "cuy-asado",
    title: "Cuy Asado Tradicional",
    badge: "Plato Insignia",
    price: "$76.000",
    description: "Cuy de selección marinado con hierbas de huerta nariñense, asado a fuego lento de leña hasta lograr una piel crocante y carne tierna. Acompañado de papas pastusas al vapor con ají de maní casero, crispetas y huevo duro.",
    image: "/foto_cuy.jpg",
    tags: ["A la leña", "Catambuco clásico", "Para compartir"],
    orderMsg: "Hola Delicia Sureña, me gustaría pedir un Cuy Asado Tradicional de $76.000 COP."
  },
  {
    id: "costillas-carbon",
    title: "Costilla Ahumada al Fogón",
    badge: "Bestseller",
    price: "$38.000",
    description: "Tiernas costillas de cerdo campesino glaseadas con aliño tradicional de la casa y doradas a la brasa. Servidas con arroz blanco, frijoles caseros y ensalada fresca.",
    image: "/gallery/delicia_surena_61.jpg",
    tags: ["Ahumado natural", "Porción abundante", "Receta propia"],
    orderMsg: "Hola Delicia Sureña, quiero pedir una Costilla Ahumada al Fogón."
  },
  {
    id: "trucha-arcoiris",
    title: "Trucha Dorada con Cazuela",
    badge: "Especialidad",
    price: "$32.000",
    description: "Trucha fresca frita al punto dorado crocante con limón andino, arroz blanco, fríjoles campesinos con papa y cazuela de sopa tradicional en barro.",
    image: "/gallery/delicia_surena_28.jpg",
    tags: ["Trucha fresca", "Incluye cazuela", "Sazón sureña"],
    orderMsg: "Hola Delicia Sureña, me gustaría pedir la Trucha Dorada con Cazuela."
  },
  {
    id: "gallina-estofada",
    title: "Gallina Criolla en Hogao",
    badge: "Tradicional",
    price: "$30.000",
    description: "Presa de gallina de campo cocinada a fuego lento en hogao campesino de tomate y cebolla, servida con arroz blanco, ensalada fresca y medio aguacate.",
    image: "/gallery/delicia_surena_17.jpg",
    tags: ["Gallina de campo", "Hogao casero", "Aguacate fresco"],
    orderMsg: "Hola Delicia Sureña, me interesa ordenar la Gallina Criolla en Hogao."
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
    title: "Costilla de Cerdo Ahumada al Fogón",
    category: "platos",
    src: "/gallery/delicia_surena_61.jpg",
    desc: "Glaseado artesanal con arroz, frijoles y ensalada fresca."
  },
  {
    id: 3,
    title: "Trucha Dorada con Cazuela de Barro",
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
    title: "Plato Típico Sureño con Crispetas y Papas",
    category: "platos",
    src: "/gallery/delicia_surena_03.jpg",
    desc: "La tradicional combinación nariñense con cazuela y papas cocidas."
  },
  {
    id: 7,
    title: "Filete Asado a la Brasa con Papa Pastusa",
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
    title: "Cazuela Individual de Locro Nariñense",
    category: "sopas",
    src: "/gallery/delicia_surena_24.jpg",
    desc: "Sopa espesa con cilantro fresco y sazón de hogar."
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
    name: "Brasas & Asados",
    tagline: "El sabor inconfundible del carbón y la leña",
    image: "/foto_cuy.jpg",
    items: [
      {
        name: "Cuy Asado Entero",
        price: "$76.000",
        desc: "Servido con papas pastusas al vapor, ají de maní, crispetas y huevo duro."
      },
      {
        name: "Medio Cuy Asado",
        price: "$40.000",
        desc: "Ideal para 1 a 2 personas, servido con todas sus guarniciones tradicionales."
      },
      {
        name: "Costillas Ahumadas al Fogón",
        price: "$38.000",
        desc: "Costillas de cerdo campesino glaseadas con aliño de la casa y frijoles."
      },
      {
        name: "Filete Asado a la Brasa con Papa Pastusa",
        price: "$28.000",
        desc: "Corte a la brasa con papa pastusa al vapor, arroz y ají casero."
      }
    ]
  },
  {
    id: "02",
    name: "Sopas & Cazuelas",
    tagline: "Recetas de abuela cocinadas con paciencia y leña en cazuela de barro",
    image: "/gallery/delicia_surena_12.jpg",
    items: [
      {
        name: "Locro Nariñense en Cazuela de Barro",
        price: "$16.000",
        desc: "Sopa tradicional espesada con papa pastusa y hierbas aromáticas de huerta."
      },
      {
        name: "Sancocho de Gallina Criolla Campesina",
        price: "$28.000",
        desc: "Porción generosa de gallina, arroz, aguacate, plátano y consomé aromático."
      },
      {
        name: "Trucha Dorada con Cazuela Tradicional",
        price: "$32.000",
        desc: "Trucha frita al limón con arroz, frijoles y cazuela de sopa en barro."
      },
      {
        name: "Gallina Criolla Estofada en Hogao",
        price: "$30.000",
        desc: "Presa tierna en hogao casero con aguacate fresco y arroz blanco."
      }
    ]
  },
  {
    id: "03",
    name: "Entradas & Picadas",
    tagline: "Para compartir y saborear cada momento",
    image: "/gallery/delicia_surena_03.jpg",
    items: [
      {
        name: "Porción de Empanadas de Añejo (6 uds)",
        price: "$15.000",
        desc: "Masa fermentada de maíz tradicional rellenas de guiso sureño y ají de maní."
      },
      {
        name: "Plato Típico Sureño con Crispetas y Papas",
        price: "$25.000",
        desc: "Papas al vapor, crispetas frescas, empanadas y ají de maní."
      },
      {
        name: "Porción de Papas al Vapor con Ají de Maní",
        price: "$10.000",
        desc: "Papa pastusa tierna bañada en el auténtico ají de maní de Catambuco."
      },
      {
        name: "Quimbolitos Tradicionales (2 uds)",
        price: "$8.000",
        desc: "Envueltos al vapor en hoja de achira, esponjosos y dulces con uvas pasas."
      }
    ]
  },
  {
    id: "04",
    name: "Bebidas & Postres",
    tagline: "El cierre perfecto con la dulzura de nuestra tierra",
    image: "/gallery/delicia_surena_26.jpg",
    items: [
      {
        name: "Hervido Nariñense Tradicional (Mora / Lulo / Maracuyá)",
        price: "$8.000",
        desc: "Bebida caliente típica a base de jugo de fruta natural con licor anisado suave."
      },
      {
        name: "Jarras de Jugo Natural en Leche o Agua (1.5L)",
        price: "$16.000",
        desc: "Mora silvestre, lulo, guanábana o mango fresco."
      },
      {
        name: "Dulce de Calabaza & Quesillo de Pasto",
        price: "$9.000",
        desc: "Dulce ancestral en almíbar de panela acompañado de auténtico queso sureño."
      },
      {
        name: "Postre de Chilacuán de la Huerta",
        price: "$8.500",
        desc: "Fruta andina perfumada con canela y clavo de olor."
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
