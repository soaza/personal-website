import React from "react";

export const Footer = () => {
  return (
    <div className="dark:bg-slate-900 p-4 text-center">
      {/* <span className="absolute left-10 italic text-gray-400 text-base text-left dark:bg-slate-900">
        last updated: 3/5/22
      </span> */}

      <span className="text-gray-400">
        <a
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/chu-kim-guan/"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/soaza/"
        >
          Github
        </a>{" "}
        |{" "}
        <a
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
          href="mailto:chukimguan@gmail.com"
        >
          chukimguan@gmail.com
        </a>
      </span>
    </div>
  );
};
