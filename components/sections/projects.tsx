import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { PipelineFlow } from "@/components/pipeline/pipeline-flow";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Premium case studies"
          description="Four production systems, from database schema to deployed infrastructure — not screenshots of a Figma file."
        />

        <div className="mt-20 flex flex-col gap-28">
          {featuredProjects.map((project, i) => (
            <RevealGroup
              key={project.slug}
              stagger={0.1}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <RevealItem>
                <TiltCard>
                  <div className="relative flex aspect-4/3 flex-col overflow-hidden rounded-xl border border-border bg-background-elevated sm:aspect-16/10">
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
                      <span className="text-8xl font-semibold tracking-tight text-white/6 sm:text-9xl">
                        {project.monogram}
                      </span>
                    </div>
                    <div className="relative border-t border-white/5 p-5">
                      <PipelineFlow stages={project.pipeline} size="sm" />
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>

              <div>
                <RevealItem className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    {project.type}
                  </p>
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
                </RevealItem>

                <RevealItem>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">{project.tagline}</p>
                </RevealItem>

                <RevealItem>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {project.overview}
                  </p>
                </RevealItem>

                <RevealItem>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </RevealItem>

                <RevealItem className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <Link href={`/projects/${project.slug}`}>
                      View case study
                      <ArrowUpRight size={16} />
                    </Link>
                  </Button>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      Visit live site ↗
                    </a>
                  ) : null}
                </RevealItem>
              </div>
            </RevealGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
