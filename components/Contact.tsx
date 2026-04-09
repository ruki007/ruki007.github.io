"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ExternalLink, Globe, User, Mail } from "lucide-react";

const links = [
  { icon: ExternalLink, href: "https://github.com/yourname", label: "GitHub" },
  { icon: Globe, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: User, href: "https://twitter.com/yourname", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4"
      >
        {t.contact.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[var(--muted-foreground)] mb-10"
      >
        {t.contact.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-6"
      >
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-4 bg-[var(--muted)] rounded-xl hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors group"
          >
            <Icon size={28} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
