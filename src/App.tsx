import React from "react";
import GridBackground from "./components/GridBackground";
import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";
import TerminalCard from "./components/TerminalCard";

const App = () => {
  return (
    <div className="relative min-h-screen text-black">
      <Navbar />
      <GridBackground />
      <HeroSection />
      <TerminalCard>
        <TerminalCard.Header>~$   CURRENT STATUS:</TerminalCard.Header>
        <TerminalCard.Body>Ready to collaborate on the next big idea!</TerminalCard.Body>
      </TerminalCard>
      
    </div>
  );
};

export default App;
