import React from "react";
import { WORK_EXPERIENCES } from "../common/constants";
import { WorkExperience } from "./WorkExperience";
const Fade = require("react-reveal/Fade");

export const Works = () => {
  return (
    <>
      {WORK_EXPERIENCES.map((work, index) => {
        return (
          <Fade bottom>
            <WorkExperience key={index} work={work} />
          </Fade>
        );
      })}
    </>
  );
};
