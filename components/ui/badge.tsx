import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-xs tracking-wide text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
