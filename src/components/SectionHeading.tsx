import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
          <span aria-hidden className="h-px w-8 bg-terracotta/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl leading-[1.08] text-ink font-semibold text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-clay sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

interface EyebrowProps {
  children: string;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <motion.span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
      <span aria-hidden className="h-px w-8 bg-terracotta/60" />
      {children}
    </motion.span>
  );
}