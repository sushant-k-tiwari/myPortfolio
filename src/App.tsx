import React from "react";
import GridBackground from "./components/GridBackground";
import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";
import TerminalCard from "./components/TerminalCard";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="relative min-h-screen text-black">
      <Navbar />
      <GridBackground />
      <HeroSection />
      <AboutSection />
      <TerminalCard>
        <TerminalCard.Header>~$ CURRENT STATUS:</TerminalCard.Header>
        <TerminalCard.Body>
          Ready to collaborate on the next big idea!
        </TerminalCard.Body>
      </TerminalCard>
      <Skills />
      <Experience />
    </div>
  );
};

export default App;
