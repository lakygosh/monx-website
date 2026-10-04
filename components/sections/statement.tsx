import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

export function Statement({ t }: { t: Dict["statement"] }) {
  return (
    <section aria-label={t.label} className="panel bg-green text-ink">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(14_20_18/0.06)_1px,transparent_1px)] bg-[size:56px_100%]" />
        <div className="absolute -right-32 -bottom-40 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.35),transparent)] blur-2xl" />
      </div>
      <div className="container-page py-16 md:py-24">
        <p className="type-eyebrow text-ink/70">{t.eyebrow}</p>
        <Reveal>
          <p className="mt-6 max-w-5xl font-display text-[clamp(1.875rem,4.4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
            {t.text}
          </p>
        </Reveal>
        <p className="type-lead mt-8 max-w-2xl text-ink/75">{t.lead}</p>
      </div>
    </section>
  )
}
