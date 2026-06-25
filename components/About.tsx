import { Eyebrow } from "@/components/Eyebrow";
import { PROFILE } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="bg-secondary/60 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Eyebrow>Who I am</Eyebrow>
        <div className="mt-6 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {PROFILE.about.map((para) => (
              <p key={para} className="max-w-2xl text-lg leading-relaxed text-foreground/80">
                {para}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Currently
            </p>
            <ul className="mt-4 space-y-2">
              {PROFILE.now.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
