const stages = [
  { label: "Locator broke", meta: "#submit-btn renamed to #checkout-cta" },
  { label: "AI matched the new element", meta: "98% visual + structural confidence" },
  { label: "Test suite updated itself", meta: "No PR, no manual fix" },
  { label: "Run completed", meta: "Passed in 4.1s" },
];

export function SelfHealTimeline() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(2,39,59,0.18)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Self-healing test
        </span>
        <span className="pill pill-success">Healed</span>
      </div>

      <div className="mt-6 flex flex-col">
        {stages.map((s, i) => (
          <div key={s.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--surface-tint)] font-[family-name:var(--font-mono)] text-[11px] text-[var(--primary-dark)]">
                {i + 1}
              </span>
              {i < stages.length - 1 && (
                <span className="mt-1 h-full w-px flex-1 bg-[var(--border)]" />
              )}
            </div>
            <div className="pb-6 last:pb-0">
              <p className="text-sm font-medium text-[var(--ink)]">
                {s.label}
              </p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                {s.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
