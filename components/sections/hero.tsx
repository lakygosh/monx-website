import { Check, Play } from "lucide-react"
import { HeroChartMock } from "@/components/mocks/hero-chart"
import { HeroAlert, HeroLiveCard } from "@/components/sections/hero-live"
import { ContactButton } from "@/components/site/contact-dialog"
import { Eyebrow, buttonClass } from "@/components/ui/primitives"
import type { Dict } from "@/lib/i18n/en"

export function Hero({ t }: { t: Dict["hero"] }) {
  return (
    <section aria-labelledby="hero-title" className="panel bg-ink text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 right-[-10%] h-[640px] w-[820px] rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.28),transparent)] blur-2xl" />
        <div className="absolute top-[45%] -left-40 h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.1),transparent)] blur-2xl" />
      </div>

      <div className="container-page pt-32 md:pt-40">
        <div className="max-w-3xl">
          <Eyebrow tone="dark">{t.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="type-display mt-5 text-white">
            {t.titleStart} <span className="text-green">{t.titleAccent}</span>
          </h1>
          <p className="type-lead mt-6 max-w-2xl text-mute-dark">{t.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ContactButton className={buttonClass("primary")}>{t.bookDemo}</ContactButton>
            <a href="#video" className={buttonClass("outline-dark")}>
              <span className="grid size-5 place-items-center rounded-full bg-white/10">
                <Play className="size-2.5 fill-current" />
              </span>
              {t.watch}
              <span className="font-mono text-xs text-mute-dark">1:29</span>
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.8125rem] text-mute-dark">
            {t.proof.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-green" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* The product, as a bank's operations team sees it. */}
        <div className="relative mt-14 md:mt-20">
          <div
            aria-hidden
            className="absolute inset-x-[8%] -top-10 h-40 rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.35),transparent)] blur-3xl"
          />
          <figure
            role="img"
            aria-label={t.figureLabel}
            className="relative mx-auto max-w-[1040px] rounded-t-2xl bg-ink-3/80 p-1.5 pb-0 ring-1 ring-white/10 md:rounded-t-[1.25rem] md:p-2 md:pb-0"
          >
            <div aria-hidden className="flex items-center gap-1.5 px-2.5 pt-1 pb-2.5 md:pt-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="mx-auto hidden rounded-md bg-white/[0.06] px-16 py-1 font-mono text-[0.6875rem] text-mute-dark sm:block">
                monx.yourbank.local
              </span>
            </div>
            <HeroChartMock />
          </figure>

          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />

          <HeroLiveCard className="absolute top-[30%] -left-1 z-10 hidden w-64 lg:block xl:-left-4" />
          <HeroAlert className="absolute right-0 bottom-[24%] z-10 hidden w-[300px] lg:block xl:-right-4" />
        </div>
      </div>
    </section>
  )
}
