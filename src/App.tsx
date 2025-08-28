import React from "react";
import GridBackground from "./components/GridBackground";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen text-black">
      <Navbar />
      <GridBackground />
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <p className="mt-4">
          This is your content on top of the grid background.
        </p>
      </div>
    </div>
  );
};

export default App;
