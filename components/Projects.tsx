import { PROJECTS } from "../common/constants";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <>
      {PROJECTS.map((project) => {
        return <Project project={project} />;
      })}
    </>
  );
};
