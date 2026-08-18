export type Lang = "es" | "en";

export interface ExperienceItem {
  period: string;
  title: string;
  text: string;
}

export interface Translation {
  langLabel: string;
  nav: {
    inicio: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    role: string;
    roleAccent: string;
    lema: string;
    cta: string;
    ctaSecondary: string;
    available: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    stats: {
      projects: { value: string; label: string };
      years: { value: string; label: string };
      curiosity: { value: string; label: string };
    };
    portraitTag: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    hint: string;
    categories: {
      frontend: { name: string; hint: string };
      backend: { name: string; hint: string };
      tools: { name: string; hint: string };
      mindset: { name: string; hint: string };
    };
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    live: string;
    code: string;
    year: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailCta: string;
    social: string;
    location: string;
  };
  footer: {
    madeWith: string;
  };
}

export const translations: Record<Lang, Translation> = {
  es: {
    langLabel: "EN",
    nav: {
      inicio: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      role: "Full-Stack",
      roleAccent: "Developer",
      lema: "",
      cta: "Ver proyectos",
      ctaSecondary: "Contáctame",
      available: "Disponible para oportunidades",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "La curiosidad de desarmar, el oficio de construir.",
      p1: "Mi forma de aprender siempre ha partido de la curiosidad: entender cómo funcionan las cosas, desarmarlas, probarlas y luego intentar construir algo propio. Con el tiempo, esa curiosidad se convirtió en una forma de trabajar: aprender haciendo, experimentar con nuevas tecnologías y buscar soluciones que no solo funcionen, sino que tengan sentido para quien las utiliza.",
      p2: "Todavía estoy construyendo mi camino profesional, y precisamente por eso cada proyecto representa una oportunidad para aprender, equivocarme, mejorar y llevar una idea un poco más lejos que la anterior.",
      p3: "Cuando no estoy programando, simplemente intento no pasar todo el tiempo frente a una pantalla. Me gusta correr, escuchar música, el café, aprender cosas nuevas y conocer lugares y personas.",
      stats: {
        projects: { value: "7+", label: "proyectos construidos" },
        years: { value: "3+", label: "años aprendiendo" },
        curiosity: { value: "∞", label: "curiosidad" },
      },
      portraitTag: "estudiante de Ingeniería de Sistemas",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Herramientas con las que pienso.",
      subtitle: "Un stack construido sobre bases sólidas y una mentalidad que siempre busca aprender más.",
      hint: "Arrastra para girar 360° · rueda para zoom · doble clic para centrar",
      categories: {
        frontend: { name: "Frontend", hint: "Interfaces vivas y responsivas" },
        backend: { name: "Backend", hint: "Datos y lógica del servidor" },
        tools: { name: "Herramientas", hint: "Mi flujo de trabajo" },
        mindset: { name: "Mentalidad", hint: "Cómo abordo los problemas" },
      },
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Ideas hechas experiencia.",
      subtitle: "Tres proyectos reales, de principio a fin: diseño, código y despliegue.",
      live: "Demo en vivo",
      code: "Ver código",
      year: "Proyecto",
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Una línea de tiempo en construcción.",
      subtitle: "Cada etapa dejó una base nueva sobre la que sigo construyendo.",
      items: [
        {
          period: "2022",
          title: "Java & Lógica de Programación",
          text: "Programación orientada a objetos, algoritmos y pensamiento computacional.",
        },
        {
          period: "2022–2023",
          title: "Bases de Datos & Backend",
          text: "PostgreSQL, MongoDB, MySQL; modelado de datos y consultas SQL.",
        },
        {
          period: "2023",
          title: "Tecnologías Web",
          text: "JavaScript, HTML, CSS, Bootstrap; primeros sitios interactivos y responsivos.",
        },
        {
          period: "2024",
          title: "Desarrollo Full-Stack",
          text: "Spring Boot para APIs REST; React y Angular para frontends modernos; aplicaciones completas de principio a fin.",
        },
        {
          period: "2024–Presente",
          title: "Ingeniería de Sistemas & Freelance",
          text: "Arquitectura de software, diseño de sistemas y aplicaciones de producción para clientes reales.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo memorable.",
      subtitle: "¿Tienes un proyecto, una idea o simplemente quieres hablar de tecnología? Mi bandeja de entrada está abierta.",
      emailCta: "Escríbeme",
      social: "Encuéntrame en",
      location: "Resido en Perú · Actualmente de intercambio en Santiago de Chile",
    },
    footer: {
      madeWith: "Diseñado con pasión",
    },
  },
  en: {
    langLabel: "ES",
    nav: {
      inicio: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      role: "Full-Stack",
      roleAccent: "Developer",
      lema: "Building immersive digital experiences.",
      cta: "See projects",
      ctaSecondary: "Get in touch",
      available: "Available for opportunities",
    },
    about: {
      eyebrow: "About me",
      title: "The curiosity to take apart, the craft of building.",
      p1: "My way of learning has always started with curiosity: understanding how things work, taking them apart, testing them, and then trying to build something of my own. Over time, that curiosity became a way of working: learning by doing, experimenting with new technologies, and looking for solutions that not only work but make sense to the people who use them.",
      p2: "I'm still building my professional path, and precisely because of that, every project is an opportunity to learn, make mistakes, improve, and take an idea a little further than the one before.",
      p3: "When I'm not coding, I simply try not to spend all my time in front of a screen. I like running, listening to music, coffee, learning new things, and getting to know new places and people.",
      stats: {
        projects: { value: "7+", label: "projects built" },
        years: { value: "3+", label: "years learning" },
        curiosity: { value: "∞", label: "curiosity" },
      },
      portraitTag: "Systems Engineering student",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools I think with.",
      subtitle: "A stack built on solid foundations, and a mindset that's always looking to learn more.",
      hint: "Drag to rotate 360° · scroll to zoom · double-click to reset",
      categories: {
        frontend: { name: "Frontend", hint: "Lively, responsive interfaces" },
        backend: { name: "Backend", hint: "Data and server logic" },
        tools: { name: "Tools", hint: "My workflow" },
        mindset: { name: "Mindset", hint: "How I approach problems" },
      },
    },
    projects: {
      eyebrow: "Projects",
      title: "Ideas, turned into experience.",
      subtitle: "Three real projects, end to end: design, code, and deployment.",
      live: "Live demo",
      code: "View code",
      year: "Project",
    },
    experience: {
      eyebrow: "Journey",
      title: "A timeline still in the making.",
      subtitle: "Every stage laid a new foundation to keep building on.",
      items: [
        {
          period: "2022",
          title: "Java & Programming Logic",
          text: "Object-oriented programming, algorithms, and computational thinking.",
        },
        {
          period: "2022–2023",
          title: "Databases & Backend",
          text: "PostgreSQL, MongoDB, MySQL; data modeling and SQL queries.",
        },
        {
          period: "2023",
          title: "Web Technologies",
          text: "JavaScript, HTML, CSS, Bootstrap; first interactive, responsive sites.",
        },
        {
          period: "2024",
          title: "Full-Stack Development",
          text: "Spring Boot for REST APIs; React and Angular for modern frontends; complete apps from start to finish.",
        },
        {
          period: "2024–Present",
          title: "Systems Engineering & Freelance",
          text: "Software architecture, systems design, and production apps for real clients.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something memorable.",
      subtitle: "Got a project, an idea, or just want to talk tech? My inbox is open.",
      emailCta: "Email me",
      social: "Find me on",
      location: "Based in Peru · Currently on exchange in Santiago, Chile",
    },
    footer: {
      madeWith: "Designed with passion",
    },
  },
};