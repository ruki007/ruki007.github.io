import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

// 明朝 — display type. Carries the name, section titles and pull quotes.
const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-shippori",
});

// ゴシック — body type.
const zen = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen",
});

// Mono — labels, indices, spec sheets.
const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
});

export const metadata: Metadata = {
  title: "松永浩輝 — Optical Networks & Web",
  description:
    "名古屋大学 工学部 電気電子情報工学科。光ネットワークの研究と Web 開発のポートフォリオ。",
};

// Applied before first paint so the ink theme never flashes paper.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The font variables must live on <html>: Tailwind's @theme resolves
    // --font-display/-body/-mono at :root, so they have to be in scope there.
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${shippori.variable} ${zen.variable} ${jet.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-fg antialiased">
        <div className="grain" aria-hidden="true" />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
