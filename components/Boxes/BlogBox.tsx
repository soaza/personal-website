import React from "react";
import { Box } from "../Box";

export const BlogBox = () => {
  return (
    <Box>
      <div className=" flex items-center flex-col justify-center h-full gap-4">
        <a
          target="_blank"
          href="https://kimguanified-blog.vercel.app/"
          className="text-5xl font-bold hover:underline"
        >
          Blog
        </a>
        <div className="text-2xl">I write stuff</div>
      </div>
    </Box>
  );
};
