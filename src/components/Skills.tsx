import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SKILLS = {
  frontend: ["React", "Angular", "JavaScript", "TypeScript", "TailwindCSS", "HTML", "CSS", "Bootstrap"],
  backend: ["Spring Boot", "PostgreSQL", "MongoDB", "MySQL", "REST APIs"],
  tools: ["Git", "GitHub", "Figma", "Docker", "Vercel", "Render", "Railway", "VS Code", "Trello"],
  mindset: ["Problem Solving", "Systems Thinking", "UI/UX Design", "Creatividad", "Trabajo en equipo", "Aprendizaje continuo"],
} as const;

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
  const categories = [
    { key: "frontend", list: SKILLS.frontend },
    { key: "backend", list: SKILLS.backend },
    { key: "tools", list: SKILLS.tools },
    { key: "mindset", list: SKILLS.mindset },
  ] as const;

  return (
    <section id="skills" className="border-t border-line bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {categories.map((cat, ci) => (
            <Reveal key={cat.key} delay={ci * 0.08}>
              <div className="group flex h-full flex-col">
                <div className="mb-6 flex items-baseline gap-3 border-b border-line-strong pb-5">
                  <span className="font-display text-sm text-terracotta">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {t.skills.categories[cat.key].name}
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-fog">
                      {t.skills.categories[cat.key].hint}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {cat.list.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line-strong bg-bone px-3.5 py-1.5 text-sm text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
                    >
                      {lang === "en" && cat.key === "mindset" ? MINDSET_EN[skill] : skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}