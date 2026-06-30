import { cn } from "@/lib/utils";

// Bespoke, coded visuals for the NoE Toolkit case-study page. Same Sovereign amber
// language as components/PimsMotion.tsx, drawn in SVG/CSS rather than screenshots,
// respecting prefers-reduced-motion through the qart-* / otto-* keyframes in
// globals.css.
//
// The three tool sections use ToolFrame: a faux app-window chrome that shows the real
// tool screenshot when one has been dropped into public/noe/, and a coded placeholder
// scene until then. The page decides which (it can read the filesystem; this component
// cannot), and passes `shot` only when the file exists.
//
// Palette (hex mirrors the HSL tokens in globals.css):
//   amber #F1AE04   gold #F6C44A   deep #C97A04   ink #221C14
//   cream #FBF6EA   line #E0D4B8   green #2E7D44

const AMBER = "#F1AE04";
const GOLD = "#F6C44A";
const INK = "#221C14";
const GREEN = "#2E7D44";

function Surface({
  children,
  title,
  className,
  ratio = "aspect-[16/10]",
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_40px_-26px_rgba(120,80,10,0.45)]",
        ratio,
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

// HERO — the launcher: one window, three crash-isolated tool processes branching off
// it, each a focused tool. The page's signature visual.
export function NoeLauncherHero() {
  const tools = [
    { x: 40, label: "Generator", glyph: "doc" as const, d: 0 },
    { x: 132, label: "Painter", glyph: "brush" as const, d: 0.4 },
    { x: 224, label: "Finder", glyph: "find" as const, d: 0.8 },
  ];
  return (
    <Surface title="The NoE launcher spawning three isolated commissioning tools" ratio="aspect-[16/9]">
      <defs>
        <marker id="noe-ah" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill={AMBER} />
        </marker>
      </defs>

      {/* Launcher header bar */}
      <g transform="translate(96,16)">
        <rect width="128" height="28" rx="8" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.4" />
        <circle cx="13" cy="14" r="3.4" fill="#C97A04" />
        <circle cx="24" cy="14" r="3.4" fill={GOLD} />
        <circle cx="35" cy="14" r="3.4" fill={GREEN} />
        <text x="80" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">
          NoE Toolkit
        </text>
      </g>

      {/* Branches: launcher -> each tool process */}
      {tools.map((t) => (
        <path
          key={`p-${t.x}`}
          d={`M160 44 C 160 64, ${t.x + 30} 60, ${t.x + 30} 80`}
          fill="none"
          stroke={AMBER}
          strokeWidth="1.8"
          strokeDasharray="5 5"
          markerEnd="url(#noe-ah)"
          style={{ animation: `qart-flow ${1.4 + t.d}s linear infinite` }}
        />
      ))}

      {/* Three tool cards */}
      {tools.map((t) => (
        <g key={t.x} transform={`translate(${t.x},84)`}>
          <rect
            width="60"
            height="92"
            rx="8"
            fill="#FFFDF8"
            stroke="#D9CDB2"
            strokeWidth="1.3"
            style={{ animation: `otto-breathe 3.4s ease-in-out ${t.d}s infinite`, transformOrigin: "center", transformBox: "fill-box" }}
          />
          <rect width="60" height="8" rx="8" fill="#F1AE0426" />
          <g transform="translate(30,42)" stroke={AMBER} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {t.glyph === "doc" && (
              <>
                <rect x="-12" y="-15" width="24" height="30" rx="2" fill="#F1AE0418" />
                <line x1="-6" y1="-7" x2="6" y2="-7" />
                <line x1="-6" y1="-1" x2="6" y2="-1" />
                <line x1="-6" y1="5" x2="2" y2="5" />
              </>
            )}
            {t.glyph === "brush" && (
              <>
                <path d="M-10 13 q-2 -9 7 -11 l9 -11 7 7 -11 9 q-2 9 -12 7 z" fill="#F1AE0418" />
                <line x1="4" y1="-4" x2="10" y2="-10" />
              </>
            )}
            {t.glyph === "find" && (
              <>
                <circle cx="-3" cy="-3" r="10" fill="#F1AE0418" />
                <line x1="5" y1="5" x2="14" y2="14" />
              </>
            )}
          </g>
          <text x="30" y="84" textAnchor="middle" fontSize="7.5" fill="#A89A7E" fontFamily="monospace">
            {t.label}
          </text>
        </g>
      ))}
    </Surface>
  );
}

// A faux app-window holding either a real tool screenshot or a coded placeholder.
export function ToolFrame({
  title,
  shot,
  glyph,
}: {
  title: string;
  shot?: string | null;
  glyph: "doc" | "brush" | "find";
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_40px_-30px_rgba(120,80,10,0.5)]">
      {/* Window title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#C97A04]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F6C44A]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2E7D44]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      {shot ? (
        // Real captures are ~1.87:1; show the whole window (object-contain) on a dark
        // backdrop that matches the app's theme, so nothing is cropped or off-center.
        <div className="flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-[#1e1e2e]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shot} alt={`${title} screenshot`} className="block h-full w-full object-contain" />
        </div>
      ) : (
        <ToolPlaceholder glyph={glyph} />
      )}
    </div>
  );
}

// Coded placeholder scene per tool, used until the real screenshot lands.
function ToolPlaceholder({ glyph }: { glyph: "doc" | "brush" | "find" }) {
  return (
    <div className="relative aspect-[16/10] w-full">
      <svg viewBox="0 0 320 200" role="img" aria-label="Tool preview" preserveAspectRatio="xMidYMid slice" className="block h-full w-full">
        <rect width="320" height="200" fill="#FBF6EA" />

        {glyph === "doc" && (
          <>
            {/* form fields on the left, a generated doc on the right */}
            <g transform="translate(26,40)">
              <text x="0" y="0" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">COMM number</text>
              <rect x="0" y="8" width="110" height="16" rx="4" fill="#FFFDF8" stroke="#D9CDB2" />
              <text x="0" y="46" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">Subsystems</text>
              <rect x="0" y="54" width="110" height="16" rx="4" fill="#FFFDF8" stroke="#D9CDB2" />
              <text x="0" y="92" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">Signer</text>
              <rect x="0" y="100" width="110" height="16" rx="4" fill="#FFFDF8" stroke="#D9CDB2" />
              <rect x="0" y="128" width="64" height="20" rx="6" fill={AMBER} style={{ animation: "otto-breathe 3s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }} />
              <text x="32" y="142" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFFFFF" fontFamily="monospace">Generate</text>
            </g>
            <path d="M150 100 h22" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#noe-ph-ah)" style={{ animation: "qart-flow 1.5s linear infinite" }} />
            <g transform="translate(196,40)">
              <rect width="98" height="120" rx="6" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.4" />
              <rect width="98" height="22" rx="6" fill="#F1AE0420" />
              <text x="10" y="15" fontSize="8" fontWeight="700" fill={INK} fontFamily="monospace">NoE .docx</text>
              <line x1="12" y1="40" x2="86" y2="40" stroke="#E0D4B8" strokeWidth="2.5" />
              <line x1="12" y1="52" x2="74" y2="52" stroke="#E0D4B8" strokeWidth="2.5" />
              <line x1="12" y1="64" x2="82" y2="64" stroke="#E0D4B8" strokeWidth="2.5" />
              <line x1="12" y1="92" x2="60" y2="92" stroke="#E0D4B8" strokeWidth="2.5" />
            </g>
          </>
        )}

        {glyph === "brush" && (
          <>
            {/* a Visio drawing whose subsystem shapes get repainted amber */}
            <g transform="translate(40,46)" fill="none" stroke="#D9CDB2" strokeWidth="1.4">
              <rect x="0" y="0" width="40" height="28" rx="3" fill="#FFFDF8" />
              <rect x="70" y="0" width="40" height="28" rx="3" fill="#F1AE0440" stroke={AMBER} style={{ animation: "otto-breathe 2.8s ease-in-out 0s infinite", transformOrigin: "center", transformBox: "fill-box" }} />
              <rect x="140" y="0" width="40" height="28" rx="3" fill="#FFFDF8" />
              <rect x="0" y="60" width="40" height="28" rx="3" fill="#F1AE0440" stroke={AMBER} style={{ animation: "otto-breathe 2.8s ease-in-out 0.6s infinite", transformOrigin: "center", transformBox: "fill-box" }} />
              <rect x="70" y="60" width="40" height="28" rx="3" fill="#FFFDF8" />
              <rect x="140" y="60" width="40" height="28" rx="3" fill="#F1AE0440" stroke={AMBER} style={{ animation: "otto-breathe 2.8s ease-in-out 1.2s infinite", transformOrigin: "center", transformBox: "fill-box" }} />
              <line x1="40" y1="14" x2="70" y2="14" stroke={AMBER} />
              <line x1="110" y1="14" x2="140" y2="14" stroke="#D9CDB2" />
              <line x1="20" y1="28" x2="20" y2="60" stroke={AMBER} />
              <line x1="160" y1="28" x2="160" y2="60" stroke={AMBER} />
            </g>
            <g transform="translate(232,150)">
              <rect width="58" height="20" rx="6" fill="#2E7D4418" stroke={GREEN} strokeWidth="1.2" />
              <text x="29" y="14" textAnchor="middle" fontSize="8" fontWeight="700" fill={GREEN} fontFamily="monospace">PDF out</text>
            </g>
          </>
        )}

        {glyph === "find" && (
          <>
            {/* a search bar over a tree of drawing files, one match highlighted */}
            <g transform="translate(26,36)">
              <rect width="268" height="22" rx="11" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.4" />
              <circle cx="16" cy="11" r="6" fill="none" stroke={AMBER} strokeWidth="2" />
              <line x1="20" y1="15" x2="26" y2="21" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
              <text x="34" y="15" fontSize="9" fill="#A89A7E" fontFamily="monospace">4191-50-05</text>
            </g>
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(40,${78 + i * 24})`}>
                <rect x="-6" y="-12" width="252" height="20" rx="5" fill={i === 1 ? "#F1AE0420" : "transparent"} stroke={i === 1 ? AMBER : "transparent"} strokeWidth="1.2" style={i === 1 ? { animation: "otto-breathe 3s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" } : undefined} />
                <rect x="0" y="-7" width="13" height="11" rx="2" fill="#FFFDF8" stroke="#D9CDB2" />
                <text x="22" y="2" fontSize="8.5" fill={i === 1 ? INK : "#A89A7E"} fontFamily="monospace">
                  {["Area-12.vsdx", "Area-12 / page 3 · 4191-50-05", "Area-13.vsdx", "Area-14.vsdm"][i]}
                </text>
              </g>
            ))}
          </>
        )}

        <defs>
          <marker id="noe-ph-ah" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 z" fill={AMBER} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

// ARCHITECTURE — one launcher process spawning three isolated tool processes,
// the whole thing packaged into a single .exe.
export function NoeArchitecture() {
  const tools = ["Generator", "Painter", "Finder"];
  return (
    <Surface title="One launcher spawns three isolated processes, packaged as one exe" ratio="aspect-[16/9]">
      <defs>
        <marker id="noe-arch-ah" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill={AMBER} />
        </marker>
      </defs>

      {/* exe wrapper */}
      <rect x="12" y="12" width="296" height="176" rx="12" fill="none" stroke="#E0D4B8" strokeWidth="1.4" strokeDasharray="4 6" />
      <text x="22" y="28" fontSize="8" fill="#A89A7E" fontFamily="monospace">NoE.exe · PyInstaller</text>

      {/* launcher */}
      <g transform="translate(120,44)">
        <rect width="80" height="30" rx="7" fill="#FFFDF8" stroke={AMBER} strokeWidth="1.5" />
        <text x="40" y="19" textAnchor="middle" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">launcher</text>
      </g>

      {/* spawn arrows to three processes */}
      {tools.map((_, i) => {
        const cx = 66 + i * 94;
        return (
          <path
            key={i}
            d={`M160 74 C 160 96, ${cx + 34} 92, ${cx + 34} 112`}
            fill="none"
            stroke={AMBER}
            strokeWidth="1.8"
            strokeDasharray="5 5"
            markerEnd="url(#noe-arch-ah)"
            style={{ animation: `qart-flow ${1.4 + i * 0.3}s linear infinite` }}
          />
        );
      })}

      {/* three isolated processes */}
      {tools.map((t, i) => {
        const x = 66 + i * 94;
        return (
          <g key={t} transform={`translate(${x},112)`}>
            <rect width="68" height="58" rx="8" fill="#FBF6EA" stroke="#D9CDB2" strokeWidth="1.3" />
            <text x="34" y="22" textAnchor="middle" fontSize="8" fontWeight="700" fill={INK} fontFamily="monospace">{t}</text>
            <g transform="translate(34,38)">
              <circle r="9" fill="#2E7D4418" stroke={GREEN} strokeWidth="1.2" />
              <path d="M-4 0 l3 3 l5 -6" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x="34" y="54" textAnchor="middle" fontSize="6" fill="#A89A7E" fontFamily="monospace">own process</text>
          </g>
        );
      })}
    </Surface>
  );
}
