import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Systems I've designed and built end to end, from database schema to the interface on top."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <TiltCard className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface/60">
                  <div className="relative flex h-40 flex-col overflow-hidden border-b border-border bg-background-elevated sm:h-48">
                    <div className="cinematic-glow absolute inset-0 opacity-70" />
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <div className="relative flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-red-400/60" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                      <span className="h-2 w-2 rounded-full bg-green-400/60" />
                      <span className="ml-3 truncate rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] text-muted">
                        {project.slug}.app
                      </span>
                    </div>
                    <div className="relative flex flex-1 items-center justify-center">
                      <span className="text-6xl font-semibold tracking-tight text-white/6 sm:text-7xl">
                        {project.monogram}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-accent">
                          {project.type}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-foreground">
                          {project.name}
                        </h3>
                      </div>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} on GitHub`}
                          className="rounded-full border border-border-strong p-2.5 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                          <SiGithub size={18} />
                        </a>
                      ) : null}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.tagline}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        View case study
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
