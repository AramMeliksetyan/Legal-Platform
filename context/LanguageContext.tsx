"use client";

import React, { createContext, useContext, useState } from "react";
import type { Locale } from "@/lib/translations";

const STORAGE_KEY = "legal-platform-locale";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "hy";
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "hy" || stored === "ru" || stored === "en")) {
      return stored;
    }
    return "hy";
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

const defaultLocale = "hy" as Locale;

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      locale: defaultLocale,
      setLocale: () => {},
    };
  }
  return ctx;
}
