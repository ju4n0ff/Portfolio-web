import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const match = value.match(/^(\d+)(\+?)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const target = Number(match[1]);
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${match[2] ?? ""}`;
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{value}</span>;
}

export function About() {
  const { t } = useLanguage();
  const stats = [t.about.stats.projects, t.about.stats.years, t.about.stats.curiosity];

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
                <span aria-hidden className="h-px w-8 bg-terracotta/60" />
                {t.about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-4xl font-semibold leading-[1.08] text-ink text-balance sm:text-5xl">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="relative mt-4 aspect-[4/5] max-w-[16rem] overflow-hidden rounded-sm border border-line bg-sand">
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="font-display text-7xl font-semibold text-ink"
                  >
                    JV
                  </motion.span>
                  <span className="h-px w-10 bg-terracotta" />
                  <p className="px-6 text-center text-xs leading-relaxed tracking-wide text-clay">
                    {t.about.portraitTag}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-7">
            {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-base leading-relaxed text-espresso sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <dl className="mt-6 grid grid-cols-3 divide-x divide-line border-y border-line">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 px-4 py-7 first:pl-0 sm:px-6">
                    <dd className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                      <CountUp value={stat.value} />
                    </dd>
                    <dt className="text-xs leading-snug tracking-wide text-fog sm:text-sm">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}