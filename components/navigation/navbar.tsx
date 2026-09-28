"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { useActiveSection, useAnchorScroll } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

const sectionIds = siteConfig.navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeId = useActiveSection(sectionIds, pathname);
  const scrollTo = useAnchorScroll();
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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        menuOpen
          ? "h-dvh overflow-y-auto bg-background"
          : scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300 sm:px-10",
          scrolled || menuOpen ? "py-3.5" : "py-6"
        )}
      >
        <Link
          href={isHome ? "#home" : "/"}
          onClick={(e) => {
            if (!isHome) return;
            e.preventDefault();
            scrollTo("#home");
          }}
          aria-label={`${siteConfig.name} — home`}
          className={cn(
            "flex font-mono font-semibold uppercase text-foreground",
            scrolled || menuOpen
              ? "flex-row gap-2 text-[11px] leading-none tracking-[0.25em]"
              : "flex-col text-xs leading-[1.35] tracking-[0.3em]"
          )}
        >
          <span>Wasiullah</span>
          <span>Sahito</span>
        </Link>

        <p className="hidden items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {siteConfig.location}
        </p>

        <ul className="hidden items-center gap-9 md:flex">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = isHome && activeId === id;
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
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-transform duration-300",
              menuOpen ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-transform duration-300",
              menuOpen ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
}
