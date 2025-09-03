import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative z-10 p-8 flex flex-col items-center mt-32">
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
        <button className="px-8 py-2 bg-black text-white rounded-md cursor-pointer transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          View Projects
        </button>
        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1qlVfZZ6NfbdYXDCsapnQo8-BsFBbn39g/view?usp=sharing",
              "_blank"
            );
          }}
          className="px-8 py-2 bg-transperant border-neutral-200 border-2 rounded-md cursor-pointer transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
        >
          Download CV
        </button>
      </div>
      <div className="gap-8 flex mt-8">
        <button
          className="h-[48px] w-[48px] flex justify-center items-center bg-transparent border-2 border-neutral-200 cursor-pointer transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
          onClick={() => {
            window.open("https://github.com/sushant-k-tiwari", "_blank");
          }}
        >
          <Github size={24} />
        </button>
        <button
          className="h-[48px] w-[48px] flex justify-center items-center bg-transparent border-2 border-neutral-200 cursor-pointer transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
          onClick={() => {
            window.open(
              "https://linkedin.com/in/sushant-kumar-tiwari",
              "_blank"
            );
          }}
        >
          <Linkedin size={24} />
        </button>
        <button
          className="h-[48px] w-[48px] flex justify-center items-center bg-transparent border-2 border-neutral-200 cursor-pointer transition-transform duration-200 ease-in hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]"
          onClick={() => {
            window.open("mailto:sushant22tiwari801@gmail.com", "_blank");
          }}
        >
          <Mail size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
