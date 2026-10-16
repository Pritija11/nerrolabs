export function VisualDiffCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(2,39,59,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          checkout.tsx — visual diff
        </span>
        <span className="pill pill-pink">1 diff found</span>
      </div>

      <div className="relative m-5 overflow-hidden rounded-lg border border-[var(--border)]">
        <div className="flex flex-col gap-2 bg-[var(--surface-tint)] p-4">
          <div className="h-3 w-24 rounded bg-[var(--border-strong)]" />
          <div className="h-8 w-full rounded bg-white" />
          <div className="h-8 w-full rounded bg-white" />
          <div className="relative h-9 w-32 rounded-full bg-[var(--ink)]">
            <div className="pointer-events-none absolute -inset-1 rounded-full border-2 border-[var(--accent-pink)]" />
          </div>
        </div>
        <span className="absolute right-3 top-3 rounded-md bg-[var(--accent-pink)] px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] font-semibold text-white">
          button shifted 6px
        </span>
      </div>

      <div className="flex items-center justify-between px-6 pb-5 text-xs text-[var(--fg-faint)]">
        <span>Baseline: main · 2 days ago</span>
        <span>Chrome · Desktop</span>
      </div>
    </div>
  );
}
