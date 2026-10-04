import { Check, Copy, Megaphone, Printer, Send, Sparkles } from "lucide-react"
import { AppFrame, MockCard, Pill } from "@/components/mocks/app-frame"
import { areaPath, bandPath, linePath, seeded, series } from "@/lib/series"
import { cn } from "@/lib/utils"

/* ---------------------------------------------------------------- Live indicators */

const tiles = [
  { name: "Card payments / min", value: "2,847", level: "Good", color: "#22c55e", data: series(40, { seed: 21, base: 62, amp: 22, noise: 5 }) },
  { name: "Instant payments / min", value: "412", level: "Good", color: "#67e8f9", data: series(40, { seed: 22, base: 55, amp: 25, noise: 7, phase: 0.1 }) },
  { name: "Mobile banking logins / min", value: "1,094", level: "Good", color: "#22c55e", data: series(40, { seed: 23, base: 58, amp: 28, noise: 6, phase: -0.05 }) },
  { name: "ATM withdrawals / min", value: "186", level: "Unusual", color: "#f2a93b", data: series(40, { seed: 24, base: 48, amp: 18, noise: 9, phase: 0.3 }) },
]
const tileBox = { width: 240, height: 56, min: 0, max: 100, pad: 2 }

export function DashboardMock() {
  return (
    <AppFrame crumbs={["Dashboards", "Operations"]} active={0}>
      <div className="-mx-4 -mt-4 mb-4 flex items-center gap-2 border-b border-white/[0.06] bg-green/[0.06] px-4 py-2 text-[0.6875rem] text-white/80 md:-mx-6 md:-mt-6 md:mb-5 md:px-6">
        <Megaphone className="size-3 text-green" /> Core banking maintenance tonight, 22:00–23:00
      </div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-base font-semibold">Operations</p>
          <p className="flex items-center gap-1.5 text-[0.6875rem] text-white/50">
            <span className="size-1.5 rounded-full bg-green" /> Live: moves forward every minute
          </p>
        </div>
        <div className="flex gap-1">
          {["1h", "6h", "24h", "7d", "30d"].map((r) => (
            <Pill key={r} active={r === "6h"}>
              {r}
            </Pill>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {tiles.map((t) => (
          <MockCard key={t.name} className="p-3.5">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[0.75rem] text-white/70">{t.name}</p>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[0.5625rem]",
                  t.level === "Good" ? "bg-green/15 text-green" : "bg-amber/15 text-amber",
                )}
              >
                {t.level}
              </span>
            </div>
            <p className="tabular mt-1 font-display text-2xl font-semibold tracking-tight">{t.value}</p>
            <svg viewBox={`0 0 ${tileBox.width} ${tileBox.height}`} preserveAspectRatio="none" className="mt-2 h-12 w-full">
              <path d={areaPath(t.data, tileBox)} fill={t.color} fillOpacity="0.12" />
              <path d={linePath(t.data, tileBox)} fill="none" stroke={t.color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </MockCard>
        ))}
      </div>
    </AppFrame>
  )
}

/* ---------------------------------------------------------------- Anomaly detection */

const N = 64
const rndA = seeded(11)
const usual = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1)
  return 500 + 2300 * (1 - Math.exp(-4.2 * t)) - 260 * t
})
const low = usual.map((v) => v * 0.86)
const high = usual.map((v) => v * 1.12)
const ghosts = [1, 2, 3].map((g) => usual.map((v) => v * (1 + (rndA() - 0.5) * 0.1 + Math.sin(g * 3 + v) * 0.03)))
const DRIFT = 32
const today = usual.map((v, i) => {
  const noise = 1 + (rndA() - 0.5) * 0.06
  return i < DRIFT ? v * noise : v * (0.93 - (i - DRIFT) * 0.011) * noise
})
const chart = { width: 640, height: 220, min: 0, max: 3200 }
const driftX = (DRIFT / (N - 1)) * chart.width

