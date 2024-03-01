import React, { useEffect, useState } from "react";
import { SpotifyBox } from "../components/Boxes/SpotifyBox";
import { motion } from "framer-motion";
import { OpeningAnimation } from "../components/OpeningAnimation";
import { IntroBox } from "../components/Boxes/IntroBox";
import { ThemeBox } from "../components/Boxes/ThemeBox";
import { ProjectBox } from "../components/Boxes/ProjectBox";
import { WorkBox } from "../components/Boxes/WorkBox";
import { BlogBox } from "../components/Boxes/BlogBox";
import { PhotoBox } from "../components/Boxes/PhotoBox";
import { useTheme } from "../components/context/DarkModeProvider";
import { MovieBox } from "../components/Boxes/MovieBox";
import Link from "next/link";
import { Box } from "../components/Box";

export const HomePage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("bg-orange-100");
  const { darkMode } = useTheme();

  useEffect(() => {
    if (!darkMode) {
      setBackgroundColor("bg-orange-50");
    } else {
      setBackgroundColor("bg-slate-700");
    }
  }, [darkMode]);

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.0,
      },
    },
  };

  return (
    <div
      style={{
        WebkitTransition: "background-color 500ms linear",
        msTransition: "background-color 500ms linear",
        transition: "background-color 500ms linear",
      }}
      className={`flex justify-center min-h-screen-plus-10 relative ${backgroundColor} dark:${backgroundColor} `}
    >
      <OpeningAnimation showLogo={showLogo} setShowLogo={setShowLogo} />

      {!showLogo && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className=" grid lg:grid-cols-3 py-[5%] px-[5%] lg:w-[65%] w-full  lg:grid-rows-3 justify-center items-center gap-4 "
        >
          <IntroBox />
          <WorkBox />

          <BlogBox />

          <ThemeBox
            setBackgroundColor={setBackgroundColor}
            backgroundColor={backgroundColor}
          />

          <ProjectBox />

          {/* <MovieBox /> */}
          <Box className=" text-gray-500 text-2xl items-center flex justify-center">
            Coming Soon
          </Box>

          <SpotifyBox />

          <div className="text-center dark:text-white lg:col-span-3 underline text-xl">
            <Link href="/detailed">Detailed Version</Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
