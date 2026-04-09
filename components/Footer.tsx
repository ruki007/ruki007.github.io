import { ExternalLink, Globe, User } from "lucide-react";

const socials = [
  { icon: ExternalLink, href: "https://github.com/yourname", label: "GitHub" },
  { icon: Globe, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: User, href: "https://twitter.com/yourname", label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
