import { motion } from "framer-motion";
import type { NextPage } from "next";
import { About } from "../components/About";
import MotionScroll from "../components/MotionScroll";
import { ParallaxBackground } from "../components/ParallaxBackground";
import { Projects } from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen">
        <About />
      </div>

      <div className="flex justify-center">
        {/* <div className="border w-1/2" /> */}
      </div>

      <div className="h-screen p-5">
        <Projects />
      </div>
    </>
  );
};

export default Home;
