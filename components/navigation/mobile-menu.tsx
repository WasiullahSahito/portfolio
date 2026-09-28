"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FileText, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useAnchorScroll } from "@/lib/hooks";

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

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const scrollTo = useAnchorScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="border-t border-border md:hidden"
        >
          <ul className="flex flex-col px-6 py-8">
            {siteConfig.navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-border"
              >
                <Link
                  href={isHome ? link.href : `/${link.href}`}
                  scroll={false}
                  onClick={(e) => {
                    onClose();
                    if (!isHome) return;
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="flex min-h-16 items-baseline gap-4 py-5 text-4xl font-semibold uppercase tracking-tight text-foreground"
                >
                  <span className="font-mono text-xs tracking-widest text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center justify-between px-6 py-5">
            <ul className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>

            {siteConfig.resumeUrl ? (
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Wasiullah Sahito - Resume.pdf"
                className="flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/90"
              >
                <FileText size={14} />
                Resume
              </a>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
