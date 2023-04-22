import { AnimatePresence, SVGMotionProps, motion } from "framer-motion";
import React from "react";

export const OpeningAnimation = (props: {
  showLogo: boolean;
  setShowLogo: (showLogo: boolean) => void;
}) => {
  const { setShowLogo, showLogo } = props;
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: showLogo ? 1 : 0 },
  };

  const pathProps = {
    onAnimationComplete: () => setShowLogo(false),
    initial: { pathLength: 0, pathOffset: 0 },
    animate: showLogo
      ? { pathLength: 1, pathOffset: 0 }
      : { pathLength: 1, pathOffset: 1 },
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
    fill: "none",
  };

  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
      className="stroke-black dark:stroke-white flex flex-col align-middle items-center fixed  -mr-[50%] left-1/2 top-1/2"
    >
      <AnimatePresence>
        <motion.svg
          key="logo"
          className={"w-24"}
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path {...pathProps} d="M7 8l-4 4 4 4" />
          <motion.path {...pathProps} d="M10.5 18l3-12" />
          <motion.path {...pathProps} d="M17 8l4 4-4 4" />
        </motion.svg>

        <motion.div
          key="name"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <div className=" font-bold text-4xl dark:text-white"> Kim Guan</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
