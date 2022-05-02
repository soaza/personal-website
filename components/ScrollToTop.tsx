import React, { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const onBackToTop = (e: any) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {offset > 200 && (
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-1 lg:mb-4 mr-1 lg:mr-4 z-10">
          <button
            className="bg-black dark:bg-slate-600 flex w-8 lg:w-16 h-8 lg:h-16 p-2 lg:p-0 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 bg-dark-100 place-content-center items-center"
            onClick={onBackToTop}
          >
            <svg viewBox="0 0 24 24 " width="24" height="24">
              <path
                d="M5 12L12 5L19 12M12 19V6V19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
