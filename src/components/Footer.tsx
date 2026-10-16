import Link from "next/link";
import { Container } from "./Container";
import { IconLogo } from "./icons";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/platform", label: "Visual AI testing" },
      { href: "/platform", label: "Self-healing tests" },
      { href: "/platform", label: "Integrations" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/customers", label: "Customers" },
      { href: "/compliance", label: "Compliance" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--on-dark-muted)]">
      <Container className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <IconLogo className="h-6 w-6 text-[var(--primary)]" />
            <span className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--on-dark)]">
              Nerro Labs
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            AI-powered visual and functional testing that catches what
            manual QA misses and self-heals when your UI changes.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm font-semibold text-[var(--on-dark)]">
              {col.heading}
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {col.links.map((l, i) => (
                <li key={`${l.href}-${i}`}>
                  <Link href={l.href} className="hover:text-[var(--on-dark)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Nerro Labs. All rights reserved.</p>
          <p>AI visual testing, built from Kathmandu, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}
