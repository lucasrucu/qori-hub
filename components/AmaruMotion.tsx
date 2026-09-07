// Pure-CSS "in motion" panels for the Amaru page. No GIFs, no JS, no
// screenshots of the real app: the app is private, so these draw the SHAPE of
// the system and nothing that runs through it.
//
// Same dark HUD stage and amber palette as OttoMotion, so v1 and v2 read as
// one lineage. Keyframes live in app/globals.css and are frozen under
// prefers-reduced-motion there.
//
// SECURITY: every label on these panels is a generic architecture word. Never
// put real content, a real table name, or a real number on one.

function HudStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-gradient-to-b from-[#262019] to-[#171310] shadow-[0_18px_40px_-20px_rgba(120,80,10,0.5)] ring-1 ring-black/10">
      {children}
    </div>
  );
}

// The split that the whole system is built on: the arithmetic is done first,
// in the database, and handed over as numbers. The model only chooses.
export function AmaruSplitDemo() {
  return (
    <HudStage>
      <div className="flex h-full flex-col justify-center gap-3 p-5 font-mono text-[11px]">
        <p className="text-[10px] uppercase tracking-widest text-primary/70">
          the split
        </p>

        {/* Counted first, in SQL. */}
        <div className="rounded-lg border border-primary/25 bg-primary/[0.07] p-3">
          <p className="text-amber-100/90">counted, in the database</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["coverage", "recency", "volume", "adherence"].map((chip, i) => (
              <span
                key={chip}
                className="rounded border border-primary/40 bg-black/25 px-1.5 py-0.5 text-[10px] text-primary/90 opacity-0 [animation:amaru-chip_6s_ease-in-out_infinite]"
                style={{ animationDelay: `${0.2 + i * 0.35}s` }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Handed down as numbers. */}
        <div className="flex items-center gap-2 pl-1 text-primary/60">
          <span className="h-4 w-px bg-primary/40 [animation:amaru-pulse_3s_ease-in-out_infinite]" />
          <span className="text-[10px]">handed over as numbers</span>
        </div>

        {/* Judged by the model. */}
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <p className="text-amber-100/90">judged, by the model</p>
          {/* Always visible. An element that animates from opacity 0 leaves a
              frame where this box looks empty, which reads as a broken panel. */}
          <p className="mt-1.5 text-[10px] leading-relaxed text-muted-foreground">
            it chooses, and never has to remember
          </p>
        </div>
      </div>
    </HudStage>
  );
}

// The record: raw input kept untouched on one side, everything derived from it
// on the other, and a superseded row that stays instead of being overwritten.
export function AmaruRecordDemo() {
  return (
    <HudStage>
      <div className="flex h-full flex-col p-5 font-mono text-[11px]">
        <div className="flex items-center gap-2 border-b border-white/10 pb-2.5 text-amber-100/90">
          <span className="text-primary">›</span>
          <span className="overflow-hidden whitespace-nowrap border-r-2 border-primary/70 [animation:amaru-type_7s_steps(22)_infinite]">
            what I said, kept as said
          </span>
        </div>

        <div className="mt-3 grid flex-1 grid-cols-2 gap-3">
          {/* Raw, never edited, never deleted. */}
          <div className="rounded-lg border border-primary/25 bg-primary/[0.06] p-2.5">
            <p className="text-[9px] uppercase tracking-wider text-primary/70">raw</p>
            <div className="mt-2 space-y-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-1.5 rounded-full bg-primary/40"
                  style={{ width: `${88 - i * 18}%` }}
                />
              ))}
            </div>
            <p className="mt-2.5 text-[9px] text-primary/60">never edited</p>
          </div>

          {/* Derived, and re-derivable. */}
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">derived</p>
            <div className="mt-2 space-y-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-1.5 rounded-full bg-white/25 opacity-0 [animation:amaru-chip_6s_ease-in-out_infinite]"
                  style={{ width: `${72 - i * 14}%`, animationDelay: `${0.6 + i * 0.4}s` }}
                />
              ))}
            </div>
            <p className="mt-2.5 text-[9px] text-muted-foreground">rebuilt, not repaired</p>
          </div>
        </div>

        {/* A reversal supersedes; it does not overwrite. */}
        {/* Both chips stay on screen. A strikethrough or a zero-opacity reveal
            here reads as a rendering fault rather than as supersession, and the
            whole point of the row is that the old record is still there. */}
        <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-2.5 text-[10px]">
          <span className="rounded border border-white/15 px-1.5 py-0.5 text-muted-foreground">
            v1
          </span>
          <span className="text-primary/60">superseded by</span>
          <span className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-primary/90 [animation:amaru-pulse_3.4s_ease-in-out_infinite]">
            v2
          </span>
          <span className="ml-auto text-[9px] text-muted-foreground">both kept</span>
        </div>
      </div>
    </HudStage>
  );
}
