import { ArrowRight, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { QoriMark } from "@/components/QoriMark";
import { SOCIALS } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Let&apos;s talk</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Open to interesting data &amp; automation work. Grab my card or reach out directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/card"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              My card
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <QoriMark glyph="q" label="Qori" />
            <p className="text-sm text-muted-foreground">Built for myself — but feel free to explore.</p>
          </div>
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${SOCIALS.email}`}
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
