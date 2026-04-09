"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ExternalLink, GitBranch } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-center"
      >
        {t.projects.title}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {t.projects.items.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group bg-[var(--card)] rounded-xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            {/* Thumbnail */}
            <div className="h-48 bg-[var(--muted)] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-[var(--muted-foreground)]">
                <span className="text-3xl">Project</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <GitBranch size={24} className="text-white" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={24} className="text-white" />
                  </a>
                )}
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs bg-[var(--muted)] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
