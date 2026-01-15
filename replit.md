# Veruthia Consulting

## Overview
A high-end software architecture firm's portfolio and lead-capture website. Built with Next.js 14, TypeScript, and Tailwind CSS following a "Digital Noir" aesthetic with Rich Black (#050505) backgrounds.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + clsx + tailwind-merge
- **Typography:** Cinzel (accents) + Playfair Display (headings) + Inter (body)
- **Animation:** Framer Motion (Heavy-to-Light Physics)
- **Form Capture:** Tally.so (Popup Integration)
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Success:** canvas-confetti

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, LenisProvider, Tally script
│   ├── page.tsx           # Landing page with section flow
│   ├── globals.css        # Tailwind imports, gold selection, Rich Black theme
│   ├── not-found.tsx      # Custom 404 page with Digital Noir styling
│   ├── success/page.tsx   # Success page with confetti
│   └── legal/
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/                # Atoms (Button, Toast, DisclaimerBanner)
│   ├── sections/          # Hero, Services, Portfolio, Process, About, Pricing
│   ├── layout/            # Navbar and Footer
│   └── providers/         # LenisProvider for smooth scrolling
├── lib/
│   ├── utils.ts           # cn() + Animation configs (HEADER/BODY_ANIMATION)
│   ├── constants.ts       # Content: commanders, portfolio, pricing, process
│   └── tally.ts           # Tally popup configuration
└── types/
    ├── index.ts           # TypeScript interfaces
    └── tally.d.ts         # Tally global type declarations
```

## Page Flow (Conversion Optimized)
1. Hero ("We Build Systems" + Section 179 Badge)
2. Portfolio ("The Portfolio Array") - Proof before Promise
3. Services ("What We Build") - 4 cards including Unified Architecture
4. Process ("The Process")
5. About ("The Commanders")
6. Pricing ("Investment Tiers" + Unified Infrastructure banner)
7. Footer

## Animation System (Heavy-to-Light Physics)
- **Headers (Playfair):** y: 40, duration: 0.8 (Slow/Heavy)
- **Body/Buttons:** y: 20, duration: 0.5 (Fast/Snap)
- **Stagger:** staggerChildren: 0.2 on all grids
- **Easing:** Cubic bezier [0.25, 0.1, 0.25, 1]

## Key Features

### The Commanders (About Section)
- **Ethan Johnson** (Managing Partner | Operations)
- **Brody Bailey** (Lead Architect | Engineering)

### Portfolio (Deep Glass Gradients + System Icons)
- SmartHVAC Analytics: Deep Navy to Black + Lock icon
- Metro-Barber-OS: Deep Gold/Bronze to Black + Code icon + Unified Ecosystem
- Hometown Rock & Landscape: Deep Forest to Black + BarChart3 icon
- All Care Drain: Cyan to Black + TrendingUp icon
- Acts Heat & Air: Orange to Black + Zap icon

### Pricing Tiers (Owner-Benefit Language)
1. **The Digital Storefront** ($5,000) - "You own the keys. Edit via Control Panel."
2. **The AI Receptionist** ($3,500) - "Scales infinitely. 5 or 500 calls."
3. **The Business Engine** ($15,000) - "Modular. Add features as you grow." (RECOMMENDED)
4. **The SaaS Core** ($45,000+) - Enterprise Architecture

### Technical Features
- "Capital Asset Architecture" and "Digital Asset Deployment" terminology
- Asterisk (*) disclaimer links to visible legal text
- All CTAs standardized to "Start Asset Audit"
- Tally.so popup for lead capture (Form ID: rjBLb5)
- Gold selection color (#d4af37)
- Custom 4px scrollbar (zinc theme)

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
- **docs/PROJECT_MIRROR.md**: Sovereign Reasoning Protocol state mirror
- **docs/developer_notes/**: Session-based change logs with reasoning audits
- **ATOMIC_SPEC.md**: 35-point Definition of Done
- **PRD.md**: Product Requirements with commander bios

## Integrity Rules (Never Violate)
- NO "Zero No-Shows" (false claim)
- NO "CMS" (use "Client Control Panel")
- YES "99.9% Uptime Architecture" (not Guarantee)
- YES Section 179 messaging with CPA disclaimer

## Recent Changes
- 2026-01-15: Sovereign Reasoning Protocol initialized (docs/PROJECT_MIRROR.md)
- 2026-01-15: Owner-Benefit language applied (CMS → Client Control Panel)
- 2026-01-15: Unified Infrastructure banner added to pricing
- 2026-01-15: Section 179 badge added to hero
- 2026-01-15: Page flow reordered (Portfolio before Services)
- 2026-01-15: Tally Form ID updated to rjBLb5
- 2024-12-22: White Glove Overhaul complete - page flow reordered
- 2024-12-22: Heavy-to-Light physics applied (Headers 0.8s, Body 0.5s)
- 2024-12-22: Portfolio deep glass gradients with system icons
