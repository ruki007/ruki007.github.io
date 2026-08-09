"use client";

import { useTranslation } from "@/lib/i18n";
import { Section, Reveal, SpecRow } from "./Section";

export function Research() {
  const { t } = useTranslation();

  return (
    <Section
      id="research"
      index="02"
      title={t.research.title}
      kicker="Optical Networks"
    >
      <Reveal>
        <div className="space-y-3 border-t border-rule pt-6">
          {t.research.meta.map((item) => (
            <SpecRow key={item.label} item={item} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 w-full">
          <div className="waveguide" />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <h3 className="mt-12 font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
          {t.research.outputsLabel}
        </h3>
      </Reveal>

      <ol className="mt-5">
        {t.research.outputs.map((o, i) => (
          <Reveal key={o.title} delay={0.2 + i * 0.07}>
            <li className="flex gap-5 border-t border-rule py-7">
              <span className="shrink-0 font-mono text-[11px] text-accent-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <span className="inline-block border border-rule px-2 py-0.5 font-mono text-[9px] tracking-[0.18em] text-dim">
                  {o.kind}
                </span>
                <p className="jp mt-3 max-w-3xl font-display text-lg leading-relaxed md:text-xl">
                  {o.title}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-dim">
                  {o.authors}
                </p>
                <p className="mt-1 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-dim">
                  {o.venue}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
