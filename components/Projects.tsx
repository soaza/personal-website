import React, { useState } from "react";
import { Project } from "./Project";

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
        <div className="text-black text-6xl font-extrabold text-center">
          projects
        </div>

        <div
          className={`  duration-[4000ms] ease-in-out mt-2 ${
            showProjects ? "opacity-100" : "opacity-0 h-0 w-0"
          }`}
        >
          <div className=" text-right text-xl text-gray-400  ">
            personal projects I have worked on.
          </div>

          <Project />
        </div>

        <div
          style={
            showProjects
              ? {
                  visibility: "hidden",
                  opacity: "0",
                  marginTop: "60vh",
                  transition:
                    " visibility 0s 2s, opacity 2s linear, margin-top 2s",
                }
              : {}
          }
          onClick={() => setShowProjects(true)}
          className={`cursor-pointer hover:underline text-gray-400 text-xl font-semibold text-center`}
        >
          click to see.
        </div>
      </div>
    </div>
  );
};
