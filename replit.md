# Veruthia Consulting

## Overview
A high-end software architecture firm's portfolio and lead-capture website. Built with Next.js 14, TypeScript, and Tailwind CSS following a "Digital Noir" aesthetic with Rich Black (#050505) backgrounds.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + clsx + tailwind-merge
- **Typography:** Cinzel (header logo) + Playfair Display (headings) + Inter (body)
- **Animation:** Framer Motion (Spring Physics: stiffness 300, damping 30, mass 0.8)
- **Form Capture:** Tally.so (Popup Integration)
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Success:** canvas-confetti

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, LenisProvider, Tally script
│   ├── page.tsx           # Landing page with Tally integration
│   ├── globals.css        # Tailwind imports, gold selection, Rich Black theme
│   ├── not-found.tsx      # Custom 404 page with Digital Noir styling
│   ├── success/page.tsx   # Success page with confetti
│   └── legal/
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/                # Atoms (Button, Toast, DisclaimerBanner)
│   ├── sections/          # Hero, About, Services, Portfolio, Process, Pricing
│   ├── layout/            # Navbar and Footer
│   └── providers/         # LenisProvider for smooth scrolling
├── lib/
│   ├── utils.ts           # cn() helper and SPRING_PHYSICS config
│   ├── constants.ts       # Content: commanders, portfolio, pricing, process
│   └── tally.ts           # Tally popup configuration
└── types/
    ├── index.ts           # TypeScript interfaces
    └── tally.d.ts         # Tally global type declarations
```

## Key Features

### The Commanders (About Section)
- **Ethan Johnson** (Managing Partner | Operations): "My 'Red Pill' moment happened at 19..."
- **Brody Bailey** (Lead Architect | Engineering): "Code without structure is flying blind..."

### Portfolio (The Asset Vault)
- SmartHVAC Analytics: 92,000 Lines of Code, $720,000 Asset Valuation
- Metro-Barber-OS: Native Voice Receptionist Integration, Zero No-Shows
- Hometown Rock & Landscape: 30+ Proprietary Material Calculators
- All Care Drain: 98/100 SEO Score, Speed Run (12 Days)
- Acts Heat & Air: Integrated Financing (Synchrony API) & Schedule Sync

### Pricing Tiers
1. **The AI Receptionist** ($3,500) - Usage-Based Retainer
2. **The Digital Storefront / Recovery** ($5,000) - $150/mo Hosting & Security
3. **The Business Engine** ($15,000) - Custom SLA, Voice Receptionist, ROI Dashboard (RECOMMENDED)
4. **The SaaS Core** ($45,000+) - Enterprise Support Agreement

### Technical Features
- Hero section with "We Build Systems. Not Websites." tagline
- Process section: Audit -> Blueprint -> Build -> Asset
- Tally.so popup for lead capture (Form ID: 3xjo7o)
- Gold selection color (#d4af37)
- Custom 4px scrollbar (zinc theme)
- All CTAs standardized to "Start Asset Audit"
- Mobile navigation with swipe gestures and auto-close
- Section 179 disclaimer in pricing and footer
- SEO-ready with sitemap.xml, robots.txt, OG meta tags

## Build Configuration
- `typescript.ignoreBuildErrors: true`
- `eslint.ignoreDuringBuilds: true`
- Tally script loaded via next/script with lazyOnload strategy
- Tally loading guard with polling and retry logic

## Brand Guidelines
- Background: Rich Black (#050505)
- Selection: Gold (#d4af37)
- Logo: "VERUTHIA" (Cinzel font) in header, "Veruthia Consulting, LLC" in footer
- Featured pricing card: Black background with zinc border + "RECOMMENDED" badge
- Touch targets: min-height 44px

## Running the Project
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Documentation
- **ATOMIC_SPEC.md**: 35-point Definition of Done
- **PRD.md**: Product Requirements with commander bios

## Recent Changes
- 2024-12-22: OMEGA Synthesis v2 complete - all 35 points applied
- 2024-12-22: Added Tally.so popup integration (replaced custom contact modal)
- 2024-12-22: Added About section with commander bios (Ethan & Brody)
- 2024-12-22: Updated portfolio with technical metrics
- 2024-12-22: Renamed Tier 2 to "Digital Storefront / Recovery"
- 2024-12-22: Added Voice Receptionist and ROI Dashboard to Tier 3
- 2024-12-22: All CTAs now read "Start Asset Audit"
- 2024-12-22: Added gold selection color (#d4af37)
- 2024-12-22: Added Tally loading guard with polling logic
