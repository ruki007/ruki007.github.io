"use client";

import { useCallback, useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const isDark = () => document.documentElement.classList.contains("dark");

/**
 * Ink is the default. The pre-paint script in app/layout.tsx owns the class on
 * <html>; this button reads it as external state and flips it.
 */
export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => true);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  }, []);

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "ライトテーマに切り替え" : "ダークテーマに切り替え"}
      className="border border-rule px-2.5 py-1 font-mono text-[11px] leading-none tracking-[0.18em] transition-colors hover:border-accent hover:text-accent-text"
    >
      {dark ? "墨" : "紙"}
    </button>
  );
}
