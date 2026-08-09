"use client";

import { useTranslation } from "@/lib/i18n";
import { Section, Reveal } from "./Section";

export function Experience() {
  const { t } = useTranslation();

  return (
    <Section
      id="experience"
      index="05"
      title={t.experience.title}
      kicker="Experience"
    >
      <ol>
        {t.experience.items.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.08}>
            <li className="grid gap-5 border-t border-rule py-9 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">
                  {item.period}
                </span>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                  {item.role}
                </p>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    {item.company}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] text-dim transition-colors hover:text-accent-text"
                    >
                      {item.link.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  ) : null}
                </div>
                <ul className="mt-5 space-y-3">
                  {item.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-4 text-sm leading-loose text-dim"
                    >
                      <span
                        className="mt-3 h-px w-4 shrink-0 bg-accent"
                        aria-hidden="true"
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
        <li className="border-t border-rule" aria-hidden="true" />
      </ol>
    </Section>
  );
}
