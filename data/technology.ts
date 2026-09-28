export type TechnologyGroup = {
  id: string;
  title: string;
  items: string[];
};

// The homepage view of the skill set, grouped by how the work fits together.
export const technologyGroups: TechnologyGroup[] = [
  {
    id: "backend",
    title: "Backend",
    items: ["Laravel", "PHP", "Python", "Node.js", "Express.js"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  { id: "data", title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    id: "apis",
    title: "APIs",
    items: ["REST APIs", "Stripe", "SumUp", "Webhooks", "FCM", "Google Maps API"],
  },
  { id: "realtime", title: "Real-Time", items: ["Laravel Reverb", "WebSockets"] },
  {
    id: "ai",
    title: "AI",
    items: ["OpenAI API", "Anthropic Claude API", "Google Gemini API", "RAG", "OCR"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["Ubuntu", "Contabo", "CyberPanel", "OpenLiteSpeed", "Laravel Cloud", "Vercel"],
  },
];
