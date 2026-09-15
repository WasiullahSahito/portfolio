export const siteConfig = {
  name: "Wasiullah Sahito",
  role: "Software Engineer",
  roleLong: "Software Engineer | Backend & Full Stack Development",
  location: "Karachi, Sindh, Pakistan",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://devwasiullah.netlify.app",
  github: "https://github.com/WasiullahSahito",
  email: "wasi1237585@gmail.com",
  phone: "+92 333 4698244",
  // Not provided yet — kept undefined rather than fabricated. Set these env
  // vars to surface the corresponding links once available.
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || undefined,
  x: process.env.NEXT_PUBLIC_X_URL || undefined,
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "/wasiullah-sahito-resume.pdf",
  positioning:
    "Backend-focused Full Stack Developer specializing in Laravel, Node.js, React.js, RESTful API design, real-time systems, and scalable SaaS architecture.",
  description:
    "Wasiullah Sahito is a backend-focused Full Stack Developer specializing in Laravel, Node.js, and React.js — building production SaaS applications, real-time systems, and secure APIs with RBAC and optimized database access.",
  navLinks: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
