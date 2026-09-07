import { SCALE } from "@/lib/profile";
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

// HERO: the toolkit as a system: a ring of automation nodes feeding a central
// hub carrying the project's scale. The signature visual for the page, on a deep teal HUD.
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
    <Frame title="A toolkit of automations running against the project's equipment tags" dark className="aspect-[16/9]">
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

      {/* central hub: the scale the toolkit runs against. No hours figure, on
          purpose: nothing on this site states one. */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="34" fill="#0C3633" stroke={TEAL_BRIGHT} strokeWidth="1.6" />
        <circle r="40" fill="none" stroke={`${GOLD}55`} strokeWidth="1" strokeDasharray="3 6" style={spin(12)} />
        <text x="0" y="3" textAnchor="middle" fontSize="17" fontWeight="700" fill="#FFFFFF" fontFamily="monospace">
          {SCALE.tags}
        </text>
        <text x="0" y="16" textAnchor="middle" fontSize="7.5" fill={TEAL_BRIGHT} fontFamily="monospace">
          equipment tags
        </text>
      </g>
    </Frame>
  );
}

// META: the AI assistant orchestrating the toolkit: a central brain node with
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
