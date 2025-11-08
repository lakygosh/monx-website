"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is MonX and how does it work?",
      answer:
        "MonX is a tool for monitoring business services that enables the implementation of Top-Down monitoring in a simple and efficient way. Instead of tracking tiny components, MonX starts with the perspective of the user and gradually descends through systems to find the root cause of problems. It has been validated over 15 years of practice in one of the largest IT systems in Serbia.",
    },
    {
      question: "What is the difference between Top-Down and Bottom-Up monitoring?",
      answer:
        "The Bottom-Up approach tracks tiny system components, which can result in many alarms without clear answers about how users are affected. The Top-Down approach that MonX uses starts by measuring the perspective of users, then descends to lower levels. This way, you get answers to critical questions: 'What does that really mean?', 'Does it affect clients?' and 'Exactly how much does it affect the business?'",
    },
    {
      question: "What are Indicators and Agents?",
      answer:
        "Indicators are arbitrary metrics from the system (e.g., the number of mobile payments per unit of time). Agents are user-defined methods that collect data from virtually any source. Agents run periodically and collect data for indicators, allowing you to track exactly the metrics that are key to your business.",
    },
    {
      question: "What are the AI capabilities in MonX?",
      answer:
        "MonX uses AI to analyze large amounts of interdependent data over longer time periods. AI helps you through anomaly detection (seeing how your system behaves compared to the same time last year/month) and correlation detection (finding relationships between seemingly unrelated metrics). This enables early warnings and incident prevention.",
    },
    {
      question: "Does MonX support Cloud and OnPrem deployment?",
      answer:
        "Yes, MonX is available in both versions. The Cloud version has all components except the Agent service in the cloud, while the OnPrem version hosts all components on your IT system. MonX is designed to minimally burden your system - you won't even notice it.",
    },
    {
      question: "What resources are needed to run MonX?",
      answer:
        "MonX is lightweight and requires the server part with WinServer2022 / Win11 (4 core, 16GB RAM). The approximate growth of the database with 100 indicators calculated 24/7 every 10 minutes is ~1.3 GB per year. Agent services consume minimal resources on machines where they are installed.",
    },
    {
      question: "What are the main benefits of MonX?",
      answer:
        "MonX enables: tracking expected service quality, identifying bottlenecks in near real time, easy assessment of incident impact on users, easy identification of incident root causes, tracking business metrics in real-time, and transparency of IT to business. Everything is tailored to your specific needs.",
    },
    {
      question: "How does MonX integrate with existing systems?",
      answer:
        "MonX supports easy and fast integration with various data sources through Agents that can be configured as SQL queries, PowerShell scripts, SOAP or REST API calls. It also provides integration with customer Ticketing tools and notifications across different channels.",
    },
    {
      question: "What support is available?",
      answer:
        "We offer expert assistance in organizing monitoring, customer support, and help with implementation and configuration. A 2-month FREE TRIAL is available so you can try MonX without obligation.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      <div className="bg-green-500/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-green-500/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-green-500/40 text-green-500 inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">FAQ</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-2xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions about{" "}
          <span className="bg-gradient-to-b from-foreground via-green-300 to-green-500 bg-clip-text text-transparent">
            MonX
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="from-green-500/10 to-green-500/5 rounded-2xl border border-green-500/20 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(34,197,94,0.1)_inset] transition-all duration-300 hover:border-green-500/40 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <Minus className="text-green-500 flex-shrink-0 transition duration-300" size={24} />
                  ) : (
                    <Plus className="text-green-500 flex-shrink-0 transition duration-300" size={24} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
