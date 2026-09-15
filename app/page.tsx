import { Hero } from "@/components/hero/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { HashScrollHandler } from "@/components/animations/hash-scroll-handler";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
