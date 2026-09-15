"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { useActiveSection, useAnchorScroll } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

const sectionIds = siteConfig.navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const scrollTo = useAnchorScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        menuOpen
          ? "h-dvh overflow-y-auto bg-background"
          : scrolled
            ? "glass border-b border-border"
            : "border-b border-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300",
          scrolled || menuOpen ? "py-4" : "py-6"
        )}
      >
        <Link
          href={isHome ? "#home" : "/"}
          onClick={(e) => {
            if (!isHome) return;
            e.preventDefault();
            scrollTo("#home");
          }}
          className="font-mono text-sm font-semibold tracking-[0.3em] text-foreground"
        >
          WS<span className="text-glow-purple">.</span>
        </Link>

        {siteConfig.email ? (
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-foreground md:block"
          >
            {siteConfig.email}
          </a>
        ) : null}

        <ul className="hidden items-center gap-9 md:flex">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <Link
                  href={isHome ? link.href : `/${link.href}`}
                  scroll={false}
                  onClick={(e) => {
                    if (!isHome) return;
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={cn(
                    "relative font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-glow-purple"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
