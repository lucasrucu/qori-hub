import { existsSync } from "node:fs";
import { join } from "node:path";

import type { Metadata } from "next";
import { ArrowLeft, FileText, Paintbrush, Search, Users } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { NoeArchitecture, ToolFrame } from "@/components/NoeMotion";
import { QoriMark } from "@/components/QoriMark";
import { SiteContact } from "@/components/SiteContact";
import { NOE, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${NOE.name}: ${NOE.tagline}`,
  description: NOE.intro,
  // Only Lucas is named. The co-developer is credited by role, never by name,
  // until he lifts the standing rule. See NOE.credit in lib/profile.ts.
  authors: [{ name: PROFILE.name, url: "https://qori.land" }],
};

// Renders the collaborator: their name once Lucas sets it, otherwise the
// unnamed form, and as a link when a url exists. Every credit on this page
// goes through this, so dropping a name in later is a data edit, not a
// redesign.
function Collaborator() {
  const { name, url, anon } = NOE.credit;
  if (name && url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-experience transition-opacity hover:opacity-80"
      >
        {name}
      </a>
    );
  }
  return <>{name ?? anon}</>;
}

const TOOL_ICONS = {
  fileText: FileText,
  paintbrush: Paintbrush,
  search: Search,
} as const;

// ToolFrame's coded placeholder is keyed by glyph; the tools are ordered
// Generator, Painter, Finder, so index maps cleanly to the three glyphs.
const TOOL_GLYPHS = ["doc", "brush", "find"] as const;

// The screenshots in public/noe/ may not exist yet (a teammate ships them later).
// Only pass a shot path when the file is really there, otherwise ToolFrame falls
// back to its coded placeholder instead of rendering a broken image.
const hasShot = (p: string) => existsSync(join(process.cwd(), "public", p));

export default function NoePage() {
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
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
              <div>
                <a
                  href="/commissioning-automation"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-experience transition-opacity hover:opacity-80"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Part of: Industrial commissioning automation
                </a>
                <div className="mt-4">
                  <Eyebrow accent="experience">{NOE.eyebrow}</Eyebrow>
                </div>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {NOE.name}
                </h1>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-experience">
                  {NOE.version}
                </p>
                {/* The byline. Same weight and same shape as the author row on
                    the research paper, because this is joint work and the
                    credit used to be six grey words at the bottom of the page. */}
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 shrink-0 text-experience" aria-hidden="true" />
                  {PROFILE.name} and <Collaborator />
                </p>
                <p className="mt-4 text-xl text-foreground/90">{NOE.tagline}</p>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">{NOE.intro}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {NOE.context}
                </p>
              </div>
              <div className="w-full">
                <ToolFrame
                  title={NOE.name}
                  shot={hasShot("/noe/launcher.png") ? "/noe/launcher.png" : null}
                  glyph="doc"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow accent="experience">What it is</Eyebrow>
            <div className="mt-6 max-w-3xl space-y-4">
              {NOE.what.map((para) => (
                <p key={para} className="text-lg leading-relaxed text-foreground/80">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Credit. Sits high on the page on purpose: this is where a reader
            forms their model of who built what, and the number this toolkit is
            famous for comes from the half that is not mine. */}
        <section className="border-b border-border bg-experience/[0.04]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow accent="experience">Credit</Eyebrow>
            <div className="mt-6 max-w-3xl rounded-2xl border border-experience/30 bg-card p-7 [box-shadow:inset_3px_0_0_hsl(var(--experience))]">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  {PROFILE.name} and <Collaborator />
                </h2>
                <span className="font-mono text-[11px] uppercase tracking-wide text-experience">
                  {NOE.credit.role}
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                {NOE.credit.detail}
              </p>
            </div>
          </div>
        </section>

        {/* The three tools, each with its own window frame */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow accent="experience">The three tools</Eyebrow>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              One launcher, three focused tools
            </h2>

            <div className="mt-10 space-y-12">
              {NOE.tools.map((tool, i) => {
                const Icon = TOOL_ICONS[tool.icon];
                const glyph = TOOL_GLYPHS[i];
                return (
                  <div
                    key={tool.title}
                    className="grid items-center gap-8 md:grid-cols-2"
                  >
                    <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                      <ToolFrame
                        title={tool.title}
                        shot={hasShot(tool.shot) ? tool.shot : null}
                        glyph={glyph}
                      />
                    </div>
                    <div className={i % 2 === 1 ? "md:order-1" : undefined}>
                      <Icon className="h-6 w-6 text-experience" aria-hidden="true" />
                      <h3 className="mt-4 text-lg font-medium text-foreground">{tool.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tool.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Under the hood + outcomes */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <Eyebrow accent="experience">Under the hood</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  How it works
                </h2>
                <div className="mt-8">
                  <NoeArchitecture />
                </div>
                <ul className="mt-8 space-y-3">
                  {NOE.architecture.map((item) => (
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
                <Eyebrow accent="experience">What changed</Eyebrow>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Outcomes
                </h2>
                <ul className="mt-8 space-y-4">
                  {NOE.outcomes.map((item) => (
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

        {/* Where it stands */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow accent="experience">Where it stands</Eyebrow>
            <div className="mt-6 max-w-3xl">
              <p className="text-lg leading-relaxed text-foreground/80">{NOE.status}</p>
            </div>
            <h3 className="mt-10 text-base font-medium text-foreground">If it gets revived</h3>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {NOE.roadmap.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA back */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Real field work, taken off engineers&apos; hands by code.
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

      <SiteContact accent="experience" />
    </div>
  );
}
