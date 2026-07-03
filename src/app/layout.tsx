import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amfahh Jawad — Full-Stack Engineer & Product Builder',
  description: 'Full-Stack Software Engineer specializing in AI-powered SaaS products, automation systems, and modern web applications. Available for startup and SaaS projects.',
  keywords: ['full-stack engineer', 'SaaS developer', 'AI development', 'Next.js', 'startup', 'MVP'],
  openGraph: {
    title: 'Amfahh Jawad — Full-Stack Engineer & Product Builder',
    description: 'Building AI-Powered SaaS Products, Automation Systems, and Modern Web Applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
