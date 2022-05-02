import React from "react";
import { ModeToggler } from "./ModeToggler";

export const About = () => {
  return (
    <>
      <ModeToggler />
      <div
        id="section-0"
        className=" p-12 text-center h-screen flex justify-center items-center  dark:bg-slate-900 dark:text-white"
        style={{
          WebkitTransition: "background-color 500ms linear",
          msTransition: "background-color 500ms linear",
          transition: "background-color 500ms linear",
        }}
      >
        <span>
          <div className="text-8xl font-black select-none">Kim Guan</div>
          <div className="text-gray-400 text-center text-xl font-semibold">
            i build websites.
          </div>
        </span>
      </div>
    </>
  );
};
