import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  IconCheck,
  IconX,
  IconLock,
  IconServer,
  IconUsers,
  IconShieldCheck,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "How Nerro Labs handles the screenshots and test data it captures — retention controls, access scoping, and our compliance roadmap.",
  alternates: {
    canonical: "/compliance",
  },
};

const stores = [
  "Screenshots captured during a test run",
  "Test scripts and configuration you provide",
  "Run history, pass/fail results, and diffs",
];

const doesNot = [
  "Your application's database or backend",
  "Real customer data beyond what renders in a test UI",
  "Source code outside what a test directly exercises",
];

const safeguards = [
  {
    icon: IconLock,
    title: "Encrypted at rest and in transit",
    body: "Screenshots and run data are encrypted with AES-256 at rest and TLS 1.2+ in transit.",
  },
  {
    icon: IconServer,
    title: "Configurable data retention",
    body: "Set how long screenshots and run history are kept, down to the project level — from 7 days to indefinite.",
  },
  {
    icon: IconUsers,
    title: "Role-based internal access",
    body: "Employee access to customer test data is role-gated, logged, and reviewed quarterly.",
  },
  {
    icon: IconShieldCheck,
    title: "Working toward SOC 2 Type II",
    body: "As an early-stage company, we're building our compliance program now, with policies in place from day one.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Compliance</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              What a screenshot tool actually sees.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup asking teams to run their UI through our test
              runner, we want the boundary of what we store to be exactly
              as narrow as it sounds.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                What Nerro Labs stores
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {stores.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--success)_16%,transparent)]">
                      <IconCheck className="h-3 w-3 text-[var(--success)]" />
                    </span>
                    <span className="text-sm leading-6 text-[var(--fg-muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                What Nerro Labs never touches
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {doesNot.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-pink)_14%,transparent)]">
                      <IconX className="h-3 w-3 text-[var(--accent-pink)]" />
                    </span>
                    <span className="text-sm leading-6 text-[var(--fg-muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              The rest of how we handle your data
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {safeguards.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-tint)]">
                    <s.icon className="h-5 w-5 text-[var(--primary-dark)]" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 text-center">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Want our full data-handling writeup?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We share a detailed data-flow diagram during onboarding —
              just ask.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Request documentation</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
