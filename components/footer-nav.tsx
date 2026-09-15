"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { useAnchorScroll } from "@/lib/hooks";

export function FooterNav() {
  const scrollTo = useAnchorScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
      {siteConfig.navLinks.map((link) => (
        <Link
          key={link.href}
          href={isHome ? link.href : `/${link.href}`}
          scroll={false}
          onClick={(e) => {
            if (!isHome) return;
            e.preventDefault();
            scrollTo(link.href);
          }}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
