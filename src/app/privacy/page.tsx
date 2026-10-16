import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nerro Labs collects, uses, and protects data for customers of its AI visual testing platform.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you request a demo, we collect your name, work email, and any details you share about your testing needs.",
      "Once you connect a project, we process screenshots, test scripts, and run results to generate visual comparisons. See our Compliance page for the full boundary of what we store.",
      "Like most web services, our site logs IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Information is used to operate the platform, generate test results, and respond to support requests.",
      "We do not sell customer data, and we never use a customer's screenshots or test data for any purpose outside that customer's own account.",
    ],
  },
  {
    heading: "3. Who we share it with",
    body: [
      "Only infrastructure sub-processors required to run the platform. We may also share information when legally required to by a regulator or court order.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "Screenshots and run history are retained according to the retention window you configure, then deleted automatically. Account data is retained for the duration of your subscription plus a reasonable transition period.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You can request a copy of the data we hold, ask us to correct it, or request deletion of your account data. Reach out through the contact details below.",
    ],
  },
  {
    heading: "6. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll notify active customers directly before the change takes effect.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy can be sent to hello@nerrolabs.ltd, or by post to Chabahil, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Nerro Labs collects, how it&apos;s
            used, and what you can do about it.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
