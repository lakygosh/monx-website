import { Headset, Landmark, PhoneIncoming, Smartphone } from "lucide-react"
import { PaymentsDrop } from "@/components/sections/payments-drop"
import { SectionHeader } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

const stepIcons = [Smartphone, Headset, PhoneIncoming, Landmark]

export function Problem({ t }: { t: Dict["problem"] }) {
  return (
    <section id="problem" aria-labelledby="problem-title" className="container-page py-16 md:py-24">
      <SectionHeader eyebrow={t.eyebrow} titleId="problem-title" title={t.title} lead={t.lead} />

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Reveal className="rounded-3xl bg-paper-2 p-6 ring-1 ring-line md:p-8">
          <p className="type-h3 text-mute">{t.componentsTitle}</p>
          <ul className="mt-5 divide-y divide-line border-t border-line">
            {t.components.map((name) => (
              <li key={name} className="flex items-center justify-between py-4 text-[0.9375rem]">
                {name}
                <span className="rounded-full bg-green-wash px-3 py-1 font-mono text-xs font-medium text-green-deep">OK</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-xs text-mute-2">{t.componentsNote}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <PaymentsDrop t={t.drop} />
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.9fr] lg:gap-14">
        <Reveal>
          <h3 className="type-h2 text-[clamp(1.5rem,2.6vw,2rem)]">{t.whoTitle}</h3>
          <p className="mt-6 font-display text-6xl font-semibold tracking-tight text-green-deep">{t.whoStat}</p>
          <p className="mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-mute">{t.whoText}</p>
          <p className="mt-3 font-mono text-[0.6875rem] text-mute-2">{t.whoSource}</p>
        </Reveal>

        <ol className="grid gap-3 sm:grid-cols-2">
          {t.steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <Reveal as="li" key={step.who} delay={i * 0.06} className="relative rounded-2xl bg-paper-2 p-5 ring-1 ring-line">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-white text-ink ring-1 ring-line">
                    <Icon className="size-[18px]" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-mute-2">0{i + 1}</span>
                </div>
                <p className="type-h3 mt-5">{step.who}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-mute">{step.what}</p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
