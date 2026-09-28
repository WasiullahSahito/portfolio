import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/animations/reveal";
import { Parallax } from "@/components/animations/parallax";
import { ProjectVisual } from "@/components/work/project-visual";

export function Work({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";

  return (
    <section id="work" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">03 — Selected work</p>
            <Heading className="display mt-6 text-[clamp(2.5rem,8vw,6.5rem)] text-foreground">
              Selected
              <br />
              work
            </Heading>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Two projects, each a system rather than a page: a restaurant operations platform with AI
            built in, and a retrieval-augmented academic assistant.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-28 sm:mt-28 sm:gap-40">
          {projects.map((project, i) => (
            <article key={project.slug} aria-labelledby={`work-${project.slug}`}>
              <Reveal>
                <div className="flex items-baseline justify-between gap-6 border-t border-border pt-5">
                  <span className="font-mono text-xs tracking-[0.3em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow text-right">
                    {project.category} · {project.year}
                  </span>
                </div>
              </Reveal>

              <Reveal>
                <h3
                  id={`work-${project.slug}`}
                  className="display mt-8 text-[clamp(3rem,11vw,9.5rem)] text-foreground"
                >
                  {project.name}
                  {project.alias ? (
                    <span className="mt-3 block text-[0.28em] tracking-[-0.02em] text-muted-foreground">
                      ({project.alias})
                    </span>
                  ) : null}
                </h3>
              </Reveal>

              <Link
                href={`/work/${project.slug}`}
                data-cursor="view"
                aria-label={`View ${project.name} case study`}
                className="group mt-10 block rounded-xl focus-visible:outline-offset-4"
              >
                <Parallax distance={18}>
                  <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
                    <ProjectVisual project={project} />
                  </div>
                </Parallax>
              </Link>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
                <Reveal>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {project.overview}
                  </p>
                </Reveal>

                <Reveal delay={0.05}>
                  <ul className="flex flex-col gap-3">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.15em] text-muted">
                    {project.technologies.join(" · ")}
                  </p>
                </Reveal>

                <Reveal delay={0.1} className="flex flex-wrap items-start gap-x-8 gap-y-4 lg:justify-end">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/cta inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
                  >
                    <span className="border-b border-border-strong pb-1 transition-colors group-hover/cta:border-accent">
                      View case study
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                    />
                  </Link>
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
                    >
                      <SiGithub size={14} />
                      GitHub
                    </a>
                  ) : null}
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
