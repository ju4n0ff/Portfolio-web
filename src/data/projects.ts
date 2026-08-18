import raymiImg from "../assets/Raymi.png";
import cinescopeImg from "../assets/Cinescope.png";
import calculadoraImg from "../assets/Calculadora.png";

export interface Project {
  id: string;
  name: string;
  description: { es: string; en: string };
  tags: string[];
  github: string;
  demo: string;
  image: string;
  imageAlt: { es: string; en: string };
}

export const projects: Project[] = [
  {
    id: "raymi",
    name: "RAYMI",
    image: raymiImg,
    imageAlt: {
      es: "Vista previa del sitio web de RAYMI, portafolio de fotografía peruana",
      en: "Preview of the RAYMI website, a Peruvian photography portfolio",
    },
    description: {
      es: "La vitrina digital de un fotógrafo peruano. Una página que transmite calidez y profesionalismo, donde las imágenes hablan solas: retratos urbanos, bautizos, paisajes, maternidad, motos en acción. Con un solo vistazo el visitante entiende el estilo, servicios y precios, y puede contactar directamente.",
      en: "The digital showcase of a Peruvian photographer. A page that feels warm and professional, where images speak for themselves: urban portraits, baptisms, landscapes, motherhood, motorcycles in motion. At a glance, visitors understand the style, services and pricing, and can reach out directly.",
    },
    tags: ["React 18", "Vite 5", "EmailJS", "TailwindCSS", "Responsive"],
    github: "https://github.com/ju4n0ff/raymi",
    demo: "https://raymi.vercel.app/",
  },
  {
    id: "cinescope",
    name: "CINESCOPE",
    image: cinescopeImg,
    imageAlt: {
      es: "Vista previa de CINESCOPE, plataforma de películas y series",
      en: "Preview of CINESCOPE, a movies and series platform",
    },
    description: {
      es: "Plataforma para descubrir y opinar sobre películas y series. Los usuarios navegan el catálogo por género, ven detalles, califican con estrellas, escriben reseñas, dan like/dislike, comentan y guardan favoritos. Incluye registro con verificación por correo, perfil con actividad y panel administrativo para gestionar catálogo y moderar reseñas. Diseño responsive con carrusel de trailers.",
      en: "A platform to discover and review films and series. Users browse the catalog by genre, view details, rate with stars, write reviews, like/dislike, comment, and save favorites. Includes email-verified sign-up, an activity profile, and an admin panel to manage the catalog and moderate reviews. Responsive design with a trailer carousel.",
    },
    tags: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "Supabase", "Swiper"],
    github: "https://github.com/ju4n0ff/peliculasWeb",
    demo: "https://peliculas-web-tau.vercel.app/",
  },
  {
    id: "calculadora",
    name: "CALCULADORA",
    image: calculadoraImg,
    imageAlt: {
      es: "Vista previa de la Calculadora de huella de carbono",
      en: "Preview of the carbon footprint calculator",
    },
    description: {
      es: "Calculadora de huella de carbono por consumo eléctrico. Los clientes se registran, ingresan sus artefactos eléctricos y la calculadora estima las emisiones de CO₂. Permite simular cambios, ver historial de consumo, gestionar reclamos y solicitar nuevos suministros. Los administradores tienen panel para gestionar clientes, tarifas, reclamos y reportes consolidados con gráficos Chart.js.",
      en: "A carbon footprint calculator for electricity consumption. Clients register, log their electrical appliances, and the calculator estimates CO₂ emissions. It lets them simulate changes, review consumption history, manage claims, and request new supplies. Admins get a panel to manage clients, tariffs, claims, and consolidated reports with Chart.js charts.",
    },
    tags: ["Spring Boot", "React 19", "MySQL", "JPA/Hibernate", "Chart.js", "Maven"],
    github: "https://github.com/ju4n0ff/Calculadora-de-huella-de-carbono",
    demo: "",
  },
];