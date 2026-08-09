import type { PortfolioContent } from "@/lib/types";

export const ja: PortfolioContent = {
  hero: {
    greeting: "ご高覧いただきありがとうございます。",
    name: "松永 浩輝",
    nameLatin: "MATSUNAGA KOKI — ruki",
    title: "名古屋大学 工学部 電気電子情報工学科",
    tagline:
      "光ネットワークを研究しながら、Web を書いています。",
    meta: [
      { label: "FIELD", value: "光ネットワーク / Optical Networks" },
      { label: "AFFILIATION", value: "Nagoya Univ. EEI" },
      { label: "BASED IN", value: "Nagoya, Japan" },
    ],
    ctaWork: "成果物を見る",
    ctaContact: "連絡する",
  },
  about: {
    title: "経歴",
    educationLabel: "学歴",
    qualificationsLabel: "資格",
    career: [
      {
        period: "2023.4 — 現在",
        title: "名古屋大学 工学部 電気電子情報工学科",
      },
      {
        period: "2020.4 — 2023.3",
        title: "愛知県立一宮高等学校",
      },
    ],
    qualifications: [
      "TOEIC 830（2026年6月28日実施分）",
      "基本情報技術者試験（FE）2026年5月",
      "日商簿記検定 3級 2026年3月",
    ],
  },
  research: {
    title: "研究",
    theme: "高並列度光ネットワークにおける\nパス・リンク混合型高信頼化",
    summary:
      "リンクの並列度が高い光ネットワークを対象に、パス保護とリンク内保護を組み合わせた混合型の高信頼化方式を検討し、その性能を評価しています。",
    meta: [
      { label: "RESEARCH FIELD", value: "光ネットワーク" },
      { label: "LAB", value: "長谷川 浩 研究室" },
      { label: "KEYWORDS", value: "Protection / Link Parallelism" },
    ],
    outputsLabel: "発表・論文",
    outputs: [
      {
        kind: "国際会議",
        title:
          "Hybrid In-Link and Path Protection in Optical Networks with High Link Parallelism",
        authors:
          "H. Matsunaga, Y. Iida, S. Shimoi, H. Yuasa, T. Kuno, and H. Hasegawa",
        venue:
          "International Conference on Photonics in Switching and Computing, paper TuP1-A1.3, Valencia, Spain, September 2026",
      },
      {
        kind: "国内会議",
        title:
          "高並列度光ネットワークにおけるパス・リンク混合型高信頼化およびその性能評価",
        authors:
          "○松永浩輝・飯田裕介・下井舜也・湯浅颯士・久野拓真・長谷川 浩",
        venue: "電子情報通信学会 フォトニックネットワーク研究会（PN）",
      },
    ],
  },
  skills: {
    title: "技術スタック",
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
    title: "成果物",
    items: [
      {
        title: "web safari — 電波内の人間と冒険にでかけよう",
        description:
          "大学の実験内でチーム開発した、東山動植物園内の WiFi パケットセンサを活用したゲーム。",
        tech: ["React", "TypeScript", "Node.js", "Python", "FastAPI"],
        github: "https://github.com/ruki007/dama",
        image: "/images/project1.png",
      },
      {
        title: "名大非公式 wiki",
        description:
          "名古屋大学の学生が情報を共有するための非公式 wiki サイト。学生生活に役立つ情報やイベント情報を提供。",
        tech: ["Next.js", "PostgreSQL", "Docker"],
        github: "https://github.com/yourname/project2",
        image: "/images/project2.png",
      },
      {
        title: "プロジェクト名 3",
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
        period: "2025.10 — 現在",
        achievements: [
          "マイクラプログラミングを用いた小学生向けプログラミング体験会の運営に従事。",
          "親御さんにプログラミングの重要性を伝える役割も担い、子供たちの IT リテラシー向上に貢献。",
        ],
      },
      {
        company: "株式会社 ART-TRA",
        role: "エンジニア",
        period: "2025.7 — 現在",
        achievements: [
          "大規模 Web 開発のフロントエンドを主に担当。",
          "株式会社長大様との連携事業での主導開発。フロントエンドとバックエンドの両方を担当。",
          "採用サイトの回遊拡張機能プロジェクトでリーダーを担当。",
        ],
        link: {
          label: "CHODAI RECRUIT",
          href: "https://www.chodai.co.jp/recruit/",
        },
      },
    ],
  },
  contact: {
    title: "連絡先",
    subtitle: "お気軽にご連絡ください。",
    email: "your@email.com",
  },
  nav: {
    about: "経歴",
    research: "研究",
    skills: "技術",
    projects: "成果物",
    experience: "職歴",
    contact: "連絡先",
  },
};
