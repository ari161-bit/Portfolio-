'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Globe, Code2, Sparkles } from 'lucide-react'

const floatingCards = [
  {
    icon: <Zap size={14} className="text-yellow-400" />,
    label: 'AI Integration',
    sub: 'GPT-4, Claude, Groq',
    delay: 0,
    position: 'top-[15%] right-[8%] md:right-[12%]',
  },
  {
    icon: <Globe size={14} className="text-blue-400" />,
    label: 'Full-Stack',
    sub: 'Next.js + FastAPI',
    delay: 0.3,
    position: 'bottom-[30%] left-[4%] md:left-[8%]',
  },
  {
    icon: <Code2 size={14} className="text-emerald-400" />,
    label: 'Production Ready',
    sub: 'Deployed & Scalable',
    delay: 0.6,
    position: 'top-[60%] right-[5%] md:right-[10%]',
  },
]

const stats = [
  { value: '4+', label: 'Products Shipped' },
  { value: '5+', label: 'Years Building' },
  { value: '∞', label: 'Lines of Code' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Hero glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      {/* Floating cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#0d0d14]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_0_20px_rgba(0,0,0,0.4)] ${card.position}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: 1.2 + card.delay, duration: 0.5 },
            y: {
              delay: 1.2 + card.delay,
              duration: 4 + card.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
            {card.icon}
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-none mb-0.5">{card.label}</p>
            <p className="text-white/40 text-[10px] leading-none">{card.sub}</p>
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-purple-300 font-medium">Available for new projects</span>
          <Sparkles size={12} className="text-purple-400" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="text-white">Building </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 40%, #c4b5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI-Powered
          </span>
          <br />
          <span className="text-white">Products </span>
          <span className="text-white/40">that Scale</span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Full-Stack Engineer & Product Builder. I turn your idea into a
          production-ready SaaS product — fast.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-7 py-3.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-7 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-white rounded-xl font-semibold text-sm border border-white/[0.08] hover:border-purple-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            View My Work
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-white/35 font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] text-white/40 tracking-widest uppercase font-mono">Scroll</span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-purple-500 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}
