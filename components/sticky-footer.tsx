"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface StickyFooterProps {
  onBookDemo: () => void
}

export default function StickyFooter({ onBookDemo }: StickyFooterProps) {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full min-h-48 flex justify-center items-center px-4 py-8"
          style={{
            background: "linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(6, 182, 212, 0.08))",
            backdropFilter: "blur(20px)",
            borderTop: "2px solid rgba(34, 197, 94, 0.3)",
            borderLeft: "1px solid rgba(34, 197, 94, 0.2)",
            borderRight: "1px solid rgba(6, 182, 212, 0.2)",
          }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-2xl text-center">
            <div className="absolute -top-1 left-0 w-32 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full blur-md"></div>
            <div className="absolute -top-1 right-0 w-32 h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full blur-md"></div>

            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to transform your monitoring?</h2>
              <p className="text-white/70 max-w-xl text-lg">
                Experience the MonX Top-Down approach to prevent incidents before they impact your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={onBookDemo}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors shadow-lg shadow-green-500/30"
                >
                  Book a Demo
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(34, 197, 94, 0.5)",
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/5 text-white font-bold rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
