import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { CardArt } from "@/components/CardArt";
import { Eyebrow } from "@/components/Eyebrow";
import { ProjectCard } from "@/components/Projects";
import { QoriMark } from "@/components/QoriMark";
import { FEATURED_PROJECTS, IN_BUILD, MORE_PROJECTS, type Project } from "@/lib/profile";

export const metadata: Metadata = {
  title: "All projects · Lucas Ruiz",
  description:
    "Every agent, automation, and desktop tool Lucas Ruiz has shipped, ranked: the featured builds first, then the rest of the shelf.",
};

// Per-accent border tints for the compact cards.
const CARD_ACCENT = {
  default: "hover:border-primary/50",
  experience: "hover:border-experience/50",
  quorum: "hover:border-quorum/50",
} as const;

// A compact hint card: bespoke art, name, one line, links. No walls of text.
// The featured set above does NOT use this; it uses the same full ProjectCard
// the homepage uses, so the ranking reads the same way on both pages.
function CompactCard({ project }: { project: Project }) {
  const hover = CARD_ACCENT[project.accent ?? "default"];
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors ${hover}`}
    >
      <div className="border-b border-border">
        {project.art ? <CardArt art={project.art} /> : null}
      </div>
      <div className="flex h-full flex-col p-4">
        <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
        {project.context ? (
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{project.context}</p>
        ) : null}
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs font-medium">
          {project.page ? (
            // Same tab. Internal links never open a new tab anywhere on this
            // site, and every case study now carries a real "All projects"
            // link back here, so nobody gets stranded.
            <a
              href={project.page}
              className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
            >
              Case study
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
            >
              Live
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" aria-label="Qori home" className="inline-flex">
            <QoriMark glyph="q" label="Qori" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back home
          </a>
        </nav>
      </header>

      <main>
        {/* The featured set, ranked, with the same full cards the homepage
            uses. This page used to invert its own hierarchy: the featured
            builds were grey pills with no art, no colour and no description,
            sitting above illustrated cards for everything else. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Eyebrow>Selected work</Eyebrow>
            <h1 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              All projects
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Ranked, not listed. The builds that carry the story come first, then the rest of the
              shelf. Each one is real, built to remove some manual work from my own life.
            </p>

            <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PROJECTS.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* The rest of the shelf. */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Eyebrow>The rest of the shelf</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Everything else that shipped
            </h2>

            <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_PROJECTS.map((project) => (
                <CompactCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* In build. Renders nothing while IN_BUILD is empty, which is the
            intended resting state: an entry needs a real state or date, and a
            stale "coming soon" list reads worse than no list. */}
        {IN_BUILD.length > 0 ? (
          <section className="border-b border-border">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
              <Eyebrow>In build</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                What I am building now
              </h2>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {IN_BUILD.map((item) => (
                  <li key={item.name} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                      <span className="shrink-0 rounded-full border border-primary/50 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                        {item.state}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.blurb}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex flex-col items-start gap-5 rounded-xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                The rest of the story, the field work and the research, is on the front page.
              </p>
              <a
                href="/"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back home
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
