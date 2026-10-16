import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "How design-partner teams use Nerro Labs to catch UI regressions, cut flaky test rates, and stop maintaining brittle locators by hand.",
  alternates: {
    canonical: "/customers",
  },
};

const stories = [
  {
    industry: "Series B fintech · Checkout platform",
    stat: "30% → 2%",
    statLabel: "Flaky test rate",
    narrative:
      "A 25-person engineering team was losing roughly a day a week to test maintenance — locators breaking on routine CSS changes, failures nobody trusted enough to block a release on. Within a month of switching their checkout suite to visual AI comparison, flaky failures dropped from 3 in 10 runs to roughly 1 in 50.",
    quote:
      "We cut our flaky test rate from 30% to under 2% in the first month. QA finally trusts the pipeline again.",
    role: "QA Lead, design-partner team",
  },
  {
    industry: "B2C marketplace · 40-person engineering org",
    stat: "~1 day",
    statLabel: "Saved per sprint",
    narrative:
      "Self-healing locators meant the team stopped filing a recurring ticket for 'update test selectors after redesign.' Over a two-week sprint, that time went back into writing new tests instead of repairing old ones.",
    quote:
      "Self-healing tests saved us roughly a day of maintenance every sprint. That's a day back for actual testing.",
    role: "Staff Engineer, design-partner team",
  },
  {
    industry: "Open-source design system maintainers",
    stat: "200+",
    statLabel: "Components covered",
    narrative:
      "A small maintainer team needed regression coverage across every component variant without hand-writing assertions for each one. Visual baselines across Storybook stories gave them that coverage in an afternoon, with new components picked up automatically as they're added.",
    quote:
      "We went from spot-checking components by eye before a release to full visual coverage we don't have to think about.",
    role: "Core maintainer, open-source project",
  },
];

export default function CustomersPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Customers</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              What changes when tests stop breaking.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup, our earliest and best feedback comes from a
              handful of design-partner teams using Nerro Labs against
              real production UIs.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-20">
          {stories.map((s, i) => (
            <Reveal key={s.industry} delay={i * 40}>
              <div className="grid grid-cols-1 gap-10 border-t border-[var(--border)] pt-14 first:border-t-0 first:pt-0 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <Eyebrow>{s.industry}</Eyebrow>
                  <p className="mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight text-[var(--primary-dark)]">
                    {s.stat}
                  </p>
                  <p className="mt-1 text-sm text-[var(--fg-faint)]">
                    {s.statLabel}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[var(--fg-muted)]">
                    {s.narrative}
                  </p>
                  <blockquote className="mt-6 border-l-2 border-[var(--accent-pink)] pl-5">
                    <p className="font-[family-name:var(--font-display)] text-lg font-semibold leading-[1.5] text-[var(--ink)]">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                    <p className="mt-3 text-xs text-[var(--fg-faint)]">
                      {s.role}
                    </p>
                  </blockquote>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24 text-center">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Want to be the next story?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We&apos;re onboarding a small number of design-partner teams
              directly with the founders.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">
                Get in touch
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
