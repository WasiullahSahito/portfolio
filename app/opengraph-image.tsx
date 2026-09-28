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
          background: "#08080a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(168,85,247,0.25), transparent 45%), radial-gradient(circle at 85% 80%, rgba(91,157,255,0.22), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#a855f7",
            fontFamily: "monospace",
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 96,
            fontWeight: 600,
            color: "#f6f4f0",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#a8a49e",
            maxWidth: 900,
          }}
        >
          Full Stack Developer · Laravel · PHP · React
        </div>
      </div>
    ),
    { ...size }
  );
}
