import BlurFade from "@/components/magicui/blur-fade";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { DATA } from "@/data/resume";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function NotFound() {
  return (
    <main className="min-h-[60dvh] flex flex-col items-center justify-center gap-8 text-center px-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link href="/" aria-label="Back to homepage">
          <Image
            src={DATA.avatarUrl}
            alt={DATA.name}
            width={72}
            height={72}
            className="rounded-full ring-4 ring-border shadow-md mx-auto hover:opacity-80 transition-opacity"
          />
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={6}>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter font-[family-name:var(--font-display)]">
            Page not found
          </h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            This page doesn&apos;t exist or may have been moved. Head back home to find what you&apos;re looking for.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <Link href="/">
          <RainbowButton>
            <Home className="size-4" />
            <span>Back to Home</span>
          </RainbowButton>
        </Link>
      </BlurFade>
    </main>
  );
}
