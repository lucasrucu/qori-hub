import type { Metadata } from "next";
import { ArrowLeft, Brain, Mic, Workflow, Zap } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { PhotoSkeleton } from "@/components/PhotoSkeleton";
import { QoriMark } from "@/components/QoriMark";
import { OTTO, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${OTTO.name}: ${OTTO.tagline}`,
  description: OTTO.intro,
};

const CAP_ICONS = {
  mic: Mic,
  workflow: Workflow,
  zap: Zap,
  brain: Brain,
} as const;

export default function OttoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" aria-label="Qori home" className="inline-flex">
            <QoriMark glyph="q" label="Qori" />
          </a>
          <a
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 sm:py-24 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow>Flagship build</Eyebrow>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {OTTO.name}
              </h1>
              <p className="mt-4 text-xl text-foreground/90">{OTTO.tagline}</p>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">{OTTO.intro}</p>
            </div>
            <div className="mx-auto w-full max-w-xs md:mx-0">
              <PhotoSkeleton
                label="Demo GIF: the orb (voice in, automation runs)"
                className="aspect-square w-full ring-4 ring-primary/20"
              />
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="bg-secondary/60 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>What it is</Eyebrow>
            <div className="mt-6 max-w-3xl space-y-4">
              {OTTO.what.map((para) => (
                <p key={para} className="text-lg leading-relaxed text-foreground/80">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>What it does</Eyebrow>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Capabilities
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {OTTO.capabilities.map((cap) => {
                const Icon = CAP_ICONS[cap.icon];
                return (
                  <div key={cap.title} className="rounded-lg border border-border bg-card p-6">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-medium text-foreground">{cap.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cap.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demos + architecture */}
        <section className="bg-secondary/60 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
              <div>
                <Eyebrow>See it run</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  In motion
                </h2>
                <div className="mt-8 grid gap-4">
                  {OTTO.demos.map((demo) => (
                    <PhotoSkeleton key={demo} label={demo} className="aspect-[16/10] w-full" />
                  ))}
                </div>
              </div>
              <div>
                <Eyebrow>Under the hood</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  How it works
                </h2>
                <ul className="mt-8 space-y-3">
                  {OTTO.architecture.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA back */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Otto runs the work this portfolio talks about.
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  The code stays private. The capability is the point. See the rest of what{" "}
                  {PROFILE.firstName} builds.
                </p>
              </div>
              <a
                href="/#projects"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to projects
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
