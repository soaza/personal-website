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

  const boxVariant = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: "spring" } },
  };

  return (
    <div className="flex justify-center h-screen items-center ">
      <OpeningAnimation showLogo={showLogo} setShowLogo={setShowLogo} />

      {!showLogo && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 p-[10%] px-[20%] w-full h-full grid-rows-3 justify-center items-center gap-4"
        >
          {[...Array(8)].map((i) => (
            <motion.div className="w-full h-full" variants={boxVariant}>
              <Box key={i} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
