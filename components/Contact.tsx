"use client";

import { useTranslation } from "@/lib/i18n";
import { activeSocials } from "@/lib/links";
import { Section, Reveal } from "./Section";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" index="06" title={t.contact.title} kicker="Get in touch">
      <Reveal>
        <p className="jp max-w-2xl font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.4]">
          {t.contact.subtitle}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 w-full">
          <div className="waveguide" />
        </div>
      </Reveal>

      <ul className="mt-2">
        {activeSocials.map((s, i) => (
          <Reveal key={s.label} delay={0.2 + i * 0.06}>
            <li>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between border-b border-rule py-6 transition-colors duration-300 hover:text-accent-text"
              >
                <span className="font-display text-xl md:text-2xl">
                  {s.label}
                </span>
                <span className="flex items-baseline gap-4 font-mono text-[11px] tracking-[0.14em] text-dim transition-colors duration-300 group-hover:text-accent-text">
                  {s.handle}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
