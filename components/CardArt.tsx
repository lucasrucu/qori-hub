// Bespoke, coded project-card artwork. One consistent visual system in the
// Sovereign amber palette: every card gets a distinct scene that says what the
// project does, drawn in SVG/CSS instead of a screenshot. Motion is subtle and
// respects prefers-reduced-motion (keyframes in globals.css).
//
// Palette (hex mirrors the HSL tokens in globals.css):
//   amber  #F1AE04   gold-lite #F6C44A   deep #C97A04
//   ink    #221C14   cream-art #FBF6EA   line #E0D4B8   green #2E7D44

import { cn } from "@/lib/utils";

export type ArtKey =
  | "radar"
  | "flow"
  | "orb"
  | "pages"
  | "pipeline"
  | "link";

const AMBER = "#F1AE04";
const GOLD = "#F6C44A";
const INK = "#221C14";

const spin = (s: number, rev = false): React.CSSProperties => ({
  animation: `otto-spin${rev ? "-rev" : ""} ${s}s linear infinite`,
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

// Career Agent — a match radar: rings + a sweeping beam + job pins, a % readout.
function Radar() {
  return (
    <ArtFrame title="Match radar">
      <g transform="translate(160,100)">
        <circle r="78" fill="none" stroke="#E7D9B4" strokeWidth="1.2" />
        <circle r="54" fill="none" stroke="#E7D9B4" strokeWidth="1.2" />
        <circle r="30" fill="none" stroke="#E7D9B4" strokeWidth="1.2" />
        <g style={spin(4)}>
          <path d="M0 0 L0 -80 A80 80 0 0 1 56 -56 Z" fill="#F1AE0433" />
          <line x1="0" y1="0" x2="0" y2="-80" stroke={AMBER} strokeWidth="2" />
        </g>
        <circle cx="34" cy="-22" r="4" fill={AMBER} />
        <circle cx="-44" cy="14" r="4" fill={INK} />
        <circle cx="10" cy="46" r="4" fill={INK} />
        <circle cx="-18" cy="-40" r="4" fill={AMBER} />
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

// Financial Dashboard — money streams flowing into rising bars.
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

// Otto — the gold orb with rotating rings on a dark HUD.
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

// rapid-pdf — three pages, the middle one lifted, being reordered.
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

// PIMS & RFCC — records flow through a validation node into a signed package.
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

// Snip — a long URL collapsing into a short link, with a click count.
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

const ART: Record<ArtKey, () => JSX.Element> = {
  radar: Radar,
  flow: Flow,
  orb: Orb,
  pages: Pages,
  pipeline: Pipeline,
  link: Link,
};

export function CardArt({ art, className }: { art: ArtKey; className?: string }) {
  const Art = ART[art];
  return (
    <div className={cn("relative aspect-[16/10] w-full overflow-hidden", className)}>
      <Art />
    </div>
  );
}
