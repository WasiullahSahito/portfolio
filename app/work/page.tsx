import type { Metadata } from "next";
import { Work } from "@/components/sections/work";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "OnlyMetric (Happy Hour), a restaurant operations SaaS platform, and SZABOT, a retrieval-augmented academic assistant.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="pt-8">
      <Work page />
    </div>
  );
}
