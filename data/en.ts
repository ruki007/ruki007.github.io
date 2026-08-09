import type { PortfolioContent } from "@/lib/types";

export const en: PortfolioContent = {
  hero: {
    greeting: "Thank you for stopping by.",
    name: "Haruki Matsunaga",
    nameLatin: "MATSUNAGA HARUKI — ruki",
    title: "Nagoya University, School of Engineering (EEI)",
    tagline: "Researching optical networks. Writing the web on the side.",
    meta: [
      { label: "FIELD", value: "Optical Networks" },
      { label: "AFFILIATION", value: "Nagoya Univ. EEI" },
      { label: "BASED IN", value: "Nagoya, Japan" },
    ],
    ctaWork: "See the work",
    ctaContact: "Get in touch",
  },
  about: {
    title: "Background",
    educationLabel: "Education",
    qualificationsLabel: "Qualifications",
    career: [
      {
        period: "2023.4 — Present",
        title: "Nagoya University, School of Engineering, Dept. of EEI",
      },
      {
        period: "2020.4 — 2023.3",
        title: "Aichi Prefectural Ichinomiya High School",
      },
    ],
    qualifications: [
      "TOEIC 830 (June 28, 2026)",
      "Fundamental Information Technology Engineer (FE), May 2026",
      "Bookkeeping Level 3 (Nissho), March 2026",
    ],
  },
  research: {
    title: "Research",
    meta: [
      { label: "RESEARCH FIELD", value: "Optical Networks" },
      {
        label: "LAB",
        value: "Hasegawa Lab. (PN Lab.)",
        href: "https://www.nuee.nagoya-u.ac.jp/labs/pnlab/",
      },
      { label: "KEYWORDS", value: "Protection / Link Parallelism" },
    ],
    outputsLabel: "Publications & talks",
    outputs: [
      {
        kind: "International",
        title:
          "Hybrid In-Link and Path Protection in Optical Networks with High Link Parallelism",
        authors:
          "H. Matsunaga, Y. Iida, S. Shimoi, H. Yuasa, T. Kuno, and H. Hasegawa",
        venue:
          "International Conference on Photonics in Switching and Computing, paper TuP1-A1.3, Valencia, Spain, September 2026",
      },
      {
        kind: "Domestic",
        title:
          "Hybrid Path and Link Protection for Highly Parallel Optical Networks and Its Performance Evaluation",
        authors:
          "H. Matsunaga, Y. Iida, S. Shimoi, H. Yuasa, T. Kuno, and H. Hasegawa",
        venue: "IEICE Technical Committee on Photonic Network (PN)",
      },
    ],
  },
  skills: {
    title: "Stack",
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "TypeScript", icon: "code" },
          { name: "React", icon: "layout" },
          { name: "Next.js", icon: "globe" },
          { name: "HTML / CSS", icon: "palette" },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", icon: "server" },
          { name: "Python", icon: "terminal" },
          { name: "FastAPI", icon: "server" },
        ],
      },
      {
        title: "Infra & DevOps",
        skills: [
          { name: "Docker", icon: "container" },
          { name: "AWS", icon: "cloud" },
        ],
      },
      {
        title: "Languages",
        skills: [
          { name: "C / C++", icon: "code" },
          { name: "Rust", icon: "code" },
        ],
      },
      {
        title: "Tools",
        skills: [
          { name: "Git", icon: "git-branch" },
          { name: "VS Code", icon: "edit" },
          { name: "Linux", icon: "terminal" },
        ],
      },
    ],
  },
  projects: {
    title: "Work",
    items: [
      {
        title: "marumado — internal systems",
        description: "Development of internal business systems.",
        tech: ["TypeScript", "Python", "GCP", "Docker"],
        live: "https://marumado.jp/",
        image: "/images/marumado.png",
      },
      {
        title: "web safari — an adventure inside the radio waves",
        description:
          "A team-built game for a university lab course, driven by WiFi packet sensors placed across Higashiyama Zoo & Botanical Gardens.",
        tech: ["React", "TypeScript", "Node.js", "Python", "FastAPI"],
        github: "https://github.com/ruki007/dama",
        image: "/images/project1.png",
      },
      {
        title: "Meidai Unofficial Wiki",
        description:
          "An unofficial wiki where Nagoya University students share campus information and events.",
        tech: ["Next.js", "PostgreSQL", "Docker"],
        github: "https://github.com/yourname/project2",
        image: "/images/project2.png",
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "NPO Kodomo Programming Fukyu Iinkai",
        role: "Sales",
        period: "2025.10 — Present",
        achievements: [
          "Ran hands-on programming workshops for elementary school students using Minecraft.",
          "Explained to parents why programming literacy matters, supporting children's IT literacy.",
        ],
      },
      {
        company: "ART-TRA Inc.",
        role: "Engineer",
        period: "2025.7 — Present",
        achievements: [
          "Led frontend work on a large-scale web development project.",
          "Drove development on a joint project with Chodai Co., Ltd., covering both frontend and backend.",
          "Project lead for the engagement/navigation feature on the recruiting site.",
        ],
        link: {
          label: "CHODAI RECRUIT",
          href: "https://www.chodai.co.jp/recruit/",
        },
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Feel free to reach out.",
  },
  nav: {
    about: "Background",
    research: "Research",
    skills: "Stack",
    projects: "Work",
    experience: "Experience",
    contact: "Contact",
  },
};
