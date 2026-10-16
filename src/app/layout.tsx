import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const SITE_URL = "https://nerrolabs.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nerro Labs — AI Visual Testing That Self-Heals",
    template: "%s · Nerro Labs",
  },
  description:
    "Nerro Labs is an early-stage AI visual testing startup based in Kathmandu, Nepal, helping engineering teams catch UI regressions and ship with confidence.",
  keywords: [
    "Nerro Labs",
    "visual testing startup",
    "AI testing",
    "end-to-end testing",
    "self-healing tests",
    "QA automation",
    "cross-browser testing",
    "software testing startup",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nerro Labs — AI Visual Testing That Self-Heals",
    description:
      "Catch UI regressions before customers do, with tests that adapt automatically when your interface changes.",
    siteName: "Nerro Labs",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nerro Labs — AI Visual Testing That Self-Heals",
    description:
      "Catch UI regressions before customers do, with tests that adapt automatically when your interface changes.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nerro Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Nerro Labs is an early-stage AI visual testing startup based in Kathmandu, Nepal, helping engineering teams catch UI regressions and ship with confidence.",
  email: "hello@nerrolabs.ltd",
  telephone: "+977-986-7788990",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chabahil",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
