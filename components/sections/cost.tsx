"use client"

import { useRef } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { SectionHeader } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"
import { cn } from "@/lib/utils"

export function Cost({ t }: { t: Dict["cost"] }) {
  return (
    <section aria-labelledby="cost-title" className="panel bg-ink py-20 text-white md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.12),transparent)] blur-2xl" />
      </div>
      <div className="container-page">
        <SectionHeader tone="dark" eyebrow={t.eyebrow} titleId="cost-title" title={t.title} lead={t.lead} />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="flex flex-col rounded-3xl bg-ink-2 p-6 ring-1 ring-white/[0.07] md:p-8">
            <p className="text-sm text-mute-dark">{t.chartCaption}</p>
            <BarChart bars={t.bars} label={t.chartLabel} />
            <div className="mt-8 grid gap-4 border-t border-white/[0.07] pt-6 sm:grid-cols-2">
              {t.facts.map((fact) => (
                <div key={fact.stat}>
                  <p className="font-display text-3xl font-semibold tracking-tight text-green">{fact.stat}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{fact.text}</p>
                  <p className="mt-1.5 font-mono text-[0.6875rem] text-mute-dark">{fact.source}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-ink-2 p-2 ring-1 ring-white/[0.07]">
            <Tabs.Root defaultValue={t.pains[0].id} className="flex h-full flex-col">
              <Tabs.List aria-label={t.tabsLabel} className="no-scrollbar flex gap-1 overflow-x-auto rounded-[1.25rem] bg-ink p-1">
                {t.pains.map((p) => (
                  <Tabs.Trigger
                    key={p.id}
                    value={p.id}
                    className="flex-1 rounded-2xl px-4 py-2.5 text-sm whitespace-nowrap text-mute-dark transition-colors hover:text-white data-[state=active]:bg-ink-4 data-[state=active]:text-white"
                  >
                    <span className="sm:hidden">{p.short}</span>
                    <span className="hidden sm:inline">{p.tab}</span>
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              {t.pains.map((p) => (
                <Tabs.Content key={p.id} value={p.id} className="flex-1 p-4 focus-visible:outline-none data-[state=active]:flex md:p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-1 flex-col"
                  >
                    <h3 className="type-h3 text-white">{p.title}</h3>
                    <div className="mt-5 flex flex-col gap-x-6 gap-y-2 sm:flex-row sm:items-end">
                      <p className="font-display text-[4.5rem] leading-[0.85] font-semibold tracking-tight text-green">{p.stat}</p>
                      <div className="pb-1">
                        <p className="max-w-sm text-[0.9375rem] leading-relaxed text-white/85">{p.text}</p>
                        <p className="mt-1.5 font-mono text-[0.6875rem] text-mute-dark">{p.source}</p>
                      </div>
                    </div>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {p.more.map((m) => (
                        <div key={m.stat} className="rounded-2xl bg-ink p-4 ring-1 ring-white/[0.06]">
                          <p className="font-display text-2xl font-semibold tracking-tight text-green">{m.stat}</p>
                          <p className="mt-1 text-sm leading-relaxed text-white/80">{m.text}</p>
                          <p className="mt-1.5 font-mono text-[0.6875rem] text-mute-dark">{m.source}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                      <p className="rounded-2xl bg-green/[0.07] px-4 py-3.5 text-[0.9375rem] leading-relaxed text-white/85 ring-1 ring-green/20">
                        <span className="text-green">{t.helpsLabel}</span> {p.helps}
                      </p>
                    </div>
                  </motion.div>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <blockquote className="font-display text-[clamp(1.25rem,2.2vw,1.625rem)] leading-snug font-medium tracking-tight text-white">
            {t.quote}
          </blockquote>
          <p className="mt-3 font-mono text-xs text-mute-dark">{t.quoteSource}</p>
        </Reveal>
      </div>
    </section>
  )
}

function BarChart({ bars, label }: { bars: Dict["cost"]["bars"]; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" })
  const reduced = useReducedMotion()
  const max = bars[bars.length - 1].value

  return (
    <div ref={ref} className="mt-8 grid flex-1 grid-cols-3 gap-3 md:gap-5" role="img" aria-label={label}>
      {bars.map((bar, i) => {
        const last = i === bars.length - 1
        return (
          <div key={bar.year} className="flex flex-col">
            <div className="flex h-60 flex-col justify-end md:h-72">
              <motion.div
                className="flex flex-col"
                style={{ height: `${(bar.value / max) * 82 + 18}%` }}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className={cn("font-display text-[clamp(1.125rem,2.2vw,1.625rem)] font-semibold tracking-tight", last ? "text-green" : "text-white")}>
                  {bar.label}
                </p>
                <div className={cn("mt-2.5 w-full flex-1 rounded-t-xl", i === 0 && "bg-[#2f5b3f]", i === 1 && "bg-[#1f8a47]", last && "bg-green")} />
              </motion.div>
            </div>
            <p className="border-t border-white/10 pt-3 font-mono text-[0.6875rem] text-mute-dark">
              {bar.year} · {bar.source}
            </p>
          </div>
        )
      })}
    </div>
  )
}
