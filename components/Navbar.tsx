"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const sections = [
  "about",
  "research",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

const index = (i: number) => String(i + 1).padStart(2, "0");

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled
            ? "border-b border-rule bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
          <a href="#top" className="group flex items-baseline gap-3">
            <span className="font-display text-xl leading-none">ruki</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-dim transition-colors group-hover:text-accent-text">
              松永浩輝
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {sections.map((s, i) => (
              <a
                key={s}
                href={`#${s}`}
                className="group flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.16em] transition-colors hover:text-accent-text"
              >
                <span className="text-dim transition-colors group-hover:text-accent-text">
                  {index(i)}
                </span>
                <span>{t.nav[s]}</span>
              </a>
            ))}
            <span className="h-4 w-px bg-rule" aria-hidden="true" />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="メニューを開く"
              className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.18em] transition-colors hover:border-accent hover:text-accent-text"
            >
              MENU
            </button>
          </div>
        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[101] flex flex-col bg-bg md:hidden">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-rule px-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-dim">
              INDEX
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="メニューを閉じる"
              className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.18em]"
            >
              CLOSE
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-6 py-4">
            {sections.map((s, i) => (
              <li key={s} className="border-b border-rule">
                <a
                  href={`#${s}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-5 py-5"
                >
                  <span className="font-mono text-[11px] text-accent-text">
                    {index(i)}
                  </span>
                  <span className="font-display text-3xl">{t.nav[s]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
