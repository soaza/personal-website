import React from "react";
import { Box } from "../Box";
import { TiktokLogoSVG } from "../../common/svg";

export const WorkBox = () => {
  return (
    <Box>
      <div className="flex justify-center flex-col align-middle items-center h-full">
        <div className="text-2xl text-center">
          Software Engineer at{" "}
          <span className="font-bold text-2xl text-slate-500 dark:text-slate-300">
            Breeze.Cash
          </span>
        </div>
      </div>
    </Box>
  );
};
