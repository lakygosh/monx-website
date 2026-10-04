"use client"

import type React from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { motion, useReducedMotion } from "framer-motion"

export type ProductTab = { id: string; label: string; mock: React.ReactNode; info: React.ReactNode }

export function ProductTabs({ tabs, label }: { tabs: ProductTab[]; label: string }) {
  const reduced = useReducedMotion()
  return (
    <Tabs.Root defaultValue={tabs[0].id} className="mt-12">
      <Tabs.List
        aria-label={label}
        className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto border-y border-white/[0.07] px-5 md:mx-0 md:rounded-full md:border md:p-1"
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.id}
            value={tab.id}
            className="relative shrink-0 rounded-full px-4 py-3 text-sm whitespace-nowrap text-mute-dark transition-colors hover:text-white data-[state=active]:bg-white data-[state=active]:text-ink md:flex-1 md:py-2.5"
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Content key={tab.id} value={tab.id} className="mt-6 focus-visible:outline-none md:mt-8">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[1.6fr_1fr] lg:gap-5"
          >
            <div className="min-w-0">{tab.mock}</div>
            {tab.info}
          </motion.div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
