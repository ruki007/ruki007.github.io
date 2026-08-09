"use client";

import { useTranslation } from "@/lib/i18n";
import { Section, Reveal } from "./Section";

export function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" index="01" title={t.about.title} kicker="Background">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
            {t.about.educationLabel}
          </h3>
          <ul className="mt-6">
            {t.about.career.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <li className="border-t border-rule py-6">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">
                    {item.period}
                  </span>
                  <p className="jp mt-2 font-display text-lg leading-relaxed md:text-xl">
                    {item.title}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
            {t.about.qualificationsLabel}
          </h3>
          <ul className="mt-6">
            {t.about.qualifications.map((q, i) => (
              <Reveal key={q} delay={i * 0.08}>
                <li className="flex gap-5 border-t border-rule py-6">
                  <span className="font-mono text-[11px] text-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-loose md:text-base">{q}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
