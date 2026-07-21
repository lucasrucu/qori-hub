import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, BookOpen, Calendar, Users } from "lucide-react";
import { notFound } from "next/navigation";

import { Eyebrow } from "@/components/Eyebrow";
import { QoriMark } from "@/components/QoriMark";
import { PROFILE, RESEARCH } from "@/lib/profile";

const PAPER = RESEARCH.find((p) => p.slug === "ppe-yolo");

export const metadata: Metadata = PAPER
  ? {
      title: `${PAPER.title} — Lucas Ruiz`,
      description: PAPER.description,
    }
  : {};

export default function PpeYoloResearchPage() {
  if (!PAPER) notFound();
  const paper = PAPER;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" aria-label="Qori home" className="inline-flex">
            <QoriMark glyph="q" label="Qori" />
          </a>
          <a
            href="/#research"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back home
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid items-start gap-12 md:grid-cols-[1fr_auto]">
              <div>
                <Eyebrow>{paper.type}</Eyebrow>
                <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  {paper.title}
                </h1>

                <div className="mt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {paper.authors.join(", ")}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {paper.venue} · pp. {paper.pages}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    First online {paper.date}
                  </span>
                </div>

                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View on Springer
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {paper.coverImage ? (
                <div className="justify-self-center overflow-hidden rounded-lg border border-border shadow-[0_18px_40px_-24px_rgba(120,80,10,0.4)] md:justify-self-end">
                  <Image
                    src={paper.coverImage}
                    alt={`Cover of ${paper.venue}`}
                    width={184}
                    height={278}
                    className="h-auto w-[184px]"
                    priority
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Abstract / description */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>About the paper</Eyebrow>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
              {paper.description}
            </p>
          </div>
        </section>

        {/* Details table */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <Eyebrow>Publication details</Eyebrow>
            <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Type
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">{paper.type}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Authors
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">{paper.authors.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Venue
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">{paper.venue}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Pages
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">{paper.pages}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  First online
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">{paper.date}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  DOI
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">
                  <a
                    href={paper.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80"
                  >
                    {paper.doi}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* CTA back */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Read the full chapter on Springer.
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  The published version, full text and figures, lives on Springer. See the rest of
                  what {PROFILE.firstName} builds.
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
