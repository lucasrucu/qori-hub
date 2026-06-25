"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Eyebrow } from "@/components/Eyebrow";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { PhotoSkeleton } from "@/components/PhotoSkeleton";
import { PROFILE, SOCIALS } from "@/lib/profile";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* Ambient amber glow — pure decoration. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr]">
        <motion.div variants={container} initial={initial} animate="show">
          <motion.div variants={item}>
            <Eyebrow>{PROFILE.title}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            {PROFILE.tagline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted-foreground">
            {PROFILE.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {PROFILE.location}
            </span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.languages}</span>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              See my projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2.5 text-foreground transition-colors hover:bg-accent"
              whileHover={reduce ? undefined : { scale: 1.06 }}
              whileTap={reduce ? undefined : { scale: 0.95 }}
            >
              <LinkedInIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2.5 text-foreground transition-colors hover:bg-accent"
              whileHover={reduce ? undefined : { scale: 1.06 }}
              whileTap={reduce ? undefined : { scale: 0.95 }}
            >
              <GitHubIcon className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xs md:mx-0"
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {/* Soft pulsing glow behind the portrait. */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-3xl bg-primary/20 blur-2xl"
              animate={{ opacity: [0.5, 0.85, 0.5], scale: [0.97, 1.02, 0.97] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <PhotoSkeleton
            label="Portrait — headshot (4:5)"
            className="aspect-[4/5] w-full ring-4 ring-primary/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
