import { motion } from "framer-motion";
import React from "react";

export const Box = (props: {
  children?: React.ReactChild;
  className?: string;
}) => {
  const { className, children } = props;

  const boxVariant = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      className={
        className +
        " bg-blue-300 rounded-3xl p-4 text-white aspect-square relative"
      }
      variants={boxVariant}
    >
      {children}
    </motion.div>
  );
};
