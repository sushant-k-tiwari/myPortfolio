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
        <p className="text-md font-[vm-regular] p-6 text-neutral-400 mt-12 tracking-wide">
          I've worked with innovative teams at Lagoon Works and Bytecraft
          Studios, where I focused on optimizing performance, building
          responsive apps, and integrating AI-driven features. Whether it's
          enhancing load times, implementing lazy loading, or managing complex
          data flows, I build solutions that are efficient, user-friendly, and
          future-ready. Let's build something meaningful together.
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 mt-12 mb-12 w-[80%]">
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
