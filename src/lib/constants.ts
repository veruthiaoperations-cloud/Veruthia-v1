export const DISCLAIMER_TEXT =
  "Veruthia Consulting, LLC is a software architecture firm, not a tax advisory. Section 179 eligibility depends on your specific business situation. Please consult a certified CPA to confirm your tax benefits.";

export const PRIVACY_TEXT =
  "We collect name, email, and revenue data solely for the purpose of the Asset Audit.";

export const TERMS_TEXT =
  "All IP rights transfer to the client upon final payment. Until then, code remains the property of Veruthia Consulting, LLC.";

export const PORTFOLIO_ITEMS = [
  {
    id: "smarthvac",
    name: "SmartHVAC",
    description: "Intelligent climate control system with real-time monitoring",
    gradient: "bg-gradient-to-br from-slate-900 via-blue-900 to-black",
    stats: { efficiency: "40%", savings: "$120K" },
  },
  {
    id: "metro-barber",
    name: "Metro-Barber",
    description: "Premium appointment and inventory management suite",
    gradient: "bg-gradient-to-br from-yellow-700 via-yellow-900 to-black",
    stats: { bookings: "3x", retention: "85%" },
  },
  {
    id: "hometown",
    name: "Hometown",
    description: "Community-first service scheduling platform",
    gradient: "bg-gradient-to-br from-emerald-900 via-stone-800 to-black",
    stats: { coverage: "12 Cities", growth: "200%" },
  },
  {
    id: "allcare",
    name: "Allcare",
    description: "Integrated healthcare operations management",
    gradient: "bg-gradient-to-br from-blue-600 to-white",
    stats: { patients: "50K+", uptime: "99.9%" },
  },
];

export const SERVICES = [
  {
    title: "Web Architecture",
    description:
      "Custom-built digital assets engineered for scale, performance, and long-term ROI.",
    icon: "Layout",
  },
  {
    title: "Automation",
    description:
      "Eliminate manual processes. Build systems that work while you sleep.",
    icon: "Zap",
  },
  {
    title: "Consulting",
    description:
      "Strategic guidance on digital transformation and Section 179 asset qualification.",
    icon: "MessageSquare",
  },
];

export const PRICING_TIERS = [
  {
    name: "Asset Audit",
    price: "Free",
    description: "Discover if your business qualifies for a digital overhaul",
    features: [
      "Business process analysis",
      "Section 179 eligibility review",
      "Custom asset roadmap",
      "30-minute strategy call",
    ],
    cta: "Book Your Audit",
    featured: false,
  },
  {
    name: "Core Build",
    price: "$15,000",
    description: "Your first fully-qualified digital asset",
    features: [
      "Custom web application",
      "Database architecture",
      "Third-party integrations",
      "90-day support",
      "Full IP transfer",
    ],
    cta: "Start Building",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complete digital transformation",
    features: [
      "Multiple integrated systems",
      "Custom automation suite",
      "Dedicated support team",
      "Ongoing maintenance",
      "Priority development",
    ],
    cta: "Contact Us",
    featured: false,
  },
];
