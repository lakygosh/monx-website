import type React from "react"
import { Bell, Bot, ChartLine, ChevronRight, Gauge, LayoutGrid, Network, Search, Settings, ShieldAlert, Sparkles, Waypoints } from "lucide-react"
import { cn } from "@/lib/utils"

const nav = [LayoutGrid, Bot, Gauge, ChartLine, Waypoints, ShieldAlert, Bell, Network, Settings]

/** A drawing of the MonX web app's shell: sidebar, breadcrumb, assistant and search. */
export function AppFrame({
  crumbs,
  active = 3,
  children,
  className,
}: {
  crumbs: string[]
  active?: number
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex overflow-hidden rounded-2xl bg-[#141615] text-[#eef1ef] shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)] ring-1 ring-white/10",
        className,
      )}
    >
      <div className="hidden w-12 shrink-0 flex-col items-center gap-3 border-r border-white/[0.06] bg-[#1a1b1a] py-3.5 sm:flex">
        <span className="font-display text-[0.5625rem] font-bold tracking-tight">
          MON<span className="text-green">X</span>
        </span>
        <div className="mt-2 flex flex-col gap-2.5">
          {nav.map((Icon, i) => (
            <span
              key={i}
              className={cn("grid size-7 place-items-center rounded-lg", i === active ? "bg-white/10 text-green" : "text-white/45")}
            >
              <Icon className="size-3.5" />
            </span>
          ))}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex h-11 items-center gap-2 border-b border-white/[0.06] px-4 text-[0.6875rem]">
          {crumbs.map((c, i) => (
            <span key={c} className="flex items-center gap-2">
              {i > 0 ? <ChevronRight className="size-3 text-white/30" /> : null}
              <span className={i === crumbs.length - 1 ? "text-white" : "text-white/50"}>{c}</span>
            </span>
          ))}
          <span className="ml-auto hidden items-center gap-1.5 rounded-full px-2.5 py-1 ring-1 ring-white/10 md:inline-flex">
            <Sparkles className="size-3" /> Assistant
          </span>
          <span className="hidden items-center gap-1.5 rounded-full bg-white/[0.04] py-1 pr-6 pl-2.5 text-white/50 ring-1 ring-white/10 md:inline-flex">
            <Search className="size-3" /> Search…
          </span>
          <span className="ml-auto grid size-6 place-items-center rounded-full bg-white/10 text-[0.5625rem] md:ml-0">LT</span>
        </div>
        <div className="relative bg-[radial-gradient(120%_60%_at_0%_0%,rgb(34_197_94/0.07),transparent)] p-4 md:p-6">{children}</div>
      </div>
    </div>
  )
}

export function MockCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-xl bg-[#1d1e1d] p-4 ring-1 ring-white/[0.07]", className)}>{children}</div>
}

export function Pill({ children, active, className }: { children: React.ReactNode; active?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-[0.6875rem]",
        active ? "bg-green/15 text-green ring-1 ring-green/40" : "bg-white/[0.04] text-white/70 ring-1 ring-white/10",
        className,
      )}
    >
      {children}
    </span>
  )
}
