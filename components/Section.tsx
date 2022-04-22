import React, { useState } from "react";
import { Border } from "./Border";
const Fade = require("react-reveal/Fade");

export const Section = (props: { sectionData: any }) => {
  const { sectionData } = props;
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-full lg:px-48">
      <div className="text-black text-6xl font-extrabold text-center select-none">
        {sectionData.title}
      </div>

      <div className={` mt-2`}>
        <div className=" text-center text-xl text-gray-400  ">
          <Fade right> {sectionData.subtitle}</Fade>
        </div>

        <Fade bottom>{sectionData.child}</Fade>

        <Border />
      </div>
    </div>
  );
};
