import React from "react";
import { ICONS_MAP } from "../common/constants";
import { IWork } from "../common/interfaces";
import { TechIcon } from "./TechIcon";

export const WorkExperience = (props: { work: IWork }) => {
  const { work } = props;

  return (
    <div className=" mt-11">
      <div className="lg:flex lg:row-auto lg:justify-between  w-full mb-5">
        <div className="lg:col-auto  self-end ">
          <div className="text-3xl lg:text-4xl cursor-pointer hover:underline mb-2 font-extrabold">
            {work.company_name}
          </div>
          <div className="text-xl text-gray-400">{work.role}</div>
        </div>

        <div className="mt-4 flex justify-center">
          <img className=" h-24 w-80 object-contain" src={work.company_image} />
        </div>
      </div>

      <div className="text-md lg:text-xl max-w-5xl mb-5">
        <>
          {work.details.map((detail, index) => {
            return (
              <div key={index} className="mb-2 ">
                {detail}
              </div>
            );
          })}
        </>
      </div>

      <div
        style={{
          gridAutoColumns: "1fr",
          gridTemplateColumns: "repeat(auto-fill, minmax(75px, max-content))",
          width: "80vw",
        }}
        className=" grid lg:grid-flow-col gap-2 items-center lg:max-w-max "
      >
        {work.tech_stack.map((stack, index) => {
          return <TechIcon key={index} name={stack} />;
        })}
      </div>
    </div>
  );
};
