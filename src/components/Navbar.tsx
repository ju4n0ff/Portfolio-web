import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const SECTIONS = ["about", "skills", "projects", "experience", "contact"] as const;

export function Navbar() {
  const { lang, t, toggle } = useLanguage();
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  const linkClass = (id: string) =>
    `relative text-sm tracking-wide transition-colors duration-200 ${
      active === id ? "text-ink" : "text-clay hover:text-ink"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-cream/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8"
          aria-label="Principal"
        >
          <div className="hidden items-center gap-7 md:flex">
            {SECTIONS.map((id) => (
              <button key={id} type="button" onClick={() => go(id)} className={linkClass(id)}>
                {t.nav[id]}
                <span
                  aria-hidden
                  className={`absolute -bottom-1.5 left-0 h-px bg-terracotta transition-all duration-300 ${
                    active === id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              className="rounded-full border border-line-strong px-3 py-1.5 text-xs font-semibold text-ink transition-colors duration-200 hover:border-terracotta hover:text-terracotta"
              aria-label="Cambiar idioma"
            >
              {t.langLabel}
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink md:hidden"
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-cream px-6 py-5 md:hidden"
          >
            <div className="flex h-16 items-center justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink"
                aria-label="Cerrar menú"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Menú móvil">
              {SECTIONS.map((id, i) => (
                <motion.button
                  key={id}
                  type="button"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
                  onClick={() => go(id)}
                  className="flex items-baseline gap-4 border-b border-line py-4 text-left"
                >
                  <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                  <span
                    className={`font-display text-3xl font-semibold transition-colors ${
                      active === id ? "text-ink" : "text-clay"
                    }`}
                  >
                    {t.nav[id]}
                  </span>
                </motion.button>
              ))}
            </nav>
            <p className="pb-2 text-center text-xs tracking-wide text-fog">
              {lang === "es" ? "Building immersive digital experiences." : "Construyendo experiencias digitales inmersivas."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}