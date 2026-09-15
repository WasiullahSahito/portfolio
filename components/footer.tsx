import { SiGithub } from "react-icons/si";
import { siteConfig } from "@/lib/site-config";
import { FooterNav } from "@/components/footer-nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.role}</p>
        </div>

        <FooterNav />

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <SiGithub size={18} />
        </a>
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-6xl text-center text-xs text-muted sm:text-left">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
