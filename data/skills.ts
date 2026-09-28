export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

// The complete skills list, exactly as supplied.
export const skillGroups: SkillGroup[] = [
  { id: "languages", title: "Languages", items: ["PHP", "JavaScript", "TypeScript", "Python", "SQL"] },
  {
    id: "backend",
    title: "Backend",
    items: [
      "Laravel",
      "Node.js",
      "Express.js",
      "REST API Design",
      "Eloquent ORM",
      "Laravel Passport",
      "Laravel Sanctum",
      "JWT",
      "Role-Based Access Control (RBAC)",
      "Laravel Reverb",
      "WebSockets",
      "PHPUnit",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Database Design", "Query Optimization"],
  },
  {
    id: "apis",
    title: "APIs & Integrations",
    items: ["Stripe", "SumUp", "Webhooks", "Firebase Cloud Messaging (FCM)", "Google Maps API", "SMTP"],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "Linux (Ubuntu)",
      "VPS Deployment",
      "Contabo",
      "CyberPanel",
      "OpenLiteSpeed",
      "Laravel Cloud",
      "Vercel",
      "Postman",
    ],
  },
  {
    id: "ai",
    title: "AI / LLM",
    items: [
      "OpenAI API",
      "Anthropic Claude API",
      "Google Gemini API",
      "Retrieval-Augmented Generation (RAG)",
      "Optical Character Recognition (OCR)",
      "Prompt Engineering",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
];

export const familiarWith = ["AWS", "Docker", "GraphQL", "FastAPI", "Flask", "n8n"];
