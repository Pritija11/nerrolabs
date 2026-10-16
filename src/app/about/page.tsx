import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nerro Labs is an early-stage AI visual testing startup based in Kathmandu, Nepal, building tests that catch regressions and heal themselves.",
  alternates: {
    canonical: "/about",
  },
};

const snapshot = [
  { value: "Pre-seed", label: "Current stage" },
  { value: "6", label: "People on the team" },
  { value: "Kathmandu", label: "Where we're based" },
];

const values = [
  {
    title: "A false alarm is worse than a miss",
    body: "A test suite nobody trusts gets ignored. We'd rather tune for fewer, more credible failures than flag everything and let humans sort it out.",
  },
  {
    title: "Healing should be visible",
    body: "An automatic fix nobody can see is a liability waiting to happen. Every self-heal is logged, scored, and reviewable.",
  },
  {
    title: "Testing shouldn't be its own job",
    body: "The best outcome is a team that stops thinking about test maintenance entirely. We measure ourselves by how little attention we need.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              We got tired of test suites nobody trusted anymore.
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <div className="flex flex-col gap-5 text-sm leading-7 text-[var(--fg-muted)]">
              <p>
                Every team we talked to had the same ritual: a red test
                suite every Monday morning, a developer spending an hour
                figuring out whether a failure was a real bug or a locator
                that broke because someone renamed a CSS class.
              </p>
              <p>
                Eventually, the team stops looking closely. Failures get
                waved through, a real regression slips past review, and
                the whole point of having tests quietly evaporates.
              </p>
              <p>
                Nerro Labs exists to fix the trust problem, not just the
                coverage problem — visual AI that tells you exactly what
                changed, and self-healing that keeps a test alive through
                the kind of change that shouldn&apos;t break it in the
                first place.
              </p>
              <p>
                We&apos;re a few months in, pre-seed, and still tuning the
                matching models against real UIs from our first
                design-partner teams. What&apos;s in the product today is
                rougher than we&apos;d like — that&apos;s what building it
                with real engineering teams looks like.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--ink)] py-14 text-center">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {snapshot.map((s) => (
            <div key={s.label}>
              <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-white">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[var(--on-dark-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              What we optimize for right now
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 40}>
                <div className="py-6 sm:px-7 sm:py-0">
                  <h3 className="text-base font-semibold text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24 text-center">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Want to be a design partner?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We&apos;re onboarding a small number of teams directly with
              the founders.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Get in touch</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
