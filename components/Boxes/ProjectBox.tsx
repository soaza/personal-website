import React from "react";
import { Box } from "../Box";
import { NusReviewsSVG } from "../../common/svg";
import { useTheme } from "../context/DarkModeProvider";

export const ProjectBox = () => {
  const { darkMode } = useTheme();
  return (
    <Box className=" aspect-[0.5] row-span-2 h-full">
      <div className="flex flex-col gap-2">
        <NusReviewsSVG
          className="w-full h-auto"
          fill={darkMode ? "white" : "black"}
        />

        {/* <img src="https://nus-reviews.com/_next/static/media/landing-page.f5d22f97.svg" /> */}
        <div className=" font-bold text-3xl">NUS Reviews</div>

        <a
          rel="noreferrer"
          target="_blank"
          className="underline text-xl"
          href="https://nus-reviews.com"
        >
          nus-reviews.com
        </a>

        <p className="text-2xl ">
          Read module reviews from the NUS community and submit your own!
        </p>
      </div>
    </Box>
  );
};
