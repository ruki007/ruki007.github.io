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
  /** Optional reference for the work (client site, product page). */
  link?: { label: string; href: string };
}

/** A publication or talk, rendered as a citation block. */
export interface ResearchOutput {
  /** 国際会議 / 国内会議 etc. Shown as a mono tag. */
  kind: string;
  title: string;
  authors: string;
  venue: string;
}

/** A label/value pair rendered as a spec-sheet row with a dotted leader. */
export interface MetaItem {
  label: string;
  value: string;
}

export interface PortfolioContent {
  hero: {
    greeting: string;
    /** Display name, set in mincho at poster scale. Keep it short. */
    name: string;
    /** Latin transliteration, set in mono under the display name. */
    nameLatin: string;
    title: string;
    tagline: string;
    meta: MetaItem[];
    ctaWork: string;
    ctaContact: string;
  };
  about: {
    title: string;
    educationLabel: string;
    qualificationsLabel: string;
    career: {
      period: string;
      title: string;
    }[];
    qualifications: string[];
  };
  research: {
    title: string;
    /** One-line research theme, set large. */
    theme: string;
    summary: string;
    meta: MetaItem[];
    outputsLabel: string;
    outputs: ResearchOutput[];
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
    email: string;
  };
  nav: {
    about: string;
    research: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
}
