import type React from "react"
import { cn } from "@/lib/utils"

type Tone = "light" | "dark"

export function Eyebrow({ children, tone = "light", className }: { children: React.ReactNode; tone?: Tone; className?: string }) {
  return (
    <p
      className={cn(
        "type-eyebrow inline-flex items-center gap-2",
        tone === "dark" ? "text-green" : "text-green-deep",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {children}
    </p>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
  titleId,
  children,
}: {
  eyebrow: React.ReactNode
  title: React.ReactNode
  lead?: React.ReactNode
  tone?: Tone
  align?: "left" | "center"
  className?: string
  titleId?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 id={titleId} className={cn("type-h2 mt-4", tone === "dark" ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {lead ? (
        <p className={cn("type-lead mt-4", tone === "dark" ? "text-mute-dark" : "text-mute", align === "center" && "mx-auto max-w-2xl")}>
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  )
}

type ButtonVariant = "primary" | "dark" | "light" | "outline-dark" | "outline-light"

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_8px_24px_-8px_rgb(34_197_94/0.6)] hover:bg-green-bright",
  dark: "bg-ink text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] hover:bg-ink-4",
  light: "bg-white text-ink shadow-[0_1px_2px_rgb(14_20_18/0.08),0_0_0_1px_rgb(14_20_18/0.06)] hover:bg-paper-2",
  "outline-dark": "text-white ring-1 ring-white/15 ring-inset hover:bg-white/[0.06] hover:ring-white/25",
  "outline-light": "text-ink ring-1 ring-ink/15 ring-inset hover:bg-ink/[0.04]",
}

export function buttonClass(variant: ButtonVariant = "primary", size: "sm" | "md" = "md", className?: string) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,box-shadow,transform] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60",
    size === "sm" ? "h-9 px-4 text-[0.8125rem]" : "h-11 px-5 text-[0.9375rem]",
    variants[variant],
    className,
  )
}

/** The level chip MonX shows next to an indicator. */
export function LevelChip({ level, className }: { level: "ok" | "warn" | "bad"; className?: string }) {
  const label = { ok: "OK", warn: "Unusual", bad: "Very bad" }[level]
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 font-mono text-[0.6875rem] font-medium tracking-wide",
        level === "ok" && "bg-green-wash text-green-deep",
        level === "warn" && "bg-amber/15 text-[#a3650c]",
        level === "bad" && "bg-red/12 text-[#b42323]",
        className,
      )}
    >
      {label}
    </span>
  )
}
