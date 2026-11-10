/**
 * Todos los textos y datos del sitio.
 *
 * Editá este archivo para cambiar cualquier contenido: los componentes leen
 * todo desde acá. Después de guardar, el sitio se actualiza solo si está
 * corriendo `npm run dev`.
 *
 * Si dejás vacío ("") un enlace opcional (cv, repositorio) o una lista
 * opcional (metricas), esa parte no se muestra.
 *
 * La foto y el CV se buscan en la carpeta "public" al compilar el sitio:
 * si el archivo no está, la foto se reemplaza por las iniciales y el botón
 * del CV se oculta. Apenas copies los archivos, aparecen solos.
 */

export const site = {
  // ---------------------------------------------------------------------------
  // Datos generales
  // ---------------------------------------------------------------------------
  nombre: "Micaela Nuñez",
  iniciales: "MN",
  titular:
    "Asesora comercial | Ventas y atención al cliente | Fidelización y gestión de cartera",
  ubicacion: "Mar del Plata, Argentina",
  disponibilidad: "Disponible para trabajo remoto",

  // Dirección pública del sitio, por ejemplo "https://micaelanunez.vercel.app".
  // Se usa para que la imagen de vista previa funcione al compartir el enlace.
  // Si la dejás vacía, en Vercel se usa automáticamente la dirección del proyecto.
  url: "",

  // Texto que aparece en la pestaña del navegador y al compartir el enlace
  // en LinkedIn, WhatsApp u otras redes.
  seo: {
    titulo: "Micaela Nuñez | Asesora comercial: ventas y atención al cliente",
    descripcion:
      "Asesora comercial de Mar del Plata, Argentina. Ventas, atención al cliente y redes sociales orientadas a ventas. Disponible para trabajo remoto.",
    // Descripción de la imagen de vista previa, para lectores de pantalla.
    imagenAlt:
      "Tarjeta de presentación de Micaela Nuñez, asesora comercial: ventas y atención al cliente.",
  },

  // Foto de la sección de inicio. Copiala a "public" con este nombre exacto.
  foto: {
    archivo: "/foto-micaela.jpg",
    alt: "Foto de Micaela Nuñez",
  },

  // ---------------------------------------------------------------------------
  // Contacto y enlaces
  // ---------------------------------------------------------------------------
  contacto: {
    email: "micamicmacher@gmail.com",
    whatsappVisible: "+54 9 299 586-0572",
    // Solo números, con código de país, sin "+" ni espacios.
    whatsappNumero: "5492995860572",
    // Mensaje que aparece escrito cuando alguien abre WhatsApp desde el sitio.
    whatsappMensaje: "Hola Micaela, vi tu portfolio y me gustaría contactarte",
    // Texto del botón flotante para lectores de pantalla.
    whatsappFlotante: "Escribirle a Micaela por WhatsApp",
    linkedin: "https://www.linkedin.com/in/micaela-nuñez-1094b237a/",
  },

  // Ruta al CV. Copiá tu PDF a la carpeta "public" con este nombre exacto.
  // Si el archivo no está o dejás esto vacío (""), el botón no se muestra.
  cv: "/CV-Micaela-Nunez.pdf",

  // URL del repositorio con el código del sitio (por ejemplo, en GitHub).
  // Si lo dejás vacío (""), el enlace "Ver el código" no se muestra.
  repositorio: "https://github.com/micamicmacher/portfolio-micaela",

  // ---------------------------------------------------------------------------
  // Menú
  // ---------------------------------------------------------------------------
  menu: [
    { id: "que-hago", texto: "Qué hago" },
    { id: "lockas", texto: "Caso destacado" },
    { id: "experiencia", texto: "Experiencia" },
    { id: "este-sitio", texto: "Este sitio" },
    { id: "contacto", texto: "Contacto" },
  ],

  // ---------------------------------------------------------------------------
  // 1. Inicio
  // ---------------------------------------------------------------------------
  inicio: {
    presentacion:
      "Acompaño a cada cliente desde la primera consulta hasta la postventa: escucho, asesoro y cierro. Tengo experiencia en ventas por objetivos, atención en local y venta por redes sociales con mi propio emprendimiento.",
    botones: {
      whatsapp: "Escribime por WhatsApp",
      linkedin: "Ver LinkedIn",
      cv: "Descargar CV",
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Qué hago
  // ---------------------------------------------------------------------------
  queHago: {
    titulo: "Qué hago",
    bajada: "Tres áreas en las que puedo sumar a tu equipo, de forma remota.",
    bloques: [
      {
        titulo: "Ventas y cierre",
        texto:
          "Busco clientes, sostengo el contacto y llevo la conversación hasta la venta.",
        puntos: [
          "Prospección y captación de clientes",
          "Seguimiento de cartera",
          "Cierre de ventas por objetivos",
        ],
      },
      {
        titulo: "Atención al cliente y postventa",
        texto:
          "Atiendo con paciencia también en los momentos de más demanda, y sigo presente después de la compra.",
        puntos: [
          "Atención en local y en alta demanda",
          "Caja, cobros y facturación",
          "Seguimiento y postventa",
        ],
      },
      {
        titulo: "Redes sociales orientadas a ventas",
        texto:
          "Uso las redes como canal de venta: contenido, consultas y pedidos en un mismo circuito.",
        puntos: [
          "Venta y asesoramiento por redes",
          "Creación de contenido",
          "Gestión de pedidos, cobros y stock",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Caso destacado: Lockas Lencería
  // ---------------------------------------------------------------------------
  lockas: {
    etiqueta: "Caso destacado",
    nombre: "Lockas Lencería",
    periodo: "2020 a 2025",
    rol: "Fundadora y gestora integral",
    queEra: {
      titulo: "Qué era",
      texto:
        "Mi emprendimiento propio de lencería, que gestioné de punta a punta durante cinco años. La venta y el asesoramiento a clientas los hacía por redes sociales.",
    },
    queHacia: {
      titulo: "Qué hacía yo",
      puntos: [
        "Venta y asesoramiento a clientas por redes sociales",
        "Creación de contenido para las redes",
        "Gestión de pedidos y cobros",
        "Control de stock",
        "Postventa",
      ],
    },
    queAprendi: {
      titulo: "Qué aprendí",
      puntos: [
        "Que una venta por redes se construye antes del primer mensaje, con contenido constante y respuestas rápidas.",
        "A ordenar pedidos, cobros y stock para que nada se pierda en el camino.",
        "Que la postventa es lo que hace que una clienta vuelva.",
      ],
    },
    // Cargá acá números reales si querés mostrarlos, por ejemplo:
    // { valor: "5 años", detalle: "gestionando el emprendimiento" }
    // Mientras la lista esté vacía, este bloque no aparece.
    metricas: [] as { valor: string; detalle: string }[],
  },

  // ---------------------------------------------------------------------------
  // 4. Experiencia
  // ---------------------------------------------------------------------------
  experiencia: {
    titulo: "Experiencia",
    // Se muestran en este orden, de arriba hacia abajo.
    puestos: [
      {
        cargo: "Asesora comercial",
        empresa: "Autocrédito",
        periodo: "Mayo 2026 a la actualidad",
        tareas: [
          "Prospección y captación de clientes",
          "Seguimiento de cartera",
          "Cierre de ventas por objetivos",
        ],
      },
      {
        cargo: "Fundadora y gestora integral",
        empresa: "Lockas Lencería",
        periodo: "2020 a 2025",
        tareas: [
          "Emprendimiento propio",
          "Venta y asesoramiento por redes sociales",
          "Creación de contenido",
          "Pedidos, cobros, stock y postventa",
        ],
      },
      {
        cargo: "Encargada y atención al cliente",
        empresa: "Maximercado AYM",
        periodo: "2023 a 2024",
        tareas: [
          "Coordinación del equipo y del local",
          "Caja y facturación",
          "Control de stock",
        ],
      },
      {
        cargo: "Camarera",
        empresa: "Hops de la Galería",
        periodo: "2025",
        tareas: [
          "Atención en alta demanda",
          "Coordinación con cocina y barra",
        ],
      },
      {
        cargo: "Vendedora",
        empresa: "Puebla Style",
        periodo: "2021",
        tareas: ["Venta de indumentaria", "Caja", "Vidrieras y stock"],
      },
    ],
    formacion: {
      titulo: "Formación",
      items: [
        {
          titulo: "Bachiller con Orientación en Sociales",
          institucion: "CPEM N°23",
          periodo: "2018",
        },
      ],
    },
    referencias: "Referencias laborales disponibles a pedido.",
  },

  // ---------------------------------------------------------------------------
  // 5. Cómo hice este sitio
  // ---------------------------------------------------------------------------
  esteSitio: {
    titulo: "Cómo hice este sitio",
    parrafos: [
      "Este sitio lo construí yo, con Claude Code, una herramienta de inteligencia artificial. No soy programadora y no escribí el código a mano: describí en lenguaje natural lo que quería, como las secciones, los textos, el estilo y qué tenía que entender alguien en los primeros segundos.",
      "Después revisé cada versión, pedí cambios y ajusté hasta que quedó como lo imaginaba. A esta forma de trabajar se la conoce como vibe coding.",
    ],
    queMuestraTitulo: "Qué muestra esto de cómo trabajo",
    queMuestra: [
      "Me animo a aprender herramientas nuevas y las uso para resolver algo concreto.",
      "Sé explicar con claridad lo que necesito, igual que lo hago con clientes y equipos.",
      "No me quedo con la primera versión: reviso, pruebo y corrijo hasta que está bien.",
    ],
    enlaceCodigo: "Ver el código",
  },

  // ---------------------------------------------------------------------------
  // 6. Contacto
  // ---------------------------------------------------------------------------
  contactoSeccion: {
    titulo: "Contacto",
    bajada:
      "Si buscás a alguien para ventas, atención al cliente o redes sociales, escribime. Respondo por cualquiera de estos medios.",
  },

  pie: "Sitio hecho con Claude Code.",
};

export type Site = typeof site;
