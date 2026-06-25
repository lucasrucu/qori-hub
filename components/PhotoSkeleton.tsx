import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// Placeholder for an image not yet added. Dashed amber-tinted frame so it reads
// as "photo goes here" — swap for a real <Image> later. `label` hints the shot.
export function PhotoSkeleton({
  className,
  label,
  rounded = "lg",
}: {
  className?: string;
  label?: string;
  rounded?: "lg" | "full";
}) {
  return (
    <div
      role="img"
      aria-label={label ? `Placeholder: ${label}` : "Image placeholder"}
      className={cn(
        "flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary/40 bg-accent/40 text-muted-foreground",
        rounded === "full" ? "rounded-full" : "rounded-xl",
        className,
      )}
    >
      <ImageIcon className="h-6 w-6 opacity-60" aria-hidden="true" />
      {label ? <span className="px-3 text-center text-xs font-medium">{label}</span> : null}
    </div>
  );
}
