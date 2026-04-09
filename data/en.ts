import type { PortfolioContent } from "@/lib/types";

export const en: PortfolioContent = {
  hero: {
    greeting: "Hi, I'm ",
    name: "Your Name",
    title: "Full-Stack Engineer",
    tagline: "Solving problems with technology, from frontend to infrastructure",
    ctaWork: "View My Work",
    ctaContact: "Contact Me",
  },
  about: {
    title: "About",
    description: [
      "Write your self-introduction here. Paragraph 1: Current role and areas of expertise.",
      "Paragraph 2: Career highlights and technical strengths.",
      "Paragraph 3: Future goals and values you bring to a team.",
    ],
    career: [
      {
        period: "2023 - Present",
        title: "Nagoya University, School of Engineering",
        description: "Researching optical networks",
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "TypeScript", icon: "code" },
          { name: "React", icon: "layout" },
          { name: "Next.js", icon: "globe" },
          { name: "Vue.js", icon: "layout" },
          { name: "Tailwind CSS", icon: "palette" },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", icon: "server" },
          { name: "Python", icon: "terminal" },
          { name: "Go", icon: "terminal" },
          { name: "PostgreSQL", icon: "database" },
        ],
      },
      {
        title: "Infra & DevOps",
        skills: [
          { name: "Docker", icon: "container" },
          { name: "AWS", icon: "cloud" },
          { name: "GitHub Actions", icon: "git-branch" },
          { name: "Terraform", icon: "settings" },
        ],
      },
      {
        title: "Tools",
        skills: [
          { name: "Git", icon: "git-branch" },
          { name: "VS Code", icon: "edit" },
          { name: "Figma", icon: "figma" },
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "Project Name 1",
        description: "Describe the project here. Technologies used and problems solved.",
        tech: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/yourname/project1",
        live: "https://project1.example.com",
        image: "/images/project1.png",
      },
      {
        title: "Project Name 2",
        description: "Describe the project here.",
        tech: ["Next.js", "PostgreSQL", "Docker"],
        github: "https://github.com/yourname/project2",
        image: "/images/project2.png",
      },
      {
        title: "Project Name 3",
        description: "Describe the project here.",
        tech: ["Go", "AWS", "Terraform"],
        github: "https://github.com/yourname/project3",
        live: "https://project3.example.com",
        image: "/images/project3.png",
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Company A",
        role: "Senior Engineer",
        period: "2022 - Present",
        achievements: [
          "Designed and implemented microservices architecture",
          "Built CI/CD pipeline, improving deploy frequency by 50%",
        ],
      },
      {
        company: "Company B",
        role: "Engineer",
        period: "2019 - 2022",
        achievements: [
          "Developed SPA with React + TypeScript",
          "Improved Lighthouse score by 30 points through performance optimization",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Feel free to reach out",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
};
