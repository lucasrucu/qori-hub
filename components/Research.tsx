import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { RESEARCH } from "@/lib/profile";

// Published research, shown on the landing page as a credibility item next to
// experience and education. One paper today; the shape supports more later.
export function Research() {
  if (RESEARCH.length === 0) return null;

  return (
    <section id="research" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Eyebrow>Research</Eyebrow>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Published research
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Academic work from my time at UPC, published and peer-reviewed.
        </p>

        <div className="mt-8 space-y-5">
          {RESEARCH.map((paper) => (
            <article
              key={paper.slug}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:flex-row sm:p-7"
            >
              {paper.coverImage ? (
                <div className="shrink-0 self-start overflow-hidden rounded-md border border-border">
                  <Image
                    src={paper.coverImage}
                    alt={`Cover of ${paper.venue}`}
                    width={92}
                    height={139}
                    className="h-auto w-[92px]"
                  />
                </div>
              ) : (
                <div
                  className="flex h-[139px] w-[92px] shrink-0 flex-col items-center justify-center gap-2 self-start rounded-md border border-border bg-secondary p-2 text-center"
                  aria-hidden="true"
                >
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span className="text-[9px] font-medium leading-tight text-muted-foreground">
                    CVC 2026
                  </span>
                </div>
              )}

              <div className="flex-1">
                <span className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {paper.type}
                </span>
                <h3 className="mt-3 text-lg font-medium leading-snug text-foreground">
                  {paper.title}
                </h3>
                <p className="mt-1.5 text-sm text-foreground/70">{paper.authors.join(", ")}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {paper.venue} · pp. {paper.pages} · {paper.date}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {paper.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
                  <a
                    href={`/research/${paper.slug}`}
                    className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={paper.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    View on Springer
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
