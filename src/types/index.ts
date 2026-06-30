export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface PortfolioItem {
  id: number;
  reel: string;
  title: string;
  cast: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
