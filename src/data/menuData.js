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
    title: "Costillas Ahumadas al Fogón",
    badge: "Bestseller",
    price: "$38.000",
    description: "Tiernas costillas de cerdo campesino glaseadas con aliño tradicional de la casa y doradas a la brasa. Servidas con papa criolla crocante, ensalada fresca y ají criollo.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Ahumado natural", "Porción abundante"],
    orderMsg: "Hola Delicia Sureña, quiero pedir unas Costillas Ahumadas al Fogón."
  },
  {
    id: "sancocho-gallina",
    title: "Sancocho de Gallina Criolla",
    badge: "Tradicional",
    price: "$28.000",
    description: "Hervido lentamente en olla de barro al calor de la leña con gallina de campo, plátano verde, yuca suave, mazorca dulce y picadillo de cilantro y cebollita sureña.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    tags: ["Cocinado en leña", "Reconfortante"],
    orderMsg: "Hola Delicia Sureña, me gustaría ordenar un Sancocho de Gallina Criolla."
  },
  {
    id: "fritada-pastusa",
    title: "Fritada Nariñense & Empanadas",
    badge: "Favorito de la Casa",
    price: "$32.000",
    description: "Trozos de cerdo dorados en su propia manteca artesanal con tostado nariñense, papas cocidas, choclo tierno y empanadas de añejo con abundante ají de maní.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    tags: ["Crujiente", "Sabor de fiesta"],
    orderMsg: "Hola Delicia Sureña, me interesa ordenar la Fritada Nariñense con empanadas."
  }
];

export const MENU_CHAPTERS = [
  {
    id: "01",
    name: "Brasas & Asados",
    tagline: "El sabor inconfundible del carbón y la leña",
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
        name: "Churrasco al Carbón (350g)",
        price: "$34.000",
        desc: "Corte jugoso a la brasa con papas a la francesa, arepa campesina y ensalada."
      },
      {
        name: "Lomo de Cerdo Asado a la Brasa",
        price: "$29.000",
        desc: "Filete marinado con adobo casero nariñense y papas criollas doradas."
      }
    ]
  },
  {
    id: "02",
    name: "Sopas & Platos Típicos",
    tagline: "Recetas de abuela cocinadas con paciencia y amor",
    items: [
      {
        name: "Sancocho de Gallina Criolla Campesina",
        price: "$28.000",
        desc: "Porción generosa de gallina, arroz, aguacate, plátano y consomé aromático."
      },
      {
        name: "Fritada Tradicional de Catambuco",
        price: "$32.000",
        desc: "Costilla y pulpa de cerdo, choclo desgranado, tostado y ají de maní."
      },
      {
        name: "Trucha Arcoíris Frita o al Ajillo",
        price: "$32.000",
        desc: "Fresca de las lagunas nariñenses, patacón crocante y ensalada verde."
      },
      {
        name: "Caldo de Costilla con Papa Pastusa",
        price: "$18.000",
        desc: "Tradicional de las mañanas andinas con cilantro fresco y arepa caliente."
      }
    ]
  },
  {
    id: "03",
    name: "Entradas & Picadas",
    tagline: "Para compartir y saborear cada momento",
    items: [
      {
        name: "Porción de Empanadas de Añejo (6 uds)",
        price: "$15.000",
        desc: "Masa fermentada de maíz tradicional rellenas de guiso sureño y ají de maní."
      },
      {
        name: "Picada Delicia Sureña (4 personas)",
        price: "$65.000",
        desc: "Chicharrón carnudo, costillitas, longaniza artesanal, papas criollas y empanaditas."
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
