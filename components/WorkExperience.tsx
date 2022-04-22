import React from "react";
import { ICONS_MAP } from "../common/constants";
import { IWork } from "../common/interfaces";
import { TechIcon } from "./TechIcon";

export const WorkExperience = (props: { work: IWork }) => {
  const { work } = props;

  return (
    <div className=" mt-11">
      <div className="lg:flex lg:row-auto lg:justify-between">
        <div className="lg:col-auto  self-end ">
          <div className="text-3xl lg:text-4xl cursor-pointer hover:underline mb-2 font-extrabold">
            {work.company_name}
          </div>
          <div className="text-xl text-gray-400">{work.role}</div>
        </div>

        <div className="mt-4 flex justify-center">
          <img className=" h-24 w-24 object-contain" src={work.company_image} />
        </div>
      </div>

      <div className="text-md lg:text-base">
        <>
          {work.details.map((detail, index) => {
            return (
              <div key={index} className="mb-2">
                {detail}
              </div>
            );
          })}
        </>
      </div>

      <div className="flex row-auto gap-3">
        {ICONS_MAP.map((icon, index) => {
          return (
            <TechIcon key={index} name={icon.name} imgLink={icon.imgLink} />
          );
        })}
      </div>
    </div>
  );
};
