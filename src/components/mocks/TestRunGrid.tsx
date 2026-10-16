import { Fragment } from "react";
import { IconCheck, IconX } from "../icons";

const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
const devices = ["Desktop", "Tablet", "Mobile"];

const results: Record<string, boolean> = {
  "Chrome-Desktop": true,
  "Chrome-Tablet": true,
  "Chrome-Mobile": true,
  "Firefox-Desktop": true,
  "Firefox-Tablet": true,
  "Firefox-Mobile": false,
  "Safari-Desktop": true,
  "Safari-Tablet": true,
  "Safari-Mobile": true,
  "Edge-Desktop": true,
  "Edge-Tablet": true,
  "Edge-Mobile": true,
};

export function TestRunGrid() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(2,39,59,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Cross-browser run — #4821
        </span>
        <span className="pill pill-success">11 / 12 passed</span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-[80px_repeat(3,1fr)] gap-2 text-center">
          <div />
          {devices.map((d) => (
            <span
              key={d}
              className="font-[family-name:var(--font-mono)] text-[10px] uppercase text-[var(--fg-faint)]"
            >
              {d}
            </span>
          ))}
          {browsers.map((b) => (
            <Fragment key={b}>
              <span className="flex items-center text-xs text-[var(--ink)]">
                {b}
              </span>
              {devices.map((d) => {
                const pass = results[`${b}-${d}`];
                return (
                  <span
                    key={`${b}-${d}`}
                    className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${
                      pass
                        ? "bg-[color-mix(in_srgb,var(--success)_16%,transparent)]"
                        : "bg-[color-mix(in_srgb,var(--danger)_14%,transparent)]"
                    }`}
                  >
                    {pass ? (
                      <IconCheck className="h-3.5 w-3.5 text-[var(--success)]" />
                    ) : (
                      <IconX className="h-3.5 w-3.5 text-[var(--danger)]" />
                    )}
                  </span>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
