import type { Metadata } from "next";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/BrandIcons";
import { PhotoSkeleton } from "@/components/PhotoSkeleton";
import { QoriMark } from "@/components/QoriMark";
import { SaveContactButton } from "@/components/SaveContactButton";
import { PROFILE, SOCIALS } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${PROFILE.name} — ${PROFILE.title}`,
  description: `${PROFILE.name}. ${PROFILE.title} · ${PROFILE.location}. Connect with me.`,
};

// Link order is intentional: most professional first (Instagram last), per Lucas.
const LINKS = [
  { label: "LinkedIn", href: SOCIALS.linkedin, Icon: LinkedInIcon, external: true },
  { label: "GitHub", href: SOCIALS.github, Icon: GitHubIcon, external: true },
  { label: "Email", href: `mailto:${SOCIALS.email}`, Icon: Mail, external: false },
  { label: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon, external: true },
];

export default function CardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary/50 px-6 py-12">
      <main className="w-full max-w-sm">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <PhotoSkeleton
              label="Avatar"
              rounded="full"
              className="h-24 w-24 ring-4 ring-primary/20"
            />
            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
              {PROFILE.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{PROFILE.title}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {PROFILE.location}
            </p>
          </div>

          <div className="mt-7">
            <SaveContactButton />
          </div>

          <ul className="mt-4 space-y-2.5">
            {LINKS.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Icon className="h-5 w-5 text-foreground/70" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Full portfolio
          </a>
          <a href="/" aria-label="Qori home" className="inline-flex opacity-70">
            <QoriMark glyph="q" size={24} />
          </a>
        </div>
      </main>
    </div>
  );
}
