import { FaLinkedin } from "react-icons/fa"
import { LanguageSwitch } from "@/components/site/header"
import { Logo } from "@/components/ui/logo"
import type { Dict } from "@/lib/i18n/en"

export function Footer({ t }: { t: Dict }) {
  return (
    <footer className="container-page pt-16 pb-10 md:pt-20">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo tone="light" className="h-7" />
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-mute">{t.footer.about}</p>
          <LanguageSwitch t={t.languages} locale={t.locale} className="mt-6 w-fit" />
        </div>

        <nav aria-label={t.footer.onThisPage}>
          <p className="type-eyebrow text-mute-2">{t.footer.onThisPage}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.9375rem] md:grid-cols-1">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink/75 transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="type-eyebrow text-mute-2">{t.footer.contact}</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a href="mailto:lazar.gosic@mon-x.app" className="text-ink/75 transition-colors hover:text-ink">
                lazar.gosic@mon-x.app
              </a>
            </li>
            <li>
              <a href="mailto:dejan.gosic@mon-x.app" className="text-ink/75 transition-colors hover:text-ink">
                dejan.gosic@mon-x.app
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/mon-x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink/75 transition-colors hover:text-ink"
              >
                <FaLinkedin className="size-4" aria-hidden />
                LinkedIn
              </a>
            </li>
            <li className="text-mute">{t.footer.city}</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[0.8125rem] text-mute-2 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} MonX</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  )
}
