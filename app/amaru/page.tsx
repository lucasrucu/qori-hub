import type { Metadata } from "next";
import { ArrowLeft, Code2, GitBranch, Mic, MonitorSmartphone, ShieldCheck, Workflow } from "lucide-react";

import { AmaruRecordDemo, AmaruSplitDemo } from "@/components/AmaruMotion";
import { CardArt } from "@/components/CardArt";
import { Eyebrow } from "@/components/Eyebrow";
import { QoriMark } from "@/components/QoriMark";
import { SiteContact } from "@/components/SiteContact";
import { AMARU, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${AMARU.name}: ${AMARU.tagline}`,
  description: AMARU.intro,
};

// SECURITY, before adding anything to this page: publish the SHAPE and the
// JUDGEMENT, never the CONTENTS. This assistant runs Lucas's real life, so a
// single example carrying real input would give away more than the whole rest
// of the page. No personal data, no schema, no deployment detail, no costs.
// See the block comment on AMARU in lib/profile.ts.
const CAP_ICONS = {
  mic: Mic,
  workflow: Workflow,
  code: Code2,
  browser: MonitorSmartphone,
  review: ShieldCheck,
  deploy: GitBranch,
} as const;

export default function AmaruPage() {
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
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 sm:py-24 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow>{AMARU.eyebrow}</Eyebrow>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {AMARU.name}
              </h1>
              <p className="mt-4 text-xl text-foreground/90">{AMARU.tagline}</p>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">{AMARU.intro}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-3 py-1 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {AMARU.status}
                </p>
                <a
                  href="/otto"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" />
                  Otto was v1
                </a>
              </div>
            </div>
            {/* The coded card artwork, reused at hero size: the app on the left
                feeding a queue into a router and its specialist agents. */}
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-border md:mx-0">
              <CardArt art="amaru" />
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>What it is</Eyebrow>
            <div className="mt-6 max-w-3xl space-y-4">
              {AMARU.what.map((para) => (
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
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AMARU.capabilities.map((cap) => {
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

        {/* The principles. This is the section the page exists for: v1 is what
            taught them, and each one is a rule that came out of a real defect. */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>What v1 taught it</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Four rules, each one a mistake I made first
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A year of using v1 every day is the only reason these exist. None of them is a
              preference. Each is the shape of a failure, written down so the system cannot
              repeat it.
            </p>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2">
              {AMARU.principles.map((p, i) => (
                <li key={p.rule} className="rounded-xl border border-border bg-card p-6">
                  <span className="font-mono text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
                    {p.rule}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {p.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Concrete jobs, in the abstract. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>In practice</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Real jobs it runs
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {AMARU.does.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground/80"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Demos + architecture */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
              <div>
                <Eyebrow>See the shape</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  In motion
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Diagrams, not screenshots. {AMARU.privacy}
                </p>
                <div className="mt-8 grid gap-4">
                  <AmaruSplitDemo />
                  <AmaruRecordDemo />
                </div>
              </div>
              <div>
                <Eyebrow>Under the hood</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  How it works
                </h2>
                <ul className="mt-8 space-y-3">
                  {AMARU.architecture.map((item) => (
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
                  Otto proved the idea. Amaru is the version that learned from it.
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  The contents stay private. The architecture is the point. See the rest of what{" "}
                  {PROFILE.firstName} builds.
                </p>
              </div>
              <a
                href="/projects"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteContact />
    </div>
  );
}
