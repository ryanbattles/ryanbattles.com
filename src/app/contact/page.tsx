"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DiaTextReveal } from "@/components/magicui/dia-text-reveal";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message.trim()) errors.message = "Message is required.";
  else if (message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactPage() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [success, setSuccess] = useState(false);

  const formRef    = useRef<HTMLFormElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);

  // Detect ?success=true after FormSubmit redirects back
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") setSuccess(true);
  }, []);

  const touch = (field: string) => setTouched((t) => ({ ...t, [field]: true }));

  const live = validate(name, email, message);
  const visibleErrors: FieldErrors = {};
  if (touched.name)    visibleErrors.name    = live.name;
  if (touched.email)   visibleErrors.email   = live.email;
  if (touched.message) visibleErrors.message = live.message;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(name, email, message);
    if (Object.keys(errs).length > 0) return;

    // Set dynamic hidden fields before native submit
    if (subjectRef.current) {
      subjectRef.current.value = `New message from ${name} via ryanbattles.com`;
    }

    // Native form POST — no CORS issues
    formRef.current?.submit();
  }

  const inputClass = (error?: string) => cn(
    "h-10 rounded-xl border bg-background px-3 text-sm transition-colors placeholder:text-muted-foreground/50",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
    error ? "border-destructive focus:ring-destructive/40" : "border-input hover:border-ring/50"
  );

  return (
    <main className="flex flex-col gap-14 relative">
      <div className="flex flex-col gap-8">
        <section id="contact-header">
          <div className="mx-auto w-full max-w-2xl space-y-1">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)]">
                  <DiaTextReveal
                    text="Get in Touch"
                    delay={0.4}
                    duration={1.2}
                    colors={["#818cf8", "#a78bfa", "#e879f9", "#38bdf8", "#818cf8"]}
                  />
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY} className="flex-shrink-0">
                <Link href="/" aria-label="Back to homepage">
                  <Avatar className="size-16 rounded-full overflow-hidden ring-4 ring-border transition-opacity hover:opacity-80">
                    <Image src={DATA.avatarUrl} alt={DATA.name} width={64} height={64} className="object-cover w-full h-full" />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
              <p className="text-muted-foreground max-w-[600px] md:text-lg">
                I&apos;m always open to thoughtful conversations about marketing, technology, leadership, consulting, and the right professional opportunities. Send me a note and I&apos;ll follow up soon.
              </p>
            </BlurFade>
          </div>
        </section>

        <section id="contact-form">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="mx-auto w-full max-w-2xl relative">
              {/* Soft outer glow using brand palette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 20% 0%, rgba(129,140,248,0.25), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(232,121,249,0.22), transparent 70%), radial-gradient(40% 50% at 80% 0%, rgba(56,189,248,0.20), transparent 70%)",
                }}
              />

              <div className="relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-sm shadow-sm">
                {/* Top gradient accent stripe */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #818cf8, #a78bfa, #e879f9, #38bdf8, transparent)",
                  }}
                />
                {/* Subtle radial highlight inside the card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(80% 50% at 50% 0%, rgba(167,139,250,0.10), transparent 70%)",
                  }}
                />

                <div className="relative p-6 sm:p-10">
            {success ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <CheckCircle2 className="size-12 text-emerald-500" />
                <h2 className="text-xl font-semibold font-[family-name:var(--font-display)]">Message sent!</h2>
                <p className="text-muted-foreground max-w-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <Link
                  href="/"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form
                ref={formRef}
                action="https://formsubmit.co/cbd902c83be8f4aa9b04106be4618fc2"
                method="POST"
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_next" value={`${DATA.url}/contact?success=true`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New message via ryanbattles.com" ref={subjectRef} />
                {/* Reply-To: so hitting "Reply" in your inbox emails the sender */}
                <input type="hidden" name="_replyto" value={email} />
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)} onBlur={() => touch("name")}
                      placeholder="Jane Smith" autoComplete="name" className={inputClass(visibleErrors.name)} />
                    {visibleErrors.name && <p className="text-xs text-destructive">{visibleErrors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} onBlur={() => touch("email")}
                      placeholder="jane@example.com" autoComplete="email" className={inputClass(visibleErrors.email)} />
                    {visibleErrors.email && <p className="text-xs text-destructive">{visibleErrors.email}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input id="company" name="company" type="text" value={company} onChange={e => setCompany(e.target.value)}
                    placeholder="Acme Inc." autoComplete="organization"
                    className="h-10 rounded-xl border border-input bg-background px-3 text-sm transition-colors placeholder:text-muted-foreground/50 hover:border-ring/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} onBlur={() => touch("message")}
                    placeholder="What's on your mind?" rows={6}
                    className={cn("rounded-xl border bg-background px-3 py-2.5 text-sm transition-colors placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                      visibleErrors.message ? "border-destructive focus:ring-destructive/40" : "border-input hover:border-ring/50")} />
                  {visibleErrors.message && <p className="text-xs text-destructive">{visibleErrors.message}</p>}
                </div>

                <div className="flex flex-col gap-3">
                  <RainbowButton type="submit" className="before:hidden w-full">
                    <span>Send Message</span>
                  </RainbowButton>
                  <p className="text-xs text-muted-foreground text-center">
                    Protected by spam detection. No ads, ever.
                  </p>
                </div>
              </form>
            )}
                </div>
              </div>
            </div>
          </BlurFade>
        </section>
      </div>
    </main>
  );
}
