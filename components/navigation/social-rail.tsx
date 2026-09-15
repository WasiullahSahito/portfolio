import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { href: siteConfig.github, icon: SiGithub, label: "GitHub" },
  { href: siteConfig.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: siteConfig.x, icon: FaXTwitter, label: "X" },
  {
    href: siteConfig.email ? `mailto:${siteConfig.email}` : undefined,
    icon: Mail,
    label: "Email",
  },
].filter((link): link is { href: string; icon: typeof Mail; label: string } =>
  Boolean(link.href)
);

export function SocialRail() {
  return (
    <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-16 lg:flex">
      <div className="pointer-events-auto mx-auto flex flex-col items-center gap-5 py-8">
        <span className="h-16 w-px bg-gradient-to-b from-transparent to-border-strong" aria-hidden />
        <ul className="flex flex-col items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-glow-purple"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
        <span className="h-16 w-px bg-gradient-to-t from-transparent to-border-strong" aria-hidden />
      </div>
    </div>
  );
}
