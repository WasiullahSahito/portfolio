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
    company: "Digitize LLC",
    role: "Laravel Developer (Intern → Contract)",
    start: "2026-02",
    end: "2026-06",
    location: "Remote, Pakistan",
    summary:
      "Worked on the FleetMove Laravel backend for fleet management and booking workflows, building production-ready APIs and supporting delivery across web and mobile applications while progressing from intern to contract developer.",
    responsibilities: [
      "Developed the FleetMove Laravel backend for fleet management and booking workflows using PHP, MySQL, and Eloquent ORM.",
      "Built and integrated RESTful APIs consumed by both web and mobile applications.",
      "Delivered backend features, bug fixes, and enhancements for real-world production applications.",
      "Progressed from Laravel Developer Intern to Contract Laravel Developer after completing a 3-month internship.",
    ],
  },
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
