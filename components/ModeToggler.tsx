import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "./context/DarkModeProvider";

export const ModeToggler = () => {
  const { toggleDarkMode, darkMode } = useTheme();

  useEffect(() => {
    localStorage.theme = darkMode ? "dark" : "light";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeToggle
      onChange={() => {
        toggleDarkMode(!darkMode);
      }}
      checked={darkMode}
      size={80}
    />
  );
};
