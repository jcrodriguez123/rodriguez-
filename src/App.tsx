import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Process />
      <Projects />
      <CTA />
      <Contact />
    </div>
  );
}