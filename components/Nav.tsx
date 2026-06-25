import { QoriMark } from "@/components/QoriMark";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Qori home" className="inline-flex">
          <QoriMark glyph="q" label="Qori" />
        </a>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#projects" className="transition-colors hover:text-foreground">
            Projects
          </a>
          <a
            href="https://github.com/lucasrucu"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="mailto:lucasruiz1336@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
