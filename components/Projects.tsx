import { ArrowRight } from "lucide-react";

import { CardArt } from "@/components/CardArt";
import { Eyebrow } from "@/components/Eyebrow";
import { BorderBeam } from "@/components/ui/border-beam";
import { FEATURED_PROJECTS, type Project } from "@/lib/profile";

// Per-accent styling. Full literal class strings so Tailwind's content scan
// picks them up. Beam colors mirror each accent's tokens in globals.css.
const ACCENTS = {
  default: {
    card: "border-border hover:shadow-[0_18px_40px_-24px_rgba(120,80,10,0.4)]",
    chip: "bg-primary/15 text-primary",
    btn: "bg-primary text-primary-foreground",
    beam: { from: "#F1AE04", to: "#F6C44A" },
  },
  experience: {
    card: "border-experience/40 hover:shadow-[0_18px_40px_-24px_rgba(12,90,86,0.5)]",
    chip: "bg-experience/15 text-experience",
    btn: "bg-experience text-experience-foreground",
    beam: { from: "#0F7E78", to: "#1FB8AD" },
  },
  quorum: {
    card: "border-quorum/40 hover:shadow-[0_18px_40px_-24px_rgba(77,124,254,0.5)]",
    chip: "bg-quorum/15 text-quorum",
    btn: "bg-quorum text-quorum-foreground",
    beam: { from: "#4D7CFE", to: "#8BA6FF" },
  },
} as const;

// Compact card for the landing page's featured row. Only a true flagship
// (project.flagship) gets the badge + border-beam; the rest are featured but
// unbadged, distinguished only by sitting in this row.
export function ProjectCard({ project }: { project: Project }) {
  const accent = ACCENTS[project.accent ?? "default"];
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-shadow ${accent.card}`}
    >
      {/* Bespoke coded artwork — one consistent system, no screenshots. */}
      <div className="border-b border-border">
        {project.art ? (
          <CardArt art={project.art} className="aspect-[16/9]" />
        ) : (
          <div className="aspect-[16/9] w-full bg-secondary" />
        )}
      </div>

      <div className="flex h-full flex-col p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
          {project.flagship ? (
            <span
              className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${accent.chip}`}
            >
              Flagship
            </span>
          ) : null}
        </div>
        {project.context ? (
          <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">{project.context}</p>
        ) : null}
        <p className="mt-2 text-[13px] font-medium leading-snug text-foreground/90">
          {project.tagline}
        </p>
        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {project.page ? (
            <a
              href={project.page}
              className={`inline-flex items-center justify-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-medium transition-opacity hover:opacity-90 ${accent.btn}`}
            >
              See how it works
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-2.5 py-1.5 text-[11px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Try it live
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-2.5 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>

      {/* Only the flagship gets the slow beam tracing the card border. */}
      {project.flagship ? (
        <BorderBeam
          size={60}
          duration={9}
          className="opacity-90"
          colorFrom={accent.beam.from}
          colorTo={accent.beam.to}
        />
      ) : null}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Featured builds
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          The flagship and three more that prove the niche: software that takes manual,
          high-stakes data work off people&apos;s hands. The rest of the shelf is one click away.
        </p>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            See all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
