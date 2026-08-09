export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

/**
 * Single source of truth for outbound links (Contact + Footer).
 * Entries still pointing at template placeholders are filtered out by
 * `activeSocials` so no broken link ever renders.
 */
export const socials: SocialLink[] = [
  { label: "GitHub", handle: "@ruki007", href: "https://github.com/ruki007" },
  // TODO: 実アカウントに差し替えると自動的に表示されます
  { label: "X", handle: "@yourname", href: "https://x.com/yourname" },
  {
    label: "LinkedIn",
    handle: "/in/yourname",
    href: "https://linkedin.com/in/yourname",
  },
];

const isPlaceholder = (href: string) =>
  href.includes("yourname") || href.includes("example.com");

export const activeSocials = socials.filter((s) => !isPlaceholder(s.href));
