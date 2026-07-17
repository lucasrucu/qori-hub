import { cn } from "@/lib/utils";

// Bespoke, coded visuals for the /quorum showcase page. Same visual system as
// ExperienceMotion.tsx, color-coded to Quorum's own brand: electric agent blue
// on deep navy with lavender nodes, pulled straight from quorum-mark.svg.
// Gold appears only where a human does. Motion is subtle, looped, and leans on
// the qart-* / otto-* / quorum-* keyframes in globals.css.
//
// Palette (hex mirrors the --quorum HSL tokens in globals.css):
//   blue #4D7CFE   blue-bright #8BA6FF   lavender #8388AD
//   navy #141626   panel #1B1E33   gold #F6C44A (the human accent)

const BLUE = "#4D7CFE";
const BLUE_BRIGHT = "#8BA6FF";
const LAVENDER = "#8388AD";
const PANEL = "#1B1E33";
const GOLD = "#F6C44A";

const spin = (s: number, rev = false): React.CSSProperties => ({
  animation: `otto-spin${rev ? "-rev" : ""} ${s}s linear infinite`,
  transformOrigin: "center",
  transformBox: "fill-box",
});

const breathe = (s: number, d = 0): React.CSSProperties => ({
  animation: `otto-breathe ${s}s ease-in-out ${d}s infinite`,
  transformOrigin: "center",
  transformBox: "fill-box",
});

