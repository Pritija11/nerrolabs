"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { IconClose, IconMenu, IconLogo } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/customers", label: "Customers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur"
          : "border-transparent bg-[var(--bg)]"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <IconLogo className="h-7 w-7 text-[var(--primary)]" />
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--ink)]">
            Nerro Labs
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-[var(--ink)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[var(--accent-pink)] px-5 py-2.5 text-sm font-semibold text-[var(--on-pink)] transition-colors hover:bg-[var(--accent-pink-dark)] lg:inline-flex"
        >
          Start free trial
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-[var(--ink)] lg:hidden"
        >
          {open ? (
            <IconClose className="h-6 w-6" />
          ) : (
            <IconMenu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--border)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-2 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-[var(--surface-tint)] text-[var(--ink)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[var(--accent-pink)] px-4 py-3 text-center text-sm font-semibold text-[var(--on-pink)]"
            >
              Start free trial
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
