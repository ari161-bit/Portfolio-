'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SectionLabel } from '@/components/ui/Elements'
import { Send, Github, Linkedin, Twitter, Mail, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const socialLinks = [
  { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/ari161-bit', handle: '@ari161-bit' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/amfahh-jawad', handle: 'Amfahh Jawad' },
  { icon: <Twitter size={18} />, label: 'Twitter/X', href: 'https://github.com/ari161-bit', handle: '@ari161-bit' },
  { icon: <Mail size={18} />, label: 'Email', href: 'mailto:amfahhjd161@gmail.com', handle: 'amfahhjd161@gmail.com' },
]

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate send
    setTimeout(() => setSent(true), 500)
  }

  const inputClass = (field: string) => `
    w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/25
    bg-white/[0.03] border transition-all duration-200 outline-none
    ${focused === field
      ? 'border-purple-500/50 bg-purple-500/[0.04] shadow-[0_0_0_3px_rgba(139,92,246,0.08)]'
      : 'border-white/[0.06] hover:border-white/10'
    }
  `

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4" ref={ref}>
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Hero CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Contact</SectionLabel>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={18} className="text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Need an MVP built{' '}
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                fast?
              </span>
            </h2>
            <Sparkles size={18} className="text-purple-400" />
          </div>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Let&apos;s turn your idea into a production-ready product. I&apos;m available for new projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* What I can help with */}
            <div className="rounded-2xl bg-[#0d0d14] border border-white/[0.06] p-6">
              <h3 className="text-sm font-semibold text-white mb-4">What I help with</h3>
              <div className="space-y-2.5">
                {[
                  'AI-powered SaaS MVPs',
                  'Full-stack web applications',
                  'Custom automation systems',
                  'API integrations',
                  'Admin dashboards',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={13} className="text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-white/55">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl bg-[#0d0d14] border border-white/[0.06] p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Connect with me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:text-purple-400 transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/60 group-hover:text-white transition-colors">{social.label}</p>
                      <p className="text-[10px] text-white/25">{social.handle}</p>
                    </div>
                    <ArrowRight size={12} className="ml-auto text-white/20 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="rounded-2xl bg-[#0d0d14] border border-purple-500/20 p-6 md:p-8 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }} />

              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-white/45 text-sm">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5 ml-0.5">Your Name</label>
                    <input
                      type="text"
                      placeholder="Alex Johnson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('name')}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5 ml-0.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('email')}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5 ml-0.5">Tell me about your project</label>
                    <textarea
                      rows={5}
                      placeholder="I need an AI-powered SaaS MVP built. Here's what it should do..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={`${inputClass('message')} resize-none`}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send size={15} />
                    Send Message
                  </button>

                  <p className="text-center text-[11px] text-white/20">
                    Usually responds within 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

