export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Lucas Ruiz — Data &amp; Automation Engineer
      </p>
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        I build tools I actually use.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Data &amp; automation engineer. I turn manual, repetitive work into software — on real
        industrial projects, and for myself.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          See my projects
        </a>
        <a
          href="https://github.com/lucasrucu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
