import { Eyebrow } from "@/components/Eyebrow";
import { PROFILE, SKILLS } from "@/lib/profile";

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/60 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Eyebrow>What I know</Eyebrow>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Tools &amp; skills
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SKILLS.map((group) => (
            <div key={group.label} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Fluent in {PROFILE.languages} — effective across time zones and cultures.
        </p>
      </div>
    </section>
  );
}
