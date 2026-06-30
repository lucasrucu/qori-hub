import { cn } from "@/lib/utils";

// Bespoke, coded visuals for the /experience case-study page. Same Sovereign
// design language as components/PimsMotion.tsx, but color-coded to the
// experience accent: a deep jewel teal that pairs with the site's amber gold.
// Motion is subtle, looped, and respects prefers-reduced-motion through the
// qart-* / otto-* keyframes already defined in globals.css.
//
// Palette (hex mirrors the --experience HSL tokens in globals.css):
//   teal #0F7E78   teal-bright #1FB8AD   gold #F6C44A (accent pairing)
//   ink #221C14    cream #FBF6EA   line #E0D4B8

const TEAL = "#0F7E78";
const TEAL_BRIGHT = "#1FB8AD";
const GOLD = "#F6C44A";
const INK = "#221C14";

const spin = (s: number, rev = false): React.CSSProperties => ({
  animation: `otto-spin${rev ? "-rev" : ""} ${s}s linear infinite`,
  transformOrigin: "center",
  transformBox: "fill-box",
});

function Frame({
  children,
  title,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border shadow-[0_18px_44px_-24px_rgba(12,90,86,0.55)]",
        dark ? "border-experience/40" : "border-border",
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
          <radialGradient id="exp-hero-bg" cx="32%" cy="34%" r="85%">
            <stop offset="0%" stopColor="#0C3633" />
            <stop offset="100%" stopColor="#08221F" />
          </radialGradient>
          <linearGradient id="exp-clock" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={TEAL_BRIGHT} />
            <stop offset="100%" stopColor={TEAL} />
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={dark ? "url(#exp-hero-bg)" : "#FBF6EA"} />
        {children}
      </svg>
    </div>
  );
}

