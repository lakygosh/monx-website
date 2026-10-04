import { CreditCard, Landmark, RadioTower, ShoppingBag } from "lucide-react"
import { SectionHeader } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

const icons = [Landmark, RadioTower, CreditCard, ShoppingBag]

export function UseCases({ t }: { t: Dict["useCases"] }) {
  return (
    <section aria-labelledby="use-cases-title" className="container-page py-16 md:py-24">
      <SectionHeader eyebrow={t.eyebrow} titleId="use-cases-title" title={t.title} lead={t.lead} />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.industries.map((industry, i) => {
          const Icon = icons[i]
          return (
            <Reveal as="li" key={industry.name} delay={i * 0.06} className="rounded-3xl bg-paper-2 p-6 ring-1 ring-line">
              <span className="grid size-10 place-items-center rounded-xl bg-green-wash text-green-deep">
                <Icon className="size-[18px]" aria-hidden />
              </span>
              <h3 className="type-h3 mt-5 text-xl">{industry.name}</h3>
              <ul className="mt-4 divide-y divide-line border-t border-line">
                {industry.indicators.map((name) => (
                  <li key={name} className="flex items-center gap-2.5 py-3 text-[0.9375rem] text-mute">
                    <span className="size-1.5 shrink-0 rounded-full bg-green" aria-hidden />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
