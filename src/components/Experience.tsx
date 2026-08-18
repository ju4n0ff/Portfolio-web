import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="border-t border-line bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="relative mt-16 pl-6 sm:pl-0">
          <span
            aria-hidden
            className="absolute top-1 bottom-1 left-[7px] w-px bg-line-strong sm:left-[15.5rem]"
          />
          <ol className="flex flex-col gap-12">
            {t.experience.items.map((item, i) => (
              <li key={i}>
                <Reveal delay={i * 0.05}>
                  <div className="relative grid gap-2 sm:grid-cols-[15rem_1fr] sm:gap-10">
                    <span
                      aria-hidden
                      className="absolute top-1.5 -left-6 h-[15px] w-[15px] rounded-full border-2 border-terracotta bg-cream sm:-left-[16.15rem]"
                    />
                    <div className="flex items-baseline gap-3 sm:block">
                      <h3 className="font-display text-lg font-semibold text-terracotta">
                        {item.period}
                      </h3>
                      <span className="text-xs text-fog sm:hidden">—</span>
                    </div>
                    <div className="flex flex-col gap-2 pb-2">
                      <h4 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                        {item.title}
                      </h4>
                      <p className="max-w-xl text-base leading-relaxed text-clay">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <motion.p
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
            className="mt-14 font-display text-lg text-clay"
          >
            {t.hero.lema}
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}