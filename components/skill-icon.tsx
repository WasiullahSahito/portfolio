import {
  SiPhp,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPostman,
  SiN8N,
  SiVercel,
  SiLinux,
  SiGithubcopilot,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Bot, Network, Radio, Sparkles, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType | LucideIcon> = {
  php: SiPhp,
  javascript: SiJavascript,
  python: SiPython,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  laravel: SiLaravel,
  nodejs: SiNodedotjs,
  express: SiExpress,
  fastapi: SiFastapi,
  flask: SiFlask,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  api: Network,
  websockets: Radio,
  git: SiGit,
  docker: SiDocker,
  postman: SiPostman,
  n8n: SiN8N,
  aws: FaAws,
  vercel: SiVercel,
  linux: SiLinux,
  ai: Bot,
  copilot: SiGithubcopilot,
  "ai-workflow": Sparkles,
};

export function SkillIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = iconMap[icon] ?? Network;
  return <Icon className={className} aria-hidden />;
}
