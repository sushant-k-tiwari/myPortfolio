import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { XIcon } from "./XIcon";
import { useState } from "react";

export const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  return (
    <div className="relative z-10 p-8 flex flex-col items-center mt-24">
      <h1 className="text-5xl font-[docade] absolute top-9 text-neutral-600">
        CONTACT.ME
      </h1>
      <h1 className="text-5xl font-[docade] drop-shadow-2xl">CONTACT.ME</h1>

      <div className="w-[50%] mt-12">
        <p className="text-md font-[vm-regular] p-6 text-neutral-400">
          Have a project in mind or want to discuss potential opportunities? I'd
          love to hear from you. Feel free to reach out through any of the
          channels below.
        </p>
      </div>

      <div className="w-[80%] mt-12 flex flex-wrap justify-center gap-8">
        {/* Email Box */}
        <a
          href="mailto:sushant22tiwari801@gmail.com"
          className={`w-[250px] h-[200px] bg-white p-6 border-2 border-neutral-200 transition-all duration-300 ${
            hoveredCard === "email"
              ? "scale-105 shadow-[6px_6px_0px_0px_var(--color-black)] rotate-1 "
              : "hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
          } flex flex-col items-center justify-center cursor-pointer no-underline`}
          onMouseEnter={() => setHoveredCard("email")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`flex justify-center items-center w-16 h-16 rounded-full bg-neutral-100 mb-4 transition-all duration-300 ${
              hoveredCard === "email" ? "bg-sky-100" : ""
            }`}
          >
            <Mail
              size={32}
              className={`transition-all duration-300 ${
                hoveredCard === "email"
                  ? "text-blue-500 scale-110"
                  : "pulse-animation"
              }`}
            />
          </div>
          <h3 className="font-[vm-bold] text-xl mb-2">Email</h3>
        </a>

        {/* GitHub Box */}
        <a
          href="https://github.com/sushant-k-tiwari"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-[250px] h-[200px] bg-white p-6 border-2 border-neutral-200 transition-all duration-300 ${
            hoveredCard === "github"
              ? "scale-105 shadow-[6px_6px_0px_0px_var(--color-black)] -rotate-1"
              : "hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
          } flex flex-col items-center justify-center cursor-pointer no-underline`}
          onMouseEnter={() => setHoveredCard("github")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`flex justify-center items-center w-16 h-16 rounded-full bg-neutral-100 mb-4 transition-all duration-300 ${
              hoveredCard === "github" ? "bg-purple-100" : ""
            }`}
          >
            <Github
              size={32}
              className={`transition-all duration-300 ${
                hoveredCard === "github"
                  ? "text-purple-700 scale-110"
                  : "pulse-animation"
              }`}
            />
          </div>
          <h3 className="font-[vm-bold] text-xl mb-2">GitHub</h3>
        </a>

        {/* LinkedIn Box */}
        <a
          href="https://www.linkedin.com/in/sushant-kumar-tiwari"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-[250px] h-[200px] bg-white p-6 border-2 border-neutral-200 transition-all duration-300 ${
            hoveredCard === "linkedin"
              ? "scale-105 shadow-[6px_6px_0px_0px_var(--color-black)] rotate-1"
              : "hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
          } flex flex-col items-center justify-center cursor-pointer no-underline`}
          onMouseEnter={() => setHoveredCard("linkedin")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`flex justify-center items-center w-16 h-16 rounded-full bg-neutral-100 mb-4 transition-all duration-300 ${
              hoveredCard === "linkedin" ? "bg-sky-600" : ""
            }`}
          >
            <Linkedin
              size={32}
              className={`transition-all duration-300 ${
                hoveredCard === "linkedin"
                  ? "text-white scale-110"
                  : "pulse-animation"
              }`}
            />
          </div>
          <h3 className="font-[vm-bold] text-xl mb-2">LinkedIn</h3>
        </a>

        {/* X (Twitter) Box */}
        <a
          href="https://x.com/Sushant_KTiwari"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-[250px] h-[200px] bg-white p-6 border-2 border-neutral-200 transition-all duration-300 ${
            hoveredCard === "twitter"
              ? "scale-105 shadow-[6px_6px_0px_0px_var(--color-black)] -rotate-1"
              : "hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
          } flex flex-col items-center justify-center cursor-pointer no-underline`}
          onMouseEnter={() => setHoveredCard("twitter")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`flex justify-center items-center w-16 h-16 rounded-full bg-neutral-100 mb-4 transition-all duration-300 ${
              hoveredCard === "twitter" ? "bg-neutral-900 bg-opacity-10" : ""
            }`}
          >
            <XIcon
              size={28}
              className={`transition-all duration-300 ${
                hoveredCard === "twitter"
                  ? "text-white scale-110"
                  : "pulse-animation"
              }`}
            />
          </div>
          <h3 className="font-[vm-bold] text-xl mb-2">X (Twitter)</h3>
        </a>
      </div>
      <div className="flex flex-row items-center justify-center mt-16 gap-4">
        <MapPin size={32} className="transition-all duration-300 " />
        <h3 className="font-[vm-bold] text-xl mb-2">Location</h3>
      </div>
      <span className="font-[vm-regular] text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-center">
        Delhi, India
      </span>
    </div>
  );
};
