import React, { useState } from "react";

export const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center">
      {!showProjects && (
        <span>
          <div className="text-white text-6xl font-extrabold">My Projects</div>
          <div
            onClick={() => setShowProjects(true)}
            className=" cursor-pointer hover:underline text-gray-200 text-xl font-semibold text-right"
          >
            Click to see
          </div>
        </span>
      )}

      {showProjects && (
        <>
          <div className="text-white text-6xl font-extrabold"> Projects</div>
        </>
      )}
    </div>
  );
};
