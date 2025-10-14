const Projects = () => {
  return (
    <div className="relative z-10 p-8 flex flex-col items-center">
      <h1 className="text-5xl font-[docade] absolute top-9 text-neutral-600">
        PROJECTS.DIR
      </h1>
      <h1 className="text-5xl font-[docade] drop-shadow-2xl">PROJECTS.DIR</h1>
      <div className="w-[50%] mt-12">
        <p className="text-md font-[vm-regular] p-6 text-neutral-400 ">
          I not onyl work with these technologies but also have a keen interest
          in learning new technologies and using them with best practices to
          deliver high-quality results, whether it's in web development, mobile
          app development, or anything else.
        </p>
        <p className="text-md font-[vm-regular] p-6 text-neutral-400">
          Here's a showcase of some of the apps and solutions I’ve built —
          blending clean design, optimized performance, and user-first
          functionality. Each project reflects my hands-on approach to
          development, problem-solving skills, and passion for building
          meaningful digital experiences.
        </p>
      </div>
      <div className="w-[90%] mt-12 ">
        <div className="w-[50%] bg-white p-4 border-2 border-neutral-200 transition-transform duration-200 hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)]">
          <div className="font-[vm-bold] text-2xl ml-4">Movies Search App</div>
          <div className="flex flex-row mt-2">
            <button className="ml-4 font-[code] px-3 py-1 bg-neutral-100 h-fit w-fit cursor-pointer">
              Github
            </button>
            <button className="ml-4 font-[code] px-3 py-1 bg-neutral-100 h-fit w-fit cursor-pointer">
              YT Demo
            </button>
          </div>
          <div className="text-sm mt-4 text-neutral-800 flex flex-col gap-2 font-[vm-medium-italic] ml-8">
            <li>
              Developed a cross-platform mobile application with real-time movie
              data integration from OMDb API, featuring search, browse, and save
              functionalities, resulting in a 40% faster content discovery
              experience.
            </li>
            <li>
              Implemented advanced caching and state management with React
              Context API and AsyncStorage, achieving offline data persistence
              and a 25% improvement in app performance
            </li>
            <li>
              Enhanced search functionality with debounce, reducing redundant
              API calls by 50% and delivering a smoother, more responsive user
              experience.
            </li>

            <div className="flex flex-row gap-2 flex-wrap">
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                React Native
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Expo
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                TypeScript
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Tailwind
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                React Context API
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Appwrite
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                OMDB API
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Expo Router
              </div>
            </div>
          </div>
        </div>

        {/*   Project 2 */}
        <div className="w-[50%] bg-white p-4 border-2 border-neutral-200 transition-transform duration-200 hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)] ml-auto mt-8">
          <div className="font-[vm-bold] text-2xl ml-4">
            Learning Management System Fullstack App
          </div>
          <div className="flex flex-row mt-2">
            <button className="ml-4 font-[code] px-3 py-1 bg-neutral-100 h-fit w-fit cursor-pointer">
              Github
            </button>
            <button className="ml-4 font-[code] px-3 py-1 bg-neutral-100 h-fit w-fit cursor-pointer">
              YT Demo
            </button>
          </div>
          <div className="text-sm mt-4 text-neutral-800 flex flex-col gap-2 font-[vm-medium-italic] ml-8">
            <li>
              Architected and developed a cross-platform LMS mobile application
              using React Native and Expo, enabling users to browse, enroll in,
              and track progress across various online courses.
            </li>
            <li>
              Integrated secure authentication with Clerk and implemented
              real-time data fetching through GraphQL APIs powered by Hygraph
              CMS, resulting in a 30% improvement in fetch time and enhanced
              user engagement.
            </li>

            <div className="flex flex-row gap-2 flex-wrap">
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                React Native
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Expo
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                TypeScript
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                GraphQL
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Hygraph CMS
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Clerk
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                React Navigation
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Custom UI Components
              </div>
            </div>
          </div>
        </div>

        {/*   Project 3 */}
        <div className="w-[50%] bg-white p-4 border-2 border-neutral-200 transition-transform duration-200 hover:scale-102 hover:shadow-[4px_4px_0px_0px_var(--color-black)] mt-8">
          <div className="font-[vm-bold] text-2xl ml-4">
            Bytecraft Studios – Art Selling App
          </div>
          <div className="flex flex-row mt-2">
            <button className="ml-4 font-[code] px-3 py-1 bg-neutral-100 h-fit w-fit cursor-pointer">
              Github
            </button>
            <button className="ml-4 font-[code] px-3 py-1 bg-neutral-100 h-fit w-fit cursor-pointer">
              YT Demo
            </button>
          </div>
          <div className="text-sm mt-4 text-neutral-800 flex flex-col gap-2 font-[vm-medium-italic] ml-8">
            <li>
              Accelerated frontend development of Bytecraft Studios' art
              application by implementing React.js and Redux, enhancing UI
              responsiveness by 40% and improving image loading speeds by 60%.
            </li>
            <li>
              Developed and implemented engaging interactions that improved user
              retention.
            </li>

            <div className="flex flex-row gap-2 flex-wrap">
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                React Native
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Expo
              </div>
              <div className="mt-2 w-fit h-fit px-2 py-2 bg-neutral-400 text-white text-xs font-[code]">
                Figma
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
