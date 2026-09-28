export const siteConfig = {
  name: "Wasiullah Sahito",
  role: "Software Engineer",
  title: "Software Engineer | Full Stack Developer (Laravel, PHP, React)",
  location: "Karachi, Pakistan",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wasiullahsahito.vercel.app",
  github: "https://github.com/WasiullahSahito",
  githubLabel: "github.com/WasiullahSahito",
  email: "wasi1237585@gmail.com",
  phone: "+92 333 4698244",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/wasiullah-sahito-bba35a224",
  linkedinLabel: "linkedin.com/in/wasiullah-sahito-bba35a224",
  x: process.env.NEXT_PUBLIC_X_URL || undefined,
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "/wasiullah-sahito-resume.pdf",
  statement: "Building backend systems, full-stack applications, and AI-powered products.",
  summary:
    "Software Engineer and Full Stack Developer specializing in Laravel and PHP backend development, with professional experience in Node.js, Express.js, and React.js. Built REST APIs and backend features for two live taxi platforms for Irish clients, including Laravel Passport authentication, role-based access control (RBAC), real-time WebSockets, and Stripe and SumUp payment integrations. Deployed to production on a Linux VPS with PostgreSQL. Experienced in building AI-powered features with LLM APIs, OCR, and retrieval-augmented generation (RAG). Freelance web developer since 2022.",
  description:
    "Wasiullah Sahito is a Software Engineer and Full Stack Developer in Karachi, Pakistan, specializing in Laravel and PHP backend development, React, REST APIs, real-time systems, payment integrations, and AI/LLM features.",
  navLinks: [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#lab", label: "Lab" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
