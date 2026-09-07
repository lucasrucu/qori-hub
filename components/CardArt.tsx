// Bespoke, coded project-card artwork. One consistent visual system in the
// Sovereign amber palette: every card gets a distinct scene that says what the
// project does, drawn in SVG/CSS instead of a screenshot. Motion is subtle and
// respects prefers-reduced-motion (keyframes in globals.css).
//
// Palette (hex mirrors the HSL tokens in globals.css):
//   amber  #F1AE04   gold-lite #F6C44A   deep #C97A04
//   ink    #221C14   cream-art #FBF6EA   line #E0D4B8   green #2E7D44

import { SCALE } from "@/lib/profile";
import { cn } from "@/lib/utils";

export type ArtKey =
  | "radar"
  | "flow"
  | "orb"
  | "pages"
  | "pipeline"
  | "link"
  | "noe"
  | "commissioning"
  | "quorum"
  | "cut"
  | "video"
  | "amaru"
  | "kallpa";

const AMBER = "#F1AE04";
const GOLD = "#F6C44A";
const INK = "#221C14";
const TEAL = "#0F7E78";
const TEAL_BRIGHT = "#1FB8AD";

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

function ArtFrame({
  children,
  dark = false,
  title,
}: {
  children: React.ReactNode;
  dark?: boolean;
  title: string;
}) {
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
    >
      <rect width="320" height="200" fill={dark ? "#1E1813" : "#FBF6EA"} />
      {children}
    </svg>
  );
}

// Career Agent, a match radar: rings + a sweeping beam + job pins, a % readout.
function Radar() {
  return (
    <ArtFrame title="Match radar">
      {/* rings + blips, centered on the radar origin (160,100) */}
      <g transform="translate(160,100)">
        <circle r="78" fill="none" stroke="#E7D9B4" strokeWidth="1.2" />
        <circle r="54" fill="none" stroke="#E7D9B4" strokeWidth="1.2" />
        <circle r="30" fill="none" stroke="#E7D9B4" strokeWidth="1.2" />
        <circle cx="34" cy="-22" r="4" fill={AMBER} />
        <circle cx="-44" cy="14" r="4" fill={INK} />
        <circle cx="10" cy="46" r="4" fill={INK} />
        <circle cx="-18" cy="-40" r="4" fill={AMBER} />
      </g>
      {/* sweep beam in absolute coords, pinned to the radar center so it rotates
          cleanly around (160,100) instead of around its own bounding box */}
      <g
        style={{
          animation: "otto-spin 4s linear infinite",
          transformOrigin: "160px 100px",
          transformBox: "view-box",
        }}
      >
        <path d="M160 100 L160 20 A80 80 0 0 1 216 44 Z" fill="#F1AE0433" />
        <line x1="160" y1="100" x2="160" y2="20" stroke={AMBER} strokeWidth="2" />
      </g>
      <text x="22" y="34" fontSize="22" fontWeight="700" fill={INK} fontFamily="monospace">
        92%
      </text>
      <text x="23" y="48" fontSize="9" fill="#A89A7E" fontFamily="monospace">
        match
      </text>
    </ArtFrame>
  );
}

// Financial Dashboard: money streams flowing into rising bars.
function Flow() {
  return (
    <ArtFrame title="Money flow into a chart">
      <path
        d="M0 60 C 80 60, 90 120, 160 120 S 240 150, 320 150"
        fill="none"
        stroke={AMBER}
        strokeWidth="2.5"
        strokeDasharray="6 6"
        style={{ animation: "qart-flow 1.6s linear infinite" }}
      />
      <path
        d="M0 92 C 90 92, 100 70, 160 70 S 250 96, 320 96"
        fill="none"
        stroke={INK}
        strokeOpacity="0.32"
        strokeWidth="2"
        strokeDasharray="5 7"
        style={{ animation: "qart-flow 2.2s linear infinite" }}
      />
      <g transform="translate(0,178)">
        {[
          { x: 34, h: 46, c: AMBER, d: 0 },
          { x: 86, h: 72, c: AMBER, d: 0.2 },
          { x: 138, h: 58, c: GOLD, d: 0.4 },
          { x: 190, h: 92, c: AMBER, d: 0.6 },
          { x: 242, h: 66, c: GOLD, d: 0.8 },
        ].map((b) => (
          <rect
            key={b.x}
            x={b.x}
            y={-b.h}
            width="26"
            height={b.h}
            rx="3"
            fill={b.c}
            style={{
              animation: `qart-rise 2.6s ease-in-out ${b.d}s infinite`,
              transformOrigin: "bottom",
              transformBox: "fill-box",
            }}
          />
        ))}
      </g>
    </ArtFrame>
  );
}

