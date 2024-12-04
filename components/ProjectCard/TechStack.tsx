import React from "react";

type TechStack = {
  techStacks: Array<string>;
};

const TechStack: React.FC<TechStack> = ({ techStacks }) => {
  return (
    <div className="flex gap-2 flex-col md:flex-row ">
      <h2 className="text-title text-lg font-medium">💻 Tech Stack:</h2>
      <div className="flex gap-2 items-end flex-wrap">
        {techStacks.map((val) => (
          <span className="bg-gray-600 rounded px-3 text-white whitespace-nowrap">
            {val}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
