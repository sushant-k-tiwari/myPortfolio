import React from "react";
import { FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCss3, TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="relative z-10 p-8 flex flex-col items-center mt-32">
      <h1 className="text-5xl font-[docade] absolute top-9 text-neutral-600">
        SKILLS.MD
      </h1>
      <h1 className="text-5xl font-[docade] drop-shadow-2xl">SKILLS.MD</h1>
      <div className="w-[50%] mt-12">
        <p className="text-md font-[vm-regular] p-6 text-neutral-400 ">
          I not onyl work with these technologies but also have a keen interest
          in learning new technologies and using them with best practices to
          deliver high-quality results, whether it's in web development, mobile
          app development, or anything else.
        </p>
      </div>
      <div className="w-[80%] mt-12 flex flex-row gap-4">
        <div className="w-[150px] h-[150px] border-2 border-neutral-200 flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <ImHtmlFive2 size={48} className="mt-3" />
          <p className="font-[code] text-lg mt-4">HTML</p>
        </div>

        <div className="w-[150px] h-[150px] border-2 border-neutral-200 flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <TbBrandCss3 size={48} className="mt-3" />
          <p className="font-[code] text-lg mt-4">CSS</p>
        </div>

        <div className="w-[150px] h-[150px] border-2 border-neutral-200 flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <SiJavascript size={48} className="mt-3" />
          <p className="font-[code] text-lg mt-4">JAVASCRIPT</p>
        </div>

        <div className="w-[150px] h-[150px] border-2 border-neutral-200 flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <SiTypescript size={48} className="mt-3" />
          <p className="font-[code] text-lg mt-4">TYPESCRIPT</p>
        </div>

        <div className="w-[150px] h-[150px] border-2 border-neutral-200 flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <FaReact size={48} className="mt-3" />
          <p className="font-[code] text-lg mt-4">REACT JS</p>
        </div>

        <div className="w-[150px] h-[150px] border-2 border-neutral-200 flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <TbBrandReactNative size={48} className="mt-3" />
          <p className="font-[code] text-lg mt-4 text-center">REACT NATIVE</p>
        </div>

        <div className="w-[150px] h-[150px] border-2 border-neutral-200 flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <SiTailwindcss size={48} className="mt-3" />
          <p className="font-[code] text-lg mt-4 text-center">TAILWINDCSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
