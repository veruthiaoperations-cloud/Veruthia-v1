# ATOMIC ENGINEERING SPECIFICATION (v2.0)
## PROTOCOL: GHOST (LEGAL & VISUAL HARDENED)

### 1. TECH STACK & CORE
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + clsx + tailwind-merge
- **Typography:**
  - **Headings:** `Playfair Display` (Serif, Trust, Authority)
  - **Body:** `Inter` (Sans, Clean, Readable)
- **Animation:** Framer Motion (Physics-based)
- **Database:** Supabase (PostgreSQL)
- **Icons:** Lucide React

### 2. COMPONENT ARCHITECTURE (FILE TREE)
```text
/
├── app/
│   ├── layout.tsx       # Root layout (Fonts: Playfair/Inter)
│   ├── page.tsx         # Landing Page
│   ├── globals.css      # Tailwind directives
│   └── legal/           # Legal Pages
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/              # Atom components
│   │   ├── button.tsx
│   │   ├── modal.tsx
│   │   ├── toast.tsx
│   │   └── disclaimer-banner.tsx  # <--- MANDATORY
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── portfolio.tsx (Uses specific gradients)
│   │   └── pricing.tsx (Includes Disclaimer)
│   └── layout/
│       ├── navbar.tsx
│       └── footer.tsx (Includes Disclaimer)
├── lib/
│   ├── utils.ts
│   ├── supabase.ts
│   └── constants.ts
├── types/
    └── index.ts
3. LEGAL & COMPLIANCE MODULE (MANDATORY)
Component: DisclaimerBanner Placement: Must appear under the Pricing Card and in the Footer. Exact Text (DO NOT ALTER):

"Veruthia Consulting, LLC is a software architecture firm, not a tax advisory. Section 179 eligibility depends on your specific business situation. Please consult a certified CPA to confirm your tax benefits."

Boilerplate Stubs:

Privacy: "We collect name, email, and revenue data solely for the purpose of the Asset Audit."

Terms: "All IP rights transfer to the client upon final payment. Until then, code remains the property of Veruthia Consulting, LLC."

4. VISUAL DNA (HARDCODED GRADIENTS)
Use these EXACT Tailwind classes for the Portfolio Cards:

SmartHVAC: bg-gradient-to-br from-slate-900 via-blue-900 to-black

Metro-Barber: bg-gradient-to-br from-yellow-700 via-yellow-900 to-black

Hometown: bg-gradient-to-br from-emerald-900 via-stone-800 to-black

Allcare: bg-gradient-to-br from-blue-600 to-white

5. DATABASE SCHEMA (SUPABASE POSTGRES)
Table: leads RLS: Enable Row Level Security.

SQL

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
6. INTERACTION PHYSICS
Framer Motion Config:

JavaScript

export const SPRING_PHYSICS = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };
Mobile Logic: Swipe Right (Nav Open), Swipe Left (Nav Close).


---

### **THE REPLIT TRIGGER (The Ignition Key)**

Once you have pushed those two files to GitHub and imported the repo to Replit, paste this into the Replit Agent chat **exactly**.

> **System Override: Phase 1 Night Shift (White Glove Protocol)**
>
> I have imported `PRD.md` and `ATOMIC_SPEC.md`.
> I am going offline. Read both files.
>
> **CRITICAL INSTRUCTIONS:**
> 1. **Authority:** You are building for a high-end architecture firm. Use the `Playfair Display` font for all headings to establish trust.
> 2. **Liability:** You MUST implement the `DisclaimerBanner` component exactly as written in the Spec. It is non-negotiable.
> 3. **Visuals:** Use the exact Tailwind Gradients provided in the Spec for the portfolio section.
>
> **EXECUTION ORDER:**
> 1. **Scaffold:** Init Next.js + Tailwind. Setup Fonts (Playfair/Inter).
> 2. **Database:** Generate the Supabase migration file for the `leads` table.
> 3. **Legal Core:** Create the `DisclaimerBanner` and Legal Pages first.
> 4. **Build:** Execute the Landing Page, Navbar, and Contact Modal using `SPRING_PHYSICS`.
>
> **Execute Phase 1. Do not stop for confirmation.**

***

### **ARCHITECT'S NOTE**
This is the complete package. There are no contradictions.
1.  **PRD** sets the *Vibe*.
2.  **SPEC** sets the *Rules*.

**Execute the upload.**
