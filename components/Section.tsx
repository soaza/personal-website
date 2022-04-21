import React, { useState } from "react";

export const Section = (props: { sectionData: any }) => {
  const { sectionData } = props;
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={` h-screen flex justify-center items-center`}>
      <div>
        <div className="text-black text-6xl font-extrabold text-center select-none">
          {sectionData.title}
        </div>

        <div
          style={
            showContent
              ? {
                  visibility: "hidden",
                  opacity: "0",
                  transition: " visibility 0s 2s, opacity 2s linear",
                }
              : {}
          }
          onClick={() => setShowContent(true)}
          className={`cursor-pointer hover:underline text-gray-400 text-xl font-semibold text-center`}
        >
          click to see.
        </div>

        <div
          className={`  duration-[4000ms] ease-in-out mt-2 ${
            showContent ? "opacity-100" : "opacity-0 select-none"
          }`}
        >
          <div className=" text-center lg:text-right text-xl text-gray-400  ">
            {sectionData.subtitle}
          </div>

          {sectionData.child}
        </div>
      </div>
    </div>
  );
};
