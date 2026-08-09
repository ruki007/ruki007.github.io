"use client";

import type { Project } from "@/lib/types";
import { useTranslation } from "@/lib/i18n";
import { Section, Reveal } from "./Section";

/** Placeholder URLs from the template shouldn't ship as broken links. */
const isReal = (url?: string) =>
  !!url && !url.includes("yourname") && !url.includes("example.com");

function primaryLink(project: Project) {
  if (isReal(project.live)) return { href: project.live!, label: "LIVE" };
  if (isReal(project.github)) return { href: project.github!, label: "GITHUB" };
  return null;
}

function Row({ project, i }: { project: Project; i: number }) {
  const link = primaryLink(project);
  const num = String(i + 1).padStart(2, "0");

  const body = (
    <>
      {/* Lime wipe that fills the row from the bottom on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
      />
      <span className="relative grid gap-4 px-2 py-9 md:grid-cols-12 md:gap-8 md:px-4">
        <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text transition-colors duration-500 group-hover:text-accent-ink md:col-span-1">
          {num}
        </span>

        <span className="block md:col-span-6">
          <span className="jp block font-display text-2xl leading-snug md:text-[2rem]">
            {project.title}
          </span>
          <span className="jp mt-3 block max-w-lg text-sm leading-loose text-dim transition-colors duration-500 group-hover:text-accent-ink">
            {project.description}
          </span>
        </span>

        <span className="flex flex-wrap items-start gap-x-2 gap-y-1 font-mono text-[10px] tracking-[0.12em] text-dim transition-colors duration-500 group-hover:text-accent-ink md:col-span-3">
          {project.tech.map((tech, k) => (
            <span key={tech} className="whitespace-nowrap">
              {tech}
              {k < project.tech.length - 1 ? (
                <span className="pl-2 opacity-50">/</span>
              ) : null}
            </span>
          ))}
        </span>

        <span className="flex items-start justify-start whitespace-nowrap font-mono text-[10px] tracking-[0.18em] md:col-span-2 md:justify-end">
          {link ? (
            <span className="inline-flex items-center gap-1.5 transition-transform duration-500 group-hover:translate-x-1">
              {link.label} ↗
            </span>
          ) : (
            <span className="text-dim transition-colors duration-500 group-hover:text-accent-ink">
              ———
            </span>
          )}
        </span>
      </span>
    </>
  );

  const shell =
    "group relative block overflow-hidden border-t border-rule transition-colors duration-500 hover:text-accent-ink";

  return (
    <Reveal delay={i * 0.07}>
      {link ? (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={shell}
        >
          {body}
        </a>
      ) : (
        <div className={shell}>{body}</div>
      )}
    </Reveal>
  );
}

export function Projects() {
  const { t } = useTranslation();

  return (
    <Section id="projects" index="04" title={t.projects.title} kicker="Work">
      <div>
        {t.projects.items.map((project, i) => (
          <Row key={project.title} project={project} i={i} />
        ))}
        <div className="border-t border-rule" />
      </div>
    </Section>
  );
}
