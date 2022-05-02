import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export const ModeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect(() => {
    localStorage.theme = isDarkMode ? "dark" : "light";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="absolute top-3 left-3">
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
    </div>
  );
};
