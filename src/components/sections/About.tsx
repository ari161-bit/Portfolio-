'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation'
import { SectionLabel } from '@/components/ui/Elements'
import { Rocket, Brain, Code2, Layers } from 'lucide-react'

const metrics = [
  {
    icon: <Rocket size={18} className="text-purple-400" />,
    value: 4,
    suffix: '+',
    label: 'Products Shipped',
    desc: 'From idea to production',
    color: 'from-purple-500/20 to-purple-600/5',
  },
  {
    icon: <Brain size={18} className="text-blue-400" />,
    value: 3,
    suffix: '+',
    label: 'AI Systems Built',
    desc: 'GPT, Claude, Groq integrations',
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    icon: <Code2 size={18} className="text-emerald-400" />,
    value: 5,
    suffix: '+',
    label: 'Years Building',
    desc: 'Full-stack experience',
    color: 'from-emerald-500/20 to-emerald-600/5',
  },
  {
    icon: <Layers size={18} className="text-orange-400" />,
    value: 10,
    suffix: '+',
    label: 'Tech Stack Tools',
    desc: 'Modern ecosystem mastery',
    color: 'from-orange-500/20 to-orange-600/5',
  },
]

function MetricCard({
  metric,
  index,
  isVisible,
}: {
  metric: (typeof metrics)[0]
  index: number
  isVisible: boolean
}) {
  const count = useCountUp(metric.value, 1800, isVisible)

  return (
    <motion.div
      className="relative rounded-2xl bg-[#0d0d14] border border-white/[0.06] p-6 overflow-hidden group hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.2),0_8px_40px_rgba(139,92,246,0.08)]"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {metric.icon}
        </div>
        <div className="text-3xl font-bold text-white mb-1">
          {count}{metric.suffix}
        </div>
        <div className="text-sm font-semibold text-white/80 mb-1">{metric.label}</div>
        <div className="text-xs text-white/35">{metric.desc}</div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="about" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Engineer with a{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              founder&apos;s mindset
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            I don&apos;t just write code — I build products. With deep experience in AI integration,
            full-stack development, and cloud infrastructure, I&apos;ve shipped production-ready
            systems that solve real problems.
          </p>
        </motion.div>

        {/* Metric cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, i) => (
            <MetricCard key={i} metric={metric} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Bio section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">From concept to deployment</h3>
            <p className="text-white/50 leading-relaxed mb-4">
              I&apos;m a Full-Stack Software Engineer and Product Builder with experience developing
              AI-powered applications, scalable SaaS platforms, cloud infrastructure, and automation
              systems.
            </p>
            <p className="text-white/50 leading-relaxed">
              Skilled in Python, JavaScript, Next.js, Django, FastAPI, Firebase, Supabase, and
              modern deployment ecosystems — I bring both technical depth and product intuition to
              every project.
            </p>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { label: 'Python / JavaScript / TypeScript', pct: 90 },
              { label: 'AI & LLM Integration', pct: 85 },
              { label: 'Next.js / React Frontend', pct: 88 },
              { label: 'FastAPI / Django Backend', pct: 82 },
              { label: 'Cloud & DevOps', pct: 78 },
            ].map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white/60">{skill.label}</span>
                  <span className="text-purple-400 font-mono">{skill.pct}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7c3aed, #8b5cf6)' }}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.pct}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
