import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/translations";

interface Command {
  cmd: string;
  out: (lang: Lang) => string[];
}

const COMMANDS: Command[] = [
  {
    cmd: "whoami",
    out: (lang) => [
      "ju4n0ff",
      lang === "es" ? "Sistemas · Full-Stack · Creativo" : "Systems · Full-Stack · Creative",
    ],
  },
  {
    cmd: "cat skills.txt",
    out: () => ["React · Angular · TypeScript", "Spring Boot · PostgreSQL", "TailwindCSS · Figma"],
  },
  {
    cmd: "npm run build",
    out: () => ["✓ 433 modules transformed.", "✓ built in 1.8s — 114 kB gzip"],
  },
  {
    cmd: "git log --oneline -3",
    out: () => [
      "a1b2c3d feat: raymi gallery",
      "e4f5a6b chore: deploy cinescope",
      "c7d8e9f init: carbon footprint",
    ],
  },
  {
    cmd: "vercel --prod",
    out: () => ["✓ Production deployment ready.", "➜ https://ju4n0ff.vercel.app"],
  },
];

type Phase = "type" | "out" | "idle";

interface TermState {
  step: number;
  typed: number;
  shown: number;
  phase: Phase;
}

const INITIAL: TermState = { step: 0, typed: 0, shown: 0, phase: "type" };

export function Terminal() {
  const { lang } = useLanguage();
  const [state, setState] = useState<TermState>(INITIAL);
  const [hovered, setHovered] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const paused = hovered || manualPause;
  const command = COMMANDS[state.step];
  const output = command.out(lang);

  useEffect(() => {
    if (paused) return;
    let timer: number;
    if (state.phase === "type") {
      if (state.typed < command.cmd.length) {
        timer = window.setTimeout(
          () => setState((s) => ({ ...s, typed: s.typed + 1 })),
          36
        );
      } else {
        timer = window.setTimeout(() => setState((s) => ({ ...s, phase: "out" })), 400);
      }
    } else if (state.phase === "out") {
      if (state.shown < output.length) {
        timer = window.setTimeout(
          () => setState((s) => ({ ...s, shown: s.shown + 1 })),
          220
        );
      } else {
        timer = window.setTimeout(() => setState((s) => ({ ...s, phase: "idle" })), 250);
      }
    } else {
      timer = window.setTimeout(
        () =>
          setState((s) => ({
            step: (s.step + 1) % COMMANDS.length,
            typed: 0,
            shown: 0,
            phase: "type",
          })),
        2600
      );
    }
    return () => window.clearTimeout(timer);
  }, [state, paused, command.cmd, output.length]);

  const replay = () => setState(INITIAL);

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [state.shown, state.phase]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotate: 2.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-[440px] select-none rounded-xl border border-ink/15 bg-espresso shadow-[0_24px_60px_-24px_rgba(28,25,23,0.45)]"
      role="img"
      aria-label="Terminal con comandos de ejemplo"
    >
      <div className="flex items-center gap-2 border-b border-cream/10 px-4 py-3">
        <span aria-hidden className="h-3 w-3 rounded-full bg-terracotta" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-gold" />
        <span aria-hidden className="h-3 w-3 rounded-full bg-fog" />
        <span className="ml-3 font-mono text-xs text-cream/45">
          ju4n0ff@portfolio — zsh
        </span>
        <span className="ml-auto flex items-center gap-2">
          <span className="font-mono text-[10px] text-cream/40">
            {paused ? "paused" : "auto"}
          </span>
          <button
            type="button"
            onClick={() => setManualPause((p) => !p)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream"
            aria-label={paused ? "Reanudar terminal" : "Pausar terminal"}
          >
            {paused ? (
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                <path d="M2 1l8 5-8 5V1Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                <rect x="2" y="1" width="3" height="10" rx="0.5" />
                <rect x="7" y="1" width="3" height="10" rx="0.5" />
              </svg>
            )}
          </button>
        </span>
      </div>

      <button
        type="button"
        onClick={replay}
        className="block w-full text-left"
        aria-label="Reiniciar la terminal"
      >
        <div
          ref={scrollRef}
          className="max-h-[240px] overflow-y-auto px-5 py-4 font-mono text-[13px] leading-[1.75]"
        >
          <div className="flex items-baseline gap-2">
            <span aria-hidden className="text-terracotta">
              ❯
            </span>
            <span className="text-cream/50">~</span>
            <span className="whitespace-pre text-cream/90">{command.cmd.slice(0, state.typed)}</span>
            <Cursor blinking={!paused && state.phase === "type"} />
          </div>

          {output.slice(0, state.shown).map((line, i) => (
            <motion.p
              key={`${state.step}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className={line.startsWith("✓") ? "text-gold" : "text-cream/55"}
            >
              {line}
            </motion.p>
          ))}

          {state.phase === "idle" && (
            <div className="flex items-baseline gap-2">
              <span aria-hidden className="text-terracotta">
                ❯
              </span>
              <span className="text-cream/50">~</span>
              <Cursor blinking />
            </div>
          )}
        </div>
      </button>
    </motion.div>
  );
}

function Cursor({ blinking = true }: { blinking?: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-[1.1em] w-[0.55em] translate-y-[0.18em] bg-cream/80 ${
        blinking ? "animate-pulse" : ""
      }`}
    />
  );
}