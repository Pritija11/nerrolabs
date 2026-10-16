import Link from "next/link";

type Variant = "primary" | "outline" | "teal" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--accent-pink)] text-[var(--on-pink)] hover:bg-[var(--accent-pink-dark)]",
  outline:
    "border-2 border-[var(--border-strong)] text-[var(--fg)] hover:border-[var(--ink)]",
  teal: "bg-[var(--primary)] text-[var(--on-primary)] hover:bg-[var(--primary-dark)]",
  dark: "bg-[var(--ink)] text-[var(--on-dark)] hover:bg-black",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
