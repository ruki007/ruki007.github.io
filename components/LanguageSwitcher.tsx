"use client";

import { useTranslation } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <button
      onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
      aria-label="Switch language"
      className="border border-rule px-2.5 py-1 font-mono text-[11px] leading-none tracking-[0.18em] transition-colors hover:border-accent hover:text-accent-text"
    >
      {locale === "ja" ? "EN" : "JA"}
    </button>
  );
}
