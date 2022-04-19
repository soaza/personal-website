import type { NextPage } from "next";
import { Parallax } from "react-parallax";

const Home: NextPage = () => {
  return (
    <>
      <Parallax
        className="h-screen flex justify-center items-center"
        blur={0}
        bgImage={"/images/bg-2.jpg"}
        strength={500}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <span className="text-white text-6xl">Kim Guan</span>
      </Parallax>

      <Parallax
        className="h-screen flex justify-center items-center"
        blur={0}
        bgImage={"/images/bg.jpeg"}
        strength={500}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <span className="text-black text-6xl">Kim Guan</span>
      </Parallax>
    </>
  );
};

export default Home;
