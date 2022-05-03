import { PROJECTS } from "../common/constants";
import { Project } from "./Project";
const Fade = require("react-reveal/Fade");

export const Projects = () => {
  return (
    <>
      {PROJECTS.map((project, index) => {
        return (
          <Fade bottom>
            <Project
              key={index}
              project={project}
              isLast={index == PROJECTS.length - 1}
            />
          </Fade>
        );
      })}
    </>
  );
};
