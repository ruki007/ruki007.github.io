"use client";

import { useTranslation } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <button
      onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
      aria-label="Switch language"
      className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-[var(--muted)] transition-colors text-sm font-medium"
    >
      <Languages size={20} />
      {locale === "ja" ? "EN" : "日本語"}
    </button>
  );
}
