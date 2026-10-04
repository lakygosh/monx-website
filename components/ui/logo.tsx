import { cn } from "@/lib/utils"

/** The wordmark: white letters for dark backgrounds, ink letters for light ones. The X is always green. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <img
      src={tone === "dark" ? "/monx-logo.png" : "/monx-logo-dark.png"}
      alt="MonX"
      width={1078}
      height={461}
      draggable={false}
      className={cn("h-6 w-auto select-none", className)}
    />
  )
}
