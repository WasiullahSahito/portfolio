import { ArrowUpRight, GitFork, Star } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { getGithubProfile, getGithubRepos } from "@/lib/github";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";

const GITHUB_USERNAME = "WasiullahSahito";

function formatUpdated(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export async function Github() {
  const [profile, repos] = await Promise.all([
    getGithubProfile(GITHUB_USERNAME),
    getGithubRepos(GITHUB_USERNAME, 6),
  ]);

  return (
    <section id="github" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="GitHub"
            title="Public code, pulled live"
            description="What's currently on github.com/WasiullahSahito — fetched directly from the GitHub API."
          />
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <SiGithub size={16} />
            Visit profile
          </a>
        </div>

        {profile ? (
          <Reveal className="mt-10 flex flex-wrap gap-8 border-y border-border py-6">
            <div>
              <p className="font-mono text-2xl font-semibold text-accent">{profile.publicRepos}</p>
              <p className="text-xs text-muted-foreground">Public repositories</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-accent">{profile.followers}</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            {profile.bio ? (
              <p className="flex-1 self-center text-sm text-muted-foreground">{profile.bio}</p>
            ) : null}
          </Reveal>
        ) : null}

        {repos.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <Reveal key={repo.name} delay={(i % 3) * 0.08}>
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-lg border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-medium text-foreground group-hover:text-accent">
                      {repo.name}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                    />
                  </div>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center gap-4 font-mono text-xs text-muted">
                    {repo.language ? <span>{repo.language}</span> : null}
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} /> {repo.stars}
                    </span>
                    <span>Updated {formatUpdated(repo.updatedAt)}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10 rounded-lg border border-border bg-surface/60 p-8 text-center">
            <GitFork className="mx-auto text-muted-foreground" size={22} />
            <p className="mt-3 text-sm text-muted-foreground">
              Repository data is temporarily unavailable — visit the profile directly.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
