import { Hero } from "@/components/hero/hero";
import { Intro } from "@/components/sections/intro";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { ArchitectureLab } from "@/components/sections/architecture-lab";
import { Metrics } from "@/components/sections/metrics";
import { Experience } from "@/components/sections/experience";
import { Technology } from "@/components/sections/technology";
import { Lab } from "@/components/sections/lab";
import { Education } from "@/components/sections/education";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { HashScrollHandler } from "@/components/animations/hash-scroll-handler";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Hero />
      <Intro />
      <Work />
      <Process />
      <ArchitectureLab />
      <Metrics />
      <Experience />
      <Technology />
      <Lab />
      <Education />
      <About />
      <Contact />
    </>
  );
}
