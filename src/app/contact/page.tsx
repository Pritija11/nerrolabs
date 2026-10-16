import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Nerro Labs team about catching UI regressions with visual AI and self-healing tests.",
  alternates: {
    canonical: "/contact",
  },
};

const faqs = [
  {
    q: "What happens after I submit this form?",
    a: "As a small startup, a founder or engineer reviews it personally and replies within a business day — no automated sales sequence.",
  },
  {
    q: "Can I try it before talking to anyone?",
    a: "Yes — the Free plan is self-serve. Mention that and we'll point you straight to setup instead of a call.",
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 md:py-24">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
            Let&apos;s see what your suite is missing.
          </h1>
          <p className="mt-6 max-w-sm text-base leading-7 text-[var(--fg-muted)]">
            Tell us about your stack and what&apos;s prompting this, and
            we&apos;ll take it from there — no obligation, no automated
            follow-up.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <IconMail className="h-4 w-4 flex-none text-[var(--primary)]" />
              <a
                href="mailto:hello@nerrolabs.ltd"
                className="text-sm text-[var(--ink)] hover:text-[var(--primary)]"
              >
                hello@nerrolabs.ltd
              </a>
            </div>
            <div className="flex items-center gap-3">
              <IconPhone className="h-4 w-4 flex-none text-[var(--primary)]" />
              <a
                href="tel:+9779867788990"
                className="text-sm text-[var(--ink)] hover:text-[var(--primary)]"
              >
                +977 986-7788990
              </a>
            </div>
            <div className="flex items-start gap-3">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
              <span className="text-sm text-[var(--ink)]">
                Chabahil, Kathmandu 44600
                <br />
                Nepal
              </span>
            </div>
          </div>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[var(--ink)]">
                  {item.q}
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-xs text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_60px_-28px_rgba(2,39,59,0.15)] md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
