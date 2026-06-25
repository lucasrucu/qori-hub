import { GraduationCap } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { EDUCATION, EXPERIENCE } from "@/lib/profile";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Where I&apos;ve worked
        </h2>

        <ol className="mt-10 space-y-8 border-l-2 border-border pl-6 sm:pl-8">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.dates}`} className="relative">
              <span
                className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary sm:-left-[2.45rem]"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-x-3 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-foreground">{job.role}</h3>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">{job.dates}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-foreground/70">
                {job.company} <span className="text-muted-foreground">· {job.location}</span>
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {job.blurb}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-start gap-3 rounded-lg border border-border bg-card p-5">
          <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div className="flex flex-col gap-x-3 sm:flex-row sm:items-baseline sm:justify-between sm:w-full">
            <div>
              <h3 className="text-base font-medium text-foreground">{EDUCATION.degree}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {EDUCATION.school} · {EDUCATION.location}
              </p>
            </div>
            <span className="shrink-0 font-mono text-sm text-muted-foreground">{EDUCATION.dates}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
