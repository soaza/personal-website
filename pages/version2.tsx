import React, { useState } from "react";
import { Box } from "../components/Box";
import { useQuery } from "react-query";
import axios from "axios";
import { SpotifyBox } from "../components/Boxes/SpotifyBox";
import { motion } from "framer-motion";
import { OpeningAnimation } from "../components/OpeningAnimation";

export const HomePage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const { data } = useQuery("todos", async () => {
    const res = await axios.get("/api/spotify");
    // console.log(res.data);
    return res.data;
  });

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };

  return (
    <div className="flex justify-center min-h-screen-plus-10  relative ">
      <OpeningAnimation showLogo={showLogo} setShowLogo={setShowLogo} />

      {!showLogo && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className=" grid grid-cols-3 py-[5%] px-[5%] w-[60%]  grid-rows-3 justify-center items-center gap-4 "
        >
          {[...Array(8)].map((i) => (
            <Box key={i} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
