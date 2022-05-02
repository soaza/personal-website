import React from "react";

export const BlogPost = () => {
  return (
    <div className="mt-12">
      <div className=" flex flex-row gap-4">
        <div className="text-xl text-gray-400 italic">Nov 11, 2021</div>

        <div>
          <a href="https://medium.com/@chukimguan/client-side-versus-server-side-rendering-the-banes-and-boons-77ed1368d0d5">
            <div className="hover:underline text-xl lg:text-2xl font-extrabold">
              Client Side versus Server Side rendering: the banes and boons
            </div>
          </a>
          <div className="text-gray-400 italic">3 min read</div>
        </div>
      </div>
    </div>
  );
};
