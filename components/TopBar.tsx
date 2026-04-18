"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/translations";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

const LOCALES: { code: Locale; label: string }[] = [
  { code: "hy", label: "Հայ" },
  { code: "ru", label: "Рус" },
  { code: "en", label: "En" },
];

export function TopBar() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="top-bar border-b border-[var(--topbar-border)] bg-[var(--topbar-bg)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--topbar-link)] hover:text-[var(--topbar-link-hover)] text-sm transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--topbar-link)] hover:text-[var(--topbar-link-hover)] text-sm transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
        <div className="flex items-center gap-0 text-xs">
          {LOCALES.map(({ code, label }, i) => (
            <span key={code} className="flex items-center">
              {i > 0 && <span className="text-[var(--topbar-border)] px-1">|</span>}
              <button
                type="button"
                onClick={() => setLocale(code)}
                className={`lang-btn py-0.5 px-1 font-medium transition-colors ${
                  locale === code
                    ? "text-[var(--topbar-lang-active)]"
                    : "text-[var(--topbar-lang)] hover:text-[var(--topbar-lang-hover)]"
                }`}
              >
                {label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
