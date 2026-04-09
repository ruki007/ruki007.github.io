"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

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

      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Profile photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-48 h-48 rounded-full bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] overflow-hidden">
            <span className="text-4xl">&#128100;</span>
          </div>
        </motion.div>

        {/* Description + Career */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 space-y-6"
        >
          {t.about.description.map((paragraph, i) => (
            <p key={i} className="text-[var(--muted-foreground)] leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Career timeline */}
          {t.about.career.length > 0 && (
            <div className="mt-6 space-y-4">
              <div className="border-l-2 border-[var(--accent)] pl-4 space-y-4">
                {t.about.career.map((item, i) => (
                  <div key={i}>
                    <span className="text-sm text-[var(--accent)] font-medium">{item.period}</span>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
