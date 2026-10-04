import { Building2, FileCheck2, History, KeyRound, LockKeyhole, UsersRound } from "lucide-react"
import { ContactButton } from "@/components/site/contact-dialog"
import { SectionHeader, buttonClass } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

const securityIcons = [Building2, LockKeyhole, UsersRound, KeyRound, History, FileCheck2]

export function Compliance({ t }: { t: Dict["compliance"] }) {
  return (
    <section id="compliance" aria-labelledby="compliance-title" className="container-page py-16 md:py-24">
      <SectionHeader eyebrow={t.eyebrow} titleId="compliance-title" title={t.title} lead={t.lead} />

      <Reveal className="mt-12 overflow-hidden rounded-3xl ring-1 ring-line">
        <table className="block w-full border-collapse text-left text-[0.9375rem] md:table">
          <caption className="sr-only">{t.caption}</caption>
          <thead className="hidden bg-ink text-white md:table-header-group">
            <tr>
              <th scope="col" className="w-1/2 px-5 py-4 text-sm font-medium md:px-7">
                {t.requirementHeader} <span className="font-normal text-mute-dark">{t.requirementNote}</span>
              </th>
              <th scope="col" className="px-5 py-4 text-sm font-medium text-green md:px-7">
                {t.providesHeader}
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {t.rows.map(([requirement, provides]) => (
              <tr
                key={requirement}
                className="block border-t border-line bg-paper-2 first:border-t-0 even:bg-paper-3/50 md:table-row md:first:border-t"
              >
                <th
                  scope="row"
                  className="block px-5 pt-4 pb-1 align-top text-sm font-normal text-mute md:table-cell md:px-7 md:pb-4 md:text-[0.9375rem] md:text-ink/80"
                >
                  {requirement}
                </th>
                <td className="block px-5 pb-4 align-top md:table-cell md:px-7 md:pt-4">{provides}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
        <Reveal>
          <h3 className="type-h2 text-[clamp(1.5rem,2.6vw,2rem)]">{t.securityTitle}</h3>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-mute">{t.securityText}</p>
          <ContactButton className={buttonClass("dark", "md", "mt-6")}>{t.securityButton}</ContactButton>
        </Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {t.security.map((item, i) => {
            const Icon = securityIcons[i]
            return (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="rounded-2xl bg-paper-2 p-5 ring-1 ring-line">
                <Icon className="size-5 text-green-deep" aria-hidden />
                <p className="type-h3 mt-4 text-base">{item.title}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-mute">{item.text}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
