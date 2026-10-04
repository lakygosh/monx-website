import { Logo } from "@/components/ui/logo"
import { buttonClass } from "@/components/ui/primitives"

export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-ink px-6 text-white">
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] -z-10 h-[560px] w-[760px] rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.22),transparent)] blur-2xl"
      />
      <div className="max-w-md text-center">
        <Logo className="mx-auto h-7" />
        <p className="type-eyebrow mt-10 text-green">404</p>
        <h1 className="type-h2 mt-3">This page isn&apos;t here.</h1>
        <p className="mt-3 text-mute-dark" lang="sr-Latn">
          Ova stranica ne postoji.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/" className={buttonClass("primary")}>
            Go to mon-x.app
          </a>
          <a href="/sr" lang="sr-Latn" className={buttonClass("outline-dark")}>
            Na srpskom
          </a>
        </div>
      </div>
    </main>
  )
}
