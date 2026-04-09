"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Code, Server, Cloud, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code,
  Backend: Server,
  "Infra & DevOps": Cloud,
  Tools: Wrench,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center"
        >
          {t.skills.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.skills.categories.map((category) => {
            const Icon = categoryIcons[category.title] || Code;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={20} className="text-[var(--accent)]" />
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-sm bg-[var(--muted)] rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
