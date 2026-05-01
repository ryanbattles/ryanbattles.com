import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const logos = [
  { name: "Amazon",         src: "assets/img/logos/amazon.webp" },
  { name: "Disney",         src: "assets/img/logos/disney.webp" },
  { name: "Harvard",        src: "assets/img/logos/harvard.webp" },
  { name: "Pfizer",         src: "assets/img/logos/pfizer.webp" },
  { name: "Abbott",         src: "assets/img/logos/abbott.webp" },
  { name: "AstraZeneca",    src: "assets/img/logos/astrazeneca.webp" },
  { name: "Fastenal",       src: "assets/img/logos/fastenal.webp" },
  { name: "Kimberly-Clark", src: "assets/img/logos/kimberly-clark.webp" },
  { name: "Vail Resorts",   src: "assets/img/logos/vail.webp" },
  { name: "Ryder",          src: "assets/img/logos/ryder.webp" },
  { name: "JCB",            src: "assets/img/logos/jcb.webp" },
  { name: "Belden",         src: "assets/img/logos/belden.webp" },
];

export default function LogosSection() {
  return (
    <section id="logos" className="flex flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold font-[family-name:var(--font-display)]">
          Work supporting teams at
        </h2>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          A few organizations connected to work I&rsquo;ve helped build, market, and move forward.
        </p>
      </BlurFade>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {logos.map((logo, i) => (
            <div key={logo.name} className={i >= 9 ? "hidden md:block" : ""}>
              <BlurFade delay={BLUR_FADE_DELAY * 4 + i * 0.03}>
                <div className="flex items-center justify-center rounded-xl border border-border/50 bg-muted/30 dark:bg-slate-100 px-2 py-2 group hover:bg-muted/60 dark:hover:bg-slate-200 transition-colors duration-300">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={160}
                    height={56}
                    className="object-contain max-h-11 w-auto grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <span className="sr-only">{logo.name}</span>
                </div>
              </BlurFade>
            </div>
          ))}
      </div>
    </section>
  );
}
