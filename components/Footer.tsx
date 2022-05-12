import React from "react";

const CONTENT: { name: string; link: string }[] = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/chu-kim-guan/" },
  { name: "Github", link: "https://github.com/soaza/" },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1HQYe2O6DMTIdooZORLkN1XC97Ft006b_/view",
  },
  { name: "chukimguan@gmail.com", link: "mailto:chukimguan@gmail.com" },
];

export const Footer = () => {
  return (
    <div className="dark:bg-slate-900 p-4 text-center">
      {/* <span className="absolute left-10 italic text-gray-400 text-base text-left dark:bg-slate-900">
        last updated: 3/5/22
      </span> */}
      <span className="text-gray-400">
        <>
          {CONTENT.map((item, index) => {
            return (
              <a
                key={index}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href={item.link}
              >
                {" "}
                {item.name} {index == CONTENT.length - 1 ? "" : "|"}
              </a>
            );
          })}
        </>
      </span>
    </div>
  );
};
