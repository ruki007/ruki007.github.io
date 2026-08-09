"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { SpecRow } from "./Section";

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
        className="mx-auto w-full max-w-[1280px] px-6 py-12 md:px-10"
      >
        <motion.p
          variants={rise}
          transition={{ duration: 0.8, ease }}
          className="font-mono text-[11px] tracking-[0.2em] text-dim"
        >
          {t.hero.greeting}
        </motion.p>

        {/* The name, at poster scale */}
        <motion.h1
          variants={rise}
          transition={{ duration: 0.9, ease }}
          className="mt-6 font-display text-[clamp(3.2rem,13vw,10.5rem)] font-semibold leading-[0.92] tracking-tight"
        >
          {t.hero.name}
        </motion.h1>

        <motion.p
          variants={rise}
          transition={{ duration: 0.8, ease }}
          className="mt-4 font-mono text-[11px] tracking-[0.34em] text-accent-text"
        >
          {t.hero.nameLatin}
        </motion.p>

        {/* The optical link: a hairline rail with a photon travelling it */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease }}
          style={{ transformOrigin: "left" }}
          className="mt-10 w-full"
        >
          <div className="waveguide" />
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <motion.div
            variants={rise}
            transition={{ duration: 0.8, ease }}
            className="md:col-span-7"
          >
            <p className="jp font-display text-2xl leading-relaxed md:text-3xl">
              {t.hero.title}
            </p>
            <p className="jp mt-4 max-w-xl text-sm leading-loose text-dim md:text-base">
              {t.hero.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-accent px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-accent-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.hero.ctaWork}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-rule px-6 py-3 font-mono text-[11px] tracking-[0.18em] transition-colors duration-300 hover:border-accent hover:text-accent-text"
              >
                {t.hero.ctaContact}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Spec sheet */}
          <motion.div
            variants={rise}
            transition={{ duration: 0.8, ease }}
            className="space-y-3 md:col-span-5 md:pt-2"
          >
            {t.hero.meta.map((item) => (
              <SpecRow key={item.label} item={item} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute inset-x-0 bottom-10 mx-auto flex w-full max-w-[1280px] items-center gap-3 px-6 font-mono text-[10px] tracking-[0.3em] text-dim md:px-10"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        SCROLL
      </motion.div>
    </section>
  );
}
