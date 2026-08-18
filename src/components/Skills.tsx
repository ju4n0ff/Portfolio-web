import { lazy, Suspense, useMemo } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { buildNetwork } from "../data/network";
import type { CategoryKey } from "../data/network";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SkillsNetwork = lazy(() =>
  import("./SkillsNetwork").then((m) => ({ default: m.SkillsNetwork }))
);

const SKILLS: Record<CategoryKey, string[]> = {
  frontend: ["React", "Angular", "JavaScript", "TypeScript", "TailwindCSS", "HTML", "CSS", "Bootstrap"],
  backend: ["Spring Boot", "PostgreSQL", "MongoDB", "MySQL", "REST APIs"],
  tools: ["Git", "GitHub", "Figma", "Docker", "Vercel", "Render", "Railway", "VS Code", "Trello"],
  mindset: ["Problem Solving", "Systems Thinking", "UI/UX Design", "Creatividad", "Trabajo en equipo", "Aprendizaje continuo"],
};

const MINDSET_EN: Record<string, string> = {
  "Problem Solving": "Problem Solving",
  "Systems Thinking": "Systems Thinking",
  "UI/UX Design": "UI/UX Design",
  Creatividad: "Creativity",
  "Trabajo en equipo": "Teamwork",
  "Aprendizaje continuo": "Continuous Learning",
};

const SKILL_HINTS: Record<string, { es: string; en: string }> = {
  React: { es: "Componentes y Hooks con agilidad", en: "Components & Hooks, agile" },
  Angular: { es: "Apps empresariales escalables", en: "Scalable enterprise apps" },
  JavaScript: { es: "Interactividad en la web", en: "Web interactivity" },
  TypeScript: { es: "Tipado seguro, menos bugs", en: "Safe typing, fewer bugs" },
  TailwindCSS: { es: "Diseño ágil con utilidades", en: "Agile utility-first styling" },
  HTML: { es: "Estructura semántica accesible", en: "Semantic, accessible structure" },
  CSS: { es: "Estilos precisos y modernos", en: "Precise, modern styling" },
  Bootstrap: { es: "UIs rápidas y responsivas", en: "Fast, responsive UIs" },
  "Spring Boot": { es: "APIs robustas y seguras", en: "Robust, secure APIs" },
  PostgreSQL: { es: "Datos confiables y consistentes", en: "Reliable, consistent data" },
  MongoDB: { es: "Modelos flexibles no relacionales", en: "Flexible document data" },
  MySQL: { es: "Modelado relacional clásico", en: "Classic relational modeling" },
  "REST APIs": { es: "Integración entre sistemas", en: "System integration" },
  Git: { es: "Control de versiones limpio", en: "Clean version control" },
  GitHub: { es: "Colaboración en código", en: "Code collaboration" },
  Figma: { es: "Prototipos y diseño UI", en: "UI design & prototyping" },
  Docker: { es: "Entornos reproducibles", en: "Reproducible environments" },
  Vercel: { es: "Deploys instantáneos", en: "Instant deploys" },
  Render: { es: "Hosting de APIs", en: "API hosting" },
  Railway: { es: "Despliegue sin fricción", en: "Frictionless deployment" },
  "VS Code": { es: "Mi editor de confianza", en: "My go-to editor" },
  Trello: { es: "Flujos de trabajo claros", en: "Clear workflows" },
  "Problem Solving": { es: "Resolver con método", en: "Solve with method" },
  "Systems Thinking": { es: "Ver el todo, no la parte", en: "See the whole, not parts" },
  "UI/UX Design": { es: "Interfaces que se entienden", en: "Interfaces people get" },
  Creatividad: { es: "Ideas que se vuelven diseño", en: "Ideas into design" },
  Creativity: { es: "Ideas que se vuelven diseño", en: "Ideas into design" },
  "Trabajo en equipo": { es: "Colaborar para sumar", en: "Collaborate to add up" },
  Teamwork: { es: "Colaborar para sumar", en: "Collaborate to add up" },
  "Aprendizaje continuo": { es: "Nunca dejo de aprender", en: "I never stop learning" },
  "Continuous Learning": { es: "Nunca dejo de aprender", en: "I never stop learning" },
};

export function Skills() {
  const { lang, t } = useLanguage();

  const localized = useMemo<Record<CategoryKey, string[]>>(
    () => ({
      frontend: SKILLS.frontend,
      backend: SKILLS.backend,
      tools: SKILLS.tools,
      mindset: lang === "en" ? SKILLS.mindset.map((s) => MINDSET_EN[s] ?? s) : SKILLS.mindset,
    }),
    [lang]
  );

  const { nodes, edges, clusters } = useMemo(() => {
    const hints: Record<string, string> = {};
    for (const list of Object.values(localized)) {
      for (const s of list) hints[s] = SKILL_HINTS[s]?.[lang] ?? "";
    }
    return buildNetwork(localized, hints);
  }, [localized, lang]);

  const categoryNames = useMemo(
    () => ({
      frontend: t.skills.categories.frontend.name,
      backend: t.skills.categories.backend.name,
      tools: t.skills.categories.tools.name,
      mindset: t.skills.categories.mindset.name,
    }),
    [t]
  );

  return (
    <section id="skills" className="border-t border-line bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-12">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />
        <ul className="sr-only">
          {(Object.keys(localized) as CategoryKey[]).map((cat) => (
            <li key={cat}>
              {t.skills.categories[cat].name}: {localized[cat].join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <Reveal className="mt-8 sm:mt-10">
        <Suspense
          fallback={
            <div className="mx-auto flex h-[72vh] min-h-[480px] w-full max-w-5xl items-center justify-center border-y border-ink/10 bg-sand">
              <span className="font-display text-lg italic text-fog">
                {t.skills.categories.frontend.name}…
              </span>
            </div>
          }
        >
          <SkillsNetwork
            nodes={nodes}
            edges={edges}
            clusters={clusters}
            categoryNames={categoryNames}
            hint={t.skills.hint}
          />
        </Suspense>
      </Reveal>
    </section>
  );
}