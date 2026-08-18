export type Lang = "es" | "en";

export interface ExperienceItem {
  period: string;
  title: string;
  text: string;
}

export interface Translation {
  langLabel: string;
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
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
    rights: string;
  };
}

export const translations: Record<Lang, Translation> = {
  es: {
    langLabel: "EN",
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Full-Stack",
      roleAccent: "Developer",
      lema: "Building immersive digital experiences.",
      cta: "Ver proyectos",
      ctaSecondary: "Contáctame",
      available: "Disponible para oportunidades",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "La curiosidad de desarmar, el oficio de construir.",
      p1: "Mi trayectoria en la tecnología comenzó con la curiosidad — desarmar cosas para entender cómo funcionan. Hoy, esa curiosidad me impulsa a crear. Estudio Ingeniería de Sistemas, donde descubrí que el buen software es más que código: se trata de entender a las personas, resolver problemas reales y crear experiencias que conecten.",
      p2: "Me especializo en desarrollo full-stack con enfoque en el frontend. Creo que las interfaces deben ser intuitivas, rápidas y hermosas. Cada proyecto es una oportunidad para aprender algo nuevo, superar límites creativos y construir algo significativo.",
      p3: "Cuando no estoy programando, exploro sistemas de diseño, experimento con tecnologías creativas y pienso en cómo será la próxima generación de experiencias digitales.",
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
      location: "Lima, Perú · Trabajo remoto",
    },
    footer: {
      madeWith: "Diseñado y construido con",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    langLabel: "ES",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
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
      p1: "My path in technology began with curiosity — taking things apart to understand how they work. Today, that curiosity drives what I create. I study Systems Engineering, where I learned that good software is more than code: it's about understanding people, solving real problems, and crafting experiences that connect.",
      p2: "I specialize in full-stack development with a frontend focus. I believe interfaces should be intuitive, fast, and beautiful. Every project is a chance to learn something new, push creative limits, and build something meaningful.",
      p3: "When I'm not coding, I explore design systems, experiment with creative technologies, and think about what the next generation of digital experiences will look like.",
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
      location: "Lima, Peru · Remote-friendly",
    },
    footer: {
      madeWith: "Designed & built with",
      rights: "All rights reserved.",
    },
  },
};