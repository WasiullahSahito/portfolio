import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { experience, formatPeriod } from "@/data/experience";
import { education } from "@/data/education";
import { familiarWith, skillGroups } from "@/data/skills";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Wasiullah Sahito: Laravel Developer at Digitize LLC, Backend Developer at Axoon Solutions, and freelance web developer since 2022.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] cinematic-glow opacity-50"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <Link
          href="/#experience"
          scroll={false}
          className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Home
        </Link>

        <p className="eyebrow mt-8">{siteConfig.name}</p>
        <h1 className="display mt-6 text-[clamp(3rem,12vw,9rem)] text-foreground">Experience</h1>

        <ol className="mt-20 border-t border-border">
          {experience.map((entry) => (
            <Reveal as="li" key={entry.id}>
              <div className="grid gap-x-16 gap-y-6 border-b border-border py-14 lg:grid-cols-[1fr_1.5fr]">
                <div>
                  <time className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                    {formatPeriod(entry.start, entry.end)}
                  </time>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {entry.company}
                  </h2>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {entry.role}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {entry.location}
                  </p>
                  {entry.links ? (
                    <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
                      {entry.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-1.5 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-accent"
                          >
                            {link.label}
                            <ArrowUpRight size={13} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div>
                  <ul className="flex flex-col gap-4">
                    {entry.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {entry.note ? (
                    <p className="mt-6 font-mono text-[11px] tracking-wide text-muted">{entry.note}</p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <section aria-labelledby="skills-heading" className="mt-24">
          <h2 id="skills-heading" className="eyebrow">
            Technical skills
          </h2>
          <dl className="mt-8 border-t border-border">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="grid gap-3 border-b border-border py-6 lg:grid-cols-[14rem_1fr] lg:gap-10"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {group.title}
                </dt>
                <dd className="text-base leading-relaxed text-foreground/90">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
            <div className="grid gap-3 border-b border-border py-6 lg:grid-cols-[14rem_1fr] lg:gap-10">
              <dt className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                Familiar with
              </dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">
                {familiarWith.join(" · ")}
              </dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="education-heading" className="mt-24">
          <h2 id="education-heading" className="eyebrow">
            Education
          </h2>
          <ul className="mt-8 border-t border-border">
            {education.map((entry) => (
              <li key={entry.degree} className="border-b border-border py-6">
                <p className="text-lg font-medium uppercase tracking-tight text-foreground">
                  {entry.degree}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.institution}, {entry.location} · {entry.status}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
