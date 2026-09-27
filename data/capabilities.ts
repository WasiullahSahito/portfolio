import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  Database,
  Network,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type Capability = {
  title: string;
  description: string;
  evidence: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "API Architecture",
    description:
      "REST APIs designed to hold up under real client load — versioned resource groups, not ad-hoc endpoints.",
    evidence: "16-module Laravel API (FleetMove) · 15 API resource groups (OnlyMetric)",
    icon: Network,
  },
  {
    title: "Auth & Access Control",
    description:
      "Authentication and role-based authorization built server-side, so access rules can't be bypassed from the client.",
    evidence: "Dual Passport + Sanctum auth with RBAC across roles (FleetMove)",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Systems",
    description:
      "WebSocket infrastructure and push notifications for state that has to stay live across multiple clients.",
    evidence: "Laravel Reverb + FCM push notifications (FleetMove)",
    icon: Radio,
  },
  {
    title: "Payments & Billing",
    description:
      "Production payment integrations with signature verification, not just a client-side checkout widget.",
    evidence: "Unified Stripe + SumUp cards (Daytrip) · 5-gateway abstraction (FleetMove)",
    icon: CreditCard,
  },
  {
    title: "Database Architecture",
    description:
      "Relational schema design and query optimization measured in real performance gains, not guesses.",
    evidence: "~28% faster APIs (Axoon Solutions) · ~25% faster reports (OnlyMetric)",
    icon: Database,
  },
  {
    title: "AI & LLM Integration",
    description:
      "Provider-agnostic AI architecture and retrieval pipelines built into production applications.",
    evidence: "5-provider LLM layer for OCR (OnlyMetric) · RAG pipeline (SZABOT)",
    icon: Sparkles,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Full deployment lifecycle ownership — provisioning, configuring, and operating production infrastructure.",
    evidence: "Contabo VPS (Ubuntu, OpenLiteSpeed, PostgreSQL) · Laravel Cloud · Vercel",
    icon: Server,
  },
];
