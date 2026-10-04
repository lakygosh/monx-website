"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"
import type { Dict } from "@/lib/i18n/en"
import { cn } from "@/lib/utils"

const START = 2847

/** Successful payments per minute falling to zero while every component stays green. */
export function PaymentsDrop({ t }: { t: Dict["problem"]["drop"] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" })
  const reduced = useReducedMotion()
  const [value, setValue] = useState(START)
  const down = value === 0

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setValue(0)
      return
    }
    const controls = animate(START, 0, {
      duration: 2.2,
      delay: 0.4,
      ease: [0.7, 0, 0.84, 0],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduced])

  return (
    <div ref={ref} className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-6 text-white md:p-8">
      <div
        aria-hidden
        className={cn(
          "absolute -right-20 -bottom-24 size-80 rounded-full blur-3xl transition-colors duration-700",
          down ? "bg-amber/20" : "bg-green/15",
        )}
      />
      <p className="type-h3 text-mute-dark">{t.title}</p>
      <p className="mt-1 text-[0.9375rem] text-white/85">{t.subtitle}</p>

      <p
        className={cn(
          "tabular mt-6 font-display text-[clamp(4.5rem,11vw,8rem)] leading-[0.9] font-semibold tracking-tight transition-colors duration-500",
          down ? "text-amber" : "text-white",
        )}
      >
        {value.toLocaleString("en-US")}
      </p>

      <svg viewBox="0 0 400 60" className="mt-6 h-14 w-full" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0,22 C30,18 50,28 80,20 S130,14 160,24 S210,30 230,18 L252,50 L400,50"
          fill="none"
          stroke={down ? "#ef4444" : "#22c55e"}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="transition-[stroke] duration-500"
        />
      </svg>

      <p className={cn("mt-auto pt-6 text-[0.9375rem] transition-colors duration-500", down ? "text-amber" : "text-mute-dark")}>
        {down ? t.after : t.before}
      </p>
    </div>
  )
}
