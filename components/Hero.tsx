import { ArrowRight, MapPin } from "lucide-react";

import { Avatar } from "@/components/Avatar";
import { Eyebrow } from "@/components/Eyebrow";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { AuroraText } from "@/components/ui/aurora-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { PROFILE, SOCIALS } from "@/lib/profile";

// Split the tagline so a key phrase can shimmer (aurora) while the rest stays
// solid and readable. Content still lives in profile.ts.
const AURORA_PHRASE = "kill manual work";

function Headline({ tagline }: { tagline: string }) {
  const idx = tagline.toLowerCase().indexOf(AURORA_PHRASE);
  if (idx === -1) {
    return <>{tagline}</>;
  }
  const before = tagline.slice(0, idx);
  const phrase = tagline.slice(idx, idx + AURORA_PHRASE.length);
  const after = tagline.slice(idx + AURORA_PHRASE.length);
  return (
    <>
      {before}
      <AuroraText>{phrase}</AuroraText>
      {after}
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* Amber dot-pattern texture, faded toward the edges. */}
      <DotPattern
        glow
        className="[mask-image:radial-gradient(420px_circle_at_30%_40%,white,transparent)]"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow>{PROFILE.title}</Eyebrow>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            <Headline tagline={PROFILE.tagline} />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{PROFILE.intro}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {PROFILE.location}
            </span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.languages}</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See my projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2.5 text-foreground transition-colors hover:bg-accent"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2.5 text-foreground transition-colors hover:bg-accent"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[15rem] sm:max-w-xs md:mx-0">
          <div className="relative">
            {/* Soft amber glow behind the frame. */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-primary/20 blur-2xl"
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-xl ring-4 ring-primary/15">
              {/* Animated SVG mascot in place of a headshot. */}
              <Avatar />
              {/* Animated amber edge beam, on-brand Sovereign accent. */}
              <BorderBeam size={70} duration={8} borderWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
