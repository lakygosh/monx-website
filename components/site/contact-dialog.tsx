"use client"

import type React from "react"
import { createContext, useCallback, useContext, useId, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowRight, Check, X } from "lucide-react"
import { buttonClass } from "@/components/ui/primitives"
import { Logo } from "@/components/ui/logo"
import type { Dict } from "@/lib/i18n/en"
import { cn } from "@/lib/utils"

const ContactContext = createContext<() => void>(() => {})

export function ContactProvider({ t, children }: { t: Dict["contact"]; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openDialog = useCallback(() => setOpen(true), [])

  return (
    <ContactContext.Provider value={openDialog}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm" />
          <Dialog.Content
            className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-[0.97] data-[state=closed]:zoom-out-[0.97] fixed top-1/2 left-1/2 z-[101] max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-ink text-white shadow-2xl ring-1 ring-white/10 focus:outline-none"
          >
            <ContactForm t={t} onDone={() => setOpen(false)} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ContactContext.Provider>
  )
}

/** Any button that opens the demo form. */
export function ContactButton({
  children,
  className,
  ...props
}: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">) {
  const open = useContext(ContactContext)
  return (
    <button type="button" onClick={open} className={className} {...props}>
      {children}
    </button>
  )
}

type Status = "idle" | "sending" | "sent" | "error"

function ContactForm({ t, onDone }: { t: Dict["contact"]; onDone: () => void }) {
  const id = useId()
  const [status, setStatus] = useState<Status>("idle")

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    const data = Object.fromEntries(new FormData(event.currentTarget))
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? "sent" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(60%_100%_at_70%_0%,rgb(34_197_94/0.22),transparent)]"
      />
      <Dialog.Close
        className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full text-mute-dark transition-colors hover:bg-white/10 hover:text-white"
        aria-label={t.close}
      >
        <X className="size-4" />
      </Dialog.Close>

      <div className="relative px-6 pt-7 pb-6 sm:px-8 sm:pt-8">
        <Logo className="h-5" />
        <Dialog.Title className="mt-6 font-display text-2xl font-semibold tracking-tight">{t.title}</Dialog.Title>
        <Dialog.Description className="mt-2 text-[0.9375rem] leading-relaxed text-mute-dark">
          {t.description}
        </Dialog.Description>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl bg-white/[0.04] p-6 text-center ring-1 ring-white/10">
            <span className="mx-auto grid size-11 place-items-center rounded-full bg-green/15 text-green">
              <Check className="size-5" />
            </span>
            <p className="mt-4 font-display text-lg font-semibold">{t.sentTitle}</p>
            <p className="mt-1 text-sm text-mute-dark">{t.sentText}</p>
            <button type="button" onClick={onDone} className={buttonClass("outline-dark", "sm", "mt-6")}>
              {t.close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 space-y-4">
            <Field id={`${id}-name`} name="name" label={t.name} optionalLabel={t.optional} autoComplete="name" required />
            <Field id={`${id}-email`} name="email" label={t.email} optionalLabel={t.optional} type="email" autoComplete="email" required />
            <Field id={`${id}-company`} name="company" label={t.company} optionalLabel={t.optional} autoComplete="organization" />
            <Field
              id={`${id}-message`}
              name="message"
              label={t.message}
              optionalLabel={t.optional}
              placeholder={t.messagePlaceholder}
              multiline
            />
            {/* Bots fill every field; people never see this one. */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            {status === "error" ? (
              <p role="alert" className="rounded-xl bg-red/10 px-4 py-3 text-sm text-[#fca5a5] ring-1 ring-red/20">
                {t.error}{" "}
                <a className="underline underline-offset-2" href="mailto:lazar.gosic@mon-x.app">
                  lazar.gosic@mon-x.app
                </a>
                .
              </p>
            ) : null}

            <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "md", "w-full")}>
              {status === "sending" ? t.sending : t.submit}
              {status === "sending" ? null : <ArrowRight className="size-4" />}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  optionalLabel,
  multiline,
  className,
  ...props
}: { id: string; label: string; optionalLabel: string; multiline?: boolean; className?: string } & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const input = cn(
    "w-full rounded-xl bg-white/[0.04] px-3.5 text-[0.9375rem] text-white ring-1 ring-white/10 transition-shadow ring-inset placeholder:text-mute-dark/60 focus:ring-2 focus:ring-green focus:outline-none",
    multiline ? "min-h-24 resize-none py-3" : "h-11",
    className,
  )
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.8125rem] font-medium text-white/80">
        {label}
        {props.required ? null : <span className="font-normal text-mute-dark"> {optionalLabel}</span>}
      </label>
      {multiline ? <textarea id={id} rows={3} className={input} {...props} /> : <input id={id} className={input} {...props} />}
    </div>
  )
}
