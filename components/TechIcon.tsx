import React, { useState } from "react";
import { ICONS_MAP } from "../common/constants";

export const TechIcon = (props: { name: string }) => {
  const { name } = props;

  const imgLink = ICONS_MAP.find((icon) => icon.name == name)?.imgLink;

  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" justify-center w-max flex flex-col self-center"
    >
      <img className="place-self-center w-12 h-12" src={imgLink} />

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
