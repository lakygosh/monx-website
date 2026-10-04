import { Comparison } from "@/components/sections/comparison"
import { Compliance } from "@/components/sections/compliance"
import { Cost } from "@/components/sections/cost"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pilot } from "@/components/sections/pilot"
import { Problem } from "@/components/sections/problem"
import { Product } from "@/components/sections/product"
import { Statement } from "@/components/sections/statement"
import { UseCases } from "@/components/sections/use-cases"
import { VideoSection } from "@/components/sections/video"
import { Why } from "@/components/sections/why"
import { ContactProvider } from "@/components/site/contact-dialog"
import { Footer } from "@/components/site/footer"
import { AnnouncementBar, Header } from "@/components/site/header"
import type { Dict } from "@/lib/i18n/en"

/** The whole landing page, in the language of `t`. */
export function HomePage({ t }: { t: Dict }) {
  const url = t.locale === "sr" ? "https://www.mon-x.app/sr" : "https://www.mon-x.app"
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "MonX",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows Server",
      inLanguage: t.htmlLang,
      description: t.structuredData.description,
      url,
      publisher: {
        "@type": "Organization",
        name: "MonX",
        url: "https://www.mon-x.app",
        address: { "@type": "PostalAddress", addressLocality: "Belgrade", addressCountry: "RS" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: t.htmlLang,
      mainEntity: t.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ]

  return (
    <ContactProvider t={t.contact}>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t.skipToContent}
      </a>
      <AnnouncementBar t={t.announcement} />
      <Header t={{ nav: t.nav, languages: t.languages, locale: t.locale }} />
      <main id="main">
        <Hero t={t.hero} />
        <VideoSection t={t.video} />
        <Problem t={t.problem} />
        <Cost t={t.cost} />
        <HowItWorks t={t.how} />
        <Product t={t.product} />
        <UseCases t={t.useCases} />
        <Statement t={t.statement} />
        <Compliance t={t.compliance} />
        <Comparison t={t.comparison} />
        <Why t={t.why} />
        <Pilot t={t.pilot} />
        <Faq t={t.faq} />
        <FinalCta t={t.finalCta} />
      </main>
      <Footer t={t} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </ContactProvider>
  )
}
