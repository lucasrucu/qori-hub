import { cn } from "@/lib/utils";

// Bespoke, coded visuals for the PIMS & RFCC case-study page. Same Sovereign
// amber language as components/CardArt.tsx, drawn in SVG/CSS rather than
// screenshots. Motion is subtle, looped, and respects prefers-reduced-motion
// through the qart-* / otto-* keyframes already defined in globals.css.
//
// Palette (hex mirrors the HSL tokens in globals.css):
//   amber #F1AE04   gold #F6C44A   deep #C97A04   ink #221C14
//   cream #FBF6EA   line #E0D4B8   green #2E7D44

const AMBER = "#F1AE04";
const GOLD = "#F6C44A";
const INK = "#221C14";
const GREEN = "#2E7D44";

const spin = (s: number, rev = false): React.CSSProperties => ({
  animation: `otto-spin${rev ? "-rev" : ""} ${s}s linear infinite`,
  transformOrigin: "center",
  transformBox: "fill-box",
});

// Shared frame: a self-contained scene on the cream art surface.
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
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_40px_-26px_rgba(120,80,10,0.45)]",
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
        <rect width="320" height="200" fill="#FBF6EA" />
        {children}
      </svg>
    </div>
  );
}

// HERO — the full pipeline as one wide scene: a stack of records flows through
// a validation node, fans into a report and an Aconex pull, then converges on a
// signed certificate. This is the page's signature visual.
export function PimsPipelineHero() {
  return (
    <Frame title="Records flow through validation into a signed readiness package" className="aspect-[16/9]">
      <defs>
        <marker id="pims-ah" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill={AMBER} />
        </marker>
      </defs>

      {/* Source: a stack of PIMS records */}
      <g transform="translate(14,66)">
        <rect x="0" y="8" width="48" height="62" rx="5" fill="#FFFDF8" stroke="#D9CDB2" transform="translate(6,6)" opacity="0.55" />
        <rect x="0" y="8" width="48" height="62" rx="5" fill="#FFFDF8" stroke="#D9CDB2" transform="translate(3,3)" opacity="0.8" />
        <rect x="0" y="8" width="48" height="62" rx="5" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.4" />
        <line x1="9" y1="24" x2="39" y2="24" stroke="#E0D4B8" strokeWidth="2.5" />
        <line x1="9" y1="34" x2="39" y2="34" stroke="#E0D4B8" strokeWidth="2.5" />
        <line x1="9" y1="44" x2="31" y2="44" stroke="#E0D4B8" strokeWidth="2.5" />
        <text x="2" y="88" fontSize="8" fill="#A89A7E" fontFamily="monospace">PIMS records</text>
      </g>

      {/* Flow to validate */}
      <path d="M76 100 h36" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#pims-ah)" style={{ animation: "qart-flow 1.5s linear infinite" }} />

      {/* Validation node: a spinning ring + a check */}
      <g transform="translate(140,100)">
        <circle r="26" fill="#F1AE0418" stroke={AMBER} strokeWidth="1.4" />
        <circle r="32" fill="none" stroke="#F1AE0440" strokeWidth="1" strokeDasharray="3 6" style={spin(9)} />
        <path d="M-9 0 l6 7 l12 -15" fill="none" stroke={AMBER} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="46" textAnchor="middle" fontSize="8" fill="#A89A7E" fontFamily="monospace">validate</text>
      </g>

      {/* Fan-out: report (up) + Aconex pull (down) */}
      <path d="M172 92 q22 -16 44 -22" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#pims-ah)" style={{ animation: "qart-flow 1.7s linear infinite" }} />
      <path d="M172 108 q22 16 44 22" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#pims-ah)" style={{ animation: "qart-flow 1.7s linear infinite" }} />

      {/* Report doc (top branch) */}
      <g transform="translate(220,40)">
        <rect width="44" height="34" rx="4" fill="#FFFDF8" stroke="#D9CDB2" />
        <rect x="0" y="0" width="44" height="9" rx="4" fill="#F1AE0426" />
        <line x1="7" y1="18" x2="37" y2="18" stroke="#E0D4B8" strokeWidth="2" />
        <line x1="7" y1="24" x2="30" y2="24" stroke="#E0D4B8" strokeWidth="2" />
        <text x="22" y="-5" textAnchor="middle" fontSize="7.5" fill="#A89A7E" fontFamily="monospace">PDF + XLSX</text>
      </g>

      {/* Aconex / HOP docs (bottom branch) */}
      <g transform="translate(220,126)">
        <rect width="44" height="34" rx="4" fill="#FFFDF8" stroke="#D9CDB2" />
        <circle cx="14" cy="17" r="7" fill="none" stroke={AMBER} strokeWidth="2" />
        <line x1="19" y1="22" x2="26" y2="29" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
        <text x="22" y="50" textAnchor="middle" fontSize="7.5" fill="#A89A7E" fontFamily="monospace">HOP docs</text>
      </g>

      {/* Converge to signed cert */}
      <path d="M266 57 q26 18 26 38" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#pims-ah)" style={{ animation: "qart-flow 1.9s linear infinite" }} />
      <path d="M266 143 q26 -18 26 -38" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#pims-ah)" style={{ animation: "qart-flow 1.9s linear infinite" }} />

      {/* Signed package */}
      <g transform="translate(276,76)">
        <rect width="34" height="48" rx="5" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.5" />
        <circle
          cx="17"
          cy="20"
          r="11"
          fill={GREEN}
          style={{ animation: "otto-breathe 3.2s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
        />
        <path d="M11 20 l4 4 l7 -9" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="17" y="42" textAnchor="middle" fontSize="6.5" fill="#7A5800" fontFamily="monospace">SIGNED</text>
      </g>
    </Frame>
  );
}

// REPORTS — a readiness report: a bar of subsystem completion, a 100%-ready
// badge, and an "almost" row. Speaks "subsystem-readiness report".
export function PimsReportArt() {
  const rows = [
    { y: 70, w: 196, pct: 100, ready: true },
    { y: 96, w: 150, pct: 76, ready: false },
    { y: 122, w: 176, pct: 90, ready: false },
  ];
  return (
    <Frame title="Subsystem readiness report with completion bars">
      <text x="24" y="44" fontSize="11" fontWeight="700" fill={INK} fontFamily="monospace">Subsystem readiness</text>
      <text x="24" y="56" fontSize="8" fill="#A89A7E" fontFamily="monospace">by work package</text>
      {rows.map((r, i) => (
        <g key={r.y}>
          <rect x="24" y={r.y} width="236" height="14" rx="7" fill="#F2EAD7" stroke="#E0D4B8" />
          <rect
            x="24"
            y={r.y}
            width={r.w}
            height="14"
            rx="7"
            fill={r.ready ? GREEN : i === 1 ? GOLD : AMBER}
            style={{ animation: `qart-rise 2.6s ease-in-out ${i * 0.25}s infinite`, transformOrigin: "left", transformBox: "fill-box" }}
          />
          <text x={r.ready ? 226 : 272} y={r.y + 11} fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">
            {r.pct}%
          </text>
        </g>
      ))}
      <g transform="translate(232,40)">
        <rect x="-6" y="-12" width="64" height="20" rx="10" fill="#2E7D4418" stroke={GREEN} strokeWidth="1.2" />
        <text x="26" y="2" textAnchor="middle" fontSize="9" fontWeight="700" fill={GREEN} fontFamily="monospace">READY</text>
      </g>
    </Frame>
  );
}

// SIGN-OFF — the RFCC certificate getting stamped: a cert with fields and a
// green signature seal pressing in. Speaks "RFCC sign-off flow".
export function PimsSignoffArt() {
  return (
    <Frame title="RFCC readiness certificate being signed">
      {/* Certificate */}
      <g transform="translate(54,40)">
        <rect width="150" height="120" rx="8" fill="#FFFDF8" stroke="#D9CDB2" strokeWidth="1.4" />
        <rect x="0" y="0" width="150" height="26" rx="8" fill="#F1AE0420" />
        <text x="14" y="17" fontSize="10" fontWeight="700" fill={INK} fontFamily="monospace">RFCC</text>
        <text x="136" y="17" textAnchor="end" fontSize="8" fill="#A89A7E" fontFamily="monospace">4191-50</text>
        <line x1="14" y1="44" x2="120" y2="44" stroke="#E0D4B8" strokeWidth="2.5" />
        <line x1="14" y1="56" x2="98" y2="56" stroke="#E0D4B8" strokeWidth="2.5" />
        <line x1="14" y1="68" x2="112" y2="68" stroke="#E0D4B8" strokeWidth="2.5" />
        <line x1="14" y1="80" x2="86" y2="80" stroke="#E0D4B8" strokeWidth="2.5" />
        <text x="14" y="104" fontSize="7.5" fill="#A89A7E" fontFamily="monospace">3WLA imported · HOP uploaded</text>
      </g>

      {/* Spinning dashed ring + green seal pressing in */}
      <g transform="translate(216,118)">
        <circle r="34" fill="none" stroke="#2E7D4433" strokeWidth="1.2" strokeDasharray="3 6" style={spin(11)} />
        <circle
          r="26"
          fill={GREEN}
          style={{ animation: "otto-breathe 3s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
        />
        <path d="M-11 0 l7 8 l15 -18" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="48" textAnchor="middle" fontSize="8" fill={GREEN} fontFamily="monospace" fontWeight="700">SIGNED</text>
      </g>
    </Frame>
  );
}
