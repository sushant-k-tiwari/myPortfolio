import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white p-4 px-[144px] flex 1 flex-row justify-between">
      <div className="text-3xl font-[vm-bold] ">SUSHANT PORTFOLIO</div>
      <ul className="flex flex-row gap-8 font-[vm-regular]">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
