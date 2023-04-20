import { motion } from "framer-motion";
import React from "react";

export const Box = (props: { children?: React.ReactChild }) => {
  const children = props.children;

  const boxVariant = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      className="bg-blue-300 rounded-3xl p-4 text-white aspect-square"
      variants={boxVariant}
    >
      {children}
    </motion.div>
  );
};
