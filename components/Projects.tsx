import React, { useState } from "react";

export const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div
      style={{
        transition: " .8s ease",
      }}
      className={` h-screen flex justify-center items-center`}
    >
      <div>
        <div className="text-white text-6xl font-extrabold">My Projects</div>

        <div
          className={`w-30 bg-white text-black duration-[4000ms] ease-in-out  ${
            showProjects ? "opacity-100" : "opacity-0 h-0"
          }`}
        >
          dasdas
        </div>

        <div
          style={
            showProjects
              ? {
                  visibility: "hidden",
                  opacity: "0",
                  marginTop: "80vh",
                  transition:
                    " visibility 0s 2s, opacity 2s linear, margin-top 2s",
                }
              : {}
          }
          onClick={() => setShowProjects(true)}
          className={`cursor-pointer hover:underline text-gray-200 text-xl font-semibold text-right`}
        >
          Click to see
        </div>
      </div>
    </div>
  );
};
