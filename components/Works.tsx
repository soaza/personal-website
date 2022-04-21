import React, { useState } from "react";
import { WORK_EXPERIENCES } from "../common/constants";
import { Project } from "./Project";
import { WorkExperience } from "./WorkExperience";

export const Works = () => {
  const [showWork, setShowWork] = useState(false);

  return (
    <div
      style={{
        transition: " .8s ease",
      }}
      className={` h-screen flex justify-center items-center`}
    >
      <div>
        <div className="text-black text-6xl font-extrabold text-center select-none">
          work experience
        </div>

        <div
          className={`  duration-[4000ms] ease-in-out mt-2 ${
            showWork ? "opacity-100" : "opacity-0 h-0 w-0 select-none"
          }`}
        >
          <div className=" text-center lg:text-right text-xl text-gray-400  ">
            companies i have worked with.
          </div>

          {WORK_EXPERIENCES.map((work, index) => {
            return <WorkExperience key={index} work={work} />;
          })}
        </div>

        <div
          style={
            showWork
              ? {
                  visibility: "hidden",
                  opacity: "0",
                  top: "60vh",
                  transition: " visibility 0s 2s, opacity 2s linear, top 2s",
                }
              : {}
          }
          onClick={() => setShowWork(true)}
          className={`cursor-pointer hover:underline text-gray-400 text-xl font-semibold text-center`}
        >
          click to see.
        </div>
      </div>
    </div>
  );
};
