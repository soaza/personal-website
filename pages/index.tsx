import type { NextPage } from "next";
import { About } from "../components/About";
import { Section } from "../components/Section";
import { SECTIONS } from "../common/constants";
import { ScrollDetector } from "../components/ScrollDetector";
import { Border } from "../components/Border";
import Head from "next/head";
import { ScrollToTop } from "../components/ScrollToTop";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> {"Kim Guan | dev"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ScrollDetector />
      <ScrollToTop />

      <About />

      {/* <Border /> */}

      {SECTIONS.map((sectionData, index) => {
        return (
          <div
            key={index}
            id={`section-${index + 1}`}
            className="min-h-screen p-6 lg:p-12 flex justify-center dark:bg-slate-900 dark:text-white "
          >
            <Section sectionData={sectionData} />
          </div>
        );
      })}

      <div className="p-4 italic text-gray-400 text-base text-left dark:bg-slate-900">
        last updated: 2/5/22
      </div>
    </>
  );
};

export default Home;
