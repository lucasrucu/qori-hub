import type { Metadata } from "next";
import { ArrowLeft, FileSignature, FileBarChart } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { PimsPipelineHero, PimsReportArt, PimsSignoffArt } from "@/components/PimsMotion";
import { QoriMark } from "@/components/QoriMark";
import { PIMS_RFCC, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${PIMS_RFCC.name}: ${PIMS_RFCC.tagline}`,
  description: PIMS_RFCC.intro,
};

const PILLAR_ICONS = {
  fileChart: FileBarChart,
  fileSignature: FileSignature,
} as const;

export default function PimsRfccPage() {
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
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
              <div>
                <Eyebrow>Flagship build · case study</Eyebrow>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {PIMS_RFCC.name}
                </h1>
                <p className="mt-4 text-xl text-foreground/90">{PIMS_RFCC.tagline}</p>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">{PIMS_RFCC.intro}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {PIMS_RFCC.context}
                </p>
              </div>
              <div className="w-full">
                <PimsPipelineHero />
              </div>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>What it is</Eyebrow>
            <div className="mt-6 max-w-3xl space-y-4">
              {PIMS_RFCC.what.map((para) => (
                <p key={para} className="text-lg leading-relaxed text-foreground/80">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Two pillars, each with its own bespoke visual */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>What it does</Eyebrow>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Two automations carry the work
            </h2>

            <div className="mt-10 grid gap-12 md:grid-cols-2">
              {PIMS_RFCC.pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[pillar.icon];
                return (
                  <div key={pillar.title} className="flex flex-col">
                    <div className="mb-6">{i === 0 ? <PimsReportArt /> : <PimsSignoffArt />}</div>
                    <Icon className="h-6 w-6 text-experience" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-medium text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The pipeline, stage by stage */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>How it flows</Eyebrow>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              From raw records to a signed package
            </h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PIMS_RFCC.pipeline.map((stage, i) => (
                <li key={stage.step} className="rounded-lg border border-border bg-card p-6">
                  <span className="font-mono text-xs font-semibold text-experience">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-medium text-foreground">{stage.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stage.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Under the hood + outcomes */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <Eyebrow>Under the hood</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  How it works
                </h2>
                <ul className="mt-8 space-y-3">
                  {PIMS_RFCC.architecture.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-experience"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Eyebrow>What changed</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Outcomes
                </h2>
                <ul className="mt-8 space-y-4">
                  {PIMS_RFCC.outcomes.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-foreground/80"
                    >
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
                  Real field work, taken off my hands by code.
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  The code stays private. The capability is the point. See the rest of what{" "}
                  {PROFILE.firstName} builds.
                </p>
              </div>
              <a
                href="/#projects"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-experience px-5 py-2.5 text-sm font-medium text-experience-foreground transition-opacity hover:opacity-90"
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
