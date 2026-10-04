import { CalendarDays, RotateCw } from "lucide-react"
import { AppFrame, MockCard, Pill } from "@/components/mocks/app-frame"
import { seeded } from "@/lib/series"

// A drawing of the MonX chart page with made-up data: six hours of instant payments per minute.

const N = 96
const W = 900
const H = 250
const MAX = 700

type Key = [t: number, v: number]

function shape(keys: Key[], seed: number, jitter: number, flat: [number, number]) {
  const rnd = seeded(seed)
  return Array.from({ length: N }, (_, i) => {
    const t = i / (N - 1)
    const k = keys.findIndex(([kt]) => kt >= t)
    const [t0, v0] = keys[Math.max(0, k - 1)]
    const [t1, v1] = keys[k]
    const base = t1 === t0 ? v1 : v0 + ((v1 - v0) * (t - t0)) / (t1 - t0)
    // The flat stretch is a gap the chart bridges with a straight line, as in the real product.
    const inGap = t > flat[0] && t < flat[1]
    return inGap ? base : Math.max(4, base * (1 + (rnd() - 0.5) * jitter))
  })
}

const outgoing = shape(
  [[0, 460], [0.05, 640], [0.17, 470], [0.3, 430], [0.33, 300], [0.5, 280], [0.52, 262], [0.63, 262], [0.65, 140], [0.82, 90], [1, 20]],
  31,
  0.45,
  [0.52, 0.63],
)
const incoming = shape(
  [[0, 280], [0.05, 320], [0.17, 250], [0.3, 230], [0.33, 170], [0.5, 150], [0.52, 98], [0.63, 140], [0.65, 70], [0.82, 50], [1, 10]],
  47,
  0.35,
  [0.52, 0.63],
)

function points(values: number[]) {
  return values.map((v, i) => `${((i / (N - 1)) * W).toFixed(1)},${(H - (v / MAX) * H).toFixed(1)}`)
}
const line = (values: number[]) => `M${points(values).join(" L")}`
const area = (values: number[]) => `${line(values)} L${W},${H} L0,${H} Z`

const yTicks = [0, 100, 200, 300, 400, 500, 600, 700]
const xTicks = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"]

export function HeroChartMock() {
  return (
    <AppFrame crumbs={["Charts", "Instant payments"]} active={3} className="rounded-none rounded-t-lg shadow-none ring-0 md:rounded-t-xl">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-display text-lg font-semibold">Instant payments</p>
          <p className="text-[0.6875rem] text-white/55">Averaged per minute.</p>
          <p className="text-[0.625rem] text-white/35">Last changed 2 days ago by ana</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 inline-flex rounded-full bg-white/[0.05] p-0.5 text-[0.6875rem]">
          <span className="rounded-full bg-white/10 px-2.5 py-0.5">Chart</span>
          <span className="px-2.5 py-0.5 text-white/50">History</span>
        </span>
        {["1h", "6h", "24h", "7d", "30d"].map((r) => (
          <Pill key={r} active={r === "6h"}>
            {r}
          </Pill>
        ))}
        <span className="hidden items-center gap-1.5 rounded-full bg-white/[0.05] px-2.5 py-1 text-[0.6875rem] text-white/70 ring-1 ring-white/10 sm:inline-flex">
          02/10/2026 00:00 <CalendarDays className="size-3" />
        </span>
        <span className="hidden items-center gap-1 px-1.5 text-[0.6875rem] text-white/70 sm:inline-flex">
          <RotateCw className="size-3" /> Refresh
        </span>
      </div>

      <MockCard className="mt-4 p-3 md:p-4">
        <div className="flex justify-center gap-4 text-[0.625rem] text-white/60">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] border border-[#a7e3d6] bg-[#a7e3d6]/30" /> Instant.Incoming.Executed
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] border border-amber bg-amber/30" /> Instant.Outgoing.Executed
          </span>
        </div>
        <div className="mt-2 flex gap-2">
          <div className="flex flex-col justify-between py-0.5 text-right font-mono text-[0.5625rem] text-white/35">
            {[...yTicks].reverse().map((y) => (
              <span key={y}>{y}</span>
            ))}
          </div>
          <div className="min-w-0 flex-1">
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-40 w-full md:h-52">
              <defs>
                <linearGradient id="hero-out" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#f2a93b" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#f2a93b" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="hero-in" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#a7e3d6" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#a7e3d6" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              {yTicks.slice(1).map((y) => (
                <line key={y} x1="0" x2={W} y1={H - (y / MAX) * H} y2={H - (y / MAX) * H} stroke="white" strokeOpacity="0.07" vectorEffect="non-scaling-stroke" />
              ))}
              {xTicks.map((_, i) => (
                <line key={i} y1="0" y2={H} x1={(i / (xTicks.length - 1)) * W} x2={(i / (xTicks.length - 1)) * W} stroke="white" strokeOpacity="0.05" vectorEffect="non-scaling-stroke" />
              ))}
              <path d={area(outgoing)} fill="url(#hero-out)" />
              <path d={line(outgoing)} fill="none" stroke="#f2a93b" strokeWidth="1.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={area(incoming)} fill="url(#hero-in)" />
              <path d={line(incoming)} fill="none" stroke="#a7e3d6" strokeWidth="1.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="mt-1.5 flex justify-between font-mono text-[0.5625rem] text-white/35">
              {xTicks.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-2 text-[0.5625rem] text-white/30">Drag to zoom in · Shift+drag to move</p>
      </MockCard>
    </AppFrame>
  )
}
