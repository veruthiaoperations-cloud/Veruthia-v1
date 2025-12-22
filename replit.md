# Veruthia Consulting

## Overview
A high-end software architecture firm's portfolio and lead-capture website. Built with Next.js 14, TypeScript, and Tailwind CSS following a "Digital Noir" aesthetic.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + clsx + tailwind-merge
- **Typography:** Playfair Display (headings) + Inter (body)
- **Animation:** Framer Motion + canvas-confetti
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts and LenisProvider
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Tailwind imports and overscroll settings
│   ├── api/leads/route.ts # Lead submission API
│   ├── success/page.tsx   # Success page with confetti
│   └── legal/
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/                # Atoms (Button, Modal, Toast, DisclaimerBanner)
│   ├── sections/          # Page sections (Hero, Services, Portfolio, Pricing, ContactModal)
│   ├── layout/            # Navbar and Footer
│   └── providers/         # LenisProvider for smooth scrolling
├── lib/
│   ├── utils.ts           # cn() helper and SPRING_PHYSICS animation config
│   └── constants.ts       # Content and configuration constants
└── types/
    └── index.ts           # TypeScript interfaces
public/
├── sitemap.xml            # SEO sitemap
└── robots.txt             # SEO robots file
```

## Key Features
- Hero section with impact typography ("We Build Systems. Not Websites.")
- Portfolio grid with 3 real projects (SmartHVAC, Metro-Barber-OS, Hometown)
- 4 pricing tiers ($3,500 - $45,000+)
- Multi-step contact modal (Asset Audit form) with redirect to success page
- Success page with animated checkmark and confetti explosion
- Legal compliance with DisclaimerBanner component
- Mobile navigation with swipe gestures
- Smooth scrolling via Lenis
- SEO-ready with sitemap.xml and robots.txt

## Running the Project
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Recent Changes
- 2024-12-22: Added success page with confetti animation
- 2024-12-22: Updated pricing to 4 tiers (AI Receptionist, Recovery Sprint, Business Engine, SaaS Core)
- 2024-12-22: Updated portfolio with real project data
- 2024-12-22: Added Lenis smooth scrolling
- 2024-12-22: Added SEO assets (sitemap.xml, robots.txt)
- 2024-12-22: Added overscroll-behavior: none for iOS
- 2024-12-22: Initial project setup from PRD.md and ATOMIC_SPEC.md specifications
