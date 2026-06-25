type Project = {
  name: string;
  subdomain: string;
  description: string;
  tech: string[];
  live: string;
  repo: string;
};

const PROJECTS: Project[] = [
  {
    name: "Financial Dashboard",
    subdomain: "finance.qori.land",
    description:
      "A multi-bank personal finance dashboard. Connects accounts through Plaid, categorizes transactions, and uses Claude to surface spending insights — my whole financial picture in one place.",
    tech: ["Next.js", "TypeScript", "Supabase", "Plaid", "Claude", "Vercel"],
    live: "https://finance.qori.land",
    repo: "https://github.com/lucasrucu/Financial-Dashboard",
  },
  {
    name: "Career Agent",
    subdomain: "career.qori.land",
    description:
      "An AI job-search assistant. It parses your resume into a structured profile, pulls real job listings, scores how well you match each role, and drafts a tailored, ATS-friendly resume from your real experience.",
    tech: ["Next.js", "TypeScript", "Supabase", "Claude", "Adzuna", "Vercel"],
    live: "https://career.qori.land",
    repo: "https://github.com/lucasrucu/career-agent",
  },
  {
    name: "Snip",
    subdomain: "links.qori.land",
    description:
      "A personal URL shortener with click tracking. Paste a long link, get a short one on my own domain, and watch how often it's used.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    live: "https://links.qori.land",
    repo: "https://github.com/lucasrucu/snip",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col rounded-lg border border-border bg-card p-6"
          >
            <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
            <p className="mt-1 font-mono text-sm text-muted-foreground">{project.subdomain}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
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
            <div className="mt-6 flex flex-wrap gap-3 pt-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Live demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
