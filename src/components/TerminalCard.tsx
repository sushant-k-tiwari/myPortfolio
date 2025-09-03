import { type PropsWithChildren } from "react";

const TerminalHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-green-500 font-[code] text-lg flex flex-row mt-2 justify-center">
      {children}
      <div className="text-white px-3">I AM ON A JOB HUNT</div>
    </div>
  );
};

const TerminalBody = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-white text-sm font-[code] mt-4 flex justify-center">
      {children}
    </div>
  );
};
const TerminalCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center mb-24 ">
      <div className="bg-black text-white p-2 h-32 w-128 flex justify-center flex-col border-4 border-neutral-400">
        {children}
      </div>
    </div>
  );
};

TerminalCard.Header = TerminalHeader;
TerminalCard.Body = TerminalBody;

export default TerminalCard;
