import { BadgeCheck, Code2, Lock, UsersRound } from "lucide-react"
import { SectionHeader } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

const icons = [BadgeCheck, Code2, Lock, UsersRound]

export function Why({ t }: { t: Dict["why"] }) {
  return (
    <section aria-labelledby="why-title" className="container-page py-16 md:py-24">
      <SectionHeader eyebrow={t.eyebrow} titleId="why-title" title={t.title} />

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {t.reasons.map((r, i) => {
            const Icon = icons[i]
            return (
              <Reveal as="li" key={r.title} delay={i * 0.05} className="rounded-3xl bg-paper-2 p-6 ring-1 ring-line">
                <Icon className="size-5 text-green-deep" aria-hidden />
                <h3 className="type-h3 mt-4">{r.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-mute">{r.text}</p>
              </Reveal>
            )
          })}
        </ul>

        <Reveal delay={0.1} className="relative flex flex-col overflow-hidden rounded-3xl bg-ink p-6 text-white md:p-8">
          <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-green/20 blur-3xl" />
          <p className="relative font-display text-[1.375rem] leading-snug font-medium tracking-tight">{t.quote}</p>
          <ul className="relative mt-auto space-y-5 pt-8">
            {t.founders.map((f) => (
              <li key={f.name} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/[0.06] font-mono text-xs text-green ring-1 ring-white/10">
                  {f.initials}
                </span>
                <div>
                  <p className="font-medium">{f.name}</p>
                  <p className="text-[0.8125rem] text-green">{f.role}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute-dark">{f.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
