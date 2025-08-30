import React, { type PropsWithChildren } from "react";

const AboutCards = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[256px] h-[206px] p-6 border-2 border-neutral-200 bg-white transition-transform duration-200 ease-in-out hover:scale-102 hover:border-r-neutral-800 hover:border-b-neutral-800 hover:border-4">
      {children}
    </div>
  );
};

const AboutImage = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center font-[vm-bold] text-xl">
      {children}
    </div>
  );
};

const AboutHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-md font-[code] font-semibold flex justify-center mt-2">
      {children}
    </div>
  );
};

const AboutTech = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-sm font-[code] flex justify-center mt-2 text-neutral-600 text-center">
      {children}
    </div>
  );
};

const AboutBody = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center font-[code] text-xs text-center mt-4 text-neutral-400">
      {children}
    </div>
  );
};

AboutCards.Image = AboutImage;
AboutCards.Header = AboutHeader;
AboutCards.Tech = AboutTech;
AboutCards.Body = AboutBody;

export default AboutCards;
