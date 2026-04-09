"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-[var(--muted)]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {t.experience.title}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] -translate-x-1/2" />

          {t.experience.items.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative mb-10 md:w-1/2 ${
                i % 2 === 0
                  ? "md:pr-10 md:ml-0"
                  : "md:pl-10 md:ml-auto"
              } pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-1 w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center ${
                  i % 2 === 0
                    ? "left-0 md:-right-4 md:left-auto"
                    : "left-0 md:-left-4"
                }`}
              >
                <Briefcase size={14} className="text-[var(--accent-foreground)]" />
              </div>

              <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
                <span className="text-sm text-[var(--accent)] font-medium">
                  {item.period}
                </span>
                <h3 className="font-semibold text-lg mt-1">{item.role}</h3>
                <p className="text-[var(--muted-foreground)] mb-3">{item.company}</p>
                <ul className="space-y-1">
                  {item.achievements.map((a, j) => (
                    <li key={j} className="text-sm text-[var(--muted-foreground)] flex gap-2">
                      <span className="text-[var(--accent)] mt-1">&#8226;</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
