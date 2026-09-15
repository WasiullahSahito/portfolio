import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/navigation/navbar";
import { SocialRail } from "@/components/navigation/social-rail";
import { ResumeButton } from "@/components/navigation/resume-button";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider";
import { LoadingProvider } from "@/components/loading/loading-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Full Stack Developer — Laravel & MERN`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Wasiullah Sahito",
    "Full Stack Developer",
    "Laravel Developer",
    "React.js Developer",
    "Node.js Developer",
    "MERN Stack",
    "SaaS Development",
    "REST APIs",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Full Stack Developer — Laravel & MERN`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full Stack Developer — Laravel & MERN`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  ...(siteConfig.email ? { email: siteConfig.email } : {}),
  ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.x].filter(Boolean),
  knowsAbout: [
    "Laravel",
    "PHP",
    "Python",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "REST APIs",
    "WebSockets",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <LoadingProvider>
            <CustomCursor />
            <Navbar />
            <SocialRail />
            <ResumeButton />
            <main id="main-content">{children}</main>
            <Footer />
          </LoadingProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
