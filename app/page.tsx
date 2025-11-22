"use client"
import { useState, useEffect } from "react"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { TestimonialsSection } from "@/components/testimonials"
import { NewReleasePromo } from "@/components/new-release-promo"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import { TopDownMonitoring } from "@/components/top-down-monitoring"
import { VisionX } from "@/components/vision-x"
import { UseCaseSection } from "@/components/usecases"
import DemoContactForm from "@/components/demo-contact-form"
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120 // Account for sticky header height + margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(34, 197, 94, 0.08), transparent 60%), #0a0a0a",
        }}
      />

            {/* Social Sticky Bar – desktop */}
            <div className="fixed right-6 top-1/2 z-[9998] -translate-y-1/2 hidden md:flex flex-col gap-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/mon-x"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MonX LinkedIn"
          className="flex h-15 w-15 items-center justify-center rounded-full bg-background/80 border border-border/60 text-muted-foreground hover:text-emerald-400 hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin size={18} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/OVDE_STAVI_SVOJ_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MonX Instagram"
          className="flex h-15 w-15 items-center justify-center rounded-full bg-background/80 border border-border/60 text-muted-foreground hover:text-emerald-400 hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
        >
          <span className="sr-only">Instagram</span>
          <FaInstagram size={18} />
        </a>

        {/* Email */}
        <a
          href="mailto:lazar.gosic@mon-x.app"
          aria-label="Send email to lazar.gosic@mon-x.app"
          className="flex h-15 w-15 items-center justify-center rounded-full bg-background/80 border border-border/60 text-muted-foreground hover:text-emerald-400 hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
        >
          <span className="sr-only">Email</span>
          <FaEnvelope size={18} />
        </a>
      </div>

      {/* Social Sticky Bar – mobile */}
      <div className="fixed bottom-4 right-4 z-[9998] flex md:hidden flex-row gap-3">
        <div className="flex items-center gap-2 rounded-full bg-background/90 border border-border/60 px-3 py-2 shadow-lg backdrop-blur">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/mon-x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MonX LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/OVDE_STAVI_SVOJ_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MonX Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-emerald-400 transition-colors"
          >
            <FaInstagram size={18} />
          </a>

          {/* Email */}
          <a
            href="mailto:lazar.gosic@mon-x.app"
            aria-label="Send email to lazar.gosic@mon-x.app"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-emerald-400 transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>


      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="/"
        >
          <img src="/monx-logo.png" alt="MonX" className="h-6 w-auto" draggable={false} />
        
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("features")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Features</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('[data-section="topdown"]')
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Top-Down</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('[data-section="visionx"]')
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">VisionX</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('[data-section="usecases"]')
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Use Cases</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("faq")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">FAQ</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            onClick={() => setIsDemoFormOpen(true)}
            href="#"
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-primary text-primary-foreground shadow-[0px_2px_0px_0px_rgba(0,0,0,0.3)_inset] px-4 py-2 text-sm hover:bg-primary/90"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <a className="flex items-center justify-center gap-2" href="/">
          <img src="/monx-logo.png" alt="MonX" className="h-6 w-auto" draggable={false} />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Features
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  const element = document.querySelector('[data-section="topdown"]')
                  if (element) {
                    setTimeout(() => {
                      const headerOffset = 120
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }, 100)
                  }
                }}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Top-Down
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  const element = document.querySelector('[data-section="visionx"]')
                  if (element) {
                    setTimeout(() => {
                      const headerOffset = 120
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }, 100)
                  }
                }}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                VisionX
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setTimeout(() => {
                    const element = document.querySelector('[data-section="usecases"]')
                    if (element) {
                      const headerOffset = 120
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }, 100)
                }}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Use Cases
              </button>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                FAQ
              </button>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <a
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsDemoFormOpen(true)
                  }}
                  href="#"
                  className="px-4 py-3 text-lg font-bold text-center bg-primary text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Top-Down Monitoring Section */}
      <div id="top-down-monitoring">
      <TopDownMonitoring data-section="topdown" />
      </div>
      {/* VisionX AI Section */}
      <VisionX data-section="visionx" />

      {/* Pricing Section */}
      {/* <div id="pricing">
        <PricingSection />
      </div> */}

      {/* Use Cases Section */}
      <UseCaseSection />

      {/* Testimonials Section */}
      {/* <div id="testimonials">
        <TestimonialsSection />
      </div> */}

      <NewReleasePromo onBookDemo={() => setIsDemoFormOpen(true)} />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* DemoContactForm Modal */}
      <DemoContactForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  )
}
