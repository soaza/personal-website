import { motion } from "framer-motion";
import type { NextPage } from "next";
import MotionScroll from "../components/MotionScroll";
import { ParallaxBackground } from "../components/ParallaxBackground";
import { Projects } from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <ParallaxBackground backgroundImage="/images/bg-2.jpg">
        <div className="h-screen flex justify-center items-center">
          <span>
            <div className="text-white text-6xl font-extrabold">Kim Guan</div>
            <div className=" text-white text-center text-xl font-semibold">
              Full-Stack Developer
            </div>
          </span>
        </div>
      </ParallaxBackground>

      <ParallaxBackground backgroundImage="/images/bg.jpg">
        <Projects />
      </ParallaxBackground>
    </>
  );
};

export default Home;
