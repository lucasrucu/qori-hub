import { QoriMark } from "@/components/QoriMark";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <QoriMark glyph="q" label="Qori" />
          <p className="text-sm text-muted-foreground">
            Built for myself — but feel free to explore.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://linkedin.com/in/lucasruiz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
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
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
