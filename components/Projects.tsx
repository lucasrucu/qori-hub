import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { AppWindowFrame, BrowserFrame } from "@/components/DeviceFrame";
import { Eyebrow } from "@/components/Eyebrow";
import { PhotoSkeleton } from "@/components/PhotoSkeleton";
import { OTHER_PROJECTS, PROJECTS, type Project } from "@/lib/profile";

function ProjectHero({ project }: { project: Project }) {
  if (!project.image) {
    return (
      <PhotoSkeleton
        label={`${project.name} — app screenshot`}
        className="aspect-[16/10] w-full rounded-none border-x-0 border-t-0"
      />
    );
  }

  const heroImage = {
    src: project.image,
    alt: project.imageAlt ?? `${project.name} app screenshot`,
  };

  if (project.frame === "window") {
    return (
      <AppWindowFrame
        image={heroImage}
        title={project.frameLabel}
        fit={project.frameFit}
        className="border-b border-border"
      />
    );
  }
  if (project.frame === "browser") {
    return (
      <BrowserFrame
        image={heroImage}
        url={project.frameLabel}
        className="border-b border-border"
      />
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-secondary">
      <Image
        src={project.image}
        alt={heroImage.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
      <ProjectHero project={project} />
      <div className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
          {project.flagship ? (
            <span className="shrink-0 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
              Flagship build
            </span>
          ) : null}
        </div>
        {project.context ? (
          <p className="mt-1 font-mono text-sm text-muted-foreground">{project.context}</p>
        ) : null}
        <p className="mt-4 text-sm font-medium text-foreground/90">{project.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.gallery && project.gallery.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-3">
            {project.gallery.map((shot) => (
              <AppWindowFrame
                key={shot.src}
                image={{ src: shot.src, alt: shot.alt }}
                className="rounded-md border border-border p-2"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            ))}
          </div>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.page ? (
            <a
              href={project.page}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See how it works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Try it live
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          AI agents and automations I&apos;ve shipped
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Builds that prove the niche: software that takes manual, high-stakes data work off
          people&apos;s hands. Three are live and yours to try.
        </p>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Also built
        </h3>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {OTHER_PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
