import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Nerro Labs pricing — a free tier for small projects, a Team plan priced per test run, and custom Enterprise deployment.",
  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For small projects and open-source repositories.",
    featured: false,
    features: [
      "500 test runs / month",
      "Visual AI comparison",
      "1 project",
      "Community support",
    ],
    cta: "Start for free",
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For teams shipping weekly who need the full engine.",
    featured: true,
    features: [
      "10,000 test runs / month",
      "Self-healing locators",
      "Unlimited projects",
      "Cross-browser & device testing",
      "Slack + email alerts",
      "Priority support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For orgs with custom deployment or compliance needs.",
    featured: false,
    features: [
      "Unlimited test runs",
      "Dedicated or on-prem deployment",
      "SSO + SAML",
      "Custom data retention",
      "Dedicated account team",
    ],
    cta: "Talk to us",
  },
];

const faqs = [
  {
    q: "What counts as a test run?",
    a: "One execution of one test against one browser/device combination — running a single test against 3 browsers counts as 3 runs.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade at any time — changes apply at the start of your next billing cycle.",
  },
  {
    q: "Is there a discount for open-source projects?",
    a: "Open-source repositories with a public build pipeline get the Team plan's full feature set at no cost — reach out to get verified.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              Priced by test run, not by feature.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup, we didn&apos;t want to gate self-healing or
              visual AI behind a higher tier — every plan gets the full
              engine.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  p.featured
                    ? "border-[var(--accent-pink)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(219,0,98,0.25)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                {p.featured && (
                  <span className="pill pill-pink mb-4 w-fit">
                    Most popular
                  </span>
                )}
                <h2 className="font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--ink)]">
                  {p.name}
                </h2>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">
                  {p.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[var(--ink)]">
                    {p.price}
                  </span>
                  <span className="text-sm text-[var(--fg-faint)]">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-[var(--fg-muted)]"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={p.featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {p.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              Pricing questions
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 40}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-[var(--ink)]">
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
    </>
  );
}
