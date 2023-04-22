import React from "react";
import { Box } from "../Box";
import { ShibaSVG } from "../../common/svg";
import { useTheme } from "../context/DarkModeProvider";

export const IntroBox = () => {
  const pathProps = {
    initial: { pathLength: 0 },
    animate: { pathLength: 100 },
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
    style: { strokeDasharray: "100", strokeDashoffset: "0" },
    fill: "black",
  };

  const isDarkMode = useTheme().darkMode;

  return (
    <Box className="lg:col-span-2 lg:aspect-[2] dark:bg-slate-600 text-black dark:text-white">
      <div className="flex flex-col">
        <div className="text-2xl  ">
          {" "}
          Hi I am <span className="font-bold text-3xl">Kim Guan</span> ! I am
          based in Singapore and enjoys building front-end! My primary stack
          consists of React, NextJS,Tailwind and Typescript.
        </div>

        <div className="place-self-end w-[33%]">
          <ShibaSVG fill={isDarkMode ? "white" : "black"} />
          {/*
          <div className="text-gray-600 text-right">
            {" "}
            Generated using DALL-E
          </div> */}
        </div>
      </div>
    </Box>
  );
};
