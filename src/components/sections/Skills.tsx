'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SectionLabel } from '@/components/ui/Elements'

const skillGroups = [
  {
    title: 'Languages',
    color: '#8b5cf6',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    color: '#3b82f6',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    color: '#10b981',
    skills: ['FastAPI', 'Django', 'Node.js', 'Firebase', 'Supabase'],
  },
  {
    title: 'Databases',
    color: '#f59e0b',
    skills: ['PostgreSQL', 'Firestore', 'Supabase DB'],
  },
  {
    title: 'AI & APIs',
    color: '#ec4899',
    skills: ['OpenAI', 'Anthropic', 'Groq', 'REST APIs'],
  },
  {
    title: 'Cloud & Deploy',
    color: '#06b6d4',
    skills: ['Vercel', 'Netlify', 'Google Cloud'],
  },
  {
    title: 'Tools',
    color: '#a78bfa',
    skills: ['Git', 'GitHub', 'ClickUp', 'VS Code'],
  },
]

const techLogos = [
  { name: 'Next.js', icon: '▲' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Vercel', icon: '▲' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Django', icon: '🎸' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Claude', icon: '✦' },
]

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="skills" className="relative py-24 md:py-32 px-4" ref={ref}>
      {/* Section background glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.6) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Built with the{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              right tools
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            A modern, production-tested stack for shipping fast and scaling confidently.
          </p>
        </motion.div>

        {/* Scrolling tech strip */}
        <div className="relative overflow-hidden mb-16 py-2">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10"
            style={{ background: 'linear-gradient(90deg, #050505, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10"
            style={{ background: 'linear-gradient(-90deg, #050505, transparent)' }} />
          <motion.div
            className="flex gap-3 w-max"
            animate={{ x: [0, -600] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] whitespace-nowrap"
              >
                <span className="text-sm">{tech.icon}</span>
                <span className="text-white/60 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              className="rounded-2xl bg-[#0d0d14] border border-white/[0.06] p-5 group hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: group.color, boxShadow: `0 0 8px ${group.color}` }}
                />
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {group.title}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-default"
                    style={{
                      background: `${group.color}10`,
                      color: group.color,
                      border: `1px solid ${group.color}20`,
                    }}
                    whileHover={{
                      background: `${group.color}20`,
                      scale: 1.05,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.08 + si * 0.05, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
