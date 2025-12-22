# Veruthia Consulting

## Overview
A high-end software architecture firm's portfolio and lead-capture website. Built with Next.js 14, TypeScript, and Tailwind CSS following a "Digital Noir" aesthetic.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + clsx + tailwind-merge
- **Typography:** Playfair Display (headings) + Inter (body)
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Tailwind imports
│   ├── api/leads/route.ts # Lead submission API
│   └── legal/
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/                # Atoms (Button, Modal, Toast, DisclaimerBanner)
│   ├── sections/          # Page sections (Hero, Services, Portfolio, Pricing)
│   └── layout/            # Navbar and Footer
├── lib/
│   ├── utils.ts           # cn() helper and SPRING_PHYSICS animation config
│   └── constants.ts       # Content and configuration constants
└── types/
    └── index.ts           # TypeScript interfaces
```

## Key Features
- Hero section with impact typography
- Portfolio grid with gradient cards per project
- Multi-step contact modal (Asset Audit form)
- Legal compliance with DisclaimerBanner component
- Mobile navigation with swipe gestures

## Running the Project
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Recent Changes
- 2024-12-22: Initial project setup from PRD.md and ATOMIC_SPEC.md specifications
