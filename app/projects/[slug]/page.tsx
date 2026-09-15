import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  const title = `${project.name} — ${project.type}`;
  const description = project.overview;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.overview,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: project.technologies.join(", "),
    url: `${siteConfig.url}/projects/${project.slug}`,
  };

  return (
    <article className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-105 cinematic-glow opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-105 bg-grid opacity-10 mask-[linear-gradient(to_bottom,black,transparent)]" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <Link
          href="/#projects"
          scroll={false}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to work
        </Link>

        <header className="mt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {project.type}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github ? (
              <Button asChild variant="outline">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <SiGithub size={18} />
                  GitHub
                </a>
              </Button>
            ) : null}
            {project.live ? (
              <Button asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowUpRight size={18} />
                </a>
              </Button>
            ) : null}
          </div>
        </header>

        <div className="mt-16 flex flex-col gap-14">
          <section>
            <h2 className="text-xl font-medium text-foreground">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">The problem</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">The solution</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">Features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">Architecture</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {project.architecture.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">Challenges</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {project.challenges.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent-violet/40 pl-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">Results</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.results}
            </p>
          </section>
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <Link
            href="/#contact"
            scroll={false}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Interested in working together? Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
