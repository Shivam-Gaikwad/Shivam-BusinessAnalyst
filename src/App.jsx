import { useEffect } from "react";
import { profile } from "./data";
import { initEffects } from "./effects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => initEffects(), []);
  return (
    <>
      <div id="bar" />
      <div className="bg" aria-hidden="true"><i /><i /><i /></div>
    <div className="wrap">
      <Navbar name={profile.name} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer>© 2026 {profile.name}</footer>
    </div>
    </>
  );
}
