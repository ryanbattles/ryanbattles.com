import FooterLinks from "@/components/footer-links";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Libre_Franklin, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const GA_ID = "G-VCJV6LTRQR";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Ryan Battles | Marketing, Web, and Growth Strategy",
    template: `%s | ${DATA.name}`,
  },
  description: "Ryan Battles is a marketing leader and hands-on builder focused on growth strategy, web systems, automation, and practical execution for growing companies.",
  openGraph: {
    title: "Ryan Battles | Marketing, Web, and Growth Strategy",
    description: "Marketing leader, product-minded builder, and systems thinker helping companies turn strategy into execution.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/assets/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ryan Battles | Marketing, Web, and Growth Strategy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ryan Battles | Marketing, Web, and Growth Strategy",
    description: "Marketing leader, product-minded builder, and systems thinker helping companies turn strategy into execution.",
    card: "summary_large_image",
    images: [`${DATA.url}/assets/img/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          bricolage.variable,
          libreFranklin.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:pb-24 px-6">
              {children}
              <footer className="mt-16 text-center text-xs text-muted-foreground/70 select-none flex flex-col gap-4">
                <span>Made with ❤️ in Columbus, OH</span>
                <span>&copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.</span>
                <FooterLinks />
              </footer>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
