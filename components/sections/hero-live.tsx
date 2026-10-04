"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { BellRing } from "lucide-react"
import { areaPath, linePath, series } from "@/lib/series"
import { cn } from "@/lib/utils"

const spark = series(28, { seed: 7, base: 2780, amp: 90, noise: 45, phase: 0.2 })
const box = { width: 220, height: 56, pad: 4 }

export function HeroLiveCard({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(2847)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setValue((v) => Math.round(v + (Math.random() - 0.48) * 38)), 1600)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("rounded-2xl bg-ink-2/90 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur-md", className)}
      aria-hidden
    >
      <div className="flex items-center justify-between">
        <p className="text-[0.8125rem] text-mute-dark">Card payments / min</p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] tracking-wider text-green uppercase">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-green" />
          Live
        </span>
      </div>
      <p className="tabular mt-1.5 font-display text-[2rem] leading-none font-semibold tracking-tight text-white">
        {value.toLocaleString("en-US")}
      </p>
      <svg viewBox={`0 0 ${box.width} ${box.height}`} className="mt-3 h-14 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-spark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#22c55e" stopOpacity="0.35" />
            <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath(spark, box)} fill="url(#hero-spark)" />
        <path d={linePath(spark, box)} fill="none" stroke="#22c55e" strokeWidth="1.75" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="mt-2 flex items-center justify-between font-mono text-[0.6875rem] text-mute-dark">
        <span>Within usual range</span>
        <span className="rounded-full bg-green/15 px-2 py-0.5 text-green">OK</span>
      </div>
    </motion.div>
  )
}

export function HeroAlert({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 24 }}
      className={cn("rounded-2xl bg-white p-3.5 text-ink shadow-[0_24px_60px_-20px_rgb(0_0_0/0.6)]", className)}
      aria-hidden
    >
      <div className="flex gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber/15 text-[#b26b06]">
          <BellRing className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[0.8125rem] font-semibold">Mobile logins / min</p>
            <span className="font-mono text-[0.625rem] text-mute-2">10:04</span>
          </div>
          <p className="mt-0.5 text-[0.8125rem] text-mute">Unusual for Tuesday 10:00. 31% below the usual range.</p>
          <div className="mt-2.5 flex flex-wrap gap-1">
            {["Teams", "SMS", "Email"].map((c) => (
              <span key={c} className="rounded-full bg-paper px-2 py-0.5 font-mono text-[0.625rem] text-mute">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
