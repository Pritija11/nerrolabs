export function Eyebrow({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "dark";
}) {
  return (
    <p
      className={`font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.14em] ${
        tone === "dark" ? "text-[var(--primary)]" : "text-[var(--primary-dark)]"
      }`}
    >
      {children}
    </p>
  );
}
