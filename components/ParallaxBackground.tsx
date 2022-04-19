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
      blur={0}
      bgImage={backgroundImage}
      strength={500}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      {children}
    </Parallax>
  );
};
