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

  const { nodes, edges, clusters } = useMemo(() => buildNetwork(localized), [localized]);

  const categoryNames = useMemo(
    () => ({
      frontend: t.skills.categories.frontend.name,
      backend: t.skills.categories.backend.name,
      tools: t.skills.categories.tools.name,
      mindset: t.skills.categories.mindset.name,
    }),
    [t]
  );

  const categoryHints = useMemo(
    () => ({
      frontend: t.skills.categories.frontend.hint,
      backend: t.skills.categories.backend.hint,
      tools: t.skills.categories.tools.hint,
      mindset: t.skills.categories.mindset.hint,
    }),
    [t]
  );

  return (
    <section id="skills" className="border-t border-line bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />
        <ul className="sr-only">
          {(Object.keys(localized) as CategoryKey[]).map((cat) => (
            <li key={cat}>
              {t.skills.categories[cat].name}: {localized[cat].join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <Reveal className="mt-16">
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
            categoryHints={categoryHints}
            hint={t.skills.hint}
          />
        </Suspense>
      </Reveal>
    </section>
  );
}