export function AnomalyMock() {
  return (
    <AppFrame crumbs={["Indicators", "Card payments / min"]} active={4}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-base font-semibold">Card payments / min</p>
          <p className="text-[0.6875rem] text-white/50">Tuesday · usual range from the same hour on the last 8 Tuesdays</p>
        </div>
        <span className="rounded-full bg-amber/15 px-2.5 py-1 text-[0.6875rem] text-amber ring-1 ring-amber/30">Unusual values</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Pill active>Same weekday</Pill>
        <Pill>Holiday</Pill>
        <Pill>First working day</Pill>
        <Pill>Last working day</Pill>
        <Pill className="ml-auto">Sensitivity 3</Pill>
      </div>
      <MockCard className="mt-4 p-3 md:p-4">
        <div className="relative">
          <svg viewBox={`0 0 ${chart.width} ${chart.height}`} className="h-auto w-full overflow-visible">
            {[0.25, 0.5, 0.75].map((y) => (
              <line key={y} x1="0" x2={chart.width} y1={chart.height * y} y2={chart.height * y} stroke="white" strokeOpacity="0.06" />
            ))}
            <path d={bandPath(low, high, chart)} fill="white" fillOpacity="0.09" />
            {ghosts.map((g, i) => (
              <path key={i} d={linePath(g, chart)} fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
            ))}
            <path d={linePath(today.slice(0, DRIFT + 1), { ...chart, width: driftX })} fill="none" stroke="#22c55e" strokeWidth="2" />
            <path
              d={linePath(today.slice(DRIFT), { ...chart, width: chart.width - driftX })}
              transform={`translate(${driftX} 0)`}
              fill="none"
              stroke="#f2a93b"
              strokeWidth="2"
            />
            <line x1={driftX} x2={driftX} y1="0" y2={chart.height} stroke="#ef4444" strokeWidth="1.25" strokeDasharray="4 4" />
          </svg>
          <div className="absolute top-1 rounded-lg bg-[#2a1f12] px-2.5 py-1.5 text-[0.6875rem] text-amber ring-1 ring-amber/30" style={{ left: `calc(${(driftX / chart.width) * 100}% + 10px)` }}>
            Unusual for Tuesday 10:00
          </div>
        </div>
        <div className="mt-2 flex justify-between font-mono text-[0.625rem] text-white/40">
          {["06:00", "08:00", "10:00", "12:00", "14:00"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </MockCard>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.6875rem] text-white/55">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-sm bg-white/15" /> Usual range
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-0.5 w-4 bg-green" /> Today
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-0.5 w-4 border-t border-dashed border-red" /> Anomaly opened 10:04
        </span>
      </div>
    </AppFrame>
  )
}

/* ---------------------------------------------------------------- What moved together */

function stepSeries(seed: number, at: number, from: number, to: number) {
  const r = seeded(seed)
  return Array.from({ length: 30 }, (_, i) => {
    const k = 1 / (1 + Math.exp(-(i - at) * 1.6))
    return from + (to - from) * k + (r() - 0.5) * 0.08
  })
}

const target = stepSeries(3, 15, 0.8, 0.04)
const moved = [
  { name: "DB connection pool usage", when: "rose 2 min before", data: stepSeries(5, 13, 0.35, 0.97), cause: true },
  { name: "Card auth API latency (p95)", when: "rose 1 min before", data: stepSeries(8, 14, 0.25, 0.85) },
  { name: "Instant payments in progress", when: "fell 1 min after", data: stepSeries(9, 16, 0.75, 0.3) },
  { name: "Mobile banking logins / min", when: "fell 3 min after", data: stepSeries(12, 18, 0.7, 0.45) },
  { name: "Call center queue", when: "rose 6 min after", data: stepSeries(14, 21, 0.15, 0.9) },
]
const spark = { width: 120, height: 28, min: 0, max: 1, pad: 2 }

export function MovedMock() {
  return (
    <AppFrame crumbs={["Incidents", "INC-2026-014", "Moved together"]} active={5}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-display text-base font-semibold">Find what moved together</p>
          <p className="text-[0.6875rem] text-white/50">17:30 – 18:30 · up to 30 minutes either side · closest first</p>
        </div>
        <Pill active>10 found</Pill>
      </div>

      <MockCard className="mt-4 flex items-center gap-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="text-[0.6875rem] text-white/50">Asked about</p>
          <p className="truncate text-[0.8125rem] font-medium">Card payments / min</p>
        </div>
        <svg viewBox={`0 0 ${spark.width} ${spark.height}`} className="h-8 w-32">
          <path d={linePath(target, spark)} fill="none" stroke="#ef4444" strokeWidth="1.75" />
        </svg>
      </MockCard>

      <ul className="mt-2 space-y-1.5">
        {moved.map((row) => (
          <li
            key={row.name}
            className={cn(
              "flex items-center gap-4 rounded-xl px-4 py-2.5 ring-1",
              row.cause ? "bg-amber/[0.08] ring-amber/30" : "bg-[#1a1b1a] ring-white/[0.05]",
            )}
          >
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.8125rem]">{row.name}</p>
              <p className={cn("text-[0.6875rem]", row.cause ? "text-amber" : "text-white/45")}>{row.when}</p>
            </div>
            <svg viewBox={`0 0 ${spark.width} ${spark.height}`} className="h-7 w-28 shrink-0">
              <path d={linePath(row.data, spark)} fill="none" stroke={row.cause ? "#f2a93b" : "rgb(255 255 255 / 0.5)"} strokeWidth="1.5" />
            </svg>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.6875rem] text-white/45">Moving together doesn&apos;t prove one caused the other. It shows where to look next.</p>
    </AppFrame>
  )
}

/* ---------------------------------------------------------------- Incidents and NBS reports */

const reports = [
  { name: "Initial report", due: "Due on classification", state: "ready" },
  { name: "Interim report", due: "Due Wed 7 Oct, 23:59", state: "in 3 d 05:19" },
  { name: "Final report", due: "Due Sat 17 Oct, 23:59", state: "in 13 d 05:19" },
]

const reportFields = [
  ["Incident", "INC-2026-014 · Card payments unavailable"],
  ["Detected", "Fri 2 Oct, 18:02"],
  ["Classification", "Significant (Annex 1)"],
  ["Services affected", "Card payments, all channels"],
  ["Duration", "20 minutes"],
  ["Cause (preliminary)", "Database connection pool exhausted"],
]

export function IncidentMock() {
  return (
    <AppFrame crumbs={["Incidents", "INC-2026-014"]} active={5}>
      <div className="grid gap-4 xl:grid-cols-[1.05fr_1fr]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="size-2 rounded-full bg-red" />
            <span className="font-mono text-[0.6875rem] text-white/50">INC-2026-014</span>
            <span className="text-[0.875rem] font-semibold">Card payments unavailable</span>
            <span className="rounded-full bg-amber/15 px-2 py-0.5 text-[0.625rem] text-amber">Open</span>
          </div>

          <p className="mt-5 font-mono text-[0.625rem] tracking-wider text-white/40 uppercase">Classification</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="rounded-full bg-red/15 px-2.5 py-1 text-[0.6875rem] font-medium text-[#fca5a5] ring-1 ring-red/30">Significant</span>
            <span className="text-[0.6875rem] text-white/50">Annex 1 criteria, computed by MonX</span>
          </div>
          <ul className="mt-3 space-y-1.5 text-[0.75rem]">
            {["Clients affected", "Transactions affected"].map((c) => (
              <li key={c} className="flex items-center justify-between">
                <span className="text-white/75">{c}</span>
                <span className="rounded-full bg-red/10 px-2 py-0.5 text-[0.625rem] text-[#fca5a5]">Higher impact</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-green/10 px-2.5 py-1.5 text-[0.6875rem] text-green ring-1 ring-green/30">
            <Check className="size-3" /> Classification confirmed · 18:40
          </div>

          <p className="mt-5 font-mono text-[0.625rem] tracking-wider text-white/40 uppercase">Reports to the regulator</p>
          <ul className="mt-2 space-y-1.5">
            {reports.map((r) => (
              <li key={r.name} className="flex items-center justify-between gap-3 rounded-lg bg-[#1d1e1d] px-3 py-2 ring-1 ring-white/[0.06]">
                <div>
                  <p className="text-[0.75rem] font-medium">{r.name}</p>
                  <p className="text-[0.625rem] text-white/45">{r.due}</p>
                </div>
                {r.state === "ready" ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green/15 px-2 py-0.5 text-[0.625rem] text-green">
                    <Check className="size-2.5" /> Draft ready
                  </span>
                ) : (
                  <span className="tabular font-mono text-[0.6875rem] text-white/80">{r.state}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-[#fbfcfa] p-4 text-ink shadow-xl">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 whitespace-nowrap">
            <p className="text-[0.8125rem] font-semibold">Initial report</p>
            <span className="rounded-full bg-green-wash px-2 py-0.5 text-[0.5625rem] text-green-deep">Ready to send</span>
            <span className="ml-auto flex gap-2.5 text-[0.625rem] text-mute">
              <span className="inline-flex items-center gap-1">
                <Copy className="size-2.5" /> Copy text
              </span>
              <span className="inline-flex items-center gap-1">
                <Printer className="size-2.5" /> Print
              </span>
            </span>
          </div>
          <dl className="mt-3 space-y-2.5 border-t border-line pt-3">
            {reportFields.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.5625rem] tracking-wider text-mute-2 uppercase">{k}</dt>
                <dd className="text-[0.75rem]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </AppFrame>
  )
}

/* ---------------------------------------------------------------- AI assistant */

export function AssistantMock() {
  return (
    <AppFrame crumbs={["Assistant", "Card payments at 18:00"]} active={1}>
      <div className="mx-auto max-w-xl">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-white/[0.08] px-3.5 py-2.5 text-[0.8125rem]">
          Why did card payments drop at 18:00?
        </div>

        <div className="mt-4 flex gap-3">
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-green/15 text-green">
            <Sparkles className="size-3.5" />
          </span>
          <div className="min-w-0 text-[0.8125rem] leading-relaxed text-white/85">
            <div className="flex flex-wrap gap-1">
              <span className="text-[0.6875rem] text-white/45">Read:</span>
              {["Card payments / min", "DB connection pool usage", "INC-2026-014", "Change history"].map((c) => (
                <span key={c} className="rounded-md bg-white/[0.05] px-1.5 py-0.5 font-mono text-[0.625rem] text-white/60 ring-1 ring-white/[0.06]">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-3">
              <strong className="font-semibold text-white">Card payments / min</strong> fell from about 2,800 to 0 at 18:02 and
              stayed there for 20 minutes. Around the same time:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 marker:text-white/30">
              <li>
                <strong className="font-semibold text-white">DB connection pool usage</strong> reached 100% at 18:00, two minutes
                earlier.
              </li>
              <li>Card auth API latency rose at 18:01.</li>
              <li>Nobody changed the monitoring configuration in the 24 hours before.</li>
            </ul>
            <p className="mt-2">The connection pool is the most likely place to look first.</p>
            <div className="mt-3 flex gap-1.5">
              <Pill>Answer again</Pill>
              <Pill>Open in incident</Pill>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-[#1d1e1d] py-2 pr-2 pl-4 ring-1 ring-white/10">
          <span className="flex-1 truncate text-[0.75rem] text-white/40">Ask about agents, indicators, alerts or incidents…</span>
          <span className="hidden rounded-full bg-green/10 px-2 py-0.5 font-mono text-[0.5625rem] text-green sm:inline">Bank&apos;s own model</span>
          <span className="grid size-7 place-items-center rounded-full bg-green text-ink">
            <Send className="size-3" />
          </span>
        </div>
      </div>
    </AppFrame>
  )
}

/* ---------------------------------------------------------------- Notifications */

const sent = [
  { about: "Card payments / min", level: "Very bad", channel: "Teams", status: "Sent", ago: "18:03" },
  { about: "Card payments / min", level: "Very bad", channel: "SMS", status: "Sent", ago: "18:03" },
  { about: "INC-2026-014", level: "Initial report due in 2 h", channel: "Teams", status: "Pending", ago: "18:41" },
  { about: "Mobile logins / min", level: "Unusual values", channel: "Slack", status: "Sent", ago: "18:05" },
  { about: "Card payments / min", level: "Back to normal", channel: "Teams", status: "Sent", ago: "18:22" },
  { about: "Agent service DC2", level: "Not reporting", channel: "Email", status: "Sent", ago: "17:12" },
]

export function AlertsMock() {
  return (
    <div className="relative pb-24 md:pr-28 md:pb-14">
      <AppFrame crumbs={["Notifications"]} active={6}>
        <p className="font-display text-base font-semibold">Notifications</p>
        <p className="text-[0.6875rem] text-white/50">What MonX created for its channels, and how sending each one went.</p>
        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/[0.07]">
          <div className="grid grid-cols-[1.6fr_0.7fr_0.6fr] bg-white/[0.03] px-3.5 py-2 text-[0.625rem] tracking-wider text-white/40 uppercase">
            <span>About</span>
            <span>Channel</span>
            <span className="text-right">Status</span>
          </div>
          <ul className="divide-y divide-white/[0.05]">
            {sent.map((n, i) => (
              <li key={i} className="grid grid-cols-[1.6fr_0.7fr_0.6fr] items-center px-3.5 py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-[0.75rem]">{n.about}</p>
                  <p className="truncate text-[0.625rem] text-white/45">
                    {n.level} · {n.ago}
                  </p>
                </div>
                <span className="text-[0.6875rem] text-white/70">{n.channel}</span>
                <span className="text-right">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[0.625rem]",
                      n.status === "Sent" ? "bg-white/[0.06] text-white/80" : "bg-amber/15 text-amber",
                    )}
                  >
                    {n.status}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </AppFrame>

      <div className="absolute right-2 bottom-0 w-44 rounded-[1.6rem] bg-black p-1.5 shadow-2xl ring-1 ring-white/15 md:right-0" aria-hidden>
        <div className="rounded-[1.35rem] bg-gradient-to-b from-[#1f3a2a] to-[#0d1410] px-2.5 pt-6 pb-3">
          <p className="text-center font-display text-2xl font-medium text-white">18:03</p>
          <p className="text-center text-[0.5625rem] text-white/60">Friday 2 October</p>
          {[
            { app: "Teams · Ops", text: "Card payments / min entered “Very bad”" },
            { app: "SMS · MonX", text: "Card payments / min: Very bad. 18:03" },
          ].map((m) => (
            <div key={m.app} className="mt-2 rounded-xl bg-white/15 p-2 backdrop-blur">
              <p className="text-[0.5625rem] font-medium text-white/70">{m.app}</p>
              <p className="text-[0.625rem] leading-snug text-white">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
