import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative z-10 p-8 flex flex-col items-center mt-24">
      <h1 className="text-5xl font-[docade] absolute top-9 text-neutral-600">
        PORTFOLIO.EXE
      </h1>
      <h1 className="text-5xl font-[docade] drop-shadow-2xl">PORTFOLIO.EXE</h1>
      <h2 className="text-xl font-[vm-medium-italic] text-neutral-400 mt-8">
        {`> `}React Native App Developer
      </h2>
      <div className="w-[50%]">
        <p className="text-md font-[vm-regular] p-6 text-neutral-400">
          Hi, I'm <span className="p-1 bg-black text-white">Sushant</span>, a
          passionate and performance-driven App Developer with a strong
          foundation in Computer Science and Engineering, graduated with a Gold
          Medal for academic excellence. I specialize in cross-platform mobile
          development, blending sleek UI design with robust functionality using
          React Native, Kotlin, and modern technologies.
        </p>
      </div>
      <div className="flex gap-8 font-[vm-medium-italic]">
        <button className="px-8 py-2 bg-black text-white rounded-md cursor-pointer transition-transform duration-200 ease-in hover:scale-102 ">
          View Projects
        </button>
        <button className="px-8 py-2 bg-transperant border-neutral-200 border-2 rounded-md cursor-pointer transition-transform duration-200 ease-in hover:scale-102">
          Download CV
        </button>
      </div>
      <div className="gap-8 flex mt-8">
        <button className="h-[48px] w-[48px] flex justify-center items-center bg-transparent border-2 border-neutral-200 cursor-pointer">
          <Github size={24} />
        </button>
        <button className="h-[48px] w-[48px] flex justify-center items-center bg-transparent border-2 border-neutral-200 cursor-pointer">
          <Linkedin size={24} />
        </button>
        <button className="h-[48px] w-[48px] flex justify-center items-center bg-transparent border-2 border-neutral-200 cursor-pointer">
          <Mail size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
