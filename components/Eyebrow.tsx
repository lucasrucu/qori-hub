// Small section label: an amber tick + uppercase muted text. Adds brand accent
// without relying on low-contrast amber text on the cream background.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="h-px w-6 bg-primary" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {children}
      </span>
    </span>
  );
}
