"use client"

import Image from "next/image"

interface NewReleasePromoProps {
  onBookDemo?: () => void
}

export function NewReleasePromo({ onBookDemo }: NewReleasePromoProps) {
  return (
    <section className="mt-12 w-full">
      <div className="mx-auto max-w-4xl rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm">
        <div className="relative mx-auto h-[450px] max-w-4xl overflow-hidden rounded-[38px] border-2 border-green-500/50 bg-black/40 p-2 shadow-sm backdrop-blur-xl">
          <div
            className="absolute inset-0 z-0 rounded-[36px]"
            style={{
              background: "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(6, 182, 212, 0.03) 100%)",
              backdropFilter: "blur(10px)",
            }}
          />

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-0 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(34, 197, 94, 0.15), transparent 70%)",
            }}
          />

          {/* Film grain overlay */}
          <div
            className="absolute inset-0 z-0 opacity-[0.02] rounded-[36px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent z-5" />

          <div className="relative z-10">
            <div className="flex justify-center pt-6 pb-4">
              <Image src="/monx-logo.png" alt="MonX Logo" width={80} height={80} className="drop-shadow-lg" />
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Book a Demo</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Discover how MonX can transform your system monitoring with Top-Down approach and AI-powered insights.
              </p>

              <div className="flex items-center justify-center">
                <button onClick={onBookDemo} className="cursor-pointer">
                  <div className="group border border-green-500/50 bg-black/40 backdrop-blur-sm flex h-[64px] cursor-pointer items-center gap-2 rounded-full p-[11px] mt-10 hover:border-green-500 hover:bg-black/60 transition-all">
                    <div className="border border-green-500 bg-green-500/10 flex h-[43px] items-center justify-center rounded-full">
                      <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calendar animate-spin"
                          aria-hidden="true"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="20" height="18" x="2" y="4" rx="2"></rect>
                          <path d="M2 10h20"></path>
                        </svg>
                        Book a Demo
                      </p>
                    </div>
                    <div className="border-2 border-green-500/50 flex size-[26px] items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2 group-hover:border-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-45 text-green-400"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Stroked text wordmark */}
            <h1
              className="absolute inset-x-0 mt-[180px] text-center text-[80px] font-extrabold text-transparent sm:mt-[80px] sm:text-[140px] pointer-events-none"
              style={{
                WebkitTextStroke: "1.5px rgba(34, 197, 94, 0.5)",
                color: "transparent",
              }}
              aria-hidden="true"
            >
              MonX
            </h1>
            <h1
              className="absolute inset-x-0 mt-[180px] text-center text-[80px] font-extrabold text-green-500/20 sm:mt-[80px] sm:text-[140px] pointer-events-none"
              aria-hidden="true"
            >
              MonX
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
