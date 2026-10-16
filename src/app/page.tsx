import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { VisualDiffCard } from "@/components/mocks/VisualDiffCard";
import { TestRunGrid } from "@/components/mocks/TestRunGrid";
import { SelfHealTimeline } from "@/components/mocks/SelfHealTimeline";
import {
  IconCheck,
  IconX,
  IconArrowRight,
  IconTerminal,
  IconUsers,
} from "@/components/icons";

const checklist = [
  "Visual",
  "Functional",
  "Cross-browser",
  "Cross-device",
  "Accessibility",
  "API",
];

const stats = [
  { value: "4.2M+", label: "Test runs completed" },
  { value: "92%", label: "Fewer false failures" },
  { value: "6 min", label: "Avg. time to first test" },
];

const badTraits = [
  "Tests break on every CSS change",
  "Hours spent debugging flaky locators",
  "Bugs reach production anyway",
  "QA can't keep pace with releases",
];

const goodTraits = [
  "Tests adapt automatically to UI changes",
  "Zero time spent on locator maintenance",
  "Pixel-level regressions caught pre-merge",
  "One suite, every browser and device",
];

const capabilities = [
  {
    eyebrow: "Visual AI",
    title: "See every pixel that changed, instantly",
    body: "Nerro Labs compares renders against a visual baseline and flags exactly what moved, resized, or disappeared — not just that a screenshot looks different.",
    mock: <VisualDiffCard />,
  },
  {
    eyebrow: "Cross-browser",
    title: "One test, every browser and device",
    body: "Run the same suite across Chrome, Firefox, Safari, and Edge, on desktop, tablet, and mobile viewports, without maintaining separate test code for each.",
    mock: <TestRunGrid />,
  },
  {
    eyebrow: "Self-healing",
    title: "Tests that fix themselves",
    body: "When a locator breaks, Nerro Labs matches the element by visual and structural similarity and updates the test automatically — no PR required.",
    mock: <SelfHealTimeline />,
  },
];

const paths = [
  {
    icon: IconTerminal,
    title: "Write tests in code",
    body: "Deliver visual ground truth straight to your Playwright, Cypress, or Selenium suites — catch regressions before they hit CI.",
    href: "/platform",
    label: "Explore the SDK",
  },
  {
    icon: IconUsers,
    title: "Test without writing code",
    body: "Describe user journeys in plain English and let Nerro Labs record, run, and self-heal the test for you.",
    href: "/platform",
    label: "Explore no-code testing",
  },
];

const testimonials = [
  {
    quote:
      "We cut our flaky test rate from 30% to under 2% in the first month. QA finally trusts the pipeline again.",
    name: "Priya Sharma",
    role: "QA Lead, design-partner team",
  },
  {
    quote:
      "Self-healing tests saved us roughly a day of maintenance every sprint. That's a day back for actual testing.",
    name: "Daniel Osei",
    role: "Staff Engineer, design-partner team",
  },
];

const faqs = [
  {
    q: "Is Nerro Labs a new company?",
    a: "Yes — we're an early-stage AI visual testing startup based in Kathmandu, Nepal, built closely with our first group of design-partner teams.",
  },
  {
    q: "How is this different from Selenium or Playwright?",
    a: "Playwright and Selenium are the engines that drive a browser. Nerro Labs sits on top, adding visual AI comparison and self-healing locators — it works with your existing framework rather than replacing it.",
  },
  {
    q: "What counts as a 'visual diff'?",
    a: "Any pixel-level change between a baseline render and the current one — a shifted button, a broken layout, a missing icon — flagged with the exact region highlighted.",
  },
  {
    q: "Do I need to rewrite my existing tests?",
    a: "No. Nerro Labs integrates as a plugin for your existing Playwright, Cypress, or Selenium suite — most teams add visual checks to existing tests in an afternoon.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes, every account starts with a free tier that covers small projects and open-source repositories.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--border)] py-20 text-center md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Startup · AI-augmented testing</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--ink)] md:text-6xl">
              Keep your UI in check with tests that heal themselves.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Your team ships fast, but who verifies what customers actually
              see? Nerro Labs catches pixel-level regressions and
              automatically adapts when your interface changes.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Schedule a demo
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Start free trial
              </Button>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {checklist.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-1.5 text-sm text-[var(--fg-muted)]"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--success)]">
                    <IconCheck className="h-2.5 w-2.5 text-white" />
                  </span>
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats band */}
      <section className="bg-[var(--ink)] py-10 text-center">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-white">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[var(--on-dark-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Problem vs solution comparison */}
      <section className="bg-[var(--navy-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">The testing gap</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Manual QA can&apos;t keep up with how fast you ship
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--on-dark-muted)]">
              Writing brittle selectors and eyeballing screenshots doesn&apos;t
              scale. Nerro Labs replaces both with deterministic, self-
              maintaining visual AI.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="font-semibold text-[var(--accent-pink)]">
                  Manual &amp; brittle testing
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {badTraits.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-pink)_20%,transparent)]">
                        <IconX className="h-3 w-3 text-[var(--accent-pink)]" />
                      </span>
                      <span className="text-sm text-[var(--on-dark-muted)]">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="font-semibold text-[var(--primary)]">
                  Nerro Labs visual AI
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {goodTraits.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--primary)_22%,transparent)]">
                        <IconCheck className="h-3 w-3 text-[var(--primary)]" />
                      </span>
                      <span className="text-sm text-[var(--on-dark-muted)]">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-28">
        <Container className="flex flex-col gap-24">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 50}>
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Eyebrow>{c.eyebrow}</Eyebrow>
                  <h2 className="mt-3 max-w-sm font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)]">
                    {c.title}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
                    {c.body}
                  </p>
                </div>
                <div
                  className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {c.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Choose your path */}
      <section className="bg-[var(--navy-alt)] py-24 text-center">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Choose your path</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Total visual control for engineers and QA
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {paths.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-left">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <p.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--on-dark-muted)]">
                    {p.body}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
                  >
                    {p.label}
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials — side by side */}
      <section className="py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 50}>
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.5] tracking-tight text-[var(--ink)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--surface-tint)]" />
                <div>
                  <p className="text-sm text-[var(--ink)]">{t.name}</p>
                  <p className="text-xs text-[var(--fg-faint)]">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
        <Container className="mt-10 text-center">
          <Link
            href="/customers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-pink)] hover:underline"
          >
            Read more customer stories
            <IconArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24 text-center">
        <Container>
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Free to start. Simple to scale.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              Every plan includes visual AI and self-healing — pricing
              scales with test volume, not feature gates.
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-pink)] hover:underline"
            >
              See pricing
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Nerro Labs FAQs
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 40}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-[var(--ink)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-center">
        <div className="diagonal-field" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Ship UI changes without the regression anxiety.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/85">
              Connect your repo and get your first visual baseline before
              your coffee&apos;s done.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Start a trial
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="dark">
                Get a demo
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
