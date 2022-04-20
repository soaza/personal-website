import React from "react";
import { Parallax } from "react-parallax";

interface IProps {
  children: any;
  backgroundImage: string;
}
export const ParallaxBackground = (props: IProps) => {
  const { children, backgroundImage } = props;
  return (
    <Parallax
      bgImage={backgroundImage}
      strength={400}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      {children}
    </Parallax>
  );
};
