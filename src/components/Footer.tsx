import { useLanguage } from "../i18n/LanguageContext";
import { HeartIcon } from "./Icons";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row sm:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-base font-semibold text-ink transition-colors hover:text-terracotta"
          aria-label="Volver arriba"
        >
          Juan<span className="text-terracotta">Vega</span>
          <span aria-hidden className="ml-2 text-terracotta">↑</span>
        </button>

        <p className="flex items-center gap-1.5 text-xs text-fog">
          © {year} {t.footer.rights}
        </p>

        <p className="flex items-center gap-1.5 text-xs text-fog">
          {t.footer.madeWith}
          <HeartIcon className="h-3.5 w-3.5 text-terracotta" />
          <span className="font-semibold text-ink">React</span>
          &amp; <span className="font-semibold text-ink">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}