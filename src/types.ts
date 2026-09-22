export type Language = 'fr' | 'en';

export interface Project {
  id: string;
  category: 'saas' | 'vitrine' | 'ecommerce' | 'tools';
  title: {
    fr: string;
    en: string;
  };
  subtitle: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  fullDetails?: {
    fr: string[];
    en: string[];
  };
  keyFeatures: {
    fr: string[];
    en: string[];
  };
  technologies: string[];
  metrics?: {
    fr: string;
    en: string;
  };
  badge: {
    fr: string;
    en: string;
  };
  gradient: string;
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  period: {
    fr: string;
    en: string;
  };
  role: {
    fr: string;
    en: string;
  };
  company: string;
  type: {
    fr: string;
    en: string;
  };
  description: {
    fr: string[];
    en: string[];
  };
  technologies: string[];
}

export interface Education {
  id: string;
  year: string;
  degree: {
    fr: string;
    en: string;
  };
  institution: string;
  location: {
    fr: string;
    en: string;
  };
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  highlights: {
    fr: string[];
    en: string[];
  };
}

export interface ContactFormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
