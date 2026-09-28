import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: siteConfig.github, label: "GitHub" },
  { href: siteConfig.linkedin, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 sm:px-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-3xl font-semibold uppercase leading-none tracking-[-0.04em] text-foreground sm:text-4xl">
            {siteConfig.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.title}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {siteConfig.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border px-6 py-6 sm:px-10">
        <p className="mx-auto max-w-7xl font-mono text-[11px] tracking-widest text-muted">
          © 2026 {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
