import Image from "next/image";

import { cn } from "@/lib/utils";

export type CollagePhoto = {
  src: string;
  alt: string;
  activity: string;
};

// Bento-style photo grid. Tiles are grouped by `activity` (adjacent photos
// from the same activity render next to each other) but the grid itself is
// a single continuous block — no per-activity sub-containers, so there's
// nothing here that stretches to match a sibling column's height. Each
// tile keeps its own aspect ratio regardless of how many photos exist.
export function PhotoCollage({ photos, className }: { photos: CollagePhoto[]; className?: string }) {
  if (photos.length === 0) return null;

  return (
    <div
      className={cn(
        "grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] sm:grid-cols-4",
        className,
      )}
    >
      {photos.map((photo, i) => {
        // First tile in the set reads as the "hero" of the collage and
        // spans two rows + two columns on larger screens for visual variety.
        const isHero = i === 0;
        return (
          <div
            key={photo.src}
            className={cn(
              "relative overflow-hidden rounded-xl bg-accent/40",
              isHero ? "col-span-2 row-span-2" : "col-span-1 row-span-1",
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover"
              priority={isHero}
            />
          </div>
        );
      })}
    </div>
  );
}
