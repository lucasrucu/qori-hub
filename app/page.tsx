import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/motion/Reveal";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Interests />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
