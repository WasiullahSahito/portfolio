"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = usePrefersReducedMotion();
  const isCaseStudy = pathname?.startsWith("/work/");

  if (shouldReduceMotion) return <>{children}</>;

  // Case studies get a slight "expand into view" feel instead of a plain slide.
  return (
    <motion.div
      initial={isCaseStudy ? { opacity: 0, scale: 0.98 } : { opacity: 0, y: 12 }}
      animate={isCaseStudy ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: isCaseStudy ? 0.55 : 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
