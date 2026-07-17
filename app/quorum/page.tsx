import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import {
  QuorumBoardArt,
  QuorumBrainArt,
  QuorumControlArt,
  QuorumDispatchArt,
  QuorumHero,
  QuorumIsolationArt,
} from "@/components/QuorumMotion";
import { QoriMark } from "@/components/QoriMark";
import { PROFILE, QUORUM } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${QUORUM.name}: ${QUORUM.tagline}`,
  description: QUORUM.intro,
};

// Feature art lookup, keyed from lib/profile.ts. Bespoke coded visuals only.
const FEATURE_ART = {
  board: QuorumBoardArt,
  dispatch: QuorumDispatchArt,
  isolation: QuorumIsolationArt,
  control: QuorumControlArt,
} as const;

export default function QuorumPage() {
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
        {/* Hero — Quorum's deep navy, its own brand. */}
        <section className="relative overflow-hidden border-b border-quorum/30 bg-[#12142C] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-quorum/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-quorum-bright/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-quorum-bright" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-quorum-bright">
                    {QUORUM.eyebrow}
                  </span>
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {QUORUM.name}
                </h1>
                <p className="mt-4 text-xl text-white/90">{QUORUM.tagline}</p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                  {QUORUM.intro}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {QUORUM.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-quorum/40 bg-quorum/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-quorum-bright"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <QuorumHero />
                <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-quorum-bright/70">
                  {QUORUM.pitch}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it runs — the feature highlights, each with bespoke coded art. */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-quorum" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-quorum">
                How it runs
              </span>
            </span>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              A company, not a chatbot
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Work flows through it the way it flows through a team: intake, dispatch, parallel
              execution, review, merge. I direct; the agents do.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {QUORUM.features.map((f) => {
                const Art = FEATURE_ART[f.art];
                return (
                  <div
                    key={f.title}
                    className="overflow-hidden rounded-2xl border border-quorum/25 bg-card"
                  >
                    <Art className="rounded-none border-0 shadow-none" />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">{f.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The shared brain — dark navy band. */}
        <section className="relative overflow-hidden border-b border-quorum/30 bg-[#12142C] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-quorum/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-quorum-bright" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-quorum-bright">
                    {QUORUM.brain.eyebrow}
                  </span>
                </span>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {QUORUM.brain.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {QUORUM.brain.body.map((para) => (
                    <p key={para} className="text-base leading-relaxed text-white/75">
                      {para}
                    </p>
                  ))}
                </div>
                <ul className="mt-7 space-y-3">
                  {QUORUM.brain.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-quorum-bright"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <QuorumBrainArt />
              </div>
            </div>
          </div>
        </section>

        {/* Under the hood — brief, high level. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-quorum" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-quorum">
                Under the hood
              </span>
            </span>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Built like software, run like a team
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {QUORUM.architecture.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-quorum" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA back */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-col items-start gap-6 rounded-xl border border-quorum/30 bg-quorum/[0.05] p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  One person, shipping like a team.
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  The code stays private. The capability is the point. See the rest of what{" "}
                  {PROFILE.firstName} builds.
                </p>
              </div>
              <a
                href="/#projects"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-quorum px-5 py-2.5 text-sm font-medium text-quorum-foreground transition-opacity hover:opacity-90"
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
