import ExperienceCard from "./ExperienceCard";
import TerminalCard from "./TerminalCard";

const Experience = () => {
  return (
    <div className="relative z-10 p-8 flex flex-col items-center mt-24">
      <h1 className="text-5xl font-[docade] absolute top-9 text-neutral-600">
        EXPERIENCE.LOG
      </h1>
      <h1 className="text-5xl font-[docade] drop-shadow-2xl">EXPERIENCE.LOG</h1>
      <div className="w-[50%]">
        <p className="text-md font-[vm-regular] p-6 text-neutral-400 mt-12 tracking-wide">
          I have hands-on experience in building high-performance mobile
          applications with a focus on responsive design, efficient state
          management, and smooth user interactions. My skill set includes
          working extensively with React Native, Kotlin, and modern development
          tools to create scalable, maintainable, and visually appealing apps.
          With a strong understanding of both frontend and backend integration,
          I bring a well-rounded approach to app development that balances
          functionality with user experience.
        </p>
      </div>
      <div className="w-[80%]">
        <ExperienceCard direction="left">
          <ExperienceCard.Header>
            Frontend Android App Developer - Intern
          </ExperienceCard.Header>
          <ExperienceCard.Company>
            Lagoon Works - Jan'25 to July'25
          </ExperienceCard.Company>
          <ExperienceCard.Body>
            <li>
              Engineered the mobile version of the company's web platform using
              React Native, actively collaborating with cross-functional teams
              to debug critical issues and implement new user-centric features.
            </li>
            <li className="mt-2">
              Improved app performance by reducing load times.
            </li>
          </ExperienceCard.Body>
          <div className="flex flex-row gap-2">
            <ExperienceCard.Tech>React Native</ExperienceCard.Tech>
            <ExperienceCard.Tech>NativeWind</ExperienceCard.Tech>
            <ExperienceCard.Tech>TypeScript</ExperienceCard.Tech>
            <ExperienceCard.Tech>Redux</ExperienceCard.Tech>
            <ExperienceCard.Tech>Git</ExperienceCard.Tech>
          </div>
        </ExperienceCard>

        <ExperienceCard direction="right">
          <ExperienceCard.Header>
            App UI Developer - Intern
          </ExperienceCard.Header>
          <ExperienceCard.Company>
            ByteCraft Studios - July'24 to Oct'24
          </ExperienceCard.Company>
          <ExperienceCard.Body>
            <li>
              Developed a scalable and reusable UI component library and style
              guide using React Native, streamlining visual design and promoting
              consistency across the mobile application.
            </li>
            <li className="mt-2">
              Standardized the design system across all modules, resulting in
              100% UI uniformity and adoption of the guide as the primary
              reference for future development by the entire team.
            </li>
          </ExperienceCard.Body>
          <div className="flex flex-row gap-2">
            <ExperienceCard.Tech>React Native</ExperienceCard.Tech>
            <ExperienceCard.Tech>TypeScript</ExperienceCard.Tech>
            <ExperienceCard.Tech>Styled Components</ExperienceCard.Tech>
            <ExperienceCard.Tech>Figma</ExperienceCard.Tech>
            <ExperienceCard.Tech>Git</ExperienceCard.Tech>
          </div>
        </ExperienceCard>

        <div className="mt-24">
          <TerminalCard>
            <TerminalCard.Header>
              ~$ EXPERIENCE:
              <TerminalCard.Header2>8 Months with 7+ Apps</TerminalCard.Header2>
            </TerminalCard.Header>
            <TerminalCard.Body>
              Continuously learning and evolving with technology
            </TerminalCard.Body>
          </TerminalCard>
        </div>
      </div>
    </div>
  );
};

export default Experience;
