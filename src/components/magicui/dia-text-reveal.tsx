"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type HTMLMotionProps,
} from "motion/react"

import { cn } from "@/lib/utils"

const DEFAULT_COLORS = ["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"]
const BAND_HALF = 17
const SWEEP_START = -BAND_HALF
const SWEEP_END = 100 + BAND_HALF

const sweepEase = (t: number) =>
  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2

function buildGradient(pos: number, colors: string[], textColor: string, placeholderColor: string) {
  const bandStart = pos - BAND_HALF
  const bandEnd = pos + BAND_HALF

  if (bandStart >= 100) {
    return `linear-gradient(90deg, ${textColor}, ${textColor})`
  }
  const n = colors.length
  const parts: string[] = []

  if (bandStart > 0)
    parts.push(`${textColor} 0%`, `${textColor} ${bandStart.toFixed(2)}%`)
  else
    parts.push(`${placeholderColor} 0%`, `${placeholderColor} 0%`)

  colors.forEach((c, i) => {
    const pct = n === 1 ? pos : bandStart + (i / (n - 1)) * BAND_HALF * 2
    parts.push(`${c} ${pct.toFixed(2)}%`)
  })

  if (bandEnd < 100)
    parts.push(`${placeholderColor} ${bandEnd.toFixed(2)}%`, `${placeholderColor} 100%`)

  return `linear-gradient(90deg, ${parts.join(", ")})`
}

function measureWidths(el: HTMLElement, texts: string[]) {
  const ghost = el.cloneNode() as HTMLElement
  Object.assign(ghost.style, {
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none",
    width: "auto",
    whiteSpace: "nowrap",
  })
  el.parentElement!.appendChild(ghost)
  const widths = texts.map((t) => {
    ghost.textContent = t
    return ghost.getBoundingClientRect().width
  })
  ghost.remove()
  return widths
}

export interface DiaTextRevealProps extends Omit<
  HTMLMotionProps<"span">,
  "ref" | "children" | "style" | "animate" | "transition" | "color"
> {
  text: string | string[]
  colors?: string[]
  textColor?: string
  placeholderColor?: string
  duration?: number
  delay?: number
  repeat?: boolean
  repeatDelay?: number
  startOnView?: boolean
  once?: boolean
  className?: string
  fixedWidth?: boolean
}

export function DiaTextReveal({
  text,
  colors = DEFAULT_COLORS,
  textColor = "var(--foreground)",
  placeholderColor = "rgba(0,0,0,0.15)",
  duration = 1.5,
  delay = 0,
  repeat = false,
  repeatDelay = 0.5,
  startOnView = true,
  once = true,
  className,
  fixedWidth = false,
  ...props
}: DiaTextRevealProps) {
  const textKey = Array.isArray(text) ? text.join("\0") : text
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text])
  const isMulti = texts.length > 1
  const prefersReducedMotion = useReducedMotion()

  const spanRef = useRef<HTMLSpanElement>(null)
  const optsRef = useRef({
    colors,
    textColor,
    placeholderColor,
    duration,
    delay,
    repeat,
    repeatDelay,
    texts,
  })

  const indexRef = useRef(0)
  const hasPlayedRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const stopRef = useRef<(() => void) | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [measuredWidths, setMeasuredWidths] = useState<number[]>([])

  const sweepPos = useMotionValue(SWEEP_START)

  const backgroundImage = useTransform(sweepPos, (pos) =>
    buildGradient(pos, optsRef.current.colors, optsRef.current.textColor, optsRef.current.placeholderColor)
  )

  const isInView = useInView(spanRef, { once, amount: 0.1 })

  useEffect(() => {
    optsRef.current = {
      colors,
      textColor,
      placeholderColor,
      duration,
      delay,
      repeat,
      repeatDelay,
      texts,
    }
  }, [colors, delay, duration, placeholderColor, repeat, repeatDelay, textColor, texts])

  useEffect(() => {
    const el = spanRef.current
    if (!el || !isMulti) return
    setMeasuredWidths(measureWidths(el, texts))
  }, [isMulti, textKey, texts])

  useEffect(() => {
    if (prefersReducedMotion) {
      sweepPos.set(SWEEP_END)
      return
    }
    if (startOnView && !isInView) return
    if (once && hasPlayedRef.current) return
    hasPlayedRef.current = true

    function play() {
      const { duration, delay, repeat, repeatDelay, texts } = optsRef.current

      sweepPos.set(SWEEP_START)

      const controls = animate(sweepPos, SWEEP_END, {
        duration,
        delay,
        ease: sweepEase,
        onComplete() {
          if (!repeat) return
          timerRef.current = setTimeout(() => {
            const next = (indexRef.current + 1) % texts.length
            indexRef.current = next
            setActiveIndex(next)
            play()
          }, repeatDelay * 1000)
        },
      })

      stopRef.current = () => controls.stop()
    }

    play()

    return () => {
      stopRef.current?.()
      clearTimeout(timerRef.current)
    }
  }, [isInView, startOnView, once, prefersReducedMotion, sweepPos])

  const fixedW =
    isMulti && fixedWidth && measuredWidths.length > 0
      ? Math.max(...measuredWidths)
      : undefined

  const animatedW =
    isMulti && !fixedWidth && measuredWidths[activeIndex] != null
      ? measuredWidths[activeIndex]
      : undefined

  return (
    <motion.span
      ref={spanRef}
      className={cn("align-bottom leading-[100%] text-inherit", className)}
      style={{
        transform: "translateY(-2px)",
        color: "transparent",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundSize: "100% 100%",
        backgroundImage,
        ...(isMulti && {
          display: "inline-block",
          overflow: "hidden",
          whiteSpace: "nowrap",
          verticalAlign: "text-center",
          ...(fixedW != null && { width: fixedW }),
        }),
      }}
      animate={animatedW != null ? { width: animatedW } : undefined}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {texts[activeIndex]}
    </motion.span>
  )
}
