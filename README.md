# 🚀 Personal Portfolio — Amfahh Jawad

A world-class dark-theme portfolio website built for software engineers and startup founders. Designed to attract clients with a premium, modern SaaS aesthetic.

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Customize your info
Before running, search for `Amfahh Jawad` across all files and replace with your real name.

Key files to update:
- `src/app/layout.tsx` → Update metadata (title, description)
- `src/components/layout/Navbar.tsx` → Name in navbar
- `src/components/layout/Footer.tsx` → Name in footer
- `src/components/sections/Contact.tsx` → Social links (GitHub, LinkedIn, Twitter, email)
- `src/components/sections/Hero.tsx` → Tagline and stats
- `src/components/sections/Projects.tsx` → Your actual project URLs

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

## Deployment (Vercel — Recommended)
```bash
npx vercel
```
Or connect your GitHub repo at vercel.com for automatic deployments.

## Project Structure
```
src/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page assembly
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Glassmorphism nav with mobile menu
│   │   └── Footer.tsx       # Minimal footer
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with floating cards & stats
│   │   ├── About.tsx        # About + animated metric cards
│   │   ├── Skills.tsx       # Tech stack grid + scrolling marquee
│   │   ├── Projects.tsx     # Featured project showcases
│   │   ├── Services.tsx     # Services + Why Work With Me
│   │   ├── Timeline.tsx     # Experience & education timeline
│   │   └── Contact.tsx      # Contact form + social links
│   └── ui/
│       ├── LoadingScreen.tsx    # Animated intro loading screen
│       ├── BackgroundEffects.tsx # Ambient glow + grid + noise
│       └── Elements.tsx         # Reusable Button, Badge, Card, etc.
├── hooks/
│   └── useScrollAnimation.ts    # Intersection observer, parallax, countup
└── lib/
    └── utils.ts                 # cn() className utility
```

## Design System
- **Background:** `#050505`
- **Cards:** `#0d0d14`
- **Accent:** `#8b5cf6` (purple)
- **Font:** Inter (display) + JetBrains Mono (code)
- **Effects:** Glassmorphism, radial glows, noise texture, CSS grid

## Customization Checklist
- [ ] Replace `Amfahh Jawad` everywhere
- [ ] Update social links in Contact section
- [ ] Add project screenshots or live URLs
- [ ] Update email in contact section
- [ ] Customize tagline in Hero
- [ ] Add real project descriptions
- [ ] Update stats in Hero (projects, years, etc.)
- [ ] Deploy to Vercel
