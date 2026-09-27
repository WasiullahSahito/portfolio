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
    id: "backend",
    title: "Backend",
    description: "Server-side logic, auth, and application architecture — where most of my production work lives.",
    skills: [
      { name: "Laravel", icon: "laravel" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Eloquent ORM", icon: "database" },
      { name: "Laravel Passport", icon: "shield" },
      { name: "Laravel Sanctum", icon: "shield" },
      { name: "Laravel Reverb", icon: "websockets" },
      { name: "RBAC", icon: "shield" },
      { name: "PHPUnit", icon: "test" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    description: "Core languages I write production code in.",
    skills: [
      { name: "PHP", icon: "php" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "database" },
    ],
  },
  {
    id: "apis",
    title: "APIs & Real-time",
    description: "How services talk to each other and to clients, in real time.",
    skills: [
      { name: "REST API Design", icon: "api" },
      { name: "WebSockets", icon: "websockets" },
      { name: "JWT", icon: "shield" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces built to consume real APIs — clear, fast, and usable.",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational and document data modeling, query optimization at scale.",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Database Design", icon: "database" },
      { name: "Query Optimization", icon: "database" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Third-party systems wired into production applications.",
    skills: [
      { name: "Stripe", icon: "stripe" },
      { name: "SumUp", icon: "payment" },
      { name: "Google Maps API", icon: "maps" },
      { name: "Firebase Cloud Messaging", icon: "firebase" },
      { name: "SMTP", icon: "mail" },
    ],
  },
  {
    id: "ai",
    title: "AI Development",
    description: "Building with AI models, not just prompting them.",
    skills: [
      { name: "Google Gemini API", icon: "gemini" },
      { name: "OpenAI API", icon: "openai" },
      { name: "Anthropic Claude API", icon: "claude" },
      { name: "RAG", icon: "ai-workflow" },
      { name: "OCR", icon: "ai-workflow" },
      { name: "Prompt Engineering", icon: "ai-workflow" },
      { name: "Claude Code", icon: "claude" },
      { name: "GitHub Copilot", icon: "copilot" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    description: "Shipping and operating production applications.",
    skills: [
      { name: "Linux VPS", icon: "linux" },
      { name: "CyberPanel", icon: "server" },
      { name: "OpenLiteSpeed", icon: "server" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Laravel Cloud", icon: "laravel" },
      { name: "Vercel", icon: "vercel" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
    ],
  },
];
