import { PROJECTS } from "../common/constants";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <>
      {PROJECTS.map((project, index) => {
        return (
          <Project
            key={index}
            project={project}
            isLast={index == PROJECTS.length - 1}
          />
        );
      })}
    </>
  );
};
