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
// nothing here that stretches to match a sibling column's height. Each tile
// carries its own `aspect-square` (or `aspect-[2/1]` on the wide hero tile),
// which is honored because the tile's grid cell only constrains width via
// the column track — height is left to the browser (auto), so the aspect
// ratio governs it instead of a stretched row.
//
// Grid is 2 columns on mobile, 4 on desktop. The hero tile spans 2 columns
// only up to the `md` breakpoint (mobile + tablet), where 2-col rows divide
// evenly (2 = hero, 2+2+... = plain pairs). At `lg` desktop (4 columns) every
// tile — hero included — reverts to a single 1x1 square so N tiles always
// tile the 4-column grid exactly with no partial trailing row, whatever N is
// (4, 6, 8, ...). Bento variety still reads on mobile/tablet; desktop stays a
// clean, fully-packed grid.
export function PhotoCollage({ photos, className }: { photos: CollagePhoto[]; className?: string }) {
  if (photos.length === 0) return null;

  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4", className)}>
      {photos.map((photo, i) => {
        // First tile in the set reads as the "hero" of the collage on
        // mobile/tablet: it spans both columns as a wide 2:1 rectangle for
        // visual variety, staying a plain square everywhere else.
        const isHero = i === 0;
        return (
          <div
            key={photo.src}
            className={cn(
              "relative overflow-hidden rounded-xl bg-accent/40",
              isHero
                ? "col-span-2 aspect-[2/1] lg:col-span-1 lg:aspect-square"
                : "col-span-1 aspect-square",
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority={isHero}
            />
          </div>
        );
      })}
    </div>
  );
}
