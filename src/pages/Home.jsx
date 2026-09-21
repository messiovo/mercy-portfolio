import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import About from "../components/About";
import Experience from "../components/Experience";
import ProfessionalDevelopment from "../components/ProfessionalDevelopment";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <Projects />
      <Tools />
      <About />
      <Experience />
      <ProfessionalDevelopment />
      <Contact />
    </main>
  );
}