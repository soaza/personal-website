import React from "react";
import { Border } from "./Border";
const Fade = require("react-reveal/Fade");

export const Section = (props: { sectionData: any }) => {
  const { sectionData } = props;

  return (
    <div className="w-full xl:px-64 2xl:px-96">
      <div className="text-black text-6xl font-extrabold text-center select-none">
        {sectionData.title}
      </div>

      <div className={`mt-2 mb-5`}>
        <div className=" text-center text-xl text-gray-400  ">
          <Fade right> {sectionData.subtitle}</Fade>
        </div>

        <Fade bottom>{sectionData.child}</Fade>
      </div>
      <Border />
    </div>
  );
};
