export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core languages I write production code in.",
    skills: [
      { name: "PHP", icon: "php" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces built for clarity, performance, and usability.",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side logic, APIs, and application architecture.",
    skills: [
      { name: "Laravel", icon: "laravel" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational and document data modeling at scale.",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "How APIs get built, tested, and automated.",
    skills: [
      { name: "REST APIs", icon: "api" },
      { name: "WebSockets", icon: "websockets" },
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "n8n Automation", icon: "n8n" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description: "Shipping and hosting production applications.",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Vercel", icon: "vercel" },
      { name: "Linux", icon: "linux" },
      { name: "Laravel Cloud", icon: "laravel" },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Using AI tooling to build faster without cutting corners.",
    skills: [
      { name: "ChatGPT", icon: "ai" },
      { name: "GitHub Copilot", icon: "copilot" },
      { name: "OpenAI API", icon: "ai" },
      { name: "Prompt Engineering", icon: "ai-workflow" },
    ],
  },
];
