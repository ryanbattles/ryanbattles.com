import BlurFade from "@/components/magicui/blur-fade";
import { DiaTextReveal } from "@/components/magicui/dia-text-reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "@/components/section/contact-section";
import LogosSection from "@/components/section/logos-section";
import ProjectsSection from "@/components/section/projects-section";
import TestimonialsSection from "@/components/section/testimonials-section";
import WorkSection from "@/components/section/work-section";
import { ShadowSeparator } from "@/components/shadow-separator";
import { ArrowUpRight, MailIcon } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import AboutSection from "@/components/section/about-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ryanbattles.com",
  },
};

const BLUR_FADE_DELAY = 0.04;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ryan Battles",
  "url": "https://ryanbattles.com/",
  "jobTitle": "VP Marketing, Web Strategy & Growth Systems",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Columbus",
    "addressRegion": "OH",
    "addressCountry": "US",
  },
  "sameAs": [
    "https://www.linkedin.com/in/ryanbattles",
  ],
  "knowsAbout": [
    "Marketing Strategy",
    "Growth Systems",
    "Positioning and Messaging",
    "Web Strategy",
    "Content Strategy",
    "SEO",
    "Marketing Automation",
    "Analytics and Reporting",
    "B2B SaaS Marketing",
    "Product Marketing",
    "Front-End Web Development",
    "AI-Assisted Marketing Workflows",
  ],
};

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-16 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-3 flex flex-col order-2 md:order-1">
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)]">
                  <DiaTextReveal
                    text={`Hi, I'm ${DATA.name}`}
                    delay={0.4}
                    duration={1.2}
                    colors={["#818cf8", "#a78bfa", "#e879f9", "#38bdf8", "#818cf8"]}
                  />
                </h1>
                <p className="max-w-[400px] md:text-lg pb-1 lg:text-xl leading-[1.4em]">{DATA.description}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[600px] pb-3">
                  Currently the director of marketing at Wastebits, I've helped take the company from an early-stage software platform into one of the most recognized names in waste technology.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
                  <Link href="/contact" className="col-span-1">
                    <RainbowButton className="w-full sm:w-auto">
                      <MailIcon className="size-4 hidden sm:inline" />
                      <span>Get in Touch</span>
                    </RainbowButton>
                  </Link>
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <DATA.contact.social.LinkedIn.icon className="size-4" />
                    <span className="sm:inline hidden">Connect on LinkedIn</span>
                    <span className="sm:hidden inline">LinkedIn</span>
                  </Link>
                </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative" style={{ display: "inline-block" }}>
                {/* Two morphing blob outlines — Siri-style */}
                <svg
                  viewBox="0 0 160 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "-18px",
                    width: "calc(100% + 36px)",
                    height: "calc(100% + 36px)",
                    pointerEvents: "none",
                    overflow: "visible",
                  }}
                >
                  <defs>
                    <linearGradient id="sg1" gradientUnits="userSpaceOnUse" x1="10" y1="30" x2="150" y2="130">
                      <stop stopColor="#818cf8" />
                      <stop offset="0.5" stopColor="#e879f9" />
                      <stop offset="1" stopColor="#a78bfa" />
                    </linearGradient>
                    <linearGradient id="sg2" gradientUnits="userSpaceOnUse" x1="150" y1="30" x2="10" y2="130">
                      <stop stopColor="#38bdf8" />
                      <stop offset="0.5" stopColor="#818cf8" />
                      <stop offset="1" stopColor="#e879f9" />
                    </linearGradient>
                  </defs>

                  {/* Blob 1 — filled, semi-transparent, clockwise */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="20s" repeatCount="indefinite" />
                    <path fill="url(#sg1)" stroke="url(#sg1)" strokeWidth="1" fillOpacity="0.9">
                      <animate attributeName="d" dur="9s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                        values="
                          M 80 15 C 118.7 15 150 44.1 150 80 C 150 114.2 117.6 142 80 142 C 42.4 142 12 115.9 12 80 C 12 41.3 45.8 15 80 15 Z;
                          M 80 20 C 116.5 20 146 46.9 146 80 C 146 117.6 115.3 148 80 148 C 44.7 148 16 113.1 16 80 C 16 43.5 42.4 20 80 20 Z;
                          M 80 12 C 114.2 12 142 42.4 142 80 C 142 116.5 118.7 146 80 146 C 41.3 146 10 114.2 10 80 C 10 43.5 42.4 12 80 12 Z;
                          M 80 15 C 118.7 15 150 44.1 150 80 C 150 114.2 117.6 142 80 142 C 42.4 142 12 115.9 12 80 C 12 41.3 45.8 15 80 15 Z
                        "
                      />
                    </path>
                  </g>

                  {/* Blob 2 — outline only, counter-clockwise, slightly larger */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="-360 80 80" dur="28s" repeatCount="indefinite" />
                    <path fill="none" stroke="url(#sg2)" strokeWidth="1.5">
                      <animate attributeName="d" dur="13s" begin="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                        values="
                          M 80 17 C 117.6 17 148 45.2 148 80 C 148 118.7 113.1 150 80 150 C 46.9 150 20 117.6 20 80 C 20 45.2 41.3 17 80 17 Z;
                          M 80 10 C 113.1 10 140 41.3 140 80 C 140 115.3 116.5 144 80 144 C 43.5 144 14 113.1 14 80 C 14 44.6 41.3 10 80 10 Z;
                          M 80 14 C 119.8 14 152 43.5 152 80 C 152 113.1 114.2 140 80 140 C 45.8 140 18 119.8 18 80 C 18 46.9 43.5 14 80 14 Z;
                          M 80 17 C 117.6 17 148 45.2 148 80 C 148 118.7 113.1 150 80 150 C 46.9 150 20 117.6 20 80 C 20 45.2 41.3 17 80 17 Z
                        "
                      />
                    </path>
                  </g>

                </svg>

                <Avatar className="size-24 md:size-32 rounded-full shadow-lg overflow-hidden relative">
                  <Image
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="-mb-8">
        <ShadowSeparator flip />
      </div>
      <LogosSection />
      <div className="-mt-8">
        <ShadowSeparator />
      </div>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold font-[family-name:var(--font-display)]">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <AboutSection content={DATA.summary} />
          </BlurFade>
        </div>
      </section>
      <ShadowSeparator flip />
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold font-[family-name:var(--font-display)]">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <ShadowSeparator />
      <ProjectsSection />
      <ShadowSeparator flip />
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold font-[family-name:var(--font-display)]">Education & Certificates</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <Image
                        src={education.logoUrl}
                        alt={education.school}
                        width={40}
                        height={40}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="text-sm font-semibold leading-[1.2rem] flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                      <div className="sm:hidden font-sans text-xs tabular-nums text-muted-foreground mt-0.5">
                        {education.start} – {education.end}
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} – {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
            {DATA.certifications.map((cert, index) => (
              <BlurFade
                key={cert.name}
                delay={BLUR_FADE_DELAY * 8 + (DATA.education.length + index) * 0.05}
              >
                <div className="flex items-center gap-x-3 justify-between">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {cert.logoUrl ? (
                      <Image
                        src={cert.logoUrl}
                        alt={cert.issuer}
                        width={40}
                        height={40}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="text-sm font-semibold leading-[1.2rem]">
                        {cert.name}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <ShadowSeparator />
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold font-[family-name:var(--font-display)]">Where I Do My Best Work</h2>
          </BlurFade>
          {DATA.skillGroups.map((group, gIdx) => (
            <div key={group.label} className="flex flex-col gap-y-3">
              
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2">
                {group.skills.map((skill, id) => (
                  <BlurFade
                    key={skill.name}
                    delay={BLUR_FADE_DELAY * 10 + gIdx * 0.08 + id * 0.04}
                  >
                    <div
                      className="relative border rounded-xl h-8 sm:w-fit w-full px-4 flex items-center gap-2 bg-background overflow-hidden"
                      style={{ boxShadow: `inset 0 0 18px 0 ${skill.color}18` }}
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{ background: `radial-gradient(ellipse 80% 80% at 10% 50%, ${skill.color}18, transparent)` }}
                      />
                      {skill.icon && (
                        <skill.icon className="size-4 flex-none relative" style={{ color: skill.color }} />
                      )}
                      <span className="text-foreground text-sm font-medium relative">
                        {skill.name}
                      </span>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ShadowSeparator flip />
      <TestimonialsSection />
      <div className="hidden sm:block">
        <ShadowSeparator />
      </div>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
