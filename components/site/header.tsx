"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { ContactButton } from "@/components/site/contact-dialog"
import { Logo } from "@/components/ui/logo"
import { buttonClass } from "@/components/ui/primitives"
import type { Dict } from "@/lib/i18n/en"
import { cn } from "@/lib/utils"

export function AnnouncementBar({ t }: { t: Dict["announcement"] }) {
  return (
    <div className="bg-paper">
      <a
        href="#compliance"
        className="container-page group flex h-10 items-center justify-center gap-2 text-center text-[0.8125rem] text-mute transition-colors hover:text-ink"
      >
        <span className="rounded-full bg-green-wash px-2 py-0.5 font-mono text-[0.6875rem] font-medium tracking-wide text-green-deep">
          {t.badge}
        </span>
        <span className="truncate">
          {t.before} <span className="font-medium text-ink">{t.strong}</span>
        </span>
        <ArrowRight className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  )
}

/** EN / SR switch. Each language lives at its own address: `/` and `/sr`. */
export function LanguageSwitch({ t, locale, className }: { t: Dict["languages"]; locale: string; className?: string }) {
  const options = [
    { code: "en", href: "/", label: t.en, lang: "en" },
    { code: "sr", href: "/sr", label: t.sr, lang: "sr-Latn" },
  ]
  return (
    <div role="group" aria-label={t.label} className={cn("flex rounded-full bg-ink/[0.05] p-0.5", className)}>
      {options.map((o) => (
        <a
          key={o.code}
          href={o.href}
          hrefLang={o.lang}
          lang={o.lang}
          aria-current={o.code === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-[0.6875rem] font-medium transition-colors",
            o.code === locale ? "bg-white text-ink shadow-sm" : "text-ink/55 hover:text-ink",
          )}
        >
          {o.label}
        </a>
      ))}
    </div>
  )
}

export function Header({ t }: { t: Pick<Dict, "nav" | "languages" | "locale"> }) {
  const nav = t.nav
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    // Zero height, so the bar floats over the hero instead of pushing it down.
    <header className="sticky top-0 z-50 h-0">
      <div className="container-page pointer-events-none pt-3">
        <nav
          aria-label={nav.label}
          className={cn(
            "pointer-events-auto relative flex h-14 items-center justify-between gap-4 rounded-full bg-white/85 pr-2 pl-5 ring-1 ring-ink/[0.06] backdrop-blur-xl transition-shadow duration-300",
            scrolled ? "shadow-[0_8px_30px_-12px_rgb(14_20_18/0.35)]" : "shadow-[0_2px_10px_-4px_rgb(14_20_18/0.2)]",
          )}
        >
          <a href={t.locale === "sr" ? "/sr" : "/"} aria-label={nav.home} className="shrink-0">
            <Logo tone="light" className="h-[22px]" />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-[0.875rem] text-ink/65 transition-colors hover:bg-ink/[0.04] hover:text-ink xl:px-3.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <LanguageSwitch t={t.languages} locale={t.locale} className="hidden sm:flex" />
            <a href="#video" className={buttonClass("outline-light", "sm", "hidden ring-0 xl:inline-flex")}>
              {nav.watchVideo}
            </a>
            <ContactButton className={buttonClass("dark", "sm")}>{nav.bookDemo}</ContactButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? nav.closeMenu : nav.openMenu}
              className="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
            >
              {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>

          {open ? (
            <div
              id="mobile-menu"
              className="animate-in fade-in-0 slide-in-from-top-2 absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl bg-white p-2 shadow-[0_20px_50px_-20px_rgb(14_20_18/0.45)] ring-1 ring-ink/[0.06] lg:hidden"
            >
              <ul>
                {[...nav.links, { href: "#video", label: nav.watchVideoLong }].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-[0.9375rem] text-ink/80 transition-colors hover:bg-paper hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-1 flex justify-center border-t border-line px-4 pt-3 pb-2 sm:hidden">
                <LanguageSwitch t={t.languages} locale={t.locale} />
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
