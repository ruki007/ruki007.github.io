import { activeSocials } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 font-mono text-[10px] tracking-[0.18em] text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MATSUNAGA KOKI</p>
          <div className="flex gap-6">
            {activeSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-text"
              >
                {s.label.toUpperCase()}
              </a>
            ))}
          </div>
          <p>NAGOYA, JP</p>
        </div>
      </div>
    </footer>
  );
}
