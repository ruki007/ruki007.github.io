"use client";

import { useTranslation } from "@/lib/i18n";
import { Section, Reveal } from "./Section";

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" index="03" title={t.skills.title} kicker="Stack">
      <dl>
        {t.skills.categories.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.06}>
            <div className="grid grid-cols-1 gap-3 border-t border-rule py-7 md:grid-cols-12 md:gap-8">
              <dt className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-dim md:col-span-4">
                <span className="text-accent-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {category.title}
                <span className="text-dim">({category.skills.length})</span>
              </dt>
              <dd className="md:col-span-8">
                <ul className="flex flex-wrap items-baseline gap-x-2 gap-y-2">
                  {category.skills.map((skill, j) => (
                    <li key={skill.name} className="flex items-baseline gap-2">
                      <span className="cursor-default font-display text-xl transition-colors duration-300 hover:text-accent-text md:text-2xl">
                        {skill.name}
                      </span>
                      {j < category.skills.length - 1 ? (
                        <span className="text-dim" aria-hidden="true">
                          /
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
