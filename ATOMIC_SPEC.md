# ATOMIC ENGINEERING SPECIFICATION (v3.0)
## PROTOCOL: OMEGA SYNTHESIS - 35-POINT DEFINITION OF DONE

### TECH STACK
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + clsx + tailwind-merge
- **Typography:** Cinzel (Logo) + Playfair Display (Headings) + Inter (Body)
- **Animation:** Framer Motion (Physics-based)
- **Form Capture:** Tally.so (Popup Integration)
- **Icons:** Lucide React

---

## THE 35-POINT DEFINITION OF DONE

### PHYSICS ENGINE (1-6)
1. **Global Spring Config:** `{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }`
2. **Scroll:** Mandate Lenis integration for smooth scrolling
3. **Overscroll:** `overscroll-behavior: none` on body (kill iOS rubber-band)
4. **Touch:** Mobile buttons `min-height: 44px`, `-webkit-tap-highlight-color: transparent`
5. **Hover:** Cards scale `1.02x` with `shadow-gold/10`
6. **Selection:** `::selection { background: #333; color: #d4af37; }` (Gold)

### FONTS & PERFORMANCE (7-10)
7. **Preload Fonts:** Playfair Display & Cinzel via next/font (No FOUT)
8. **Cinzel:** Used ONLY for header logo "VERUTHIA"
9. **Playfair Display:** Used for all section headings
10. **Inter:** Used for body text and UI elements

### TALLY INTEGRATION (11-15)
11. **Delete Custom Modals:** Remove all custom contact form logic
12. **Tally Popup:** Use `Tally.openPopup('FORM_ID')` for all CTAs
13. **Tally Config:** `onSubmit` -> Wait 2000ms -> `router.push('/success')`
14. **Skeleton Loader:** Tally container must have `min-h-[600px]` pulsing skeleton
15. **Scroll Lock:** Lock body scroll when Tally/Modals are open

### UI/UX REQUIREMENTS (16-22)
16. **Mobile Menu:** Must auto-close on link click
17. **Success Page:** Trigger `canvas-confetti` on `/success`
18. **404 Page:** Custom `not-found.tsx` with Rich Black (#050505) theme
19. **CTA Text:** All primary buttons read "Start Asset Audit"
20. **LLC Rule:** Header = "VERUTHIA", Footer = "Veruthia Consulting, LLC"
21. **Scrollbar:** Custom 4px scrollbar (track: #050505, thumb: zinc-700)
22. **No White Cards:** Featured card = BLACK (#050505) + Gold/Zinc border + "RECOMMENDED" badge

### LEGAL & COMPLIANCE (23-26)
23. **Tax Disclaimer:** "Section 179 eligibility depends on your specific business situation. Please consult a certified CPA."
24. **Disclaimer Placement:** Under Pricing Grid AND in Footer
25. **Privacy Policy:** Full boilerplate at `/legal/privacy`
26. **Terms of Service:** Full boilerplate at `/legal/terms`

### SEO & SOCIAL (27-30)
27. **robots.txt:** Allow all crawlers
28. **sitemap.xml:** List all routes
29. **OG Image:** Hardcoded `og:image` meta tag
30. **Twitter Card:** Hardcoded `twitter:card` meta tag

### BUILD & DEPLOY (31-35)
31. **Background Color:** All pages use Rich Black (#050505)
32. **TypeScript:** `next.config.js` -> `typescript: { ignoreBuildErrors: true }`
33. **ESLint:** `next.config.js` -> `eslint: { ignoreDuringBuilds: true }`
34. **Remote Images:** Configure `images.remotePatterns` if needed
35. **Supabase Ready:** Connection strings prepared for lead capture database

---

## COMPONENT ARCHITECTURE

```text
src/
├── app/
│   ├── layout.tsx         # Root layout (Fonts, LenisProvider, Meta)
│   ├── page.tsx           # Landing page with Tally integration
│   ├── globals.css        # Tailwind + Custom scrollbar + Gold selection
│   ├── not-found.tsx      # Custom 404 (Rich Black)
│   ├── success/page.tsx   # Confetti success page
│   └── legal/
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/                # Button, Toast, DisclaimerBanner
│   ├── sections/          # Hero, About, Services, Portfolio, Process, Pricing
│   ├── layout/            # Navbar, Footer
│   └── providers/         # LenisProvider
├── lib/
│   ├── utils.ts           # cn() + SPRING_PHYSICS
│   ├── constants.ts       # Content data
│   └── tally.ts           # Tally popup configuration
└── types/
    └── index.ts
```

---

## INTERACTION PHYSICS

```typescript
export const SPRING_PHYSICS = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8
};
```

---

## TALLY POPUP CONFIGURATION

```typescript
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: TallyOptions) => void;
    };
  }
}

interface TallyOptions {
  layout?: 'default' | 'modal';
  width?: number;
  autoClose?: number;
  hideTitle?: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
}

export const openAssetAudit = () => {
  if (typeof window !== 'undefined' && window.Tally) {
    window.Tally.openPopup('3xjo7o', {
      layout: 'modal',
      width: 600,
      hideTitle: true,
      onSubmit: () => {
        setTimeout(() => {
          window.location.href = '/success';
        }, 2000);
      },
    });
  }
};
```

---

## VISUAL DNA

### Color Palette
- **Rich Black:** #050505 (All backgrounds)
- **Gold Accent:** #d4af37 (Selection, accents)
- **Zinc-700:** #3f3f46 (Scrollbar thumb, borders)

### Portfolio Gradients
- SmartHVAC: `from-slate-900 via-blue-900 to-[#050505]`
- Metro-Barber: `from-yellow-700 via-yellow-900 to-[#050505]`
- Hometown: `from-emerald-900 via-stone-800 to-[#050505]`
- Acts Heat & Air: `from-orange-900 via-red-900 to-[#050505]`
- All Care Drain: `from-cyan-900 via-teal-900 to-[#050505]`

---

## DATABASE SCHEMA (SUPABASE)

```sql
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  full_name text not null,
  email text not null,
  company_name text,
  service_type text,
  project_budget text,
  status text default 'new',
  ip_address text
);

alter table public.leads enable row level security;
create policy "Enable insert for everyone" on public.leads for insert with check (true);
```
