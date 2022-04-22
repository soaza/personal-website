import React, { useState } from "react";
const Fade = require("react-reveal/Fade");

export const Section = (props: { sectionData: any }) => {
  const { sectionData } = props;
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <div className="text-black text-6xl font-extrabold text-center select-none">
        {sectionData.title}
      </div>

      <div className={` lg:px-32 mt-2`}>
        <div className=" text-center lg:text-right text-xl text-gray-400  ">
          <Fade right> {sectionData.subtitle}</Fade>
        </div>

        <Fade bottom>{sectionData.child}</Fade>
      </div>
    </div>
  );
};
