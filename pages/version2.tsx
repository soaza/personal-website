import React, { useState } from "react";
import { Box } from "../components/Box";
import { useQuery } from "react-query";
import axios from "axios";
import { SpotifyBox } from "../components/Boxes/SpotifyBox";
import { motion } from "framer-motion";
import { OpeningAnimation } from "../components/OpeningAnimation";
import { IntroBox } from "../components/Boxes/IntroBox";
import { DarkModeBox } from "../components/Boxes/DarkModeBox";
import { ProjectBox } from "../components/Boxes/ProjectBox";
import { WorkBox } from "../components/Boxes/WorkBox";
import { BlogBox } from "../components/Boxes/BlogBox";
import { PhotoBox } from "../components/Boxes/PhotoBox";

export const HomePage = () => {
  const [showLogo, setShowLogo] = useState(true);

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
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
      className="flex justify-center min-h-screen-plus-10 relative bg-orange-50 dark:bg-slate-800 "
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
          <SpotifyBox />
          <ProjectBox />
          <DarkModeBox />
          <WorkBox />
          <BlogBox />
          <PhotoBox />

          {[...Array(4)].map((i, index) => (
            <Box key={index} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
