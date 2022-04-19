import type { NextPage } from "next";
import { Parallax } from "react-parallax";
import { ParallaxBackground } from "../components/ParallaxBackground";

const Home: NextPage = () => {
  return (
    <>
      <ParallaxBackground backgroundImage="/images/bg-2.jpg">
        <div className="h-screen flex justify-center items-center">
          <span className="text-white text-6xl">Kim Guan</span>
        </div>
      </ParallaxBackground>
      <ParallaxBackground backgroundImage="/images/bg.jpg">
        <div className="h-screen flex justify-center items-center">
          <span className="text-white text-6xl">Kim Guan</span>
        </div>
      </ParallaxBackground>
    </>
  );
};

export default Home;
