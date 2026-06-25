import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
