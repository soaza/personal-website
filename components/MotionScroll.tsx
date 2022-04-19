import type { ReactNode } from "react";
import { motion } from "framer-motion";

const MotionScroll = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <motion.div
      initial={{
        willChange: "opacity, transform",
        opacity: 0.25,
        transform:
          "translate3d(0px, 0px, 0px), scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      whileInView={{
        willChange: "opacity, transform",
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionScroll;
