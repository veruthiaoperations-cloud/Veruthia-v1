export interface Lead {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  company_name?: string;
  service_type?: string;
  project_budget?: string;
  status?: string;
  ip_address?: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  gradient: string;
  stats: Record<string, string>;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}
