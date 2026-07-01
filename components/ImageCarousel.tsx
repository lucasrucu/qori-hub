"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4000;

export function ImageCarousel({
  images,
  className,
  autoplay = true,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  autoplay?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [autoplay, paused, images.length]);

  if (images.length === 0) return null;

  return (
    <div
      className={cn("group relative aspect-square overflow-hidden rounded-xl", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className={cn(
            "object-cover transition-opacity duration-500",
            i === index ? "opacity-100" : "opacity-0",
          )}
          priority={i === 0}
        />
      ))}

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => setIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          >
            ›
          </button>
          <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  i === index ? "bg-primary" : "bg-background/70",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
