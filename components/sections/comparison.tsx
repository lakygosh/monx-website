import { SectionHeader } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

// Compares categories, not vendors: the named tools are only examples of each kind.
export function Comparison({ t }: { t: Dict["comparison"] }) {
  return (
    <section aria-labelledby="compare-title" className="container-page py-16 md:py-24">
      <SectionHeader eyebrow={t.eyebrow} titleId="compare-title" title={t.title} lead={t.lead} />

      <p className="mt-10 mb-3 font-mono text-[0.6875rem] text-mute-2 md:hidden">{t.swipeHint}</p>
      <Reveal className="overflow-x-auto rounded-3xl ring-1 ring-line md:mt-12">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <caption className="sr-only">{t.caption}</caption>
          <thead className="bg-ink text-white">
            <tr>
              <th scope="col" className="sticky left-0 w-[18%] bg-ink px-5 py-4 font-medium">
                <span className="sr-only">{t.aspect}</span>
              </th>
              <th scope="col" className="w-[28%] px-5 py-4 align-top font-display text-base font-semibold text-green">
                MonX
              </th>
              {t.columns.map((col) => (
                <th key={col.name} scope="col" className="w-[27%] px-5 py-4 align-top font-medium">
                  {col.name}
                  <span className="mt-0.5 block font-mono text-[0.6875rem] font-normal text-mute-dark">{col.examples}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map(([aspect, monx, ...others]) => (
              <tr key={aspect} className="border-t border-line bg-paper-2 even:bg-[#f0f3ed]">
                <th scope="row" className="sticky left-0 bg-inherit px-5 py-3.5 align-top font-normal text-mute">
                  {aspect}
                </th>
                <td className="bg-green-wash/50 px-5 py-3.5 align-top font-medium text-ink">{monx}</td>
                {others.map((cell, i) => (
                  <td key={i} className="px-5 py-3.5 align-top text-ink/75">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  )
}
