import React from "react";

export const Box = (props: { children?: React.ReactChild }) => {
  const children = props.children;
  return (
    <div className="bg-blue-300 h-full rounded-3xl p-4 text-white">
      {children}
    </div>
  );
};
