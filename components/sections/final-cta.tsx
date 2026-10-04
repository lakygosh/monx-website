import { ArrowRight, Mail } from "lucide-react"
import { ContactButton } from "@/components/site/contact-dialog"
import { Logo } from "@/components/ui/logo"
import { buttonClass } from "@/components/ui/primitives"
import type { Dict } from "@/lib/i18n/en"

export function FinalCta({ t }: { t: Dict["finalCta"] }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="panel bg-ink py-20 text-white md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-15%] h-[620px] w-[860px] rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.3),transparent)] blur-2xl" />
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(70%_70%_at_80%_0%,black,transparent)]" />
      </div>
      <div className="container-page">
        <Logo className="h-8" />
        <h2
          id="contact-title"
          className="mt-12 max-w-4xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.03] font-semibold tracking-[-0.035em]"
        >
          {t.title}
        </h2>
        <p className="type-lead mt-6 max-w-xl text-mute-dark">{t.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ContactButton className={buttonClass("primary")}>
            {t.cta} <ArrowRight className="size-4" />
          </ContactButton>
          <a href="mailto:lazar.gosic@mon-x.app" className={buttonClass("outline-dark")}>
            <Mail className="size-4" /> lazar.gosic@mon-x.app
          </a>
        </div>

        <ul className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          {t.people.map((p) => (
            <li key={p.name}>
              <p className="font-medium">{p.name}</p>
              <p className="mt-0.5 text-sm text-mute-dark">{p.role}</p>
              <a href={p.href} className="mt-2 inline-block text-sm text-green underline-offset-4 hover:underline">
                {p.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
