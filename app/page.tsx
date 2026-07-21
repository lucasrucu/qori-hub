import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { personJsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Person entity JSON-LD: the main signal that tells search + AI
          engines who "Lucas Ruiz" is on this domain. */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Projects />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}
