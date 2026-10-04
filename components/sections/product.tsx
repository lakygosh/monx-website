import type React from "react"
import { Check } from "lucide-react"
import { AlertsMock, AnomalyMock, AssistantMock, DashboardMock, IncidentMock, MovedMock } from "@/components/mocks/product-mocks"
import { ProductTabs } from "@/components/sections/product-tabs"
import { SectionHeader } from "@/components/ui/primitives"
import type { Dict } from "@/lib/i18n/en"

type TabCopy = Dict["product"]["tabs"]["live"]

function Info({ copy }: { copy: TabCopy }) {
  return (
    <div className="rounded-2xl bg-paper p-6 text-ink md:p-7 lg:sticky lg:top-24">
      <h3 className="font-display text-[1.75rem] leading-tight font-semibold tracking-tight">{copy.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {copy.tags.map((tag) => (
          <li key={tag} className="rounded-md px-2 py-1 font-mono text-[0.6875rem] tracking-wider text-ink/75 uppercase ring-1 ring-ink/15">
            {tag}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[0.9375rem] leading-relaxed text-mute">{copy.text}</p>
      <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
        {copy.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-[0.9375rem] leading-snug">
            <Check className="mt-0.5 size-4 shrink-0 text-green-deep" aria-hidden />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Product screens are drawn in English, as the app itself is.
const mocks: Record<keyof Dict["product"]["tabs"], React.ReactNode> = {
  live: <DashboardMock />,
  anomaly: <AnomalyMock />,
  moved: <MovedMock />,
  incidents: <IncidentMock />,
  assistant: <AssistantMock />,
  alerts: <AlertsMock />,
}

export function Product({ t }: { t: Dict["product"] }) {
  const tabs = (Object.keys(mocks) as (keyof typeof mocks)[]).map((id) => ({
    id,
    label: t.tabs[id].label,
    mock: mocks[id],
    info: <Info copy={t.tabs[id]} />,
  }))

  return (
    <section id="product" aria-labelledby="product-title" className="panel bg-ink py-20 text-white md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_40%)]" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.16),transparent)] blur-2xl" />
      </div>
      <div className="container-page">
        <SectionHeader tone="dark" eyebrow={t.eyebrow} titleId="product-title" title={t.title} lead={t.lead} />
        <ProductTabs tabs={tabs} label={t.tabsLabel} />
      </div>
    </section>
  )
}
