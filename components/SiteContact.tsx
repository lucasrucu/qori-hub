import { ArrowRight, Mail } from "lucide-react";

import { Avatar } from "@/components/Avatar";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { PROFILE, SOCIALS } from "@/lib/profile";

// Says whose work this is, and how to reach him, on every route that is not
// the home page.
//
// WHY THIS EXISTS: components/Footer.tsx is rendered by app/page.tsx and by
// nothing else, so a visitor landing straight on a case study, which is how
// most of them arrive, could read the whole page without learning a name or
// finding a way to get in touch. Eight of the nine routes were like that.
//
// Two tiers on purpose. The block is visible and meant to be noticed; the line
// under it is the small, quiet credit that belongs at the very bottom.
//
// Channels come from SOCIALS in lib/profile.ts, which is the only place a
// contact detail is allowed to be defined. Never hardcode one here, and never
// add a channel that is not already public on the site.

// Page accents. The default is Sovereign amber; the commissioning case study
// and its sub-cases run teal, Quorum runs blue, so the primary button matches
// the page it sits at the bottom of.
const ACCENTS = {
  default: {
    btn: "bg-primary text-primary-foreground",
    ring: "border-border",
  },
  experience: {
    btn: "bg-experience text-experience-foreground",
    ring: "border-experience/30",
  },
  quorum: {
    btn: "bg-quorum text-quorum-foreground",
    ring: "border-quorum/30",
  },
} as const;

export function SiteContact({ accent }: { accent?: "experience" | "quorum" }) {
  const a = ACCENTS[accent ?? "default"];

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* The visible block: a face, a name, a title, and the two ways in. */}
        <div
          className={`flex flex-col gap-7 rounded-xl border bg-card p-7 sm:p-8 md:flex-row md:items-center md:justify-between ${a.ring}`}
        >
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-secondary sm:h-16 sm:w-16">
              {/* Scaled up a touch: the mascot's own artboard has margin
                  around the orb, which reads as an empty ring at this size. */}
              <Avatar className="scale-[1.32]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Built by
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                {PROFILE.name}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">{PROFILE.title}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:shrink-0">
            <a
              href={`mailto:${SOCIALS.email}`}
              className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${a.btn}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
            <a
              href="/card"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              My card
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* The quiet line at the very bottom. */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">
              qori.land
            </a>
            <span className="px-1.5" aria-hidden="true">
              ·
            </span>
            {PROFILE.name}
            <span className="px-1.5" aria-hidden="true">
              ·
            </span>
            <a href="/projects" className="transition-colors hover:text-foreground">
              All projects
            </a>
          </p>
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SOCIALS.email}`}
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
