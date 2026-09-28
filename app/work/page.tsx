import type { Metadata } from "next";
import { Work } from "@/components/sections/work";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "OnlyMetric (Happy Hour), Daytrip, FleetMove, SZABOT, and ODDCO Studios: a restaurant operations SaaS platform, two live taxi platforms, a retrieval-augmented academic assistant, and a marketing website.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="pt-8">
      <Work page />
    </div>
  );
}
