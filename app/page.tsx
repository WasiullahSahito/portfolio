import { Hero } from "@/components/hero/hero";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { EngineeringCapabilities } from "@/components/sections/engineering-capabilities";
import { EngineeringProcess } from "@/components/sections/engineering-process";
import { AiDevelopment } from "@/components/sections/ai-development";
import { Github } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";
import { HashScrollHandler } from "@/components/animations/hash-scroll-handler";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <EngineeringCapabilities />
      <EngineeringProcess />
      <AiDevelopment />
      <Github />
      <Contact />
    </>
  );
}
