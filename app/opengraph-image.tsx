import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#060810",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(94,234,212,0.25), transparent 45%), radial-gradient(circle at 85% 80%, rgba(139,140,248,0.25), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#5eead4",
            fontFamily: "monospace",
          }}
        >
          {siteConfig.roleLong}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 96,
            fontWeight: 600,
            color: "#f3f5fa",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#a3abbf",
            maxWidth: 900,
          }}
        >
          Laravel · React.js · Node.js · REST APIs · SaaS
        </div>
      </div>
    ),
    { ...size }
  );
}
