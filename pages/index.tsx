import type { NextPage } from "next";
import { About } from "../components/About";
import { Section } from "../components/Section";
import { SECTIONS } from "../common/constants";
import { ScrollDetector } from "../components/ScrollDetector";
import { Border } from "../components/Border";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> {"Kim Guan | dev"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ScrollDetector />

      <About />

      <Border />

      {SECTIONS.map((sectionData, index) => {
        return (
          <div
            key={index}
            id={`section-${index + 1}`}
            className="min-h-screen p-6 lg:p-12 flex justify-center dark:bg-black dark:text-white "
          >
            <Section sectionData={sectionData} />
          </div>
        );
      })}

      <div className="text-gray-400 text-base text-right dark:bg-black">
        last updated: 22/4/22
      </div>
    </>
  );
};

export default Home;
