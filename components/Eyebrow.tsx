// Small section label: a tick + uppercase muted text. The tick carries the
// brand accent: Sovereign gold by default, or the teal Patina accent when the
// page belongs to the commissioning-automation case study (pass accent="experience").
export function Eyebrow({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: "experience";
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`h-px w-6 ${accent === "experience" ? "bg-experience" : "bg-primary"}`}
        aria-hidden="true"
      />
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {children}
      </span>
    </span>
  );
}
