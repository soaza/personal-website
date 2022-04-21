import React, { useState } from "react";
const Fade = require("react-reveal/Fade");

export const Section = (props: { sectionData: any }) => {
  const { sectionData } = props;
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={` h-screen flex justify-center items-center`}>
      <div>
        <div className="text-black text-6xl font-extrabold text-center select-none">
          {sectionData.title}
        </div>

        {/* <div
          onClick={() => setShowContent(true)}
          className={`cursor-pointer hover:underline text-gray-400 text-xl font-semibold text-center`}
        >
          click to see.
        </div> */}

        <div className={`  duration-[4000ms] ease-in-out mt-2`}>
          <div className=" text-center lg:text-right text-xl text-gray-400  ">
            {sectionData.subtitle}
          </div>

          <Fade bottom>{sectionData.child}</Fade>
        </div>
      </div>
    </div>
  );
};
