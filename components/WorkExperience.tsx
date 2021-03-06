import React from "react";
import { IWork } from "../common/interfaces";
import { TechIcon } from "./TechIcon";

export const WorkExperience = (props: { work: IWork }) => {
  const { work } = props;

  return (
    <div className="mt-11">
      <div className="lg:flex lg:row-auto lg:justify-between  w-full mb-5">
        <div className="lg:col-auto  self-end ">
          <div className="text-xl text-gray-400 italic">
            {work.date_joined} - {work.date_left}
          </div>

          <div className="text-3xl lg:text-3xl mb-2 font-extrabold">
            {work.company_name}
          </div>
          <div className="text-xl text-gray-400">{work.role}</div>
        </div>

        <div className="mt-4 flex justify-center">
          <img className=" h-24 w-64 object-contain" src={work.company_image} />
        </div>
      </div>

      <div className="text-md lg:text-xl max-w-5xl mb-12">
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

      {work.tech_stack && (
        <div
          style={{
            gridAutoColumns: "1fr",
            gridTemplateColumns: "repeat(auto-fill, minmax(75px, max-content))",
          }}
          className=" p-2 grid lg:grid-flow-col gap-2 items-center w-[90vw] lg:w-full dark:bg-slate-600 dark:rounded-lg "
        >
          {work.tech_stack?.map((stack, index) => {
            return <TechIcon key={index} name={stack} />;
          })}
        </div>
      )}
    </div>
  );
};
