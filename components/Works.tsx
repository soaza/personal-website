import React from "react";
import { WORK_EXPERIENCES } from "../common/constants";
import { WorkExperience } from "./WorkExperience";

export const Works = () => {
  return (
    <>
      {WORK_EXPERIENCES.map((work, index) => {
        return <WorkExperience key={index} work={work} />;
      })}
    </>
  );
};
