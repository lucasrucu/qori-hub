import { Activity, Bike, Mountain, Trophy } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { PhotoCollage, type CollagePhoto } from "@/components/PhotoCollage";
import { INTERESTS, type Interest } from "@/lib/profile";

// Photos for the bento collage below the activity cards. Grouped by
// `activity` so photos from the same activity land next to each other in
// the grid. To add a photo later: drop the file in public/images/interests/
// and append an entry here — no other changes needed. Only "Triathlon" is
// populated today; the other activities (Endurance, Enduro MTB,
// Snowboarding) will fill in as photos come in.
const INTEREST_PHOTOS: CollagePhoto[] = [
  { src: "/images/interests/tri-paracas-1.jpg", alt: "Paracas triathlon, race day", activity: "Triathlon" },
  { src: "/images/interests/tri-paracas-2.jpg", alt: "Paracas triathlon, race day", activity: "Triathlon" },
  { src: "/images/interests/tri-paracas-3.jpg", alt: "Paracas triathlon, race day", activity: "Triathlon" },
  { src: "/images/interests/tri-paracas-4.jpg", alt: "Paracas triathlon, race day", activity: "Triathlon" },
];

const ICONS: Record<Interest["icon"], typeof Trophy> = {
  trophy: Trophy,
  activity: Activity,
  bike: Bike,
  mountain: Mountain,
};

export function Interests() {
  return (
    <section id="interests" className="bg-accent/40 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Eyebrow>Beyond work</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          What I do when I&apos;m not building
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          The same approach I bring to work: structured preparation, resilience under pressure, and a
          drive to keep improving.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INTERESTS.map((interest) => {
            const Icon = ICONS[interest.icon];
            return (
              <div
                key={interest.title}
                className="flex flex-col rounded-lg border border-border bg-card p-5"
              >
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-medium text-foreground">{interest.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {interest.detail}
                </p>
              </div>
            );
          })}
        </div>

        <PhotoCollage photos={INTEREST_PHOTOS} className="mt-6" />
      </div>
    </section>
  );
}
