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
        "bg-white rounded-3xl p-4 dark:bg-slate-800 dark:border-gray-500 dark:border text-black dark:text-white aspect-square w-80 lg:w-full relative " +
        className
      }
      variants={boxVariant}
    >
      {children}
    </motion.div>
  );
};
