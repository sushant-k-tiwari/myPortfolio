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
        <p className="text-md font-[vm-regular] p-6">
          Hi, I'm <span className="p-1 bg-black text-white">Sushant</span>, a
          passionate and performance-driven App Developer with a strong
          foundation in Computer Science and Engineering, graduated with a Gold
          Medal for academic excellence. I specialize in cross-platform mobile
          development, blending sleek UI design with robust functionality using
          React Native, Kotlin, and modern technologies.
        </p>
      </div>
      <div className="flex gap-8 font-[vm-medium-italic]">
        <button className="px-8 py-2 bg-black text-white rounded-md cursor-pointer">
          View Projects
        </button>
        <button className="px-8 py-2 bg-transperant border-neutral-200 border-2 rounded-md cursor-pointer">
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
      <div className="w-[80%]">
        <p className="font-[vm-regular] mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          veritatis accusamus obcaecati reprehenderit dolorem voluptatem
          possimus enim in animi quibusdam officiis earum a esse explicabo natus
          quaerat error eaque cumque, fugiat odio blanditiis voluptas modi
          consequatur excepturi. Natus alias porro adipisci praesentium earum,
          soluta ab doloribus quibusdam deserunt repellat aut tempore sit
          tempora magnam sapiente. Labore doloremque dolorem soluta rerum quae
          illum est, nemo dignissimos dicta ex aspernatur cum veniam sunt et!
          Alias corporis beatae eaque error harum. Alias mollitia in,
          voluptatibus eius quod et amet quam esse tempore nostrum, nulla
          necessitatibus libero aspernatur odit nisi. Voluptates, quam sit
          recusandae sapiente accusantium a aperiam cupiditate aliquid
          praesentium repellendus expedita explicabo voluptate facere! Quam
          alias quos tempore excepturi, odit assumenda, dicta voluptate ad porro
          sit aperiam dolor iusto libero pariatur repudiandae esse iste
          doloremque illum consequuntur autem, facilis eaque omnis eligendi.
          Similique laudantium iusto tenetur non? Provident consequatur nostrum
          quas totam magni adipisci non. Tempora deserunt explicabo iusto
          incidunt perferendis corrupti. Culpa expedita quasi ducimus doloribus
          magni molestiae voluptatibus error reiciendis asperiores saepe nulla
          hic, deserunt, ut a repellendus laborum laboriosam modi earum vero
          sapiente fugiat. Illo eius quibusdam corrupti tenetur, non beatae
          error ipsam temporibus vitae consectetur! A, quae beatae? lorem500
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
