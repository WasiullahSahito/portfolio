"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Horizontal scroller that mouse users can drag. Touch and keyboard users use
 * native scrolling; the container is focusable so arrow keys work.
 */
export function DragScroll({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const endDrag = () => {
    drag.current.active = false;
    if (ref.current) ref.current.style.scrollSnapType = "";
  };

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      tabIndex={0}
      data-cursor="drag"
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse" || e.button !== 0 || !ref.current) return;
        // Snapping fights programmatic scrolling, so pause it for the drag.
        ref.current.style.scrollSnapType = "none";
        drag.current = {
          active: true,
          startX: e.clientX,
          startScroll: ref.current.scrollLeft,
          moved: false,
        };
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (!d.active || !ref.current) return;
        const dx = e.clientX - d.startX;
        if (Math.abs(dx) > 4) d.moved = true;
        ref.current.scrollLeft = d.startScroll - dx;
      }}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={(e) => {
        if (drag.current.moved) {
          e.preventDefault();
          e.stopPropagation();
          drag.current.moved = false;
        }
      }}
      className={cn(
        "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
