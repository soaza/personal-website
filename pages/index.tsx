import type { NextPage } from "next";
import { About } from "../components/About";
import { Section } from "../components/Section";
import Scrollspy from "react-scrollspy";
import { SECTIONS } from "../common/constants";
import { ScrollDetector } from "../components/ScrollDetector";
import { Border } from "../components/Border";

const Home: NextPage = () => {
  return (
    <>
      <ScrollDetector />

      <About />

      <Border />

      {SECTIONS.map((sectionData, index) => {
        return (
          <div
            key={index}
            id={`section-${index + 1}`}
            className="min-h-screen p-6 lg:p-12 flex justify-center "
          >
            <Section sectionData={sectionData} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