function Frame({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-quorum/40 shadow-[0_18px_44px_-24px_rgba(77,124,254,0.5)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 320 200"
        role="img"
        aria-label={title}
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
      >
        <defs>
          <radialGradient id="qrm-bg" cx="32%" cy="30%" r="90%">
            <stop offset="0%" stopColor="#1B1E33" />
            <stop offset="100%" stopColor="#0E1020" />
          </radialGradient>
        </defs>
        <rect width="320" height="200" fill="url(#qrm-bg)" />
        {children}
      </svg>
    </div>
  );
}

// HERO — the company as its mark: six agent chips in a hexagon around the
// orchestrator core. The signature visual for the page.
export function QuorumHero() {
  const agents = ["build", "review", "scribe", "intake", "audit", "hr"];
  const cx = 160;
  const cy = 100;
  const r = 64;
  const pts = agents.map((label, i) => {
    const rad = ((-90 + i * 60) * Math.PI) / 180;
    return { label, x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
  });
  return (
    <Frame title="Six AI agents in a hexagon around the orchestrator core">
      {/* outer orbit ring */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="88" fill="none" stroke={`${BLUE}18`} strokeWidth="1" strokeDasharray="2 7" style={spin(26)} />
      </g>

      {/* hexagon edges */}
      {pts.map((p, i) => {
        const q = pts[(i + 1) % pts.length];
        return (
          <line
            key={`e${i}`}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke={`${LAVENDER}44`}
            strokeWidth="1.2"
            strokeDasharray="4 5"
            style={{ animation: `qart-flow ${1.8 + (i % 3) * 0.3}s linear infinite` }}
          />
        );
      })}

      {/* spokes into the core */}
      {pts.map((p, i) => (
        <line
          key={`s${i}`}
          x1={p.x}
          y1={p.y}
          x2={cx}
          y2={cy}
          stroke={`${BLUE}33`}
          strokeWidth="1.3"
          strokeDasharray="3 6"
          style={{ animation: `qart-flow ${1.4 + (i % 2) * 0.4}s linear infinite` }}
        />
      ))}

      {/* agent chips */}
      {pts.map((p, i) => (
        <g key={p.label} transform={`translate(${p.x},${p.y})`}>
          <rect
            x="-24"
            y="-11"
            width="48"
            height="22"
            rx="6"
            fill={PANEL}
            stroke={i % 3 === 0 ? BLUE : LAVENDER}
            strokeWidth="1.4"
            style={breathe(3 + (i % 4) * 0.4, i * 0.25)}
          />
          <circle cx="-14" cy="0" r="3" fill={i % 3 === 0 ? BLUE : LAVENDER} />
          <text x="4" y="3" textAnchor="middle" fontSize="8" fill="#D9DEF2" fontFamily="monospace">
            {p.label}
          </text>
        </g>
      ))}

      {/* orchestrator core */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="30" fill="none" stroke={`${BLUE_BRIGHT}50`} strokeWidth="1" strokeDasharray="3 6" style={spin(12)} />
        <circle r="23" fill={PANEL} stroke={BLUE} strokeWidth="1.6" />
        <circle r="12" fill={BLUE} opacity="0.9" style={breathe(3.2)} />
        <circle cx="-4" cy="-4" r="3.2" fill="#FFFFFF" opacity="0.85" />
      </g>

      <text x="160" y="190" textAnchor="middle" fontSize="8" fill={`${BLUE_BRIGHT}cc`} fontFamily="monospace">
        always on · one operator
      </text>
    </Frame>
  );
}

// BOARD — the live pipeline: Intake / Needs you / Working / Closed, with one
// card sliding from Working into Closed on a loop.
export function QuorumBoardArt({ className }: { className?: string }) {
  const cols = [
    { x: 24, label: "intake" },
    { x: 90, label: "needs you" },
    { x: 156, label: "working" },
    { x: 222, label: "closed" },
  ];
  return (
    <Frame title="A four-column pipeline board: Intake, Needs you, Working, Closed" className={className}>
      {cols.map((c, i) => (
        <g key={c.label}>
          <rect x={c.x} y="40" width="58" height="140" rx="7" fill={PANEL} stroke={`${LAVENDER}30`} strokeWidth="1" />
          <text
            x={c.x + 29}
            y="31"
            textAnchor="middle"
            fontSize="7.5"
            fill={i === 1 ? GOLD : `${LAVENDER}dd`}
            fontFamily="monospace"
          >
            {c.label}
          </text>
        </g>
      ))}

      {/* intake cards */}
      <rect x="29" y="48" width="48" height="16" rx="3.5" fill="#232741" stroke={`${LAVENDER}55`} strokeWidth="1" />
      <rect x="29" y="70" width="48" height="16" rx="3.5" fill="#232741" stroke={`${LAVENDER}55`} strokeWidth="1" />

      {/* needs-you card: gold, waiting on the human */}
      <rect x="95" y="48" width="48" height="16" rx="3.5" fill="#2A2637" stroke={GOLD} strokeWidth="1.3" style={breathe(2.6)} />
      <circle cx="102" cy="56" r="2.2" fill={GOLD} />

      {/* working cards: one pulsing blue */}
      <rect x="161" y="48" width="48" height="16" rx="3.5" fill="#1D2A4E" stroke={BLUE} strokeWidth="1.3" style={breathe(2.2, 0.4)} />
      <circle cx="168" cy="56" r="2.2" fill={BLUE} />
      <rect x="161" y="70" width="48" height="16" rx="3.5" fill="#232741" stroke={`${BLUE}66`} strokeWidth="1" />

      {/* the slider: a card moving from Working into Closed */}
      <g style={{ animation: "quorum-slide 5.5s ease-in-out infinite" }}>
        <rect x="161" y="92" width="48" height="16" rx="3.5" fill="#1D2A4E" stroke={BLUE_BRIGHT} strokeWidth="1.2" />
        <circle cx="168" cy="100" r="2.2" fill={BLUE_BRIGHT} />
      </g>

      {/* closed cards, settled */}
      <rect x="227" y="48" width="48" height="16" rx="3.5" fill="#20233A" stroke={`${LAVENDER}40`} strokeWidth="1" />
      <rect x="227" y="70" width="48" height="16" rx="3.5" fill="#20233A" stroke={`${LAVENDER}40`} strokeWidth="1" />
      <rect x="227" y="114" width="48" height="16" rx="3.5" fill="#20233A" stroke={`${LAVENDER}40`} strokeWidth="1" />

      <text x="160" y="194" textAnchor="middle" fontSize="7.5" fill={`${LAVENDER}bb`} fontFamily="monospace">
        one glance, whole company
      </text>
    </Frame>
  );
}

// DISPATCH — the funnel: work flows into the orchestrator, agents execute,
// and a single gold line goes up to the human.
export function QuorumDispatchArt({ className }: { className?: string }) {
  const workers = [
    { y: 56, label: "build" },
    { y: 104, label: "review" },
    { y: 152, label: "scribe" },
  ];
  return (
    <Frame title="The orchestrator dispatching agents and surfacing one decision to the human" className={className}>
      {/* incoming work */}
      {[44, 74, 104].map((y, i) => (
        <g key={y}>
          <rect x="20" y={y} width="34" height="14" rx="3.5" fill="#232741" stroke={`${LAVENDER}55`} strokeWidth="1" />
          <line
            x1="56"
            y1={y + 7}
            x2="88"
            y2="112"
            stroke={`${BLUE}40`}
            strokeWidth="1.3"
            strokeDasharray="3 5"
            style={{ animation: `qart-flow ${1.3 + i * 0.25}s linear infinite` }}
          />
        </g>
      ))}
      <text x="37" y="132" textAnchor="middle" fontSize="7.5" fill={`${LAVENDER}bb`} fontFamily="monospace">
        ideas · tasks
      </text>

      {/* orchestrator */}
      <g transform="translate(110,112)">
        <circle r="26" fill="none" stroke={`${BLUE_BRIGHT}45`} strokeWidth="1" strokeDasharray="3 6" style={spin(13)} />
        <circle r="19" fill={PANEL} stroke={BLUE} strokeWidth="1.6" />
        <circle r="9" fill={BLUE} opacity="0.9" style={breathe(3)} />
      </g>
      <text x="110" y="158" textAnchor="middle" fontSize="7.5" fill={`${BLUE_BRIGHT}cc`} fontFamily="monospace">
        orchestrator
      </text>

      {/* dispatch to workers */}
      {workers.map((w, i) => (
        <g key={w.label}>
          <line
            x1="132"
            y1="112"
            x2="222"
            y2={w.y + 12}
            stroke={`${BLUE}45`}
            strokeWidth="1.4"
            strokeDasharray="4 5"
            style={{ animation: `qart-flow ${1.4 + i * 0.3}s linear infinite` }}
          />
          <g transform={`translate(252,${w.y})`}>
            <rect x="-28" y="0" width="56" height="24" rx="6" fill={PANEL} stroke={BLUE} strokeWidth="1.3" style={breathe(3 + i * 0.4, i * 0.3)} />
            <circle cx="-17" cy="12" r="3" fill={BLUE} />
            <text x="5" y="15" textAnchor="middle" fontSize="8" fill="#D9DEF2" fontFamily="monospace">
              {w.label}
            </text>
          </g>
        </g>
      ))}

      {/* the one gold line to the human */}
      <line x1="110" y1="86" x2="110" y2="42" stroke={`${GOLD}90`} strokeWidth="1.6" strokeDasharray="4 5" style={{ animation: "qart-flow 2s linear infinite" }} />
      <g transform="translate(110,28)">
        <circle r="11" fill="#2A2637" stroke={GOLD} strokeWidth="1.5" style={breathe(3.4)} />
        <text x="0" y="3" textAnchor="middle" fontSize="7.5" fill={GOLD} fontFamily="monospace">
          you
        </text>
      </g>
      <text x="152" y="34" fontSize="7" fill={`${GOLD}bb`} fontFamily="monospace">
        only decisions
      </text>
    </Frame>
  );
}

// ISOLATION — a git graph: three worktree branches building in parallel off
// main, merging back only when proven.
export function QuorumIsolationArt({ className }: { className?: string }) {
  return (
    <Frame title="Three git worktree branches building in parallel, merging back into main" className={className}>
      {/* main line */}
      <line x1="20" y1="100" x2="300" y2="100" stroke={`${LAVENDER}66`} strokeWidth="2" />
      <text x="26" y="92" fontSize="7.5" fill={`${LAVENDER}cc`} fontFamily="monospace">
        main
      </text>

      {/* branches out and back */}
      {[
        { y: 52, d: 0 },
        { y: 148, d: 0.3 },
      ].map((b) => (
        <path
          key={b.y}
          d={`M64 100 C 88 100, 88 ${b.y}, 112 ${b.y} L 216 ${b.y} C 244 ${b.y}, 244 100, 268 100`}
          fill="none"
          stroke={`${BLUE}70`}
          strokeWidth="1.8"
          strokeDasharray="5 5"
          style={{ animation: `qart-flow ${2 + b.d}s linear infinite` }}
        />
      ))}
      {/* middle branch rides just above main */}
      <path
        d="M64 100 C 84 100, 84 76, 104 76 L 224 76 C 248 76, 248 100, 268 100"
        fill="none"
        stroke={`${BLUE_BRIGHT}70`}
        strokeWidth="1.8"
        strokeDasharray="5 5"
        style={{ animation: "qart-flow 1.7s linear infinite" }}
      />

      {/* commits */}
      {[
        { x: 132, y: 52 }, { x: 168, y: 52 }, { x: 204, y: 52 },
        { x: 128, y: 76 }, { x: 172, y: 76 }, { x: 212, y: 76 },
        { x: 140, y: 148 }, { x: 188, y: 148 },
      ].map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r="4" fill={PANEL} stroke={BLUE} strokeWidth="1.5" style={breathe(2.6 + (i % 3) * 0.4, i * 0.2)} />
      ))}

      {/* fork + merge dots */}
      <circle cx="64" cy="100" r="5" fill={PANEL} stroke={LAVENDER} strokeWidth="1.6" />
      <circle cx="268" cy="100" r="6" fill="#2A2637" stroke={GOLD} strokeWidth="1.8" style={breathe(3)} />
      <text x="268" y="120" textAnchor="middle" fontSize="7" fill={`${GOLD}cc`} fontFamily="monospace">
        merged when proven
      </text>

      {/* worktree labels */}
      <text x="118" y="44" fontSize="7" fill={`${BLUE}cc`} fontFamily="monospace">
        worktree/a
      </text>
      <text x="112" y="68" fontSize="7" fill={`${BLUE_BRIGHT}cc`} fontFamily="monospace">
        worktree/b
      </text>
      <text x="122" y="164" fontSize="7" fill={`${BLUE}cc`} fontFamily="monospace">
        worktree/c
      </text>
    </Frame>
  );
}

// CONTROL — two-way Telegram: a phone with the conversation, the daemon
// heartbeat up top.
export function QuorumControlArt({ className }: { className?: string }) {
  return (
    <Frame title="Two-way Telegram control: the company reports, the human approves from a phone" className={className}>
      {/* phone */}
      <rect x="102" y="16" width="116" height="172" rx="14" fill={PANEL} stroke={`${LAVENDER}66`} strokeWidth="1.5" />
      <rect x="112" y="30" width="96" height="146" rx="8" fill="#12142A" />
      <line x1="146" y1="23" x2="174" y2="23" stroke={`${LAVENDER}66`} strokeWidth="2" strokeLinecap="round" />

      {/* daemon status chip */}
      <g transform="translate(160,42)">
        <rect x="-42" y="-8" width="84" height="16" rx="8" fill="#1D2A4E" stroke={`${BLUE}66`} strokeWidth="1" />
        <circle cx="-32" cy="0" r="2.5" fill={BLUE_BRIGHT} style={breathe(2.2)} />
        <text x="4" y="2.8" textAnchor="middle" fontSize="7" fill="#D9DEF2" fontFamily="monospace">
          daemon · live
        </text>
      </g>

      {/* agent bubble */}
      <g style={{ animation: "quorum-bubble 6s ease-in-out infinite" }}>
        <rect x="118" y="62" width="72" height="26" rx="7" fill="#232741" stroke={`${BLUE}55`} strokeWidth="1" />
        <text x="124" y="73" fontSize="6.5" fill="#D9DEF2" fontFamily="monospace">
          feature built.
        </text>
        <text x="124" y="82" fontSize="6.5" fill="#D9DEF2" fontFamily="monospace">
          preview is up.
        </text>
      </g>

      {/* human bubble, gold */}
      <g style={{ animation: "quorum-bubble 6s ease-in-out 1.6s infinite" }}>
        <rect x="140" y="96" width="62" height="18" rx="7" fill="#2A2637" stroke={GOLD} strokeWidth="1.1" />
        <text x="171" y="107.5" textAnchor="middle" fontSize="6.5" fill={GOLD} fontFamily="monospace">
          ship it
        </text>
      </g>

      {/* agent ack bubble */}
      <g style={{ animation: "quorum-bubble 6s ease-in-out 3.2s infinite" }}>
        <rect x="118" y="122" width="66" height="18" rx="7" fill="#232741" stroke={`${BLUE}55`} strokeWidth="1" />
        <text x="151" y="133.5" textAnchor="middle" fontSize="6.5" fill="#D9DEF2" fontFamily="monospace">
          merging now
        </text>
      </g>

      {/* signal waves off the phone */}
      {[0, 1].map((i) => (
        <path
          key={i}
          d={`M${228 + i * 12} 84 a ${16 + i * 12} ${16 + i * 12} 0 0 1 0 36`}
          fill="none"
          stroke={`${BLUE}${i ? "30" : "55"}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={breathe(2.6, i * 0.3)}
        />
      ))}
      <text x="160" y="168" textAnchor="middle" fontSize="6.5" fill={`${LAVENDER}bb`} fontFamily="monospace">
        from anywhere
      </text>
    </Frame>
  );
}

// BRAIN — one shared memory, every agent reading and writing.
export function QuorumBrainArt() {
  const agents = [
    { x: 62, y: 48 },
    { x: 258, y: 48 },
    { x: 62, y: 152 },
    { x: 258, y: 152 },
  ];
  const cx = 160;
  const cy = 100;
  return (
    <Frame title="Agents reading and writing one shared version-controlled memory">
      {/* read/write links: one flowing in, one flowing out per agent */}
      {agents.map((a, i) => (
        <g key={i}>
          <line
            x1={a.x}
            y1={a.y}
            x2={cx}
            y2={cy}
            stroke={`${BLUE}40`}
            strokeWidth="1.4"
            strokeDasharray="4 5"
            style={{ animation: `qart-flow ${1.5 + i * 0.2}s linear infinite` }}
          />
          <line
            x1={cx}
            y1={cy}
            x2={a.x}
            y2={a.y}
            stroke={`${LAVENDER}30`}
            strokeWidth="1.2"
            strokeDasharray="3 7"
            style={{ animation: `qart-flow ${2 + i * 0.25}s linear infinite reverse` }}
          />
          <g transform={`translate(${a.x},${a.y})`}>
            <rect x="-22" y="-12" width="44" height="24" rx="6" fill={PANEL} stroke={i % 2 ? LAVENDER : BLUE} strokeWidth="1.3" style={breathe(3 + i * 0.4, i * 0.3)} />
            <circle cx="-12" cy="0" r="3" fill={i % 2 ? LAVENDER : BLUE} />
            <text x="5" y="3" textAnchor="middle" fontSize="7.5" fill="#D9DEF2" fontFamily="monospace">
              agent
            </text>
          </g>
        </g>
      ))}

      {/* the memory core: a versioned store */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="38" fill="none" stroke={`${BLUE_BRIGHT}40`} strokeWidth="1" strokeDasharray="3 6" style={spin(15)} />
        <rect x="-26" y="-20" width="52" height="40" rx="8" fill={PANEL} stroke={BLUE} strokeWidth="1.6" />
        <line x1="-16" y1="-8" x2="16" y2="-8" stroke={`${BLUE_BRIGHT}aa`} strokeWidth="2" strokeLinecap="round" />
        <line x1="-16" y1="0" x2="16" y2="0" stroke={`${LAVENDER}aa`} strokeWidth="2" strokeLinecap="round" />
        <line x1="-16" y1="8" x2="8" y2="8" stroke={`${LAVENDER}66`} strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="34" textAnchor="middle" fontSize="7.5" fill={`${BLUE_BRIGHT}cc`} fontFamily="monospace">
          shared memory
        </text>
      </g>
    </Frame>
  );
}
