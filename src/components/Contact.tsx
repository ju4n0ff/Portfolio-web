import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLanguage();
  const email = "juanvg.dev@gmail.com";

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-24">
        <div className="flex flex-col items-start gap-12">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
              <span aria-hidden className="h-px w-8 bg-terracotta/60" />
              {t.contact.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-5xl font-semibold leading-[1.02] text-ink text-balance sm:text-7xl lg:text-8xl">
              {t.contact.title}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-lg leading-relaxed text-clay">
              {t.contact.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-4"
              aria-label={`${t.contact.emailCta}: ${email}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-300 group-hover:border-terracotta group-hover:text-terracotta">
                <MailIcon className="h-5 w-5" />
              </span>
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="font-display text-2xl font-semibold text-ink decoration-terracotta/60 decoration-2 underline-offset-[6px] group-hover:underline sm:text-3xl"
              >
                {email}
              </motion.span>
            </a>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-fog">
                {t.contact.social}
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ju4n0ff"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
                >
                  <GitHubIcon className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://linkedin.com/in/juanc-vega"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
                >
                  <LinkedInIcon className="h-4.5 w-4.5" />
                </a>
              </div>
              <span className="text-sm text-fog">{t.contact.location}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}