export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface PortfolioContent {
  hero: {
    greeting: string;
    name: string;
    title: string;
    tagline: string;
    ctaWork: string;
    ctaContact: string;
  };
  about: {
    title: string;
    description: string[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  experience: {
    title: string;
    items: Experience[];
  };
  contact: {
    title: string;
    subtitle: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
}
