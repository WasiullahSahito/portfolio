import { CharacterVisual } from "@/components/3d/character-visual";
import { HeroText } from "./hero-text";
import { ScrollIndicator } from "./scroll-indicator";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 cinematic-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="absolute inset-0">
        <CharacterVisual />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-transparent to-background" />

      <HeroText />
      <ScrollIndicator />
    </section>
  );
}
