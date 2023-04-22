import React from "react";
import { Box } from "../Box";
import { TiktokLogoSVG } from "../../common/svg";

export const WorkBox = () => {
  return (
    <Box>
      <div className="flex justify-center flex-col align-middle items-center h-full">
        <TiktokLogoSVG className="h-full w-1/2 dark:fill-white" />
        <div className="text-2xl text-center">
          Front-End Engineer at{" "}
          <span className="font-bold text-2xl">TikTok</span>
        </div>
        (Incoming)
      </div>
    </Box>
  );
};