// Otto: the gold orb with rotating rings on a dark HUD.
function Orb() {
  return (
    <ArtFrame title="Otto voice orb" dark>
      <g transform="translate(160,100)">
        <circle
          r="62"
          fill="none"
          stroke="#F1AE0440"
          strokeWidth="1"
          strokeDasharray="3 6"
          style={spin(14)}
        />
        <circle
          r="46"
          fill="none"
          stroke="#F1AE0430"
          strokeWidth="1"
          strokeDasharray="2 7"
          style={spin(10, true)}
        />
        <circle
          r="30"
          fill={AMBER}
          opacity="0.25"
          style={{ animation: "otto-breathe 3.2s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
        />
        <circle
          r="22"
          fill={GOLD}
          style={{ animation: "otto-breathe 3.2s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
        />
        <circle cx="-7" cy="-7" r="5" fill="#FFFFFF" opacity="0.8" />
      </g>
      <text x="160" y="182" textAnchor="middle" fontSize="9" fill="#F1AE0499" fontFamily="monospace">
        listening…
      </text>
    </ArtFrame>
  );
}

// rapid-pdf: three pages, the middle one lifted, being reordered.
function Pages() {
  return (
    <ArtFrame title="Reordering PDF pages">
      <rect x="70" y="58" width="62" height="84" rx="5" fill="#FFFDF8" stroke="#D9CDB2" strokeWidth="1.5" transform="rotate(-7 101 100)" />
      <rect x="186" y="58" width="62" height="84" rx="5" fill="#FFFDF8" stroke="#D9CDB2" strokeWidth="1.5" transform="rotate(7 217 100)" />
      <rect x="128" y="46" width="62" height="84" rx="5" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.6" />
      <line x1="138" y1="62" x2="180" y2="62" stroke="#E0D4B8" strokeWidth="3" />
      <line x1="138" y1="72" x2="180" y2="72" stroke="#E0D4B8" strokeWidth="3" />
      <rect x="150" y="90" width="20" height="14" rx="2" fill="none" stroke={AMBER} strokeWidth="2" />
      <line x1="150" y1="118" x2="168" y2="118" stroke={AMBER} strokeWidth="2.5" />
      <defs>
        <marker id="art-ah" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill={AMBER} />
        </marker>
      </defs>
      <path d="M133 152 q26 16 52 0" fill="none" stroke={AMBER} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#art-ah)" />
    </ArtFrame>
  );
}

// PIMS & RFCC: records flow through a validation node into a signed package.
function Pipeline() {
  return (
    <ArtFrame title="Records validated into a signed package">
      <rect x="20" y="70" width="46" height="60" rx="4" fill="#FFFDF8" stroke="#D9CDB2" />
      <line x1="28" y1="84" x2="58" y2="84" stroke="#E0D4B8" strokeWidth="2" />
      <line x1="28" y1="94" x2="58" y2="94" stroke="#E0D4B8" strokeWidth="2" />
      <line x1="28" y1="104" x2="50" y2="104" stroke="#E0D4B8" strokeWidth="2" />
      <text x="24" y="146" fontSize="8" fill="#A89A7E" fontFamily="monospace">
        records
      </text>
      <path d="M68 100 h40" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" style={{ animation: "qart-flow 1.4s linear infinite" }} />
      <circle cx="128" cy="100" r="20" fill="#F1AE0420" stroke={AMBER} strokeWidth="1.5" />
      <path d="M120 100 l6 6 l10 -12" fill="none" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round" />
      <text x="128" y="140" textAnchor="middle" fontSize="8" fill="#A89A7E" fontFamily="monospace">
        validate
      </text>
      <path d="M150 100 h40" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" style={{ animation: "qart-flow 1.4s linear infinite" }} />
      <g transform="translate(208,66)">
        <rect width="78" height="68" rx="6" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.5" />
        <circle cx="39" cy="30" r="15" fill="#2E7D44" />
        <path d="M32 30 l5 5 l9 -11" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <text x="39" y="58" textAnchor="middle" fontSize="8" fill="#7A5800" fontFamily="monospace">
          SIGNED
        </text>
      </g>
    </ArtFrame>
  );
}

// Snip: a long URL collapsing into a short link, with a click count.
function Link() {
  return (
    <ArtFrame title="Long URL shortened">
      <rect x="26" y="62" width="186" height="22" rx="11" fill="#F2EAD7" stroke="#E0D4B8" />
      <text x="36" y="77" fontSize="9" fill="#A89A7E" fontFamily="monospace">
        long-url.com/a/b/c?ref=x123…
      </text>
      <defs>
        <marker id="art-ah2" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto">
          <path d="M0 0 L6 0 L3 6 z" fill={AMBER} />
        </marker>
      </defs>
      <path d="M150 96 v16" stroke={AMBER} strokeWidth="2" markerEnd="url(#art-ah2)" />
      <rect
        x="92"
        y="120"
        width="120"
        height="26"
        rx="13"
        fill="#F1AE0420"
        stroke={AMBER}
        strokeWidth="1.5"
        style={{ animation: "otto-breathe 3s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
      />
      <text x="152" y="137" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7A5800" fontFamily="monospace">
        qori.link/x9
      </text>
      <text x="244" y="128" fontSize="16" fontWeight="700" fill={INK} fontFamily="monospace">
        1.2k
      </text>
      <text x="244" y="140" fontSize="8" fill="#A89A7E" fontFamily="monospace">
        clicks
      </text>
    </ArtFrame>
  );
}

// NoE Toolkit: the launcher window with three tool tiles, one gently pulsing.
function Noe() {
  const tiles = [
    { x: 36, glyph: "doc" as const, d: 0 },
    { x: 130, glyph: "brush" as const, d: 0.5 },
    { x: 224, glyph: "find" as const, d: 1 },
  ];
  return (
    <ArtFrame title="NoE launcher with three commissioning tools">
      {/* App window chrome */}
      <rect x="20" y="30" width="280" height="140" rx="10" fill="#FFFDF8" stroke="#D9CDB2" strokeWidth="1.5" />
      <rect x="20" y="30" width="280" height="24" rx="10" fill="#F1AE0420" />
      <circle cx="34" cy="42" r="3.5" fill="#C97A04" />
      <circle cx="46" cy="42" r="3.5" fill={GOLD} />
      <circle cx="58" cy="42" r="3.5" fill="#2E7D44" />
      <text x="160" y="46" textAnchor="middle" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">
        NoE Toolkit
      </text>

      {/* Three tool tiles */}
      {tiles.map((t) => (
        <g key={t.x} transform={`translate(${t.x},72)`}>
          <rect
            width="60"
            height="78"
            rx="7"
            fill="#FBF6EA"
            stroke={AMBER}
            strokeWidth="1.3"
            style={{ animation: `otto-breathe 3.2s ease-in-out ${t.d}s infinite`, transformOrigin: "center", transformBox: "fill-box" }}
          />
          <g transform="translate(30,30)" stroke={AMBER} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {t.glyph === "doc" && (
              <>
                <rect x="-11" y="-13" width="22" height="26" rx="2" fill="#F1AE0418" />
                <line x1="-6" y1="-6" x2="6" y2="-6" />
                <line x1="-6" y1="0" x2="6" y2="0" />
                <line x1="-6" y1="6" x2="2" y2="6" />
              </>
            )}
            {t.glyph === "brush" && (
              <>
                <path d="M-9 11 q-2 -8 6 -10 l8 -10 6 6 -10 8 q-2 8 -10 6 z" fill="#F1AE0418" />
                <line x1="3" y1="-3" x2="9" y2="-9" />
              </>
            )}
            {t.glyph === "find" && (
              <>
                <circle cx="-3" cy="-3" r="9" fill="#F1AE0418" />
                <line x1="4" y1="4" x2="12" y2="12" />
              </>
            )}
          </g>
        </g>
      ))}
    </ArtFrame>
  );
}

// Industrial commissioning automation: the umbrella card. A ring of automation
// nodes feeding a central hub carrying the project's scale, on a deep teal HUD. Color-coded to
// the experience accent, distinct from the amber cards.
function Commissioning() {
  const nodes = [-90, -38, 14, 66, 118, 170, 222, 274];
  const cx = 160;
  const cy = 100;
  const r = 64;
  return (
    <ArtFrame title="A toolkit of automations across the project's equipment tags" dark>
      <rect width="320" height="200" fill="#0A2A28" />
      <g transform={`translate(${cx},${cy})`}>
        <circle r={r} fill="none" stroke={`${TEAL_BRIGHT}22`} strokeWidth="1" />
      </g>
      {nodes.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const x = cx + Math.cos(rad) * r;
        const y = cy + Math.sin(rad) * r;
        return (
          <g key={i}>
            <line
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={`${TEAL_BRIGHT}3a`}
              strokeWidth="1.4"
              strokeDasharray="4 5"
              style={{ animation: `qart-flow ${1.4 + (i % 3) * 0.3}s linear infinite` }}
            />
            <circle
              cx={x}
              cy={y}
              r="6.5"
              fill="#0C3633"
              stroke={i % 3 === 0 ? GOLD : TEAL_BRIGHT}
              strokeWidth="1.5"
              style={{ animation: `otto-breathe ${3 + (i % 4) * 0.4}s ease-in-out ${i * 0.2}s infinite`, transformOrigin: "center", transformBox: "fill-box" }}
            />
          </g>
        );
      })}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="32" fill="#0C3633" stroke={TEAL_BRIGHT} strokeWidth="1.6" />
        <circle r="38" fill="none" stroke={`${GOLD}55`} strokeWidth="1" strokeDasharray="3 6" style={spin(12)} />
        {/* The scale anchor, not an hours figure. This thumbnail is the first
            thing a visitor sees, and nothing on the site states a time saved. */}
        <text x="0" y="2" textAnchor="middle" fontSize="15" fontWeight="700" fill="#FFFFFF" fontFamily="monospace">
          {SCALE.tags}
        </text>
        <text x="0" y="14" textAnchor="middle" fontSize="7" fill={TEAL_BRIGHT} fontFamily="monospace">
          equipment tags
        </text>
      </g>
    </ArtFrame>
  );
}

// Quorum: the agent hexagon from its brand mark: six agent nodes around an
// orchestrator core, on the Quorum navy. Its own palette, like the mark.
function Quorum() {
  const NAVY = "#141626";
  const PANEL = "#1B1E33";
  const BLUE = "#4D7CFE";
  const LAVENDER = "#8388AD";
  const cx = 160;
  const cy = 100;
  const r = 58;
  const angles = [-90, -30, 30, 90, 150, 210];
  const pts = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
  });
  return (
    <ArtFrame title="Six agent nodes around an orchestrator core" dark>
      <rect width="320" height="200" fill={NAVY} />
      {/* hexagon edges, flowing */}
      {pts.map((p, i) => {
        const q = pts[(i + 1) % pts.length];
        return (
          <line
            key={i}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke={`${LAVENDER}55`}
            strokeWidth="1.3"
            strokeDasharray="4 5"
            style={{ animation: `qart-flow ${1.6 + (i % 3) * 0.3}s linear infinite` }}
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
          stroke={`${BLUE}30`}
          strokeWidth="1.2"
          strokeDasharray="3 6"
          style={{ animation: `qart-flow ${1.4 + (i % 2) * 0.4}s linear infinite` }}
        />
      ))}
      {/* agent nodes */}
      {pts.map((p, i) => (
        <circle
          key={`n${i}`}
          cx={p.x}
          cy={p.y}
          r="6.5"
          fill={PANEL}
          stroke={i % 3 === 0 ? BLUE : LAVENDER}
          strokeWidth="1.6"
          style={{ animation: `otto-breathe ${3 + (i % 4) * 0.4}s ease-in-out ${i * 0.25}s infinite`, transformOrigin: "center", transformBox: "fill-box" }}
        />
      ))}
      {/* orchestrator core */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="30" fill="none" stroke={`${BLUE}45`} strokeWidth="1" strokeDasharray="3 6" style={spin(12)} />
        <circle r="22" fill={PANEL} stroke={BLUE} strokeWidth="1.6" />
        <circle
          r="11"
          fill={BLUE}
          opacity="0.9"
          style={{ animation: "otto-breathe 3.2s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
        />
        <circle cx="-3.5" cy="-3.5" r="3" fill="#FFFFFF" opacity="0.85" />
      </g>
      <text x="160" y="188" textAnchor="middle" fontSize="8" fill={`${BLUE}cc`} fontFamily="monospace">
        6 agents · 1 operator · frozen
      </text>
    </ArtFrame>
  );
}

// rapid-cut: a film strip with cut marks and the voiced region kept.
function Cut() {
  return (
    <ArtFrame title="A clip batch-cut around the talking">
      {/* film strip */}
      <rect x="30" y="52" width="260" height="52" rx="6" fill="#FFFDF8" stroke="#D9CDB2" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={40 + i * 31} y="58" width="8" height="6" rx="1.5" fill="#E0D4B8" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={40 + i * 31} y="92" width="8" height="6" rx="1.5" fill="#E0D4B8" />
      ))}
      {/* kept segment */}
      <rect x="118" y="52" width="84" height="52" rx="6" fill="#F1AE0426" stroke={AMBER} strokeWidth="1.6" />
      {/* cut marks */}
      {[118, 202].map((x) => (
        <line key={x} x1={x} y1="42" x2={x} y2="114" stroke="#C97A04" strokeWidth="2" strokeDasharray="4 4" style={{ animation: "qart-flow 1.8s linear infinite" }} />
      ))}
      {/* waveform under, voiced region amber */}
      <g transform="translate(0,150)">
        {[36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276].map((x, i) => {
          const voiced = x >= 118 && x <= 202;
          const h = voiced ? 12 + ((i * 7) % 16) : 3 + ((i * 5) % 5);
          return (
            <rect
              key={x}
              x={x}
              y={-h}
              width="5"
              height={h * 2}
              rx="2.5"
              fill={voiced ? AMBER : "#E0D4B8"}
              style={voiced ? { animation: `qart-rise 1.6s ease-in-out ${(i % 5) * 0.15}s infinite`, transformOrigin: "center", transformBox: "fill-box" } : undefined}
            />
          );
        })}
      </g>
      <text x="160" y="34" textAnchor="middle" fontSize="9" fill="#A89A7E" fontFamily="monospace">
        voice detected · kept
      </text>
    </ArtFrame>
  );
}

// VideoOS: a timeline with clips and a preview monitor.
function Video() {
  return (
    <ArtFrame title="A video editor timeline with a preview monitor">
      {/* preview monitor */}
      <rect x="96" y="24" width="128" height="76" rx="7" fill="#221C14" stroke="#D9CDB2" strokeWidth="1.5" />
      <path d="M153 50 l22 12 -22 12 z" fill={AMBER} style={{ animation: "otto-breathe 3s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }} />
      {/* timeline ruler */}
      <line x1="28" y1="122" x2="292" y2="122" stroke="#E0D4B8" strokeWidth="1.5" />
      {[28, 61, 94, 127, 160, 193, 226, 259, 292].map((x) => (
        <line key={x} x1={x} y1="118" x2={x} y2="126" stroke="#D9CDB2" strokeWidth="1.2" />
      ))}
      {/* clips on the track */}
      <rect x="34" y="132" width="74" height="26" rx="5" fill={AMBER} opacity="0.9" />
      <rect x="114" y="132" width="96" height="26" rx="5" fill={GOLD} opacity="0.9" />
      <rect x="216" y="132" width="58" height="26" rx="5" fill={AMBER} opacity="0.9" />
      {/* audio track */}
      <rect x="34" y="164" width="240" height="12" rx="4" fill="#F1AE041f" stroke="#E0D4B8" strokeWidth="1" />
      {/* playhead */}
      <g style={{ animation: "otto-breathe 2.6s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}>
        <line x1="150" y1="112" x2="150" y2="180" stroke={INK} strokeWidth="2" />
        <path d="M144 112 h12 l-6 8 z" fill={INK} />
      </g>
    </ArtFrame>
  );
}

// Amaru: v2 of the assistant. A voice-first app on the left feeds a queue of
// jobs into a router, which fans out to specialist agents. Same dark HUD as
// Otto's orb, so the two read as one lineage.
function Amaru() {
  const agents = [
    { y: 46, label: "train" },
    { y: 82, label: "money" },
    { y: 118, label: "career" },
    { y: 154, label: "notes" },
  ];
  return (
    <ArtFrame title="A voice-first app feeding a queue of jobs to a router and specialist agents" dark>
      {/* the app: a phone frame with the listening orb */}
      <rect x="26" y="40" width="58" height="120" rx="10" fill="#2A221A" stroke="#F1AE0455" strokeWidth="1.4" />
      <rect x="44" y="47" width="22" height="3" rx="1.5" fill="#F1AE0440" />
      <circle cx="55" cy="100" r="13" fill={AMBER} opacity="0.25" style={breathe(3.2)} />
      <circle cx="55" cy="100" r="8" fill={GOLD} style={breathe(3.2)} />
      <text x="55" y="146" textAnchor="middle" fontSize="7" fill="#F1AE0499" fontFamily="monospace">
        listening
      </text>
      {/* the queue: jobs flowing from the app to the router */}
      <path d="M86 100 h50" stroke="#F1AE0455" strokeWidth="1.6" strokeDasharray="5 5" style={{ animation: "qart-flow 1.4s linear infinite" }} />
      {[92, 106, 120].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="92"
          width="10"
          height="16"
          rx="2"
          fill="#F1AE0430"
          stroke={AMBER}
          strokeWidth="1"
          style={breathe(2.6, i * 0.3)}
        />
      ))}
      {/* the router */}
      <g transform="translate(160,100)">
        <circle r="26" fill="none" stroke="#F1AE0440" strokeWidth="1" strokeDasharray="3 6" style={spin(12)} />
        <circle r="18" fill="#2A221A" stroke={AMBER} strokeWidth="1.6" />
        <path d="M-7 -6 h14 M-7 0 h14 M-7 6 h9" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* fan-out to the specialist agents */}
      {agents.map((a, i) => (
        <g key={a.label}>
          <path
            d={`M178 100 C 210 100, 210 ${a.y}, 236 ${a.y}`}
            fill="none"
            stroke="#F1AE0440"
            strokeWidth="1.4"
            strokeDasharray="4 5"
            style={{ animation: `qart-flow ${1.3 + i * 0.25}s linear infinite` }}
          />
          <g transform={`translate(240,${a.y})`}>
            <rect
              x="0"
              y="-11"
              width="54"
              height="22"
              rx="6"
              fill="#2A221A"
              stroke={i === 0 ? GOLD : "#F1AE0470"}
              strokeWidth="1.3"
              style={breathe(3 + i * 0.4, i * 0.3)}
            />
            <circle cx="10" cy="0" r="3" fill={i === 0 ? GOLD : AMBER} />
            <text x="19" y="3" fontSize="8" fill="#F6E7BF" fontFamily="monospace">
              {a.label}
            </text>
          </g>
        </g>
      ))}
      <text x="160" y="186" textAnchor="middle" fontSize="8" fill="#F1AE0499" fontFamily="monospace">
        one router, specialist agents, runs unattended
      </text>
    </ArtFrame>
  );
}

// Kallpa: an ERG-mode session. The trainer at the end of a Bluetooth link, a
// flat target line, and the live power trace climbing onto it and holding.
function Kallpa() {
  const trace = "M140 138 C 160 138, 166 96, 186 94 S 226 90, 246 93 S 280 91, 296 92";
  return (
    <ArtFrame title="An indoor trainer holding an ERG target over Bluetooth">
      {/* the trainer: a wheel with a spinning flywheel mark, on its stand */}
      <g transform="translate(58,108)">
        <circle r="26" fill="none" stroke={INK} strokeOpacity="0.45" strokeWidth="2.5" />
        <circle r="26" fill="none" stroke={AMBER} strokeWidth="2.5" strokeDasharray="20 143" style={spin(3)} />
        <circle r="7" fill="#FFFDF8" stroke={INK} strokeOpacity="0.45" strokeWidth="2" />
        <path d="M0 26 v14 M-18 40 h36" fill="none" stroke={INK} strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* the Bluetooth link from the trainer up to the chart */}
      <path d="M90 84 q18 -36 42 -30" fill="none" stroke={AMBER} strokeWidth="1.6" strokeDasharray="3 5" style={{ animation: "qart-flow 1.6s linear infinite" }} />
      <g transform="translate(108,44)" fill="none" stroke={AMBER} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 -9 V9 M0 -9 L6 -4.5 L-6 4.5 M0 9 L6 4.5 L-6 -4.5" />
      </g>
      <text x="296" y="38" textAnchor="end" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">
        FTMS over BLE
      </text>
      {/* the chart: a flat ERG target and the power trace holding it */}
      <line x1="140" y1="150" x2="296" y2="150" stroke="#E0D4B8" strokeWidth="1.5" />
      <line x1="140" y1="92" x2="296" y2="92" stroke={AMBER} strokeWidth="2" strokeDasharray="6 4" />
      <text x="296" y="84" textAnchor="end" fontSize="8" fill="#A89A7E" fontFamily="monospace">
        ERG target
      </text>
      <path d={trace} fill="none" stroke={INK} strokeOpacity="0.55" strokeWidth="2.2" strokeLinecap="round" />
      <path d={trace} fill="none" stroke={AMBER} strokeWidth="2.2" strokeLinecap="round" strokeDasharray="8 8" style={{ animation: "qart-flow 1.2s linear infinite" }} />
      <text x="140" y="164" fontSize="8" fill="#A89A7E" fontFamily="monospace">
        power, held at the target
      </text>
    </ArtFrame>
  );
}

const ART: Record<ArtKey, () => JSX.Element> = {
  radar: Radar,
  flow: Flow,
  orb: Orb,
  pages: Pages,
  pipeline: Pipeline,
  link: Link,
  noe: Noe,
  commissioning: Commissioning,
  quorum: Quorum,
  cut: Cut,
  video: Video,
  amaru: Amaru,
  kallpa: Kallpa,
};

export function CardArt({ art, className }: { art: ArtKey; className?: string }) {
  const Art = ART[art];
  return (
    <div className={cn("relative aspect-[16/10] w-full overflow-hidden", className)}>
      <Art />
    </div>
  );
}
