import type { PortfolioContent } from "@/lib/types";

export const ja: PortfolioContent = {
  hero: {
    greeting: "ご高覧いただきありがとうございます。",
    name: "ruki(松永浩輝)と申します",
    title: "名古屋大学工学部電気電子情報工学科に在籍しています",
    tagline: "研究分野は光ネットワークです。",
    ctaWork: "プロジェクトを見る",
    ctaContact: "お問い合わせ",
  },
  about: {
    title: "経歴",
    career: [
      {
        period: "2023.4 - 現在",
        title: "名古屋大学 工学部 電気電子情報工学科",
      },
      {
        period: "2020.4 - 2023.3",
        title: "愛知県立一宮高等学校",
      },
    ],
    qualifications: [
      "ここに資格等を書いてください",
    ],
  },
  skills: {
    title: "プログラミング言語・技術スタック",
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "TypeScript", icon: "code" },
          { name: "React", icon: "layout" },
          { name: "Next.js", icon: "globe" },
          { name: "HTMLCSS", icon: "palette" },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", icon: "server" },
          { name: "Python", icon: "terminal" },

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
        title: "others",
        skills: [
          { name: "C&C++", icon: "code" },
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
    title: "成果物等",
    items: [
      {
        title: "web safari~電波内の人間と冒険にでかけよう~",
        description: "大学の実験内でチーム開発した、東山動植物園内のwifiパケットセンサを活用したゲームです。",
        tech: ["React", "TypeScript", "Node.js", "Python","FastAPI"],
        github: "https://github.com/ruki007/dama.git",
        image: "/images/project1.png",
      },
      {
        title: "名大非公式wiki",
        description: "名古屋大学の学生が情報を共有するための非公式wikiサイトです。学生生活に役立つ情報やイベント情報などを提供。",
        tech: ["Next.js", "PostgreSQL", "Docker"],
        github: "https://github.com/yourname/project2",
        image: "/images/project2.png",
      },
      {
        title: "プロジェクト名3",
        description: "プロジェクトの説明をここに書きます。",
        tech: ["Go", "AWS", "Terraform"],
        github: "https://github.com/yourname/project3",
        live: "https://project3.example.com",
        image: "/images/project3.png",
      },
    ],
  },
  experience: {
    title: "職歴",
    items: [
      {
        company: "NPO法人こどもプログラミング普及委員会",
        role: "営業",
        period: "2025.10 - 現在",
        achievements: [
            "マイクラプログラミングを用いた小学生向けプログラミング体験会の運営に従事。",
            "親御さんにプログラミングの重要性を伝える役割も担い、子供たちのITリテラシー向上に貢献。",
        ],
      },
      {
        company: "株式会社ART-TRA",
        role: "エンジニア",
        period: "2025.7 - 現在",
        achievements: [
            "大規模web開発のフロントエンドを主に担当。",
          "株式会社長大様との連携事業での主導開発。フロントエンドとバックエンドの両方を担当",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "お気軽にご連絡ください",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
};
