import React from "react";
import { Border } from "./Border";

export const Section = (props: { sectionData: any }) => {
  const { sectionData } = props;

  return (
    <div className="w-full xl:px-64 2xl:px-96 ">
      <div className="text-6xl font-extrabold text-center">
        {sectionData.title}
      </div>

      <div className={`mt-2 mb-5`}>
        <div className=" text-center text-xl text-gray-400  "></div>

        {sectionData.child}
      </div>
    </div>
  );
};
