import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { QoriMark } from "@/components/QoriMark";
import { SOCIALS } from "@/lib/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "/card", label: "Card" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Qori home" className="inline-flex">
          <QoriMark glyph="q" label="Qori" />
        </a>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <div className="hidden items-center gap-5 sm:flex">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
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
        </div>
      </nav>
    </header>
  );
}
