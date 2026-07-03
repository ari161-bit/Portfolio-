'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.04] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold font-mono">{'<>'}</span>
            </div>
            <span className="text-white/50 text-sm font-medium">Amfahh Jawad</span>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-white/20 text-xs">
              Built with Next.js, TypeScript & Framer Motion
            </p>
            <p className="text-white/15 text-xs mt-0.5">
              © {currentYear} Amfahh Jawad. All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/30 text-xs">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
