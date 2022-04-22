import React, { useState } from "react";
import { IIcons } from "../common/interfaces";

export const TechIcon = (props: IIcons) => {
  const { imgLink, name } = props;

  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" flex flex-col col-span-1 justify-center"
    >
      <img className=" place-self-center w-12 h-12" src={imgLink} />

      <p
        className={`text-center text-gray-400 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {name}
      </p>
    </div>
  );
};
