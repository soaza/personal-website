import React from "react";
import { ICONS_MAP } from "../common/constants";
import { IProject } from "../common/interfaces";
import { Border } from "./Border";
import { TechIcon } from "./TechIcon";

export const Project = (props: { project: IProject; isLast: boolean }) => {
  const { project, isLast } = props;

  return (
    <div className="mt-12">
      <div className="flex justify-center mb-5">
        <img className="max-h-[500px] w-full" src={project.project_image} />
      </div>

      <div className="text-xl text-gray-400 italic mb-4">
        {project.start_date} - {project.end_date}
      </div>

      <div className="text-3xl font-extrabold mb-4">{project.project_name}</div>

      {project.website_link && (
        <div className="text-md lg:text-xl mb-4">
          <a
            target="_blank"
            rel="noreferrer"
            href={project.website_link}
            className="hover:underline"
          >
            Website
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={project.codebase_link}
            className="hover:underline font-[consolas]"
          >
            {"<code/>"}
          </a>
        </div>
      )}

      <div className="text-md lg:text-xl max-w-5xl mb-4">
        {project.project_detail}
      </div>

      <div
        style={{
          gridAutoColumns: "1fr",
          gridTemplateColumns: "repeat(auto-fill, minmax(75px, max-content))",
        }}
        className="mb-12 p-2 grid lg:grid-flow-col gap-2 items-center w-[90vw] lg:w-full dark:bg-slate-600 dark:rounded-lg "
      >
        {project.tech_stack.map((stack, index) => {
          return <TechIcon key={index} name={stack} />;
        })}
      </div>

      {!isLast && <Border />}
    </div>
  );
};
