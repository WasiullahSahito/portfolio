import { Mail, MapPin, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/animations/reveal";
import { ContactVisual } from "@/components/3d/contact-visual";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 cinematic-glow opacity-60" />
      <ContactVisual />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something worth shipping"
              description="Have a project, a role, or an idea worth discussing? Send a message and I'll respond directly."
            />

            <div className="mt-10 flex flex-col gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <SiGithub size={18} />
                github.com/WasiullahSahito
              </a>
              {siteConfig.linkedin ? (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              ) : null}
              {siteConfig.email ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail size={18} />
                  {siteConfig.email}
                </a>
              ) : null}
              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone size={18} />
                  {siteConfig.phone}
                </a>
              ) : null}
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} />
                {siteConfig.location}
              </p>
            </div>
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
