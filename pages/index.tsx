import type { NextPage } from "next";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

import { Section } from "../components/Section";
import { Works } from "../components/Works";

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
      <div className="h-screen ">
        <About />
      </div>

      <div className="flex justify-center">
        {/* <div className="border w-1/2" /> */}
      </div>

      {SECTIONS.map((sectionData) => {
        return (
          <div className="min-h-screen p-10">
            <Section sectionData={sectionData} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
