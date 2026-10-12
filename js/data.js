/* ============================================
   Datos mockeados - Peluquería Canina
   ============================================ */

// Generador de avatares y placeholders
function getPlaceholder(w, h, text, bg = 'f59e0b', fg = 'ffffff') {
  return `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(text)}&font=poppins`;
}

function getDogImage(seed) {
  // place.dog es un servicio gratuito específico para perros
  // Si falla, devuelve una imagen vacía pero con texto placeholder
  return `https://placedog.net/api/v1/dogs?type=jpg&filename=${seed}.jpg`;
}

const DATA = {
  // Información del negocio
  business: {
    name: "Paw Spa",
    tagline: "Peluquería y Spa Canino",
    phone: "+56 2 2345 6789",
    whatsapp: "+56 9 6123 4567",
    email: "hola@pawspa.cl",
    address: "Avenida Las Mascotas 1234, Santiago, Chile",
    schedule: "Lunes a Sábado: 9:00 - 20:00",
    social: {
      instagram: "@pawspa.santiago",
      facebook: "PawSpaChile",
      tiktok: "@pawspa.cl"
    }
  },

  // Servicios principales
  servicios: [
    {
      icon: "🛁",
      title: "Baño y Secado",
      description: "Baño con champú hipoalergénico, acondicionador y secado profesional con aire templado.",
      duration: "30-45 min",
      desde: 15000
    },
    {
      icon: "✂️",
      title: "Corte de Pelo a Tijera",
      description: "Corte según el estándar de la raza o el estilo personalizado que desees.",
      duration: "60-90 min",
      desde: 22000
    },
    {
      icon: "🐩",
      title: "Corte de Uñas",
      description: "Recorte y limado profesional de uñas para evitar molestias al caminar.",
      duration: "15 min",
      desde: 8000
    },
    {
      icon: "👂",
      title: "Limpieza de Oídos",
      description: "Limpieza profunda del conducto auditivo con productos veterinarios seguros.",
      duration: "15 min",
      desde: 10000
    },
    {
      icon: "🛡️",
      title: "Tratamiento Antipulgas",
      description: "Baño medicado con productos antiparasitarios. Recomendado cada 4-6 semanas.",
      duration: "45 min",
      desde: 22000
    },
    {
      icon: "💆",
      title: "Spa Premium",
      description: "Tratamiento completo: baño, masaje relajante, mascarilla hidratante y aromaterapia.",
      duration: "90-120 min",
      desde: 38000
    },
    {
      icon: "🎨",
      title: "Tinte y Color",
      description: "Coloración temporal con tintes naturales y seguros. ¡Para los más fashionistas!",
      duration: "60 min",
      desde: 25000
    },
    {
      icon: "🪮",
      title: "Deslanado",
      description: "Eliminación del pelo muerto con cardado y stripping. Ideal para razas de doble manto.",
      duration: "60 min",
      desde: 20000
    }
  ],

  // Precios detallados
  precios: {
    banio: {
      titulo: "Baño y Secado",
      pequena: 15000,
      mediana: 22000,
      grande: 28000,
      gigante: 35000
    },
    corte: {
      titulo: "Corte Completo",
      pequena: 22000,
      mediana: 30000,
      grande: 40000,
      gigante: 50000
    },
    spa: {
      titulo: "Spa Premium",
      pequena: 38000,
      mediana: 52000,
      grande: 65000,
      gigante: 80000
    },
    paquetes: [
      { nombre: "Pack Básico", descripcion: "Baño + corte de uñas + limpieza de oídos", precio: 28000, descuento: "Ahorra 10%" },
      { nombre: "Pack Completo", descripcion: "Spa + corte estilizado + perfume", precio: 58000, descuento: "Ahorra 20%" },
      { nombre: "Pack Mensual", descripcion: "4 visitas de baño al mes", precio: 80000, descuento: "Ahorra 25%" }
    ],
    suscripciones: [
      { plan: "Mini", visitas: "2 visitas/mes", precio: 28000 },
      { plan: "Standard", visitas: "4 visitas/mes", precio: 45000 },
      { plan: "VIP", visitas: "Ilimitado", precio: 99000 }
    ]
  },

  // Tallas
  tamanios: [
    { label: "Pequeño", desc: "Hasta 10 kg", icon: "🐕" },
    { label: "Mediano", desc: "10 - 20 kg", icon: "🦮" },
    { label: "Grande", desc: "20 - 35 kg", icon: "🐕‍🦺" },
    { label: "Gigante", desc: "Más de 35 kg", icon: "🐶" }
  ],

  // Galería (URLs robustas con fallbacks)
  // Usamos place.dog que es gratuito y siempre devuelve imágenes de perros
  galeria: [
    { url: "https://placedog.net/300/300?id=1", cat: "corte", alt: "Perro siendo cepillado" },
    { url: "https://placedog.net/300/300?id=2", cat: "banio", alt: "Perro en jacuzzi" },
    { url: "https://placedog.net/300/300?id=3", cat: "corte", alt: "Corte de pelo canino" },
    { url: "https://placedog.net/300/300?id=4", cat: "banio", alt: "Baño de cachorro" },
    { url: "https://placedog.net/300/300?id=5", cat: "spa", alt: "Spa canino" },
    { url: "https://placedog.net/300/300?id=6", cat: "antes-despues", alt: "Antes y después" },
    { url: "https://placedog.net/300/300?id=7", cat: "corte", alt: "Yorkshire terrier" },
    { url: "https://placedog.net/300/300?id=8", cat: "banio", alt: "Secado profesional" },
    { url: "https://placedog.net/300/300?id=9", cat: "spa", alt: "Mascarilla hidratante" },
    { url: "https://placedog.net/300/300?id=10", cat: "antes-despues", alt: "Transformación increíble" },
    { url: "https://placedog.net/300/300?id=11", cat: "corte", alt: "Pomerania estilizado" },
    { url: "https://placedog.net/300/300?id=12", cat: "banio", alt: "Perro feliz tras baño" }
  ],

  // Equipo - placehold.co con iniciales
  equipo: [
    { nombre: "Laura García", rol: "Groomer Senior", experiencia: "8 años", img: getPlaceholder(400, 400, "LG", "f59e0b", "ffffff") },
    { nombre: "Carlos Méndez", rol: "Especialista Canino", experiencia: "5 años", img: getPlaceholder(400, 400, "CM", "3b82f6", "ffffff") },
    { nombre: "Sara Ruiz", rol: "Estilista y Baño", experiencia: "6 años", img: getPlaceholder(400, 400, "SR", "10b981", "ffffff") },
    { nombre: "Diego Torres", rol: "Adiestrador", experiencia: "10 años", img: getPlaceholder(400, 400, "DT", "8b5cf6", "ffffff") }
  ],

  // Testimonios - avatares
  testimonios: [
    {
      nombre: "María González",
      mascota: "Luna (Golden Retriever)",
      texto: "¡Increíble! Luna siempre sale feliz y olía espectacular. El equipo es muy profesional y cariñoso con ella. 100% recomendable.",
      estrellas: 5,
      img: getPlaceholder(100, 100, "MG", "ec4899", "ffffff")
    },
    {
      nombre: "Roberto Sánchez",
      mascota: "Max (Yorkshire)",
      texto: "Llevo 3 años trayendo a Max aquí y nunca me han decepcionado. El corte siempre perfecto y a buen precio.",
      estrellas: 5,
      img: getPlaceholder(100, 100, "RS", "06b6d4", "ffffff")
    },
    {
      nombre: "Patricia López",
      mascota: "Coco (French Poodle)",
      texto: "El spa premium es una maravilla. Coco estaba muy relajado tras la sesión. Volveremos sin duda.",
      estrellas: 5,
      img: getPlaceholder(100, 100, "PL", "f97316", "ffffff")
    },
    {
      nombre: "Javier Romero",
      mascota: "Thor (Husky)",
      texto: "Muy buen trato con perros grandes. Thor tiene miedo y aquí lo trataron con muchísima paciencia. ¡Gracias!",
      estrellas: 5,
      img: getPlaceholder(100, 100, "JR", "14b8a6", "ffffff")
    }
  ],

  // Estadísticas
  stats: [
    { numero: 1250, label: "Mascotas atendidas", suffix: "+" },
    { numero: 15, label: "Años de experiencia", suffix: "" },
    { numero: 8, label: "Profesionales", suffix: "" },
    { numero: 4.9, label: "Valoración media", suffix: "★" }
  ],

  // Clases de adiestramiento
  clases: [
    {
      nivel: "Básico",
      color: "green",
      descripcion: "Para cachorros de 2 a 6 meses. Aprende los comandos esenciales.",
      horarios: [
        { dia: "Lunes y Miércoles", hora: "17:00 - 18:00" },
        { dia: "Sábados", hora: "11:00 - 12:00" }
      ],
      precio: "$45.000 CLP / mes"
    },
    {
      nivel: "Intermedio",
      color: "blue",
      descripcion: "Para perros de 6 meses en adelante. Refuerza la obediencia y socialización.",
      horarios: [
        { dia: "Martes y Jueves", hora: "18:00 - 19:00" },
        { dia: "Sábados", hora: "12:00 - 13:00" }
      ],
      precio: "$55.000 CLP / mes"
    },
    {
      nivel: "Avanzado",
      color: "purple",
      descripcion: "Trucos complejos, agility y habilidades para perros deportistas.",
      horarios: [
        { dia: "Viernes", hora: "17:00 - 18:30" },
        { dia: "Domingos", hora: "10:00 - 11:30" }
      ],
      precio: "$70.000 CLP / mes"
    }
  ],

  // FAQs
  faqs: [
    {
      pregunta: "¿Necesito cita previa?",
      respuesta: "Sí, trabajamos con cita previa para garantizar la mejor atención. Puedes reservar a través de nuestra web, teléfono o WhatsApp."
    },
    {
      pregunta: "¿Cuánto tiempo dura una sesión completa?",
      respuesta: "Entre 60 y 120 minutos dependiendo del tamaño del perro, el tipo de manto y los servicios contratados. Te informaremos al reservar."
    },
    {
      pregunta: "¿Qué productos utilizáis?",
      respuesta: "Trabajamos exclusivamente con champús hipoalergénicos, productos naturales y cosmética veterinaria de primera calidad."
    },
    {
      pregunta: "¿Atendéis a perros nerviosos o agresivos?",
      respuesta: "Por supuesto. Nuestro equipo está capacitado para manejar todo tipo de temperamentos y trabajamos con técnicas de manejo sin estrés."
    },
    {
      pregunta: "¿Puedo esperar mientras le atienden?",
      respuesta: "Sí, contamos con zona de espera cómoda con WiFi, café y televisor. También puedes dejar a tu mascota y recogerla después."
    },
    {
      pregunta: "¿Ofrecéis servicio a domicilio?",
      respuesta: "Disponemos de servicio de recogida y entrega a domicilio en zonas cercanas. Consulta disponibilidad y tarifas."
    }
  ],

  // Hitos / Timeline
  hitos: [
    { anio: "2009", titulo: "El comienzo", descripcion: "Abrimos nuestras puertas en Santiago con la ilusión de cuidar a las mascotas." },
    { anio: "2013", titulo: "Ampliación", descripcion: "Incorporamos servicio de spa y productos premium especializados." },
    { anio: "2017", titulo: "Reconocimiento", descripcion: "Premio al mejor centro de estética canina de la Región Metropolitana." },
    { anio: "2020", titulo: "Adiestramiento", descripcion: "Ampliamos servicios con clases de adiestramiento y educación canina." },
    { anio: "2024", titulo: "Renovación", descripcion: "Reformamos nuestras instalaciones con tecnología y herramientas de última generación." }
  ],

  // Valores
  valores: [
    { icon: "❤️", titulo: "Amor Animal", desc: "Tratamos a cada mascota como si fuera nuestra propia familia." },
    { icon: "🌿", titulo: "Productos Naturales", desc: "Utilizamos cosmética ecológica y respetuosa con su piel." },
    { icon: "🎓", titulo: "Profesionalidad", desc: "Equipo en continua formación, certificados y con experiencia." },
    { icon: "🎉", titulo: "Estrés Cero", desc: "Ambiente relajado, paciencia infinita y técnicas libres de estrés." }
  ]
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.DATA = DATA;
}
