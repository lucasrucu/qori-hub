import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Users } from "lucide-react";

import { ExperienceHero, ExperienceMetaArt } from "@/components/ExperienceMotion";
import { QoriMark } from "@/components/QoriMark";
import { EXPERIENCE_STUDY, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${EXPERIENCE_STUDY.name}: ${EXPERIENCE_STUDY.tagline}`,
  description: EXPERIENCE_STUDY.intro,
};

export default function ExperiencePage() {
  const study = EXPERIENCE_STUDY;
  // The Commissioning Suite entry is held as `draft` until Lucas writes it in
  // September. See the note on it in lib/profile.ts.
  const children = study.children.filter((c) => !c.draft);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" aria-label="Qori home" className="inline-flex">
            <QoriMark glyph="q" label="Qori" />
          </a>
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </a>
        </nav>
      </header>

      <main>
        {/* Hero: a deep teal band so the page opens rich, not white. */}
        <section className="relative overflow-hidden border-b border-experience/30 bg-[#0A2A28] text-white">
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

          </div>
        </section>

        {/* By the numbers: the scale it ran against. Light band so it breaks
            up the teal. No time-saved figure lives here or anywhere else on the
            page: the only numbers are the project's scale anchors. */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                By the numbers
              </span>
            </span>

            {/* The scale anchors. */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {study.scale.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-6">
                  <p className="text-3xl font-semibold tracking-tight text-experience sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The AI meta-layer: moved up, before the toolkit. The thing that ties
            the discrete tools into one system. A dark teal band, the hero idea. */}
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

        {/* The children. This page is a PARENT CATEGORY, not a single project,
            and these are the named pieces under it. Each one carries its own
            number and its own credit line, which is the point: the flat "I
            built" list underneath used to include work that is not mine alone,
            and a shared disclaimer at the bottom of a page is not a credit. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                What is under it
              </span>
            </span>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              The named pieces
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Each of these is its own project. Two have a full case study; the rest are
              described here.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {children.map((child) => {
                const body = (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">{child.name}</h3>
                      {child.page ? (
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-experience transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">
                      {child.blurb}
                    </p>
                    {child.stat ? (
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-experience">
                        {child.stat}
                      </p>
                    ) : null}
                    {child.credit ? (
                      <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70">
                        <Users className="h-3.5 w-3.5 shrink-0 text-experience" aria-hidden="true" />
                        {child.credit}
                      </p>
                    ) : null}
                  </>
                );
                const shell =
                  "group flex flex-col rounded-2xl border border-experience/30 bg-card p-6 [box-shadow:inset_3px_0_0_hsl(var(--experience))]";
                return child.page ? (
                  <a
                    key={child.name}
                    href={child.page}
                    className={`${shell} transition-colors hover:bg-experience/[0.04]`}
                  >
                    {body}
                  </a>
                ) : (
                  <div key={child.name} className={shell}>
                    {body}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The supporting toolkit. Flat cards, each just what it does. The named
            children above are deliberately not repeated in here. */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                The rest of the toolkit
              </span>
            </span>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              The smaller automations underneath
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Less visible than the pieces above, and the reason the day runs without me.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.automations.map((a) => (
                <div key={a.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.does}</p>
                </div>
              ))}
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
                href="/projects"
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
