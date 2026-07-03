'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  icon,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary: 'bg-purple-500 hover:bg-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500/40 hover:-translate-y-0.5',
    ghost: 'text-white/60 hover:text-white hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}

interface BadgeProps {
  children: ReactNode
  variant?: 'purple' | 'white' | 'green'
  className?: string
}

export function Badge({ children, variant = 'purple', className }: BadgeProps) {
  const variants = {
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    white: 'bg-white/5 text-white/60 border-white/10',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-4', className)}>
      <div className="h-[1px] w-8 bg-purple-500/60" />
      <span className="text-purple-400 text-xs font-mono tracking-[0.2em] uppercase">
        {children}
      </span>
      <div className="h-[1px] w-8 bg-purple-500/60" />
    </div>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
}

export function Card({ children, className, glow = false, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-[#0d0d14] border border-white/[0.06] p-6 transition-all duration-300',
        hover && 'hover:border-purple-500/30 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.2),0_8px_40px_rgba(139,92,246,0.08)] hover:-translate-y-1',
        glow && 'shadow-[0_0_30px_rgba(139,92,246,0.08)]',
        className
      )}
    >
      {children}
    </div>
  )
}

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  )
}
