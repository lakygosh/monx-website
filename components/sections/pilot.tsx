import { ArrowRight } from "lucide-react"
import { ContactButton } from "@/components/site/contact-dialog"
import { SectionHeader, buttonClass } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

export function Pilot({ t }: { t: Dict["pilot"] }) {
  return (
    <section id="pilot" aria-labelledby="pilot-title" className="container-page py-16 md:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader eyebrow={t.eyebrow} titleId="pilot-title" title={t.title} lead={t.lead} />
        <ContactButton className={buttonClass("primary", "md", "w-fit")}>
          {t.cta} <ArrowRight className="size-4" />
        </ContactButton>
      </div>

      <div className="relative mt-12">
        <div aria-hidden className="absolute top-[1.375rem] right-[12%] left-0 hidden h-px bg-line-strong lg:block" />
        <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <Reveal as="li" key={step.when} delay={i * 0.07} className="relative flex flex-col">
              <span
                aria-hidden
                className="relative hidden size-11 place-items-center rounded-full bg-ink font-mono text-xs text-green ring-4 ring-paper lg:grid"
              >
                0{i + 1}
              </span>
              <div className="relative flex-1 overflow-hidden rounded-3xl bg-paper-2 p-6 ring-1 ring-line lg:mt-5">
                <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-green-deep" />
                <p className="type-eyebrow text-green-deep">{step.when}</p>
                <h3 className="type-h3 mt-3">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-mute">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <p className="mt-8 text-[0.9375rem] text-mute">{t.after}</p>
    </section>
  )
}
