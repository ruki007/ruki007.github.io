"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { ja } from "@/data/ja";
import { en } from "@/data/en";
import type { PortfolioContent } from "./types";

type Locale = "ja" | "en";

const messages: Record<Locale, PortfolioContent> = { ja, en };

interface I18nContextValue {
  locale: Locale;
  t: PortfolioContent;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ja");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t: messages[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}
