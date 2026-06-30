import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ExperienceHero, ExperienceMetaArt } from "@/components/ExperienceMotion";
import { QoriMark } from "@/components/QoriMark";
import { EXPERIENCE_STUDY, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${EXPERIENCE_STUDY.name}: ${EXPERIENCE_STUDY.tagline}`,
  description: EXPERIENCE_STUDY.intro,
};

export default function ExperiencePage() {
  const study = EXPERIENCE_STUDY;
  const featured = study.automations.filter((a) => a.featured);
  const rest = study.automations.filter((a) => !a.featured);

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

        {/* By the numbers — the scale it ran against + the NoE headline stat.
            Light band so it breaks up the teal. */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                By the numbers
              </span>
            </span>

            {/* The NoE flagship, as one stat. */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-experience/30 bg-card">
              <div className="grid gap-px bg-border sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
                <div className="bg-card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-experience">
                    Flagship
                  </p>
                  <p className="mt-1.5 text-base font-medium leading-snug text-foreground">
                    {study.noe.label}
                  </p>
                </div>
                <div className="bg-card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    By hand
                  </p>
                  <p className="mt-1.5 text-2xl font-semibold text-foreground">{study.noe.before}</p>
                </div>
                <div className="bg-card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    With the tool
                  </p>
                  <p className="mt-1.5 text-2xl font-semibold text-experience">{study.noe.after}</p>
                </div>
                <div className="bg-experience p-6 text-experience-foreground">
                  <p className="font-mono text-[11px] uppercase tracking-wide opacity-80">Saved</p>
                  <p className="mt-1.5 text-2xl font-semibold">{study.noe.saved}</p>
                </div>
              </div>
            </div>
            <p className="mt-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
              {study.noe.note}
            </p>

            {/* The scale anchors. */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
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

        {/* The AI meta-layer — moved up, before the toolkit. The thing that ties
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

        {/* The toolkit — a flat set of cards. 4 spotlighted, the rest compact.
            Each card is just what it does. No tech list, no time figure. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-experience" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-experience">
                The toolkit
              </span>
            </span>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Thirteen automations, doing the repetitive work
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              The four that did the most heavy lifting, then the rest of the toolkit.
            </p>

            {/* Spotlight: the 4 featured. */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {featured.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-experience/30 bg-card p-6 [box-shadow:inset_3px_0_0_hsl(var(--experience))]"
                >
                  <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">{a.does}</p>
                </div>
              ))}
            </div>

            {/* The rest, compact. */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <div key={a.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.does}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep dives — the two sub-cases that fold under this parent. Open in a
            new tab, and both pages carry this experience theme. */}
        <section className="border-b border-border bg-secondary/40">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-experience/50 hover:bg-experience/[0.04]"
                >
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{sub.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{sub.blurb}</p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-experience transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Honest estimates note. */}
        <section className="border-b border-border">
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
