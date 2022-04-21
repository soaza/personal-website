import React from "react";
import { Parallax } from "react-parallax";

interface IProps {
  children: any;
  backgroundImage?: string;
  backgroundColor?: string;
}
export const ParallaxBackground = (props: IProps) => {
  const { children, backgroundImage, backgroundColor } = props;
  return (
    <Parallax
      style={{ backgroundColor: backgroundColor }}
      // bgImage={backgroundImage}
      strength={400}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      {children}
    </Parallax>
  );
};
