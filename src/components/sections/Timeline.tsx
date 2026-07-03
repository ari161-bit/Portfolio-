'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SectionLabel } from '@/components/ui/Elements'
import { Code2, GraduationCap, Rocket, Brain, Zap } from 'lucide-react'

const timelineItems = [
  {
    year: '2024–Present',
    title: 'AI SaaS Product Builder',
    org: 'Independent / Freelance',
    type: 'work',
    icon: <Brain size={14} className="text-purple-400" />,
    color: '#8b5cf6',
    description: 'Building and shipping AI-powered SaaS products including Apex OS and FeeKiller.ai. Integrating LLMs (GPT-4, Claude, Groq) into production applications.',
    tags: ['AI Integration', 'SaaS', 'Next.js', 'FastAPI'],
  },
  {
    year: '2023',
    title: 'Aquarius OS — Automation Ecosystem',
    org: 'Solo Project',
    type: 'project',
    icon: <Zap size={14} className="text-blue-400" />,
    color: '#3b82f6',
    description: 'Architected a modular software ecosystem with Vault Protocol, Resolver Engine, and workflow orchestration. Focused on cloud-native automation.',
    tags: ['Python', 'Cloud', 'Automation', 'Modular Architecture'],
  },
  {
    year: '2022',
    title: 'AFAI Platform — Full-Stack',
    org: 'Django + Firebase + GCP',
    type: 'project',
    icon: <Rocket size={14} className="text-emerald-400" />,
    color: '#10b981',
    description: 'Full-stack platform built using Django, Firebase, and Google Cloud Platform. Handled authentication, database design, cloud functions, and deployment pipeline.',
    tags: ['Django', 'Firebase', 'GCP', 'Full-Stack'],
  },
  {
    year: '2021–2024',
    title: 'Diploma in Software Engineering',
    org: 'Aptech Institute',
    type: 'education',
    icon: <GraduationCap size={14} className="text-orange-400" />,
    color: '#f97316',
    description: '3-year comprehensive program covering software engineering fundamentals, algorithms, data structures, web development, and software architecture.',
    tags: ['3-Year Program', 'Software Engineering', 'Certified'],
  },
  {
    year: '2020–Present',
    title: 'Self-Taught Full-Stack Development',
    org: 'Continuous Learning',
    type: 'work',
    icon: <Code2 size={14} className="text-cyan-400" />,
    color: '#06b6d4',
    description: 'Continuously expanded skills across the modern web stack — Python, JavaScript, TypeScript, React, Next.js, cloud platforms, and AI/ML integrations.',
    tags: ['Python', 'JavaScript', 'React', 'Cloud'],
  },
]

export default function Timeline() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Journey</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience &{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              milestones
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            A track record of building, learning, and shipping continuously.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent" />

          <div className="space-y-8">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-5 z-10">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#050505]"
                    style={{ background: `${item.color}25`, borderColor: item.color + '40' }}
                  >
                    {item.icon}
                  </div>
                  {/* Glow dot */}
                  <div
                    className="absolute inset-0 rounded-full opacity-50 blur-md"
                    style={{ background: item.color }}
                  />
                </div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 flex-1 ${i % 2 === 0 ? 'md:pr-10 md:mr-1/2' : 'md:pl-10 md:ml-[50%]'}`}
                >
                  <div className="rounded-2xl bg-[#0d0d14] border border-white/[0.06] p-5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span
                          className="text-[10px] font-mono font-semibold tracking-widest uppercase"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </span>
                        <h3 className="text-base font-bold text-white mt-0.5">{item.title}</h3>
                        <p className="text-xs text-white/35">{item.org}</p>
                      </div>
                      <span
                        className="px-2 py-1 rounded-full text-[10px] font-medium flex-shrink-0"
                        style={{
                          background: `${item.color}15`,
                          color: item.color,
                          border: `1px solid ${item.color}25`,
                        }}
                      >
                        {item.type === 'education' ? '🎓 Education' : item.type === 'project' ? '🚀 Project' : '💼 Work'}
                      </span>
                    </div>

                    <p className="text-sm text-white/45 leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                          style={{
                            background: `${item.color}10`,
                            color: item.color,
                            border: `1px solid ${item.color}20`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
