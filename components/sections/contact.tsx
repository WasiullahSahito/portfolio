import { ArrowRight, Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { FloatingOrbs } from "@/components/contact/floating-orbs";

const links = [
  { href: `mailto:${siteConfig.email}`, label: siteConfig.email, icon: Mail, external: false },
  {
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    label: siteConfig.phone,
    icon: Phone,
    external: false,
  },
  { href: siteConfig.linkedin, label: siteConfig.linkedinLabel, icon: FaLinkedin, external: true },
  { href: siteConfig.github, label: siteConfig.githubLabel, icon: SiGithub, external: true },
];

export function Contact() {
  // The form only renders when a submission target is configured for this deployment.
  const formEnabled = Boolean(process.env.CONTACT_WEBHOOK_URL);

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 cinematic-glow opacity-50" aria-hidden="true" />
      <FloatingOrbs />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">11 — Contact</p>

        <h2 className="display mt-10 text-[clamp(2.5rem,9.5vw,8.5rem)] text-foreground">
          Let&apos;s build
          <br />
          something.
        </h2>
        <p className="mt-8 text-xl tracking-tight text-muted-foreground sm:text-2xl">
          Have a product, system, or technical challenge in mind?
        </p>

        <div className="mt-12">
          <MagneticButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-foreground px-8 font-mono text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-white"
            >
              Start a conversation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </MagneticButton>
        </div>

        <ul className="mt-14 grid gap-x-10 border-t border-border sm:grid-cols-2">
          {links.map(({ href, label, icon: Icon, external }) => (
            <li key={label} className="border-b border-border">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex min-h-14 items-center gap-4 py-4 text-sm text-muted-foreground transition-colors hover:text-accent sm:text-base"
              >
                <Icon size={18} className="shrink-0" />
                <span className="min-w-0 break-words">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {formEnabled ? (
          <Reveal className="mt-20 max-w-2xl">
            <p className="eyebrow mb-8">Or send a message</p>
            <ContactForm />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
