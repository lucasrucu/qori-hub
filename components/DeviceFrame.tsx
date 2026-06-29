import Image from "next/image";

import { cn } from "@/lib/utils";

// Shared "stage" wrapper: an on-brand cream/amber gradient pad with a soft glow
// behind the frame, so a framed screenshot reads as a deliberate product shot
// instead of a bare capture. Used by both BrowserFrame and AppWindowFrame.
function Stage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden bg-gradient-to-br from-secondary via-background to-accent/60 p-4 sm:p-6",
        className,
      )}
    >
      {/* Amber glow puddle behind the frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/3 left-1/2 -z-10 h-[120%] w-[80%] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      {children}
    </div>
  );
}

// Three macOS-style traffic-light dots, tinted to the warm palette.
function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-positive/70" />
    </div>
  );
}

type FrameImage = {
  src: string;
  alt: string;
  /** Intrinsic-ish aspect of the captured content, defaults to 16/10. */
  aspect?: string;
};

/**
 * BrowserFrame wraps a web-app screenshot in a clean browser chrome:
 * traffic lights + a URL pill. For live web products (Career Agent, Finance, Snip).
 */
export function BrowserFrame({
  image,
  url,
  className,
  priority,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  image: FrameImage;
  url?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Stage className={className}>
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_40px_-20px_rgba(120,80,10,0.45)] ring-1 ring-black/5">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-border bg-secondary/70 px-3 py-2">
          <TrafficLights />
          {url ? (
            <div className="flex min-w-0 flex-1 items-center justify-center">
              <span className="max-w-full truncate rounded-md border border-border bg-background/80 px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
                {url}
              </span>
            </div>
          ) : (
            <div className="flex-1" />
          )}
          <div className="w-10 shrink-0" aria-hidden="true" />
        </div>
        {/* Screenshot */}
        <div
          className="relative w-full overflow-hidden bg-secondary"
          style={{ aspectRatio: image.aspect ?? "16 / 10" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      </div>
    </Stage>
  );
}

/**
 * AppWindowFrame wraps a native desktop-app screenshot in a titlebar window:
 * traffic lights + an app title. For installable products (rapid-pdf, Otto HUD).
 */
export function AppWindowFrame({
  image,
  title,
  className,
  priority,
  sizes = "(min-width: 768px) 50vw, 100vw",
  fit = "cover",
}: {
  image: FrameImage;
  title?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <Stage className={className}>
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_40px_-20px_rgba(120,80,10,0.45)] ring-1 ring-black/5">
        {/* Titlebar */}
        <div className="flex items-center gap-3 border-b border-border bg-secondary/70 px-3 py-2">
          <TrafficLights />
          {title ? (
            <span className="min-w-0 flex-1 truncate text-center text-[11px] font-medium text-muted-foreground">
              {title}
            </span>
          ) : (
            <div className="flex-1" />
          )}
          <div className="w-10 shrink-0" aria-hidden="true" />
        </div>
        {/* Screenshot */}
        <div
          className="relative w-full overflow-hidden bg-[#1a1a1a]"
          style={{ aspectRatio: image.aspect ?? "16 / 10" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={fit === "contain" ? "object-contain" : "object-cover object-top"}
          />
        </div>
      </div>
    </Stage>
  );
}
