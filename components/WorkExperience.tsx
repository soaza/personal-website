import React from "react";
import { IWork } from "../common/interfaces";

export const WorkExperience = (props: { work: IWork }) => {
  const { work } = props;

  return (
    <div className=" mt-11">
      <div className="flex row-auto justify-between">
        <div className="col-auto">
          <div className="text-3xl lg:text-4xl cursor-pointer hover:underline mb-2 font-extrabold">
            {work.company_name}
          </div>
          <div className="text-xl text-gray-400">{work.role}</div>
        </div>

        <img className=" h-24 w-24 object-contain" src={work.company_image} />
      </div>

      <div className="text-md lg:text-xl">
        <>
          {work.details.map((detail, index) => {
            return (
              <div key={index} className="mb-2">
                {detail}
              </div>
            );
          })}
        </>

        {/* <div className="mb-2">
            • Working on internal chat app to boost the productivity of over
            4000 Binancians.
          </div>
          <div>
            • Smoothened image viewing capabilities by integrating features to
            zoom,rotate and share images in different chats.
          </div> */}
      </div>
    </div>
  );
};