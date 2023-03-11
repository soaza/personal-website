import React, { useState } from "react";
import { WORK_EXPERIENCES } from "../common/constants";
const Fade = require("react-reveal/Fade");

const TestPage = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Show</button>
      <div className="flex justify-center align-middle h-screen items-center font-sans">
        <Fade bottom opposite cascade when={show}>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full p-8 md:p-24 md:h-2/3 gap-4">
            <div className="col-span-1 md:col-span-2 rounded-2xl gap-4 flex flex-col">
              <div className="bg-black h-1/2 rounded-2xl p-8 text-white flex flex-col">
                <div className="text-6xl font-black">ARC Community</div>
                <div className="text-2xl font-bold">
                  Software Engineer Intern
                </div>

                <div className="text-lg">Mar 2023 - Present</div>
              </div>

              <div className="bg-blue-400 h-1/2 rounded-2xl p-8 text-white flex flex-col">
                <div className="text-6xl font-black">ByteDance</div>
                <div className="text-2xl font-bold">
                  Front-End Engineer Intern
                </div>

                <div className="text-lg">May 2022 - Aug 2022</div>
              </div>
            </div>

            <div className="col-span-1 rounded-2xl flex flex-col gap-4">
              <div className="bg-yellow-400 md:h-1/2 rounded-2xl text-white flex flex-col p-8">
                <div className="text-3xl md:text-6xl font-black">Binance</div>
                <div className="text-2xl font-bold">
                  Software Engineer Intern
                </div>

                <div className="text-lg">Jan 2022 - Apr 2022</div>
              </div>

              <div className="bg-orange-400 md:h-1/2 rounded-2xl text-white flex flex-col p-8">
                <div className="text-6xl font-black">Shopee</div>
                <div className="text-2xl font-bold">
                  Front-End Engineer Intern
                </div>

                <div className="text-lg">Jul 2021 - Nov 2021</div>
              </div>
            </div>

            <div className="bg-purple-400  rounded-2xl text-white flex flex-col p-8">
              <div className="text-5xl font-black">WorkClass</div>
              <div className="text-2xl font-bold">
                Front-End Engineer Intern
              </div>

              <div className="text-lg">Jul 2021 - Nov 2021</div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default TestPage;
