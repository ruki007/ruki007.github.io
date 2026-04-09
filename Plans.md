# Portfolio Plans.md

作成日: 2026-04-09

---

## Phase 1: Foundation

| Task | 内容 | DoD | Depends | Status |
|------|------|-----|---------|--------|
| 1.1 | Next.js 15 + TypeScript + Tailwind プロジェクト初期化・静的エクスポート設定 [skip:tdd] | `npm run build` が成功し `out/` が生成される | - | cc:完了 [af7c9c9] |
| 1.2 | 型定義 (`lib/types.ts`) と i18n コンテキスト (`lib/i18n.tsx`) 作成 [skip:tdd] | `npx tsc --noEmit` がエラーゼロ | 1.1 | cc:完了 [3c80e41] |
| 1.3 | 日本語コンテンツ (`data/ja.ts`) と英語コンテンツ (`data/en.ts`) 作成 [skip:tdd] | 全セクション分のテキストが定義されている | 1.2 | cc:完了 [3c80e41] |
| 1.4 | テーマ切替コンポーネント (`ThemeToggle.tsx`) と CSS 変数定義 [skip:tdd] | ダーク/ライト切替が動作し `localStorage` に永続化される | 1.1 | cc:完了 [3c80e41] |

---

## Phase 2: UI Sections

| Task | 内容 | DoD | Depends | Status |
|------|------|-----|---------|--------|
| 2.1 | LanguageSwitcher コンポーネント作成 [skip:tdd] | JP/EN 切替で全テキストが切り替わる | 1.2 | cc:完了 [fa52ef1] |
| 2.2 | Navbar コンポーネント（sticky, モバイルメニュー, スムーズスクロール） [skip:tdd] [feature:a11y] | スクロールで背景変化, セクションリンク動作, モバイルハンバーガー開閉 | 2.1, 1.4 | cc:完了 [fa52ef1] |
| 2.3 | Footer コンポーネント（著作権, ソーシャルリンク） [skip:tdd] | ソーシャルアイコンが表示されリンクが有効 | 1.1 | cc:完了 [fa52ef1] |
| 2.4 | Hero セクション（グラデーション背景, CTA, スクロールインジケーター） [skip:tdd] [feature:a11y] | フルスクリーン表示, Framer Motion でフェードイン, CTAボタン動作 | 1.2 | cc:完了 [fa52ef1] |
| 2.5 | About セクション（自己紹介, プロフィール写真エリア） [skip:tdd] | スクロールでフェードイン, 2〜3段落のテキスト表示 | 1.2 | cc:完了 [fa52ef1] |
| 2.6 | Skills セクション（カテゴリ別カード, スタガーアニメーション） [skip:tdd] | 4カテゴリ表示, スクロールでスタガーPop, タグ表示 | 1.2 | cc:完了 [fa52ef1] |
| 2.7 | Projects セクション（カードグリッド, ホバー効果, オーバーレイリンク） [skip:tdd] | 3列/2列/1列レスポンシブ, ホバーで浮き上がり+オーバーレイ | 1.2 | cc:完了 [fa52ef1] |
| 2.8 | Experience セクション（縦タイムライン, 左右交互） [skip:tdd] | デスクトップで左右交互, モバイルで片側, フェードイン | 1.2 | cc:完了 [fa52ef1] |
| 2.9 | Contact セクション（ソーシャルリンクアイコン） [skip:tdd] | GitHub/LinkedIn/X/Mail アイコン表示, ホバーで色変化 | 1.2 | cc:完了 [fa52ef1] |

---

## Phase 3: Integration & Deploy

| Task | 内容 | DoD | Depends | Status |
|------|------|-----|---------|--------|
| 3.1 | ルートレイアウト (`app/layout.tsx`) とページ構成 (`app/page.tsx`) 作成 [skip:tdd] | 全セクションが縦に並び表示される | Phase 2 | cc:完了 [fa52ef1] |
| 3.2 | レスポンシブ調整（モバイル/タブレット/デスクトップ） [skip:tdd] [feature:a11y] | 各ブレークポイントでレイアウト崩れなし | 3.1 | cc:TODO |
| 3.3 | ビルド検証 & GitHub Pages デプロイ設定 (`gh-pages`) [skip:tdd] | `npm run build` 成功, `npx serve out` で全機能確認, `npm run deploy` が実行可能 | 3.2 | cc:TODO |
