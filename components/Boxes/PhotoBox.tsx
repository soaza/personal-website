import React from "react";
import { Box } from "../Box";

export const PhotoBox = () => {
  return (
    <Box>
      <div className=" flex items-center flex-col justify-center h-full gap-4">
        <a
          rel="noreferrer"
          target="_blank"
          href="/photos"
          className="text-5xl font-bold hover:underline"
        >
          Photography
        </a>
        <div className="text-xl">I take pictures</div>
      </div>
    </Box>
  );
};
