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
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <TerminalCard>
        <TerminalCard.Header>
          ~$ CURRENT STATUS:
          <TerminalCard.Header2>I AM ON A JOB HUNT</TerminalCard.Header2>
        </TerminalCard.Header>
        <TerminalCard.Body>
          Ready to collaborate on the next big idea!
        </TerminalCard.Body>
      </TerminalCard>
      <Skills />
      <section id="experience">
        <Experience />
      </section>
      <div className="text-center text-neutral-500 font-[vm-medium-italic] text-4xl tracking-wide animate-bounce">
        Work in Progress...
      </div>
    </div>
  );
};

export default App;
