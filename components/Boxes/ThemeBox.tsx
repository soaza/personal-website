import React from "react";
import { Box } from "../Box";
import { ModeToggler } from "../ModeToggler";
import { useTheme } from "../context/DarkModeProvider";

export const ThemeBox = (props: {
  setBackgroundColor: (color: string) => void;
  backgroundColor: string;
}) => {
  const { setBackgroundColor, backgroundColor } = props;

  const { darkMode } = useTheme();

  const COLORS = [
    "bg-orange-50",
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-pink-50",
  ];

  const DARK_COLORS = [
    "bg-slate-700",
    "bg-emerald-700",
    "bg-teal-900",
    "bg-cyan-900",
    "bg-sky-900",
  ];

  return (
    <Box>
      <div className="flex flex-col gap-12 h-full justify-center align-middle items-center">
        <ModeToggler />

        <div className="flex flex-row gap-4 justify-center  p-2 rounded-md">
          {(darkMode ? DARK_COLORS : COLORS).map((color) => {
            return (
              <div
                onClick={() => setBackgroundColor(color)}
                key={color}
                className={`rounded-full h-6 2xl:h-8 aspect-square ${color}
                } hover:cursor-pointer border-2 ${
                  backgroundColor === color ? "border-gray-400" : ""
                } `}
              />
            );
          })}
        </div>
      </div>
    </Box>
  );
};
