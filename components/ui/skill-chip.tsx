"use client";

import { motion } from "motion/react";
import { SkillIcon } from "@/components/skill-icon";

export function SkillChip({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.span
      whileHover={{
        scale: 1.06,
        rotate: -1.5,
        borderColor: "var(--accent)",
        boxShadow: "0 0 0 1px var(--accent), 0 8px 24px -8px color-mix(in srgb, var(--accent) 45%, transparent)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated px-3.5 py-2 text-sm text-foreground/90"
    >
      <SkillIcon
        icon={icon}
        className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent"
      />
      {name}
    </motion.span>
  );
}
