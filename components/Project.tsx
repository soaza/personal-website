import React from "react";
import { ICONS_MAP } from "../common/constants";
import { TechIcon } from "./TechIcon";

export const Project = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-center mb-5">
        <img className="w-full" src={"/images/project-images/moave.png"} />
      </div>

      <div className="text-xl text-gray-400 italic">
        {"Aug 2021"} - {"Nov 2021"}
      </div>

      <div className="text-3xl cursor-pointer hover:underline font-extrabold mb-4">
        Moave
      </div>

      <div className="text-md lg:text-xl mb-4">
        Website | <span className=" font-[consolas]">{"<code/>"}</span>
      </div>

      <div className="text-md lg:text-xl max-w-5xl mb-4">
        A movie-centred social media platform for like-minded individuals to
        connect over their taste of movies.
      </div>

      <div
        style={{
          gridAutoColumns: "1fr",
          gridTemplateColumns: "repeat(auto-fill, minmax(75px, max-content))",
          width: "100%",
        }}
        className=" grid lg:grid-flow-col gap-2 items-center lg:max-w-max "
      >
        {ICONS_MAP.map((stack, index) => {
          return <TechIcon key={index} name={stack.name} />;
        })}
      </div>
    </div>
  );
};
