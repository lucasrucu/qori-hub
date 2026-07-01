import { Activity, Bike, Mountain, Trophy } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { ImageCarousel } from "@/components/ImageCarousel";
import { PhotoSkeleton } from "@/components/PhotoSkeleton";
import { INTERESTS, type Interest } from "@/lib/profile";

const RACE_PHOTOS = [
  { src: "/images/interests/tri-paracas-1.jpg", alt: "Paracas triathlon, race day" },
  { src: "/images/interests/tri-paracas-2.jpg", alt: "Paracas triathlon, race day" },
  { src: "/images/interests/tri-paracas-3.jpg", alt: "Paracas triathlon, race day" },
  { src: "/images/interests/tri-paracas-4.jpg", alt: "Paracas triathlon, race day" },
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

        <div className="mt-10 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
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
          <div className="grid grid-rows-2 gap-4">
            <ImageCarousel images={RACE_PHOTOS} className="min-h-40" />
            <PhotoSkeleton label="Action shot — bike / snow" className="min-h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
