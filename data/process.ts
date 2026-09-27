import type { LucideIcon } from "lucide-react";
import { Database, GitBranch, Rocket, ShieldCheck, TrendingUp } from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
  evidence: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Architect first",
    description:
      "Data model, API contracts, and access control get designed before feature code does — not discovered halfway through a sprint.",
    evidence: "16-module domain split (FleetMove) · server-authoritative fare formula (Daytrip)",
    icon: Database,
  },
  {
    title: "Build with tests",
    description:
      "Booking and payment-critical paths get PHPUnit coverage, not manual spot-checks, before they ship.",
    evidence: "PHPUnit across booking & payment flows (Daytrip, OnlyMetric)",
    icon: GitBranch,
  },
  {
    title: "Validate every boundary",
    description:
      "Client input, webhook signatures, and AI output all get verified server-side — nothing crossing a trust boundary is taken on faith.",
    evidence: "Signed Stripe webhooks, re-verified SumUp setups, human-reviewed AI output (OnlyMetric)",
    icon: ShieldCheck,
  },
  {
    title: "Own deployment",
    description:
      "Shipping means the full lifecycle — provisioning and hardening a VPS or configuring a managed platform, not handing off a build artifact.",
    evidence: "Contabo VPS, Ubuntu, OpenLiteSpeed (Daytrip) · Laravel Cloud (OnlyMetric)",
    icon: Rocket,
  },
  {
    title: "Measure, then iterate",
    description:
      "Performance work is driven by what's actually slow, and the improvement gets measured, not assumed.",
    evidence: "~28% faster APIs (Axoon) · ~25% faster reports (OnlyMetric)",
    icon: TrendingUp,
  },
];
