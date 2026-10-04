// Illustrative chart data for the product mockups. Seeded, so the server and the browser draw the same lines.

export function seeded(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** A daily-shaped curve: quiet at night, busy by day, with noise. */
export function series(
  n: number,
  { seed = 1, base = 50, amp = 30, noise = 6, phase = 0 }: { seed?: number; base?: number; amp?: number; noise?: number; phase?: number } = {},
) {
  const rnd = seeded(seed)
  return Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1)
    const wave = Math.sin((t + phase) * Math.PI * 1.6 - 0.4)
    return Math.max(0, base + amp * wave + (rnd() - 0.5) * 2 * noise)
  })
}

type Box = { width: number; height: number; min?: number; max?: number; pad?: number }

function points(values: number[], { width, height, min, max, pad = 0 }: Box) {
  const lo = min ?? Math.min(...values)
  const hi = max ?? Math.max(...values)
  const span = hi - lo || 1
  return values.map((v, i) => [(i / (values.length - 1)) * width, pad + (1 - (v - lo) / span) * (height - pad * 2)] as const)
}

/** A smooth line through the values (Catmull-Rom as cubic Béziers). */
export function linePath(values: number[], box: Box) {
  const p = points(values, box)
  let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[i + 2] ?? p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`
  }
  return d
}

export function areaPath(values: number[], box: Box) {
  return `${linePath(values, box)} L${box.width},${box.height} L0,${box.height} Z`
}

/** A closed band between two series, e.g. the usual range. */
export function bandPath(low: number[], high: number[], box: Box) {
  const top = points(high, box)
  const bottom = points(low, box).reverse()
  return `M${[...top, ...bottom].map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L")} Z`
}
