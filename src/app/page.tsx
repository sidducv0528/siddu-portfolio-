import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemePrompt } from "@/components/ThemePrompt";

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemePrompt />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
