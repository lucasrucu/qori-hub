import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { CardArt } from "@/components/CardArt";
import { Eyebrow } from "@/components/Eyebrow";
import { QoriMark } from "@/components/QoriMark";
import { FEATURED_PROJECTS, MORE_PROJECTS, type Project } from "@/lib/profile";

export const metadata: Metadata = {
  title: "All projects — Lucas Ruiz",
  description:
    "The full shelf: every agent, automation, and desktop tool Lucas Ruiz has shipped, beyond the featured four.",
};

// Per-accent border tints for the compact cards.
const CARD_ACCENT = {
  default: "hover:border-primary/50",
  experience: "hover:border-experience/50",
  quorum: "hover:border-quorum/50",
} as const;

// A compact hint card: bespoke art, name, one line, links. No walls of text.
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
            // New tab, scoped to this listing only: leaving /projects to a case
            // study page with no back link would strand the visitor there.
            <a
              href={project.page}
              target="_blank"
              rel="noopener noreferrer"
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
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back home
          </a>
        </nav>
      </header>

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Eyebrow>The full shelf</Eyebrow>
            <h1 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              All projects
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Everything shipped beyond the featured four: assistants, field automations, and
              desktop tools. Each one is real, built to remove some manual work from my own life.
            </p>

            {/* The featured four, as a compact reference strip. New tab, same
                reasoning as the cards below: don't strand the visitor. */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono uppercase tracking-wide text-muted-foreground">
                Featured:
              </span>
              {FEATURED_PROJECTS.map((p) => (
                <a
                  key={p.name}
                  href={p.page ?? p.live ?? "/#projects"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-secondary px-3 py-1 font-medium text-secondary-foreground transition-colors hover:bg-accent"
                >
                  {p.name}
                </a>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_PROJECTS.map((project) => (
                <CompactCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex flex-col items-start gap-5 rounded-xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                The four that carry the story live on the front page.
              </p>
              <a
                href="/#projects"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                See the featured builds
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
