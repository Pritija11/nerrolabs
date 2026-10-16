import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Nerro Labs AI visual testing platform.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. The service",
    body: [
      "These terms describe the general relationship between Nerro Labs and prospective or current customers. The specific terms of any paid subscription are set out in a separate order form or subscription agreement.",
    ],
  },
  {
    heading: "2. Not a guarantee against bugs",
    body: [
      "Nerro Labs identifies visual and functional regressions against a baseline you define. No testing tool can guarantee the absence of bugs, and we do not warrant that tested applications are defect-free.",
    ],
  },
  {
    heading: "3. Self-healing behavior",
    body: [
      "Self-healing updates test locators automatically based on visual and structural similarity. Healed locators are logged for review; Nerro Labs is not liable for test outcomes resulting from an automatic match you did not review.",
    ],
  },
  {
    heading: "4. Fees",
    body: [
      "Subscription fees are charged according to the plan selected at signup, as confirmed in your order form. Fees are billed monthly or annually in advance unless otherwise agreed.",
    ],
  },
  {
    heading: "5. Platform access",
    body: [
      "Access to the Nerro Labs dashboard is provided as part of an active subscription. Credentials are personal to each user and may not be shared.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "The platform is provided to help identify UI regressions but does not constitute a complete quality assurance audit. To the extent permitted by law, liability for indirect or consequential damages is limited as set out in your subscription agreement.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "Either party may terminate the subscription as described in the subscription agreement. Access to historical run data remains available for a reasonable transition period after termination.",
    ],
  },
  {
    heading: "8. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of this website or the platform will be handled in the courts of Kathmandu, Nepal, except as otherwise specified in an individual subscription agreement.",
    ],
  },
  {
    heading: "9. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active customers by email before the change takes effect.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      "Questions about these terms can be sent to hello@nerrolabs.ltd, or by post to Chabahil, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the Nerro Labs website and the
            platform it introduces.
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
