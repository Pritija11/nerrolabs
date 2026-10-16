import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { VisualDiffCard } from "@/components/mocks/VisualDiffCard";
import { TestRunGrid } from "@/components/mocks/TestRunGrid";
import { SelfHealTimeline } from "@/components/mocks/SelfHealTimeline";
import {
  IconCheck,
  IconArrowRight,
  IconTerminal,
  IconGitBranch,
  IconServer,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "How Nerro Labs' visual AI, self-healing locators, and cross-browser engine work together to catch UI regressions before customers do.",
  alternates: {
    canonical: "/platform",
  },
};

const sections = [
  {
    eyebrow: "Visual AI",
    title: "Comparison that understands layout, not just pixels",
    body: "A naive pixel diff flags every anti-aliasing shift as a failure. Nerro Labs' visual AI understands layout structure, so it ignores noise and flags what actually matters — a shifted button, a broken grid, a missing icon.",
    points: [
      "Region-level diffing with exact pixel offsets",
      "Ignores dynamic content like timestamps and ads automatically",
      "Baseline approval workflow built for design review",
    ],
    mock: <VisualDiffCard />,
  },
  {
    eyebrow: "Cross-browser & device",
    title: "One suite, every browser and viewport",
    body: "Write a test once and run it against Chrome, Firefox, Safari, and Edge, across desktop, tablet, and mobile viewports — in parallel, not sequentially.",
    points: [
      "Parallel execution cuts full-suite runtime by up to 80%",
      "Real device rendering, not emulated viewports",
      "Per-browser baselines, so a Safari-only quirk doesn't fail Chrome",
    ],
    mock: <TestRunGrid />,
  },
  {
    eyebrow: "Self-healing",
    title: "Locators that survive a redesign",
    body: "Most test suites break the moment a developer renames a class or restructures a component. Nerro Labs matches elements by visual and structural similarity, so the test keeps running instead of failing on a cosmetic change.",
    points: [
      "Confidence score shown for every automatic match",
      "Healed locators are logged for human review, not silently accepted",
      "Works across React, Vue, and traditional server-rendered markup",
    ],
    mock: <SelfHealTimeline />,
  },
];

const deployment = [
  {
    step: "01",
    title: "Run in our cloud",
    body: "Get up and running in minutes using Nerro Labs as a fully managed SaaS solution.",
  },
  {
    step: "02",
    title: "Run in your cloud",
    body: "Deploy in a dedicated environment on AWS, Azure, or GCP for a flexible, secure setup.",
  },
  {
    step: "03",
    title: "Deploy on-prem",
    body: "Run Nerro Labs inside your own infrastructure and firewall for maximum control.",
  },
  {
    step: "04",
    title: "Data retention controls",
    body: "Choose how long screenshots and run history are retained, down to the project level.",
  },
  {
    step: "05",
    title: "Proprietary visual AI",
    body: "Models trained specifically for UI comparison, not a general-purpose vision API.",
  },
  {
    step: "06",
    title: "SSO + SAML support",
    body: "Login via SSO or SAML to cut administrative overhead for larger teams.",
  },
];

const integrationGroups = [
  {
    icon: IconTerminal,
    name: "Test frameworks",
    items: ["Playwright", "Cypress", "Selenium", "WebdriverIO", "Appium"],
  },
  {
    icon: IconGitBranch,
    name: "Version control & CI/CD",
    items: ["GitHub", "GitLab", "Bitbucket", "CircleCI", "Jenkins"],
  },
  {
    icon: IconServer,
    name: "Design & notifications",
    items: ["Storybook", "Figma", "Slack", "Jira"],
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Platform</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              Three engines. One deterministic result.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As an AI visual testing startup, we built Nerro Labs around a
              single comparison engine shared by visual diffing,
              cross-browser execution, and self-healing — so a fix in one
              shows up everywhere.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-24">
          {sections.map((s, i) => (
            <Reveal key={s.eyebrow} delay={i * 40}>
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Eyebrow>{s.eyebrow}</Eyebrow>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.body}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                        <span className="text-sm leading-6 text-[var(--fg-muted)]">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {s.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>Secure & flexible</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Run Nerro Labs anywhere, test any app
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deployment.map((d, i) => (
              <Reveal key={d.step} delay={i * 30}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--surface-tint)] font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--primary-dark)]">
                    {d.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>Integrations</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Fits into the pipeline you already run
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              Nerro Labs is a plugin for the test framework and CI pipeline
              you already have — not a replacement that asks you to start
              over.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5">
            {integrationGroups.map((g, i) => (
              <Reveal key={g.name} delay={i * 30}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[var(--surface-tint)]">
                      <g.icon className="h-5 w-5 text-[var(--primary-dark)]" />
                    </span>
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      {g.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-1.5 text-sm text-[var(--fg-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
              See it run against your own UI.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">
                Schedule a demo
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="outline">
                See pricing
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
