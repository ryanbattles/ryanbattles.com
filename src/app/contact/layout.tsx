import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Send Ryan Battles a message about marketing strategy, consulting, leadership, or the right professional opportunity.",
  alternates: {
    canonical: "https://ryanbattles.com/contact",
  },
  openGraph: {
    title: "Get in Touch | Ryan Battles",
    description: "Send Ryan Battles a message about marketing strategy, consulting, leadership, or the right professional opportunity.",
    url: "https://ryanbattles.com/contact",
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/assets/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Get in Touch | Ryan Battles",
      },
    ],
  },
  twitter: {
    title: "Get in Touch | Ryan Battles",
    description: "Send Ryan Battles a message about marketing strategy, consulting, leadership, or the right professional opportunity.",
    card: "summary_large_image",
    images: [`${DATA.url}/assets/img/og-image.jpg`],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
