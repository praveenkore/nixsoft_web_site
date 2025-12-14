export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'DevOps' | 'Cloud' | 'Security' | 'Database';
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ContactReason {
  General = 'General Inquiry',
  Sales = 'Sales / Partnership',
  Support = 'Technical Support',
  Careers = 'Careers'
}
