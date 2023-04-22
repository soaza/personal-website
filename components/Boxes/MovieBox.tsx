import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { ISpotifyRecentlyPlayedTrack } from "../../common/interfaces";
import { Box } from "../Box";

export const MovieBox = () => {
  return (
    <Box className=" bg-gray-800">
      <>
        <img
          src={"https://images5.alphacoders.com/119/thumb-1920-1198137.jpg"}
          className="w-full h-full absolute top-0  left-0 rounded-3xl opacity-40 -z-10"
        />

        <div className="text-white flex flex-col gap-2 h-full">
          <div className="text-4xl 2xl:text-3xl font-bold ">Suzume</div>

          <div className="text-2xl font-thin 2xl:text-2xl text-orange-300">
            Makoto Shinkai
          </div>

          <a className="absolute bottom-2 right-2 kist flex flex-row align-middle items-center gap-2">
            <span className="text-md font-light">RECENTLY WATCHED</span>
          </a>
        </div>
      </>
    </Box>
  );
};
