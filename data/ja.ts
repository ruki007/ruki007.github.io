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
    description: [
      "ここに自己紹介を書きます。1段落目：現在の役割と得意分野の概要。",
      "2段落目：これまでのキャリアハイライトや技術的な強み。",
      "3段落目：今後の目標や、チームで大切にしている価値観。",
    ],
    career: [
      {
        period: "2023 - 現在",
        title: "名古屋大学 工学部 電気電子情報工学科",
        description: "光ネットワークの研究に従事",
      },
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
        title: "プロジェクト名1",
        description: "プロジェクトの説明をここに書きます。使用技術と課題解決のポイント。",
        tech: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/yourname/project1",
        live: "https://project1.example.com",
        image: "/images/project1.png",
      },
      {
        title: "プロジェクト名2",
        description: "プロジェクトの説明をここに書きます。",
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
        company: "株式会社〇〇",
        role: "シニアエンジニア",
        period: "2022 - 現在",
        achievements: [
          "マイクロサービスアーキテクチャの設計・実装",
          "CI/CDパイプラインの構築によるデプロイ頻度50%改善",
        ],
      },
      {
        company: "株式会社ART-TRA",
        role: "エンジニア",
        period: "2019 - 2022",
        achievements: [
          "React + TypeScriptでのSPA開発",
          "パフォーマンス改善でLighthouseスコア30点向上",
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
