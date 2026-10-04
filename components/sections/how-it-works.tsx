import type React from "react"
import { ArrowLeft, ArrowRight, BellRing, Database, FileCode2, Globe, Terminal } from "lucide-react"
import { SectionHeader } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"
import { cn } from "@/lib/utils"

const layerStyles = [
  "bg-green text-ink shadow-[0_18px_40px_-20px_rgb(34_197_94/0.9)]",
  "bg-green-wash text-ink",
  "bg-paper-2 text-ink/70 ring-1 ring-line",
  "bg-paper-2 text-ink/70 ring-1 ring-line",
]

const visuals = [AgentVisual, IndicatorVisual, AlertVisual]

export function HowItWorks({ t }: { t: Dict["how"] }) {
  return (
    <section id="how" aria-labelledby="how-title" className="container-page py-16 md:py-24">
      <SectionHeader eyebrow={t.eyebrow} titleId="how-title" title={t.title} lead={t.lead} />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
        <ol className="space-y-3">
          {t.layers.map((layer, i) => (
            <Reveal as="li" key={layer.name} delay={i * 0.07} className={cn("rounded-2xl px-6 py-5 md:px-7", layerStyles[i])}>
              <p className="font-display text-lg font-semibold tracking-tight md:text-xl">
                {i + 1} · {layer.name}
              </p>
              <p className={cn("mt-1 text-[0.9375rem]", i === 0 ? "text-ink/75" : "text-mute")}>{layer.examples}</p>
            </Reveal>
          ))}
        </ol>

        <div className="flex flex-col gap-3 lg:pt-3">
          <Reveal className="flex gap-3">
            <ArrowLeft className="mt-1 hidden size-5 shrink-0 text-green-deep lg:block" aria-hidden />
            <div>
              <p className="font-display text-lg font-semibold text-green-deep">{t.startsTitle}</p>
              <p className="mt-1 text-[0.9375rem] text-mute">{t.startsText}</p>
            </div>
          </Reveal>
          <Reveal delay={0.07} className="lg:mt-6 lg:pl-8">
            <p className="text-[0.9375rem] text-mute">{t.thenText}</p>
          </Reveal>
          <Reveal delay={0.14} className="mt-auto border-l-2 border-line-strong pl-5 lg:ml-8">
            <p className="type-h3 text-ink/80">{t.existingTitle}</p>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-mute">{t.existingText}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-24">
        <h3 className="type-h2 text-[clamp(1.5rem,2.6vw,2rem)]">{t.stepsTitle}</h3>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {t.steps.map((step, i) => {
            const Visual = visuals[i]
            return (
              <Step key={step.title} n={`0${i + 1}`} title={step.title} text={step.text} delay={i * 0.08}>
                <Visual />
              </Step>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Step({ n, title, text, delay = 0, children }: { n: string; title: string; text: string; delay?: number; children: React.ReactNode }) {
  return (
    <Reveal delay={delay} className="flex flex-col overflow-hidden rounded-3xl bg-paper-2 ring-1 ring-line">
      <div className="relative min-h-56 border-b border-line bg-paper-3/60 p-5">{children}</div>
      <div className="p-6">
        <p className="font-mono text-xs text-mute-2">{n}</p>
        <p className="type-h3 mt-2">{title}</p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-mute">{text}</p>
      </div>
    </Reveal>
  )
}

const sources = [
  { icon: Database, label: "SQL Server" },
  { icon: Database, label: "Oracle" },
  { icon: Terminal, label: "PowerShell" },
  { icon: Globe, label: "REST" },
  { icon: FileCode2, label: "SOAP" },
]

function AgentVisual() {
  return (
    <div aria-hidden>
      <div className="flex flex-wrap gap-1.5">
        {sources.map((s) => (
          <span key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs text-ink/75 ring-1 ring-line">
            <s.icon className="size-3 text-green-deep" />
            {s.label}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-ink p-4 font-mono text-[0.6875rem] leading-[1.7] text-white/80 shadow-lg">
        <p className="text-mute-dark">-- Card authorizations, last minute</p>
        <p>
          <span className="text-green-bright">SELECT</span> COUNT(*)
        </p>
        <p>
          <span className="text-green-bright">FROM</span> card_auth
        </p>
        <p>
          <span className="text-green-bright">WHERE</span> status = <span className="text-amber">&apos;APPROVED&apos;</span>
        </p>
        <p>
          &nbsp;&nbsp;<span className="text-green-bright">AND</span> ts &gt; DATEADD(minute, -1, GETDATE())
        </p>
      </div>
    </div>
  )
}

const indicators = [
  { name: "Card authorizations / min", value: "2,847", level: "Good", tone: "ok" },
  { name: "Instant payments in progress", value: "312", level: "Good", tone: "ok" },
  { name: "Mobile banking logins / min", value: "1,094", level: "Unusual", tone: "warn" },
  { name: "Failed transfers / min", value: "3", level: "Good", tone: "ok" },
] as const

function IndicatorVisual() {
  return (
    <div aria-hidden>
      <div className="rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-line">
        <p className="px-2.5 pt-1.5 pb-2 text-[0.6875rem] font-medium tracking-wide text-mute-2 uppercase">Business service · Card payments</p>
        <ul className="divide-y divide-line">
          {indicators.map((row) => (
            <li key={row.name} className="flex items-center gap-3 px-2.5 py-2 text-xs">
              <span className={cn("size-1.5 rounded-full", row.tone === "ok" ? "bg-green" : "bg-amber")} />
              <span className="flex-1 truncate text-ink/80">{row.name}</span>
              <span className="tabular font-mono text-ink">{row.value}</span>
              <span
                className={cn(
                  "w-16 rounded-full py-0.5 text-center font-mono text-[0.625rem]",
                  row.tone === "ok" ? "bg-green-wash text-green-deep" : "bg-amber/15 text-[#a3650c]",
                )}
              >
                {row.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AlertVisual() {
  return (
    <div aria-hidden>
      <div className="rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-line">
        <div className="flex gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-amber/15 text-[#b26b06]">
            <BellRing className="size-3.5" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold">Mobile banking logins / min</p>
            <p className="mt-0.5 text-xs text-mute">Entered level “Bad” at 10:04</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 px-1 text-[0.6875rem] text-mute">
        <span className="font-mono">Moved together</span>
        <span className="h-px flex-1 bg-line-strong" />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5 px-1 font-mono text-[0.6875rem]">
        <span className="rounded-md bg-white px-2 py-1 ring-1 ring-line">Auth API latency</span>
        <ArrowRight className="size-3 text-mute-2" />
        <span className="rounded-md bg-white px-2 py-1 ring-1 ring-line">Login queue</span>
        <ArrowRight className="size-3 text-mute-2" />
        <span className="rounded-md bg-red/10 px-2 py-1 text-[#b42323] ring-1 ring-red/25">DB connection pool</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1 px-1">
        {["Teams", "Slack", "SMS", "Email", "Jira", "ServiceNow"].map((c) => (
          <span key={c} className="rounded-full bg-white px-2 py-0.5 font-mono text-[0.625rem] text-mute ring-1 ring-line">
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
