'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SectionLabel } from '@/components/ui/Elements'
import { ExternalLink, Zap, Shield, TrendingDown, Globe, Sparkles, GitBranch } from 'lucide-react'

const projects = [
  {
    id: 'apex-os',
    name: 'Apex OS',
    tagline: 'AI-Powered Productivity Workspace',
    description:
      'Transform goals, files, and study materials into structured roadmaps, workflows, and actionable plans with AI at its core.',
    status: 'Live',
    statusColor: '#10b981',
    gradient: 'from-purple-600/30 via-purple-500/10 to-transparent',
    accentColor: '#8b5cf6',
    icon: <Sparkles size={20} className="text-purple-400" />,
    tags: ['Next.js', 'AI Planning', 'Firebase', 'Supabase'],
    features: [
      { icon: <Zap size={12} />, label: 'AI Planning Engine' },
      { icon: <Shield size={12} />, label: 'Authentication' },
      { icon: <Globe size={12} />, label: 'Cloud Infrastructure' },
      { icon: <GitBranch size={12} />, label: 'Smart Roadmaps' },
    ],
    mockup: {
      type: 'dashboard',
      lines: [
        { w: '70%', color: '#8b5cf6' },
        { w: '50%', color: '#6d28d9' },
        { w: '85%', color: '#7c3aed' },
        { w: '40%', color: '#8b5cf6' },
      ],
    },
  },
  {
    id: 'aquarius-os',
    name: 'Aquarius OS',
    tagline: 'Modular Automation Ecosystem',
    description:
      'A modular software ecosystem with intelligent automation, secure vault storage, and workflow orchestration built for scale.',
    status: 'In Development',
    statusColor: '#f59e0b',
    gradient: 'from-blue-600/30 via-blue-500/10 to-transparent',
    accentColor: '#3b82f6',
    icon: <Shield size={20} className="text-blue-400" />,
    tags: ['Python', 'FastAPI', 'Automation', 'Cloud'],
    features: [
      { icon: <Shield size={12} />, label: 'Vault Protocol' },
      { icon: <Zap size={12} />, label: 'Resolver Engine' },
      { icon: <GitBranch size={12} />, label: 'Workflow Orchestration' },
      { icon: <Globe size={12} />, label: 'Cloud Architecture' },
    ],
    mockup: {
      type: 'terminal',
      lines: [
        { w: '60%', color: '#3b82f6' },
        { w: '80%', color: '#2563eb' },
        { w: '45%', color: '#3b82f6' },
        { w: '70%', color: '#1d4ed8' },
      ],
    },
  },
  {
    id: 'feekiller',
    name: 'FeeKiller.ai',
    tagline: 'Slash Your Delivery Costs with AI',
    description:
      'Consumer-focused platform that analyzes and reduces food delivery costs through intelligent financial optimization.',
    status: 'Live',
    statusColor: '#10b981',
    gradient: 'from-emerald-600/30 via-emerald-500/10 to-transparent',
    accentColor: '#10b981',
    icon: <TrendingDown size={20} className="text-emerald-400" />,
    tags: ['Next.js', 'AI', 'FinTech', 'APIs'],
    features: [
      { icon: <TrendingDown size={12} />, label: 'Cost Analysis' },
      { icon: <Zap size={12} />, label: 'AI Optimization' },
      { icon: <Globe size={12} />, label: 'API Integrations' },
      { icon: <Shield size={12} />, label: 'Secure Data' },
    ],
    mockup: {
      type: 'analytics',
      lines: [
        { w: '55%', color: '#10b981' },
        { w: '90%', color: '#059669' },
        { w: '35%', color: '#10b981' },
        { w: '75%', color: '#047857' },
      ],
    },
  },
  {
    id: 'afai',
    name: 'AFAI Project',
    tagline: 'Enterprise Full-Stack Platform',
    description:
      'Full-stack platform built with Django, Firebase, and Google Cloud infrastructure — designed for enterprise-grade reliability.',
    status: 'Shipped',
    statusColor: '#a78bfa',
    gradient: 'from-orange-600/20 via-orange-500/10 to-transparent',
    accentColor: '#f97316',
    icon: <Globe size={20} className="text-orange-400" />,
    tags: ['Django', 'Firebase', 'GCP', 'Full-Stack'],
    features: [
      { icon: <Globe size={12} />, label: 'Google Cloud' },
      { icon: <Shield size={12} />, label: 'Firebase Auth' },
      { icon: <GitBranch size={12} />, label: 'Django Backend' },
      { icon: <Zap size={12} />, label: 'Cloud Functions' },
    ],
    mockup: {
      type: 'api',
      lines: [
        { w: '65%', color: '#f97316' },
        { w: '45%', color: '#ea580c' },
        { w: '80%', color: '#f97316' },
        { w: '55%', color: '#c2410c' },
      ],
    },
  },
]

function ProjectCard({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) {
  const isFeatured = index === 0

  if (isFeatured) {
    return (
      <motion.div
        className="col-span-1 md:col-span-2 group relative rounded-2xl bg-[#0d0d14] border border-white/[0.06] overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.2),0_20px_60px_rgba(139,92,246,0.1)]"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />

        {/* Glow orb */}
        <div
          className="absolute top-[-20px] left-[-20px] w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{ background: project.accentColor }}
        />

        <div className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {project.icon}
                </div>
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${project.statusColor}20`,
                    color: project.statusColor,
                    border: `1px solid ${project.statusColor}30`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.statusColor }} />
                  {project.status}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: project.accentColor }}>{project.tagline}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-md">{project.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/40">
                    <span style={{ color: project.accentColor }}>{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium"
                    style={{
                      background: `${project.accentColor}10`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Mockup */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="rounded-xl bg-[#070710] border border-white/[0.06] p-4 font-mono text-xs">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <div className="flex-1 text-center text-white/20 text-[10px]">{project.id}.app</div>
                </div>
                {/* Mock content lines */}
                <div className="space-y-2.5">
                  {project.mockup.lines.map((line, i) => (
                    <motion.div
                      key={i}
                      className="h-2 rounded-full"
                      style={{ width: line.w, background: `linear-gradient(90deg, ${line.color}60, ${line.color}20)` }}
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: line.w } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    />
                  ))}
                </div>
                {/* Simulated data */}
                <div className="mt-4 pt-4 border-t border-white/[0.04] space-y-1.5">
                  {['status: active', 'env: production', 'uptime: 99.9%'].map((line, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-white/20">›</span>
                      <span style={{ color: `${project.accentColor}80` }}>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="group relative rounded-2xl bg-[#0d0d14] border border-white/[0.06] overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />

      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center">
            {project.icon}
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{
              background: `${project.statusColor}20`,
              color: project.statusColor,
              border: `1px solid ${project.statusColor}30`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.statusColor }} />
            {project.status}
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
        <p className="text-xs font-medium mb-3" style={{ color: project.accentColor }}>{project.tagline}</p>
        <p className="text-white/45 text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium"
              style={{
                background: `${project.accentColor}10`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section id="projects" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Featured Work</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Products I&apos;ve{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              shipped
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            Real products, real problems solved. Each one built from scratch and deployed to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
