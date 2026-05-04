import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { DATA } from "@/data/resume";
import { MailIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative overflow-hidden">
      {/* Colorful top border stripe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #818cf8, #a78bfa, #e879f9, #38bdf8, transparent)",
        }}
      />
<div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
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
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-[family-name:var(--font-display)]">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Have something to say? I&apos;d love to hear from you.
        </p>
        <Link href="/contact" className="mt-1">
          <RainbowButton>
            <MailIcon className="size-4" />
            <span>Send a Message</span>
          </RainbowButton>
        </Link>
        <p className="text-xs text-muted-foreground">
          or{" "}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            connect on LinkedIn
          </Link>
        </p>
      </div>
    </div>
  );
}

