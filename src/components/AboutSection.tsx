import React from "react";
import AboutCards from "./AboutCards";

const AboutSection = () => {
  return (
    <div className="relative z-10 p-8 flex flex-col items-center mt-8">
      <h1 className="text-5xl font-[docade] absolute top-9 text-neutral-600">
        ABOUT.TXT
      </h1>
      <h1 className="text-5xl font-[docade] drop-shadow-2xl">ABOUT.TXT</h1>
      <div className="w-[50%]">
        <p className="text-md font-[vm-regular] p-6 text-neutral-400 mt-4">
          I'm a passionate software developer with a love for creating digital
          experiences that matter. My journey in tech started with curiosity and
          has evolved into a commitment to building softwares and solutions that
          bridge creativity and functionality.
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 mt-12 mb-12">
        <AboutCards>
          <AboutCards.Image>{`</>`}</AboutCards.Image>
          <AboutCards.Header>FRONTEND</AboutCards.Header>
          <AboutCards.Tech>
            React, Typescript, Tailwind CSS, Motion
          </AboutCards.Tech>
          <AboutCards.Body>
            Building responsive and interactive user interfaces
          </AboutCards.Body>
        </AboutCards>

        <AboutCards>
          <AboutCards.Image>{`</>`}</AboutCards.Image>
          <AboutCards.Header>APP DEVELOPMENT</AboutCards.Header>
          <AboutCards.Tech>React Native, Expo</AboutCards.Tech>
          <AboutCards.Body>
            Building cross-platform mobile experiences with native performance
          </AboutCards.Body>
        </AboutCards>

        <AboutCards>
          <AboutCards.Image>{`</>`}</AboutCards.Image>
          <AboutCards.Header>BACKEND</AboutCards.Header>
          <AboutCards.Tech>Node.js, Express.js, MongoDB</AboutCards.Tech>
          <AboutCards.Body>
            Scalable server-side applications and APIs
          </AboutCards.Body>
        </AboutCards>
      </div>
    </div>
  );
};

export default AboutSection;
