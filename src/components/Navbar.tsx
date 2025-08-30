import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div
        className=" flex flex-row justify-between p-4 px-[144px]
      "
      >
        <div className="text-3xl font-[vm-bold]">SUSHANT's PORTFOLIO</div>
        <ul className="flex flex-row gap-8 font-[vm-regular]">
          <li>
            <a href="#home" className="hover:text-teal-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-teal-600 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-teal-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-teal-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
