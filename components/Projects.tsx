import { ArrowRight } from "lucide-react";

import { CardArt } from "@/components/CardArt";
import { Eyebrow } from "@/components/Eyebrow";
import { BorderBeam } from "@/components/ui/border-beam";
import { PROJECTS, type Project } from "@/lib/profile";

function ProjectCard({ project }: { project: Project }) {
  const exp = project.accent === "experience";
  return (
    <article
      className={
        exp
          ? "group relative flex h-full flex-col overflow-hidden rounded-xl border border-experience/40 bg-card transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(12,90,86,0.5)]"
          : "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(120,80,10,0.4)]"
      }
    >
      {/* Bespoke coded artwork — one consistent system, no screenshots. */}
      <div className="border-b border-border">
        {project.art ? (
          <CardArt art={project.art} />
        ) : (
          <div className="aspect-[16/10] w-full bg-secondary" />
        )}
      </div>

      <div className="flex h-full flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
          {project.flagship ? (
            <span
              className={
                exp
                  ? "shrink-0 rounded-full bg-experience/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-experience"
                  : "shrink-0 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary"
              }
            >
              Flagship
            </span>
          ) : null}
        </div>
        {project.context ? (
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">{project.context}</p>
        ) : null}
        <p className="mt-3 text-sm font-medium text-foreground/90">{project.tagline}</p>
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.page ? (
            <a
              href={project.page}
              target="_blank"
              rel="noopener noreferrer"
              className={
                exp
                  ? "inline-flex items-center justify-center gap-1.5 rounded-md bg-experience px-3.5 py-2 text-xs font-medium text-experience-foreground transition-opacity hover:opacity-90"
                  : "inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              }
            >
              See how it works
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Try it live
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>

      {/* Flagship builds get a slow beam tracing the card border. The umbrella
          experience card traces in teal; the rest in Sovereign gold. */}
      {project.flagship ? (
        exp ? (
          <BorderBeam size={70} duration={9} className="opacity-90" colorFrom="#0F7E78" colorTo="#1FB8AD" />
        ) : (
          <BorderBeam size={70} duration={9} className="opacity-90" />
        )
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
          AI agents and automations I&apos;ve shipped
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Builds that prove the niche: software that takes manual, high-stakes data work off
          people&apos;s hands. Several are live and yours to try.
        </p>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
