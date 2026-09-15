import { FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ResumeButton({ className }: { className?: string }) {
  if (!siteConfig.resumeUrl) return null;

  return (
    <a
      href={siteConfig.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      download="Wasiullah Sahito - Resume.pdf"
      className={
        className ??
        "pointer-events-auto fixed bottom-8 right-6 z-40 hidden items-center gap-2 rounded-full border border-border-strong bg-background-elevated/80 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition-colors hover:border-glow-purple hover:text-glow-purple lg:flex"
      }
    >
      <FileText size={14} />
      Resume
    </a>
  );
}
