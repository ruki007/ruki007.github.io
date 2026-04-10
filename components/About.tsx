"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { GraduationCap, Award } from "lucide-react";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-center"
      >
        {t.about.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Career timeline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={20} className="text-[var(--accent)]" />
            <h3 className="font-semibold text-lg">学歴</h3>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4 space-y-4">
            {t.about.career.map((item, i) => (
              <div key={i}>
                <span className="text-sm text-[var(--accent)] font-medium">{item.period}</span>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Qualifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-[var(--accent)]" />
            <h3 className="font-semibold text-lg">資格等</h3>
          </div>
          <ul className="space-y-2">
            {t.about.qualifications.map((q, i) => (
              <li key={i} className="flex gap-2 text-[var(--muted-foreground)]">
                <span className="text-[var(--accent)]">&#8226;</span>
                {q}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
