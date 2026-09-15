export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  responsibilities: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Axoon Solutions",
    role: "Backend Developer (Intern / Contract)",
    start: "2025-06",
    end: "2025-08",
    location: "Remote, Pakistan",
    summary:
      "Developed and maintained backend services and RESTful APIs in Laravel, Node.js, and Express.js while improving system efficiency and supporting frontend integrations for live application workflows.",
    responsibilities: [
      "Developed and maintained backend services and RESTful APIs in Laravel, Node.js, and Express.js, covering routing, validation, error handling, and persistence.",
      "Improved API response efficiency by 28% by restructuring endpoints, eliminating redundant database calls, and optimizing query patterns.",
      "Integrated client-side applications with backend APIs, defining request/response contracts and resolving deployment and integration defects.",
      "Debugged issues in deployed services and applied live fixes without disrupting dependent modules.",
    ],
  },
];

export type EducationEntry = {
  institution: string;
  degree: string;
  location: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    institution: "SZABIST University",
    degree: "Bachelor of Computer Science",
    location: "Karachi, Pakistan",
    period: "Completed 2026",
  },
];
