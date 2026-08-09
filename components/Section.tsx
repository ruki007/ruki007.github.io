"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { MetaItem } from "@/lib/types";

/**
 * Every section is a spread in the same publication: a hairline rule on top,
 * a sticky index + mincho title in the left margin, content in the right.
 */
export function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-rule">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 py-20 md:grid-cols-12 md:gap-12 md:py-32">
          <header className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <span className="font-mono text-[11px] tracking-[0.3em] text-accent-text">
                {index}
              </span>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-[2.6rem]">
                {title}
              </h2>
              {kicker ? (
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                  {kicker}
                </p>
              ) : null}
            </div>
          </header>
          <div className="md:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}

/** Fade + rise on scroll. One motion vocabulary across the whole page. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Spec-sheet row: label, dotted leader, value. */
export function SpecRow({ item }: { item: MetaItem }) {
  return (
    <div className="flex items-baseline font-mono text-[11px] tracking-[0.14em]">
      <span className="shrink-0 text-dim">{item.label}</span>
      <span className="leader" aria-hidden="true" />
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group min-w-0 text-right transition-colors hover:text-accent-text"
        >
          {item.value}
          <span className="inline-block pl-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      ) : (
        <span className="min-w-0 text-right">{item.value}</span>
      )}
    </div>
  );
}
