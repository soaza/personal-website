import React from "react";
import Scrollspy from "react-scrollspy";

export const ScrollDetector = () => {
  return (
    <Scrollspy
      className=" opacity-0 lg:opacity-100  fixed top-1/3 left-0  min-h-screen px-2 py-12 flex flex-col gap-5 dark:text-white"
      items={["section-0", "section-1", "section-2", "section-3"]}
      currentClassName="text-gray-400 "
    >
      <li>
        <a href="#section-0">{"it's me"}</a>
      </li>
      <li>
        <a href="#section-1">work experience</a>
      </li>
      <li>
        <a href="#section-2">projects</a>
      </li>
      <li>
        <a href="#section-3">contact me</a>
      </li>
    </Scrollspy>
  );
};
