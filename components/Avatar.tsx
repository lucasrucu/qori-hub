// Animated SVG avatar mascot. Replaces the personal headshot across the site:
// a friendly glowing orb that breathes, with a slow amber halo sweep, a soft
// scanline, and the occasional blink. Pure inline SVG + CSS keyframes (see the
// avatar-* rules in globals.css), on-brand with the Sovereign amber palette,
// and fully frozen under prefers-reduced-motion. Fills its container, so the
// caller controls the frame (square in the hero, round on /card).

export function Avatar({ className }: { className?: string }) {
  return (
    <div className={`relative h-full w-full ${className ?? ""}`}>
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label="Animated mascot avatar"
        className="h-full w-full"
        style={{ display: "block" }}
      >
        <defs>
          {/* Warm cream-to-amber field behind the orb. */}
          <radialGradient id="avatar-bg" cx="50%" cy="42%" r="75%">
            <stop offset="0%" stopColor="hsl(48 33% 97%)" />
            <stop offset="100%" stopColor="hsl(40 36% 90%)" />
          </radialGradient>
          {/* The orb body: bright amber core into a deeper edge. */}
          <radialGradient id="avatar-orb" cx="38%" cy="34%" r="72%">
            <stop offset="0%" stopColor="hsl(45 96% 70%)" />
            <stop offset="55%" stopColor="hsl(40 92% 52%)" />
            <stop offset="100%" stopColor="hsl(34 88% 44%)" />
          </radialGradient>
          {/* Clip used to keep the scanline inside the orb. */}
          <clipPath id="avatar-clip">
            <circle cx="100" cy="100" r="46" />
          </clipPath>
        </defs>

        {/* Background wash. */}
        <rect x="0" y="0" width="200" height="200" fill="url(#avatar-bg)" />

        {/* Slow-rotating dashed halo, on-brand amber. */}
        <g
          style={{
            transformOrigin: "100px 100px",
            animation: "avatar-halo 24s linear infinite",
          }}
        >
          <circle
            cx="100"
            cy="100"
            r="68"
            fill="none"
            stroke="hsl(40 92% 52%)"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeDasharray="3 12"
            strokeLinecap="round"
          />
        </g>

        {/* The breathing orb group. */}
        <g
          style={{
            transformOrigin: "100px 100px",
            animation: "avatar-breathe 6s ease-in-out infinite",
          }}
        >
          {/* Soft glow under the orb. */}
          <circle cx="100" cy="100" r="52" fill="hsl(40 92% 52%)" opacity="0.18" />
          {/* Orb body. */}
          <circle cx="100" cy="100" r="46" fill="url(#avatar-orb)" />
          {/* Specular highlight. */}
          <ellipse cx="84" cy="80" rx="15" ry="10" fill="hsl(48 100% 92%)" opacity="0.55" />

          {/* Friendly face: two eyes that blink, and a gentle smile. */}
          <g fill="hsl(28 60% 22%)">
            <g
              style={{
                transformOrigin: "86px 100px",
                animation: "avatar-blink 5.5s ease-in-out infinite",
              }}
            >
              <circle cx="86" cy="100" r="5" />
            </g>
            <g
              style={{
                transformOrigin: "114px 100px",
                animation: "avatar-blink 5.5s ease-in-out infinite",
              }}
            >
              <circle cx="114" cy="100" r="5" />
            </g>
          </g>
          <path
            d="M85 116 q15 13 30 0"
            fill="none"
            stroke="hsl(28 60% 22%)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Soft scanline drifting across the orb, clipped to its circle. */}
          <g clipPath="url(#avatar-clip)">
            <rect
              x="54"
              y="96"
              width="92"
              height="8"
              fill="hsl(48 100% 90%)"
              style={{
                transformOrigin: "100px 100px",
                animation: "avatar-scan 4.5s ease-in-out infinite",
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
