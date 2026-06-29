import { cn } from "@/lib/utils";

// Lightweight, pure-CSS "in motion" demos for the Otto page. No GIFs, no JS:
// the orb breathes, the rings rotate, and a command line types itself out via
// a stepped width animation. On-brand (amber on dark HUD), respects
// prefers-reduced-motion through the keyframes defined in globals.css.

function HudStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-gradient-to-b from-[#262019] to-[#171310] shadow-[0_18px_40px_-20px_rgba(120,80,10,0.5)] ring-1 ring-black/10">
      {children}
    </div>
  );
}

// The orb listening, then speaking back.
export function OttoOrbDemo() {
  return (
    <HudStage>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative h-40 w-40">
          {/* Rotating dashed rings */}
          <span className="absolute inset-0 rounded-full border border-dashed border-primary/30 [animation:otto-spin_14s_linear_infinite]" />
          <span className="absolute inset-3 rounded-full border border-dashed border-primary/20 [animation:otto-spin-rev_10s_linear_infinite]" />
          {/* Glow */}
          <span className="absolute inset-6 rounded-full bg-primary/30 blur-2xl [animation:otto-breathe_3.2s_ease-in-out_infinite]" />
          {/* Core orb */}
          <span className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-300 to-primary shadow-[0_0_40px_rgba(245,178,20,0.6)] [animation:otto-breathe_3.2s_ease-in-out_infinite]" />
          {/* Highlight */}
          <span className="absolute left-[38%] top-[34%] h-5 w-5 rounded-full bg-white/70 blur-[2px]" />
        </div>
      </div>
      {/* Status caption that cross-fades listening -> speaking */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <span className="rounded-full border border-primary/30 bg-black/30 px-3 py-1 font-mono text-[11px] text-primary/90 [animation:otto-status_6s_ease-in-out_infinite]">
          listening…
        </span>
      </div>
    </HudStage>
  );
}

// A voice command launching an automation: typed command + a fake run log.
export function OttoCommandDemo() {
  const steps = [
    "Routing to skill: powerbi-c2-report",
    "Pulling PIMS exports…",
    "Refreshing dashboard…",
    "Done. Report ready.",
  ];
  return (
    <HudStage>
      <div className="flex h-full flex-col p-5 font-mono text-[12px]">
        {/* Typed command line */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-amber-100/90">
          <span className="text-primary">›</span>
          <span className="overflow-hidden whitespace-nowrap [animation:otto-type_5s_steps(28)_infinite] border-r-2 border-primary/70">
            update the C2 dashboard
          </span>
        </div>
        {/* Run log, lines reveal in sequence */}
        <ul className="mt-3 space-y-2 text-muted-foreground">
          {steps.map((line, i) => (
            <li
              key={line}
              className="flex items-center gap-2 opacity-0 [animation:otto-line_5s_ease-in-out_infinite]"
              style={{ animationDelay: `${1.4 + i * 0.7}s` }}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full",
                  i === steps.length - 1 ? "bg-positive" : "bg-primary/70",
                )}
              />
              <span className={i === steps.length - 1 ? "text-amber-100/90" : ""}>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </HudStage>
  );
}
