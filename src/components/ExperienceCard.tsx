import { BriefcaseIcon } from "lucide-react";
import React, { type PropsWithChildren } from "react";

interface Props {
  direction: "left" | "right";
}

const ExperienceCard = ({ children, direction }: PropsWithChildren<Props>) => {
  // Base classes that are common for both directions
  const baseClasses =
    "w-[50%] h-[300px] mt-12 border-2 border-neutral-200 bg-white flex flex-col items-center p-4 transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]";

  // Conditionally set the alignment class
  const alignmentClass = direction === "left" ? "mr-auto" : "ml-auto";

  return <div className={`${baseClasses} ${alignmentClass}`}>{children}</div>;
};

const ExperienceCardHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-xl ml-4 mr-auto font-[vm-bold] text-center">
      {children}
    </div>
  );
};

const ExperienceCardBody = ({ children }: PropsWithChildren) => {
  return (
    <div className="m-4 ml-8 mr-auto font-[vm-medium-italic] text-sm text-neutral-800">
      <li>{children}</li>
    </div>
  );
};

const ExperienceCardCompany = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-md font-[vm-regular] mr-auto ml-4 mt-2 text-[#008000] flex flex-row items-center gap-2">
      <BriefcaseIcon size={18} />
      {children}
    </div>
  );
};

const ExperienceCardTech = ({ children }: PropsWithChildren) => {
  return (
    //TODO: Add multiple tech in a row
    
    <div className="mt-2 px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
      {children}
    </div>
  );
};

ExperienceCard.Header = ExperienceCardHeader;
ExperienceCard.Company = ExperienceCardCompany;
ExperienceCard.Body = ExperienceCardBody;
ExperienceCard.Tech = ExperienceCardTech;
export default ExperienceCard;
