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

const Home: NextPage = () => {
  return (
    <>
      <Scrollspy
        className=" opacity-0 lg:opacity-100  fixed top-1/4 left-0  min-h-screen px-2 py-12 flex flex-col gap-5"
        items={["section-1", "section-2"]}
        currentClassName="text-gray-400"
      >
        <li>
          <a href="#section-1">Work Experience</a>
        </li>
        <li>
          <a href="#section-2">Projects</a>
        </li>
        <li>
          <a href="#section-3">Contact Me</a>
        </li>
      </Scrollspy>

      <div className="h-screen ">
        <About />
      </div>

      <div className="flex justify-center">
        {/* <div className="border w-1/2" /> */}
      </div>

      {SECTIONS.map((sectionData, index) => {
        return (
          <div
            key={index}
            id={`section-${index + 1}`}
            className="min-h-screen p-10"
          >
            <Section sectionData={sectionData} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
