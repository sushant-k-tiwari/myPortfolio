const Navbar = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div
        className=" flex flex-row justify-between p-4 px-[144px]
      "
      >
        <div className="text-3xl font-[vm-bold]">SUSHANT's PORTFOLIO</div>
        <ul className="flex flex-row gap-8 font-[vm-regular]">
          <li>
            <button 
              onClick={() => handleScrollToSection('home')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScrollToSection('about')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection('experience')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection('projects')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
