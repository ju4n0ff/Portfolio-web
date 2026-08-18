import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowRightIcon } from "./Icons";
import { Terminal } from "./Terminal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-28 pb-20 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mb-6 text-sm tracking-wide text-clay"
            >
              {t.hero.available}
            </motion.p>

            <h1 className="font-display font-semibold leading-[0.98] tracking-tight text-ink">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease }}
                className="block text-[12.5vw] sm:text-7xl lg:text-[5.25rem]"
              >
                Juan Carlos
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.38, ease }}
                className="block text-[12.5vw] sm:text-7xl lg:text-[5.25rem]"
              >
                Vega Graterol
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="max-w-md">
                <p className="mb-3 font-display text-2xl text-espresso sm:text-3xl">
                  {t.hero.role} <span className="text-terracotta">{t.hero.roleAccent}</span>
                </p>
                <p className="text-base leading-relaxed text-clay sm:text-lg">{t.hero.lema}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => go("projects")}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-espresso"
                >
                  {t.hero.cta}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => go("contact")}
                  className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-terracotta hover:text-terracotta"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}