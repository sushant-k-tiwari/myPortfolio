import React from "react";

const GridBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
};

export default GridBackground;
