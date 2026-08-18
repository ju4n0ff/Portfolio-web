import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowRightIcon, ExternalIcon, GitHubIcon } from "./Icons";
import { ProjectPoster } from "./ProjectPoster";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="mt-16 flex flex-col gap-20 lg:mt-20 lg:gap-24">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={project.id}>
                <article
                  className={`group grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block overflow-hidden rounded-lg border border-line bg-bone shadow-[0_1px_2px_rgba(44,34,20,0.05)]"
                    aria-label={`${project.name} — ${t.projects.live}`}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full w-full"
                      >
                        <ProjectPoster project={project} />
                      </motion.div>
                    </div>
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10">
                      <span className="flex translate-y-3 items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-semibold text-ink opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {t.projects.live}
                        <ExternalIcon className="h-3.5 w-3.5" />
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="absolute top-4 right-4 font-display text-xs tracking-widest text-cream/90"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>

                  <div className="flex flex-col gap-5">
                    <Reveal delay={0.1}>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                          {project.name}
                        </h3>
                      </div>
                    </Reveal>

                    <Reveal delay={0.16}>
                      <p className="text-base leading-relaxed text-espresso">
                        {project.description[lang]}
                      </p>
                    </Reveal>

                    <Reveal delay={0.22}>
                      <ul className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-line-strong px-3 py-1 text-xs text-clay"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </Reveal>

                    <Reveal delay={0.28}>
                      <div className="mt-1 flex flex-wrap items-center gap-6 border-t border-line pt-5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-terracotta"
                        >
                          <GitHubIcon className="h-4 w-4" />
                          {t.projects.code}
                          <ArrowRightIcon className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-terracotta"
                          >
                            <ExternalIcon className="h-4 w-4" />
                            {t.projects.live}
                          </a>
                        )}
                      </div>
                    </Reveal>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}