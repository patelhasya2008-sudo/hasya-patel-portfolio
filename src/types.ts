export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  features: string[];
  technologies: string[];
  mockupType: 'mobile' | 'dashboard' | 'iot';
  accentColor?: string;
  caseStudy: {
    overview: string;
    objective: string;
    keyFeatures: { title: string; detail: string }[];
    techStackDetails: { name: string; role: string }[];
    developmentProcess: { step: string; description: string }[];
    challenges: { issue: string; solution: string }[];
    learnings: string[];
    futureImprovements: string[];
    metricsOrOutcomes: string[];
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    detail: string;
    tag?: string;
  }[];
}

export interface Certificate {
  id: string;
  number: string;
  title: string;
  issuer: string;
  organization: string;
  dateBadge: string;
  iconType: 'google' | 'microsoft';
  description: string;
  skillsCovered: string[];
  verificationNote: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
  iconName: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  decimals?: number;
  suffix?: string;
  label: string;
  detail: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
