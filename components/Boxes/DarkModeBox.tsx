import React from "react";
import { Box } from "../Box";
import { ModeToggler } from "../ModeToggler";

export const DarkModeBox = () => {
  return (
    <Box>
      <div className="flex h-full justify-center align-middle items-center">
        <ModeToggler />
      </div>
    </Box>
  );
};
