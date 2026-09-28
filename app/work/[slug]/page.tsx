import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { ReactNode } from "react";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { ProjectVisual, ScreenshotFrame } from "@/components/work/project-visual";
import { ArchitectureExplorer } from "@/components/architecture/architecture-explorer";
import { Reveal } from "@/components/animations/reveal";

function CaseSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`section-${index}`}
      className="grid grid-cols-[minmax(0,1fr)] gap-6 border-t border-border py-14 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16 lg:py-20"
    >
      <div className="flex items-baseline gap-4 lg:flex-col lg:gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-accent">
          {String(index).padStart(2, "0")}
        </span>
        <h2
          id={`section-${index}`}
          className="font-mono text-xs uppercase tracking-[0.3em] text-foreground"
        >
          {title}
        </h2>
      </div>
      <Reveal>{children}</Reveal>
    </section>
  );
}

function Lines({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <li
          key={item}
          className="group grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-4 first:pt-0 last:border-b-0 sm:grid-cols-[2.5rem_1fr]"
        >
          <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/90 sm:text-base">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.name}${project.alias ? ` (${project.alias})` : ""} — ${project.category}`;
  const description = project.overview;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${siteConfig.url}/work/${project.slug}`,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.overview,
    dateCreated: project.year,
    creator: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    keywords: project.technologies.join(", "),
    url: `${siteConfig.url}/work/${project.slug}`,
  };

  let section = 0;
  const next = () => ++section;

  return (
    <article className="relative pb-24 pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] cinematic-glow opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-grid opacity-[0.07] mask-[linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <Link
          href="/#work"
          scroll={false}
          className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All work
        </Link>

        <header className="mt-8">
          <p className="eyebrow">
            {project.category} · {project.year}
            {project.type ? ` · ${project.type}` : ""}
          </p>
          <h1 className="display mt-6 text-[clamp(3rem,12.5vw,10rem)] text-foreground">
            {project.name}
            {project.alias ? (
              <span className="mt-3 block text-[0.28em] tracking-[-0.02em] text-muted-foreground">
                ({project.alias})
              </span>
            ) : null}
          </h1>

          <div className="mt-12 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-foreground/90">
              {project.technologies.join(" · ")}
            </p>

            {project.links.github || project.links.live ? (
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
                  >
                    <span className="border-b border-border-strong pb-1 transition-colors group-hover:border-accent">
                      Live website
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
                  >
                    <SiGithub size={15} />
                    GitHub
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </header>

        <div className="mt-12 lg:mt-16">
          <CaseSection index={next()} title="Overview">
            <p className="max-w-3xl text-xl leading-snug tracking-tight text-foreground sm:text-3xl">
              {project.overview}
            </p>
          </CaseSection>

          <CaseSection index={next()} title="Role">
            <Lines items={project.built} />
          </CaseSection>

          <CaseSection index={next()} title="Technology">
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border-strong px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection index={next()} title="Challenge">
            <Lines items={project.challenges} />
          </CaseSection>

          {project.diagrams.length ? (
            <CaseSection index={next()} title="Architecture">
              <ArchitectureExplorer diagrams={project.diagrams} />
            </CaseSection>
          ) : null}

          <CaseSection index={next()} title="Key features">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface/50 px-4 py-3.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </CaseSection>

          {project.performance ? (
            <CaseSection index={next()} title="Performance">
              <p className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-none tracking-tighter text-foreground">
                {project.performance.value}
              </p>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                {project.performance.label}, achieved by restructuring database queries.
              </p>
            </CaseSection>
          ) : null}

          <CaseSection index={next()} title="Interface">
            {project.screenshots?.length ? (
              <>
                <div className="flex flex-col gap-14">
                  {project.screenshots.map((shot) => (
                    <figure key={shot.src}>
                      <ScreenshotFrame
                        shot={shot}
                        label={`${project.slug} / ${shot.caption.toLowerCase()}`}
                        sizes="(min-width: 1280px) 900px, 100vw"
                      />
                      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="mt-10 font-mono text-[11px] tracking-wide text-muted">
                  Screenshots of the application.
                  {project.screenshotNote ? ` ${project.screenshotNote}` : ""}
                </p>
              </>
            ) : (
              <>
                <ProjectVisual project={project} />
                <p className="mt-4 font-mono text-[11px] tracking-wide text-muted">
                  A schematic of the system described above, not a screenshot.
                </p>
              </>
            )}
          </CaseSection>
        </div>

        {nextProject && nextProject.slug !== project.slug ? (
          <Link
            href={`/work/${nextProject.slug}`}
            data-cursor="view"
            className="group mt-10 block border-t border-border-strong pt-10"
          >
            <p className="eyebrow">Next case study</p>
            <p className="display mt-6 flex items-end justify-between gap-4 text-[clamp(2rem,9vw,7.5rem)] text-foreground transition-colors group-hover:text-accent">
              {nextProject.name}
              <ArrowUpRight
                className="mb-1 h-7 w-7 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:mb-2 sm:h-10 sm:w-10"
              />
            </p>
          </Link>
        ) : null}

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/#contact"
            scroll={false}
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
          >
            Have a product, system, or technical challenge in mind?
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
