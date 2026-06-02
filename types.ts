import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'AI/ML' | 'Frontend' | 'Backend' | 'DevOps';
  icon?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: 'work' | 'education';
  logo?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export type Theme = 'light' | 'dark';