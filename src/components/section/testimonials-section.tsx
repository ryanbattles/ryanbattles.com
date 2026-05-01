"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

type Testimonial = (typeof DATA.testimonials)[number];

const GAP_PX = 16; // matches gap-4 (1rem)
const TRANSITION_MS = 500;

function initialsFromName(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ t, isActive }: { t: Testimonial; isActive: boolean }) {
  const [imageError, setImageError] = useState(false);
  const subtitle = t.company ? `${t.title} · ${t.company}` : t.title;

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col gap-6 h-full transition-all duration-500 ${
        isActive
          ? "shadow-lg opacity-100 scale-100 border-border/80"
          : "shadow-sm opacity-40 scale-[0.96] border-border/30"
      }`}
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #818cf8, #a78bfa, #e879f9, #38bdf8, transparent)",
          }}
        />
      )}
      <blockquote className="text-sm leading-relaxed text-foreground/90">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 mt-auto">
        <Avatar className="size-10 rounded-full overflow-hidden ring-2 ring-border flex-none">
          {t.avatar && !imageError ? (
            <Image
              src={t.avatar}
              alt={t.name}
              width={40}
              height={40}
              className="object-cover w-full h-full"
              unoptimized
              onError={() => setImageError(true)}
            />
          ) : (
            <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium">
              {initialsFromName(t.name)}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold leading-tight truncate">
            {t.name}
          </span>
          <span className="text-xs text-muted-foreground leading-tight truncate">
            {subtitle}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

// How many cloned cards to pad on each side. Must be < N.
// Gives us BUFFER steps in either direction before a silent snap is needed.
const BUFFER = 3;

export default function TestimonialsSection() {
  const testimonials = DATA.testimonials;
  const N = testimonials.length;

  // Pad with a small buffer instead of tripling — N + 2*BUFFER nodes total
  // e.g. 16 testimonials → 22 nodes instead of 48
  const buffered = [
    ...testimonials.slice(-BUFFER),
    ...testimonials,
    ...testimonials.slice(0, BUFFER),
  ];
  const startIndex = BUFFER; // first real card in the buffered array

  const [activeIndex, setActiveIndex] = useState<number>(startIndex);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Measure the actual card width (responsive)
  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;
    const measure = () => setCardWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // After every nav, snap back into the real section if we've entered the buffer zone
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeIndex >= BUFFER + N) {
        setTransitionEnabled(false);
        setActiveIndex((prev) => prev - N);
      } else if (activeIndex < BUFFER) {
        setTransitionEnabled(false);
        setActiveIndex((prev) => prev + N);
      }
    }, TRANSITION_MS + 30);
    return () => clearTimeout(timer);
  }, [activeIndex, N]);

  // Re-enable transitions after a snap (two RAFs ensure the snap render happens first)
  useEffect(() => {
    if (transitionEnabled) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionEnabled(true));
    });
    return () => cancelAnimationFrame(id);
  }, [transitionEnabled]);

  const goNext = () => setActiveIndex((i) => i + 1);
  const goPrev = () => setActiveIndex((i) => i - 1);

  // Autoplay — slow, pauses on hover/focus or when tab is hidden
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setActiveIndex((i) => i + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation when the carousel region is focused
  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, []);

  // Map buffered index back to original 0..N-1
  const activeDot = ((activeIndex - BUFFER) % N + N) % N;
  const goToDot = (dotIdx: number) => {
    setActiveIndex(BUFFER + dotIdx);
  };

  // Translate so the active card's center sits at left:50% (parent center)
  const offsetX = cardWidth
    ? -(activeIndex * (cardWidth + GAP_PX) + cardWidth / 2)
    : 0;

  return (
    <section id="testimonials" className="flex flex-col gap-y-6">
      <h2 className="text-xl font-bold font-[family-name:var(--font-display)]">
        What People Say
      </h2>

      <div
        className="flex flex-col gap-y-4"
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`Recommendations, ${activeDot + 1} of ${N}`}
        aria-live="polite"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
          setIsPaused(true);
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(delta) > 40) {
            delta > 0 ? goNext() : goPrev();
          }
          touchStartX.current = null;
          setIsPaused(false);
        }}
      >
        {/* Desktop carousel view with edge fade and side arrows */}
        <div
          className="hidden sm:block relative"
        >
          {/* Edge-faded viewport */}
          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            {/* Invisible ghost cards — all testimonials stacked in one grid cell
                so the viewport's natural height equals the tallest card */}
            <div className="invisible mx-auto w-[clamp(240px,85vw,360px)] py-4 grid">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{ gridColumnStart: 1, gridRowStart: 1 }}
                >
                  <TestimonialCard t={t} isActive={false} />
                </div>
              ))}
            </div>

            {/* Moving row, absolutely positioned with its anchor at parent center */}
            <div
              className="absolute top-0 bottom-0 py-4"
              style={{ left: "50%" }}
            >
              <div
                className="flex gap-4 h-full items-stretch"
                style={{
                  transform: `translate3d(${offsetX}px, 0, 0)`,
                  transition: transitionEnabled
                    ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                    : "none",
                  willChange: "transform",
                }}
              >
                {buffered.map((t, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      ref={i === startIndex ? cardRef : undefined}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${t.name}'s recommendation`}
                      aria-hidden={!isActive}
                      className="flex-shrink-0 w-[clamp(240px,85vw,360px)] h-full"
                    >
                      <TestimonialCard t={t} isActive={isActive} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.2)] hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ChevronLeft className="size-5" strokeWidth={2.25} />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.2)] hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ChevronRight className="size-5" strokeWidth={2.25} />
          </button>
        </div>

        {/* Mobile single card view */}
        <div className="sm:hidden flex flex-col">
          <div className="h-60 overflow-hidden">
            {testimonials.length > 0 && (
              <TestimonialCard t={testimonials[activeDot]} isActive={true} />
            )}
          </div>
          <div className="flex items-center justify-between gap-3 mt-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="size-9 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ChevronLeft className="size-4" strokeWidth={2.5} />
            </button>
            <div className="flex-1 flex items-center justify-center gap-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToDot(i)}
                  role="tab"
                  aria-selected={i === activeDot}
                  className={`rounded-full transition-all ${
                    i === activeDot
                      ? "w-6 h-1.5 bg-foreground/70"
                      : "w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="size-9 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ChevronRight className="size-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop pagination dots only */}
      <div
        className="hidden sm:flex items-center justify-center gap-2 mt-2"
        role="tablist"
        aria-label="Select recommendation"
      >
        {testimonials.map((_, i) => {
          const isActive = i === activeDot;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to recommendation ${i + 1}`}
              onClick={() => goToDot(i)}
              className={
                "rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
                (isActive
                  ? "w-6 h-1.5 bg-foreground/70"
                  : "w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40")
              }
            />
          );
        })}
      </div>
    </section>
  );
}
