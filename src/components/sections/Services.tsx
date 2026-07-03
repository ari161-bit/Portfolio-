'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SectionLabel } from '@/components/ui/Elements'
import { Brain, LayoutDashboard, Workflow, Plug, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: <Brain size={22} className="text-purple-400" />,
    title: 'AI SaaS MVP Development',
    description: 'Go from idea to deployed AI-powered product in weeks, not months. I build the full stack — frontend, backend, AI integrations, and cloud infrastructure.',
    color: '#8b5cf6',
    features: ['LLM Integration (GPT, Claude, Groq)', 'Custom AI Workflows', 'Scalable SaaS Architecture', 'Auth & Billing Ready'],
    highlight: true,
  },
  {
    icon: <LayoutDashboard size={22} className="text-blue-400" />,
    title: 'Custom Dashboards & Admin Panels',
    description: 'Clean, data-rich interfaces your team will actually want to use. Real-time updates, powerful filters, and pixel-perfect design.',
    color: '#3b82f6',
    features: ['Real-time Data Visualization', 'Role-based Access Control', 'Export & Reporting', 'Mobile Responsive'],
    highlight: false,
  },
  {
    icon: <Workflow size={22} className="text-emerald-400" />,
    title: 'Automation Systems',
    description: 'Eliminate repetitive work with intelligent automation. From simple scripts to complex multi-step workflows triggered by real-world events.',
    color: '#10b981',
    features: ['Workflow Automation', 'Scheduled Jobs & Cron', 'Event-driven Architecture', 'Error Handling & Retries'],
    highlight: false,
  },
  {
    icon: <Plug size={22} className="text-orange-400" />,
    title: 'API Integrations',
    description: 'Connect your systems and third-party services seamlessly. I\'ve integrated dozens of APIs and know how to handle edge cases, rate limits, and failures gracefully.',
    color: '#f97316',
    features: ['Third-party API Connections', 'Webhook Implementation', 'Data Transformation', 'OAuth & API Security'],
    highlight: false,
  },
  {
    icon: <Globe size={22} className="text-cyan-400" />,
    title: 'Full-Stack Web Applications',
    description: 'End-to-end web apps built for performance, reliability, and growth. Modern stack, clean code, and production deployments from day one.',
    color: '#06b6d4',
    features: ['Next.js + TypeScript Frontend', 'FastAPI / Django Backend', 'PostgreSQL / Firebase DB', 'Vercel / GCP Deployment'],
    highlight: false,
  },
]

const reasons = [
  'Product-focused engineering — I think like a founder',
  'Fast execution — MVPs in days, not months',
  'Modern UI/UX — designs that convert',
  'AI-first approach — built for the future',
  'Production-ready deployments from day one',
  'Clean, maintainable code you can build on',
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section id="services" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What I{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              build
            </span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-base">
            From concept to production — full-stack engineering for startups and SaaS operators.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`group relative rounded-2xl bg-[#0d0d14] border overflow-hidden transition-all duration-300 hover:-translate-y-1 p-6 ${
                service.highlight
                  ? 'border-purple-500/30 shadow-[0_0_0_1px_rgba(139,92,246,0.15),0_8px_40px_rgba(139,92,246,0.08)] md:col-span-2'
                  : 'border-white/[0.06] hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
              }`}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {service.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }} />
              )}

              <div className={`${service.highlight ? 'md:flex md:gap-10 items-start' : ''}`}>
                <div className={`${service.highlight ? 'md:flex-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}>
                      {service.icon}
                    </div>
                    {service.highlight && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide"
                        style={{ background: `${service.color}20`, color: service.color, border: `1px solid ${service.color}30` }}>
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{service.description}</p>
                </div>

                <div className={`${service.highlight ? 'md:flex-1 md:mt-2' : ''}`}>
                  <div className="space-y-2">
                    {service.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} style={{ color: service.color }} className="flex-shrink-0" />
                        <span className="text-xs text-white/50">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Work With Me */}
        <motion.div
          className="rounded-2xl bg-[#0d0d14] border border-purple-500/20 p-8 md:p-10 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Top shimmer */}
          <div className="absolute top-0 left-0 right-0 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }} />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionLabel>Why Work With Me</SectionLabel>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Engineering meets{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  product thinking
                </span>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Most engineers write code. I build products. There&apos;s a difference — and it shows
                in every decision from architecture to UI to deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                >
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>
                  <span className="text-sm text-white/60">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
