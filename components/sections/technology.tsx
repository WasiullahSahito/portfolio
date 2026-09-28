"use client";

import { useState } from "react";
import { technologyGroups } from "@/data/technology";
import { familiarWith } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Technology() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="technology" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">07 — Technology</p>

        <ul className="mt-12 border-t border-border" onMouseLeave={() => setHovered(null)}>
          {technologyGroups.map((group) => {
            const dimmed = hovered !== null && hovered !== group.id;
            return (
              <li
                key={group.id}
                onMouseEnter={() => setHovered(group.id)}
                className={cn(
                  "grid gap-3 border-b border-border py-6 transition-opacity duration-300 lg:grid-cols-[14rem_1fr] lg:gap-10 lg:py-7",
                  dimmed && "opacity-30"
                )}
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent lg:pt-2">
                  {group.title}
                </h3>
                <p className="min-w-0 text-[clamp(1.5rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      {item}
                      {i < group.items.length - 1 ? (
                        <>
                          <span className="ml-[0.3em] text-muted" aria-hidden="true">
                            /
                          </span>{" "}
                        </>
                      ) : null}
                    </span>
                  ))}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 grid gap-3 lg:grid-cols-[14rem_1fr] lg:gap-10">
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Familiar with</h3>
          <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
            {familiarWith.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
