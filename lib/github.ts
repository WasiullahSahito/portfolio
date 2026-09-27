export type GithubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  htmlUrl: string;
  avatarUrl: string;
};

export type GithubRepo = {
  name: string;
  htmlUrl: string;
  description: string | null;
  stars: number;
  language: string | null;
  updatedAt: string;
};

const GITHUB_HEADERS = {
  Accept: "application/vnd.github+json",
  "User-Agent": "wasiullahsahito-portfolio",
};

export async function getGithubProfile(username: string): Promise<GithubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: GITHUB_HEADERS,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      login: data.login,
      name: data.name,
      bio: data.bio,
      publicRepos: data.public_repos,
      followers: data.followers,
      htmlUrl: data.html_url,
      avatarUrl: data.avatar_url,
    };
  } catch {
    return null;
  }
}

export async function getGithubRepos(username: string, limit = 6): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=${limit}`,
      { headers: GITHUB_HEADERS, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter((repo) => !repo.fork)
      .slice(0, limit)
      .map((repo) => ({
        name: repo.name,
        htmlUrl: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        language: repo.language,
        updatedAt: repo.pushed_at,
      }));
  } catch {
    return [];
  }
}