// HERO — the toolkit as a system: a ring of automation nodes feeding a central
// "hours saved" hub. The signature visual for the page, on a deep teal HUD.
export function ExperienceHero() {
  const nodes = [
    { a: -90, r: 70 },
    { a: -38, r: 70 },
    { a: 14, r: 70 },
    { a: 66, r: 70 },
    { a: 118, r: 70 },
    { a: 170, r: 70 },
    { a: 222, r: 70 },
    { a: 274, r: 70 },
  ];
  const cx = 160;
  const cy = 100;
  return (
    <Frame title="A toolkit of automations feeding hours back into the project" dark className="aspect-[16/9]">
      {/* faint orbit rings */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="70" fill="none" stroke={`${TEAL_BRIGHT}22`} strokeWidth="1" />
        <circle r="88" fill="none" stroke={`${TEAL_BRIGHT}14`} strokeWidth="1" strokeDasharray="2 7" style={spin(26)} />
      </g>

      {/* connector spokes + nodes */}
      {nodes.map((n, i) => {
        const rad = (n.a * Math.PI) / 180;
        const x = cx + Math.cos(rad) * n.r;
        const y = cy + Math.sin(rad) * n.r;
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
              r="7"
              fill="#0C3633"
              stroke={i % 3 === 0 ? GOLD : TEAL_BRIGHT}
              strokeWidth="1.6"
              style={{ animation: `otto-breathe ${3 + (i % 4) * 0.4}s ease-in-out ${i * 0.2}s infinite`, transformOrigin: "center", transformBox: "fill-box" }}
            />
          </g>
        );
      })}

      {/* central hub: hours saved */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="34" fill="#0C3633" stroke={TEAL_BRIGHT} strokeWidth="1.6" />
        <circle r="40" fill="none" stroke={`${GOLD}55`} strokeWidth="1" strokeDasharray="3 6" style={spin(12)} />
        <text x="0" y="-2" textAnchor="middle" fontSize="19" fontWeight="700" fill="#FFFFFF" fontFamily="monospace">
          1,000+
        </text>
        <text x="0" y="13" textAnchor="middle" fontSize="8" fill={TEAL_BRIGHT} fontFamily="monospace">
          hours saved
        </text>
        <text x="0" y="24" textAnchor="middle" fontSize="6" fill={`${GOLD}cc`} fontFamily="monospace">
          (estimate)
        </text>
      </g>
    </Frame>
  );
}

// FLAGSHIP — the NoE before/after: a tall "6 hr" manual bar collapsing into a
// short teal "30-60 min" bar, with the saved delta called out.
export function ExperienceFlagshipArt() {
  return (
    <Frame title="Energization documents: about six hours by hand down to under an hour">
      <text x="24" y="34" fontSize="11" fontWeight="700" fill={INK} fontFamily="monospace">
        NoE generation
      </text>
      <text x="24" y="46" fontSize="8" fill="#A89A7E" fontFamily="monospace">
        per day, heaviest days
      </text>

      {/* baseline */}
      <line x1="40" y1="168" x2="296" y2="168" stroke="#E0D4B8" strokeWidth="1.5" />

      {/* BEFORE bar — tall, muted */}
      <g>
        <rect
          x="64"
          y="64"
          width="56"
          height="104"
          rx="5"
          fill="#E7D9B4"
          stroke="#D9CDB2"
          style={{ animation: "qart-rise 3.4s ease-in-out infinite", transformOrigin: "bottom", transformBox: "fill-box" }}
        />
        <text x="92" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill={INK} fontFamily="monospace">
          ~6 hrs
        </text>
        <text x="92" y="182" textAnchor="middle" fontSize="8" fill="#A89A7E" fontFamily="monospace">
          by hand
        </text>
      </g>

      {/* AFTER bar — short, teal */}
      <g>
        <rect
          x="200"
          y="142"
          width="56"
          height="26"
          rx="5"
          fill="url(#exp-clock)"
          style={{ animation: "qart-rise 3.4s ease-in-out 0.3s infinite", transformOrigin: "bottom", transformBox: "fill-box" }}
        />
        <text x="228" y="134" textAnchor="middle" fontSize="11" fontWeight="700" fill={TEAL} fontFamily="monospace">
          ~30-60m
        </text>
        <text x="228" y="182" textAnchor="middle" fontSize="8" fill="#A89A7E" fontFamily="monospace">
          with the tool
        </text>
      </g>

      {/* saved delta arrow */}
      <defs>
        <marker id="exp-ah" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill={TEAL} />
        </marker>
      </defs>
      <path d="M126 92 q44 -18 70 44" fill="none" stroke={TEAL} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#exp-ah)" style={{ animation: "qart-flow 1.6s linear infinite" }} />
      <g transform="translate(150,88)">
        <rect x="-30" y="-13" width="60" height="20" rx="10" fill={`${TEAL}1a`} stroke={TEAL} strokeWidth="1.2" />
        <text x="0" y="1" textAnchor="middle" fontSize="9" fontWeight="700" fill={TEAL} fontFamily="monospace">
          ~5 hrs back
        </text>
      </g>
    </Frame>
  );
}

// META — the AI assistant orchestrating the toolkit: a central brain node with
// branches out to background agents running the tools, on a deep teal HUD.
export function ExperienceMetaArt() {
  const agents = [
    { x: 70, y: 52, label: "run" },
    { x: 250, y: 52, label: "report" },
    { x: 70, y: 150, label: "sync" },
    { x: 250, y: 150, label: "sign" },
  ];
  const cx = 160;
  const cy = 100;
  return (
    <Frame title="An AI assistant orchestrating background agents that run the toolkit" dark>
      {/* branches */}
      {agents.map((a, i) => (
        <path
          key={i}
          d={`M${cx} ${cy} L${a.x} ${a.y}`}
          stroke={`${TEAL_BRIGHT}40`}
          strokeWidth="1.5"
          strokeDasharray="4 5"
          style={{ animation: `qart-flow ${1.3 + i * 0.25}s linear infinite` }}
        />
      ))}

      {/* agent nodes */}
      {agents.map((a, i) => (
        <g key={a.label} transform={`translate(${a.x},${a.y})`}>
          <rect
            x="-26"
            y="-15"
            width="52"
            height="30"
            rx="7"
            fill="#0C3633"
            stroke={TEAL_BRIGHT}
            strokeWidth="1.4"
            style={{ animation: `otto-breathe ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`, transformOrigin: "center", transformBox: "fill-box" }}
          />
          <circle cx="-14" cy="0" r="3.5" fill={i === 3 ? GOLD : TEAL_BRIGHT} />
          <text x="4" y="3.5" textAnchor="middle" fontSize="8" fill="#DCEFEC" fontFamily="monospace">
            {a.label}
          </text>
        </g>
      ))}

      {/* central brain / assistant */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="30" fill="none" stroke={`${GOLD}50`} strokeWidth="1" strokeDasharray="3 6" style={spin(14)} />
        <circle r="22" fill="#0C3633" stroke={TEAL_BRIGHT} strokeWidth="1.6" />
        <circle
          r="13"
          fill={TEAL_BRIGHT}
          opacity="0.85"
          style={{ animation: "otto-breathe 3.2s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
        />
        <circle cx="-4" cy="-4" r="3.5" fill="#FFFFFF" opacity="0.85" />
      </g>
      <text x="160" y="190" textAnchor="middle" fontSize="8" fill={`${TEAL_BRIGHT}cc`} fontFamily="monospace">
        one assistant, one toolkit
      </text>
    </Frame>
  );
}
