import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Database,
  FileSignature,
  Workflow,
} from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import {
  ExperienceFlagshipArt,
  ExperienceHero,
  ExperienceMetaArt,
} from "@/components/ExperienceMotion";
import { QoriMark } from "@/components/QoriMark";
import { EXPERIENCE_STUDY, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${EXPERIENCE_STUDY.name}: ${EXPERIENCE_STUDY.tagline}`,
  description: EXPERIENCE_STUDY.intro,
};

const CLUSTER_ICONS = {
  fileSignature: FileSignature,
  barChart: BarChart3,
  database: Database,
  workflow: Workflow,
} as const;

export default function ExperiencePage() {
  const study = EXPERIENCE_STUDY;

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
        {/* Hero — a deep teal band so the page opens rich, not white. */}
        <section className="relative overflow-hidden border-b border-experience/30 bg-[#0A2A28] text-white">
          {/* layered teal glows for depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-experience-bright/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-experience/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-experience-bright" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-experience-bright">
                    {study.eyebrow}
                  </span>
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {study.name}
                </h1>
                <p className="mt-4 text-xl text-white/90">{study.tagline}</p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                  {study.intro}
                </p>
                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-experience-bright/80">
                  {study.context}
                </p>
              </div>
              <div className="w-full">
                <ExperienceHero />
              </div>
            </div>

            {/* Headline stat — the 1,000+ hours, framed as an estimate. */}
            <div className="mt-14 flex flex-col gap-6 rounded-2xl border border-experience-bright/25 bg-white/[0.04] p-7 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-semibold tracking-tight text-experience-bright sm:text-6xl">
                  {study.headline.value}
                </span>
                <span className="text-lg font-medium text-white/80">{study.headline.unit}</span>
              </div>
              <div className="max-w-md">
                <p className="text-sm leading-relaxed text-white/80">{study.headline.label}</p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-experience-bright/70">
                  {study.headline.note}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship — the NoE win, on a light band with a strong teal frame. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                {study.flagship.eyebrow}
              </span>
            </span>
            <div className="mt-6 grid items-center gap-12 md:grid-cols-[1fr_1.05fr]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {study.flagship.title}
                </h2>

                {/* before / after / saved chips */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <div className="rounded-xl border border-border bg-secondary px-4 py-3">
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                      By hand
                    </p>
                    <p className="text-xl font-semibold text-foreground">{study.flagship.before}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-experience" aria-hidden="true" />
                  <div className="rounded-xl border border-experience/40 bg-experience/10 px-4 py-3">
                    <p className="font-mono text-[11px] uppercase tracking-wide text-experience">
                      With the tool
                    </p>
                    <p className="text-xl font-semibold text-experience">{study.flagship.after}</p>
                  </div>
                  <div className="rounded-xl bg-experience px-4 py-3 text-experience-foreground">
                    <p className="font-mono text-[11px] uppercase tracking-wide opacity-80">
                      Saved
                    </p>
                    <p className="text-xl font-semibold">{study.flagship.saved}/day</p>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {study.flagship.body.map((para) => (
                    <p key={para} className="text-base leading-relaxed text-foreground/80">
                      {para}
                    </p>
                  ))}
                </div>

                {/* the rapid-pdf spin-off */}
                <div className="mt-6 rounded-xl border-l-2 border-experience bg-secondary/70 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-experience">
                    Born from this work
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                    {study.flagship.spinoff}
                  </p>
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {study.flagship.note}
                </p>
              </div>
              <div className="w-full">
                <ExperienceFlagshipArt />
              </div>
            </div>
          </div>
        </section>

        {/* Scale anchors — a teal band of real, non-identifying numbers. */}
        <section className="border-b border-experience/30 bg-[#0A2A28] text-white">
          <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience-bright" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience-bright">
                The scale this ran against
              </span>
            </span>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {study.scale.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-experience-bright/20 bg-white/[0.04] p-6 backdrop-blur"
                >
                  <p className="text-3xl font-semibold tracking-tight text-experience-bright sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The toolkit, grouped into themed clusters. */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                The toolkit
              </span>
            </span>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Thirteen automations, in four themes
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              The flagship is the energization win above. The rest of the toolkit groups into the
              work it took off my hands: sign-off, daily reporting, data integrity, and running it
              all unattended.
            </p>

            <div className="mt-12 space-y-10">
              {study.clusters.map((cluster) => {
                const Icon = CLUSTER_ICONS[cluster.icon];
                return (
                  <div
                    key={cluster.theme}
                    className="overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    {/* cluster header — a thin teal band */}
                    <div className="flex items-start gap-4 border-b border-border bg-experience/[0.07] px-6 py-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-experience text-experience-foreground">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{cluster.theme}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{cluster.summary}</p>
                      </div>
                    </div>

                    {/* cluster items */}
                    <ul className="divide-y divide-border">
                      {cluster.items.map((item) => (
                        <li
                          key={item.title}
                          className={
                            item.featured
                              ? "px-6 py-5 [box-shadow:inset_3px_0_0_hsl(var(--experience))]"
                              : "px-6 py-5"
                          }
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-base font-medium text-foreground">{item.title}</h4>
                            {item.featured ? (
                              <span className="rounded-full bg-experience/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-experience">
                                Featured
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                            {item.does}
                          </p>
                          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <p className="font-mono text-[11px] text-muted-foreground">{item.tech}</p>
                            <p className="text-[13px] font-medium text-experience">{item.impact}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The AI meta-layer — a dark teal band, hero of the whole story. */}
        <section className="relative overflow-hidden border-b border-experience/30 bg-[#0A2A28] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-experience-bright/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-experience-bright" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-experience-bright">
                    {study.meta.eyebrow}
                  </span>
                </span>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {study.meta.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {study.meta.body.map((para) => (
                    <p key={para} className="text-base leading-relaxed text-white/75">
                      {para}
                    </p>
                  ))}
                </div>
                <ul className="mt-7 space-y-3">
                  {study.meta.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-experience-bright"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <ExperienceMetaArt />
              </div>
            </div>
          </div>
        </section>

        {/* Deep dives — the two sub-cases that fold under this parent. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                Go deeper
              </span>
            </span>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Two pieces, in depth
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Two parts of this toolkit have their own full case study. They are sub-cases of the
              work above, not separate projects.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {study.subCases.map((sub) => (
                <a
                  key={sub.page}
                  href={sub.page}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-experience/50 hover:bg-experience/[0.04]"
                >
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{sub.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{sub.blurb}</p>
                  </div>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-experience transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Honest estimates note. */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="max-w-3xl rounded-xl border-l-2 border-experience bg-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-wide text-experience">
                On the numbers
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {study.estimatesNote}
              </p>
            </div>
          </div>
        </section>

        {/* CTA back */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-col items-start gap-6 rounded-xl border border-experience/30 bg-experience/[0.05] p-8 sm:flex-row sm:items-center sm:justify-between">
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
