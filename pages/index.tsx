import type { NextPage } from "next";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Section } from "../components/Section";
import { Works } from "../components/Works";
import Scrollspy from "react-scrollspy";

const SECTIONS = [
  {
    title: "work experience",
    subtitle: "companies i have worked with.",
    child: <Works />,
  },
  {
    title: "projects",
    subtitle: "personal projects I have worked on.",
    child: <Projects />,
  },
];

const Fade = require("react-reveal/Fade");

const Home: NextPage = () => {
  return (
    <>
      <Scrollspy
        className=" opacity-0 lg:opacity-100  fixed top-1/3 left-0  min-h-screen px-2 py-12 flex flex-col gap-5"
        items={["section-0", "section-1", "section-2", "section-3"]}
        currentClassName="text-gray-400 "
      >
        <li>
          <a href="#section-0">it's me</a>
        </li>
        <li>
          <a href="#section-1">work experience</a>
        </li>
        <li>
          <a href="#section-2">projects</a>
        </li>
        <li>
          <a href="#section-3">contact me</a>
        </li>
      </Scrollspy>

      <div
        id="section-0"
        className="min-h-screen p-12 flex justify-center items-center"
      >
        {/* <Fade bottom> */}
        <About />
        {/* </Fade> */}
      </div>

      <div className="flex justify-center">
        <div className="border w-1/2" />
      </div>

      {SECTIONS.map((sectionData, index) => {
        return (
          <div
            key={index}
            id={`section-${index + 1}`}
            className="min-h-screen p-12 flex justify-center items-center"
          >
            <Section sectionData={sectionData} />

            <div className="flex justify-center">
              <div className="border w-1/2" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
