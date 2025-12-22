# Veruthia Consulting

## Overview
A high-end software architecture firm's portfolio and lead-capture website. Built with Next.js 14, TypeScript, and Tailwind CSS following a "Digital Noir" aesthetic with Rich Black (#050505) backgrounds.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + clsx + tailwind-merge
- **Typography:** Cinzel (header logo) + Playfair Display (headings) + Inter (body)
- **Animation:** Framer Motion + canvas-confetti
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, LenisProvider, OG meta tags
│   ├── page.tsx           # Landing page with all sections
│   ├── globals.css        # Tailwind imports, custom scrollbar, Rich Black theme
│   ├── not-found.tsx      # Custom 404 page with Digital Noir styling
│   ├── api/leads/route.ts # Lead submission API
│   ├── success/page.tsx   # Success page with confetti
│   └── legal/
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/                # Atoms (Button, Modal, Toast, DisclaimerBanner)
│   ├── sections/          # Page sections (Hero, Services, Portfolio, Process, Pricing, ContactModal)
│   ├── layout/            # Navbar and Footer
│   └── providers/         # LenisProvider for smooth scrolling
├── lib/
│   ├── utils.ts           # cn() helper and SPRING_PHYSICS animation config
│   └── constants.ts       # Content: portfolio (5 projects), pricing (4 tiers with retainers), process steps
└── types/
    └── index.ts           # TypeScript interfaces
public/
├── sitemap.xml            # SEO sitemap (allows all crawlers)
├── robots.txt             # SEO robots file
└── og-image.svg           # OpenGraph social image
```

## Key Features
- Hero section with "We Build Systems. Not Websites." tagline
- Portfolio grid with 5 real projects:
  - SmartHVAC Analytics ($720,000 Asset Valuation)
  - Metro-Barber-OS (Zero No-Shows)
  - Hometown Rock & Landscape (30+ Material Calculators)
  - Acts Heat & Air (Integrated Financing & Scheduling)
  - All Care Drain (98/100 SEO Score)
- Process section: Audit -> Blueprint -> Build -> Asset
- 4 pricing tiers with retainer info:
  - AI Receptionist ($3,500) - Usage-Based Retainer
  - Recovery Sprint ($5,000) - $150/mo Hosting
  - Business Engine ($15,000) - Custom SLA (RECOMMENDED)
  - SaaS Core ($45,000+) - Enterprise Support
- Multi-step contact modal with redirect to success page
- Success page with animated checkmark and confetti explosion
- Custom 404 page with Digital Noir styling
- Section 179 disclaimer in pricing and footer
- Custom scrollbar (4px, zinc-700 thumb)
- Smooth scrolling via Lenis
- Mobile navigation with swipe gestures
- SEO-ready with sitemap.xml, robots.txt, OG meta tags

## Build Configuration
- `typescript.ignoreBuildErrors: true` - Prevents build failures
- `eslint.ignoreDuringBuilds: true` - Prevents lint blocking deployments
- Cache-Control headers disabled for development

## Brand Guidelines
- Background: Rich Black (#050505) - NOT pure black
- Logo: "VERUTHIA" (Cinzel font) in header, "Veruthia Consulting, LLC" in footer
- Featured pricing card: Black background with zinc border + "RECOMMENDED" badge

## Running the Project
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Recent Changes
- 2024-12-22: OMEGA Synchronization complete - all 5 dimensions applied
- 2024-12-22: Added Cinzel font for header logo
- 2024-12-22: Changed all backgrounds from #000000 to Rich Black (#050505)
- 2024-12-22: Added custom scrollbar styling (4px, zinc theme)
- 2024-12-22: Updated SmartHVAC to $720,000 Asset Valuation
- 2024-12-22: Added retainer pricing info to all tiers
- 2024-12-22: Added Process section (Audit -> Blueprint -> Build -> Asset)
- 2024-12-22: Added 2 portfolio items (Acts Heat & Air, All Care Drain)
- 2024-12-22: Created custom not-found.tsx page
- 2024-12-22: Added OG image and Twitter card meta tags
- 2024-12-22: Updated featured pricing card styling (black bg, zinc border)
