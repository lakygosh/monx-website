"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { ContactButton } from "@/components/site/contact-dialog"
import { SectionHeader } from "@/components/ui/primitives"
import type { Dict } from "@/lib/i18n/en"

export function Faq({ t }: { t: Dict["faq"] }) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="container-page py-16 md:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader eyebrow={t.eyebrow} titleId="faq-title" title={t.title} />
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-mute">
            {t.askBefore}{" "}
            <ContactButton className="font-medium text-green-deep underline underline-offset-4 hover:text-ink">{t.askLink}</ContactButton>.
          </p>
        </div>

        <Accordion.Root type="single" collapsible defaultValue="item-0" className="divide-y divide-line border-y border-line">
          {t.items.map((item, i) => (
            <Accordion.Item key={item.q} value={`item-${i}`}>
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-medium tracking-tight transition-colors hover:text-green-deep">
                  {item.q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-paper-2 ring-1 ring-line transition-transform duration-300 group-data-[state=open]:rotate-45">
                    <Plus className="size-4" aria-hidden />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
                <p className="max-w-2xl pb-6 text-[0.9375rem] leading-relaxed text-mute">{item.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
