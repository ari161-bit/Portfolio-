'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Timeline from '@/components/sections/Timeline'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'
import BackgroundEffects from '@/components/ui/BackgroundEffects'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
