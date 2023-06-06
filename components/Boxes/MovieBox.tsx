import React from "react";
import { useQuery } from "react-query";
import { Box } from "../Box";
import { supabase } from "../../common/supabase";

interface IMovie {
  created_at: Date;
  movie_name: string;
  movie_director: string;
  movie_image: string;
}

export const MovieBox = () => {
  const { data: movieData } = useQuery<IMovie | undefined>(
    "recently-watched-movie",
    async () => {
      const { data, error } = await supabase
        .from("movies")
        .select()
        .order("created_at", { ascending: false });

      if (!data) {
        return;
      }

      return data[0] as IMovie;
    }
  );

  return (
    <Box className=" bg-gray-800">
      <>
        <img
          src={movieData?.movie_image}
          className="w-full h-full absolute top-0 left-0 rounded-3xl opacity-40 -z-10 object-cover"
        />

        <div className="text-white flex flex-col gap-2 h-full">
          <div className="text-4xl 2xl:text-3xl font-bold ">
            {movieData?.movie_name}
          </div>

          <div className="text-2xl font-thin 2xl:text-2xl text-orange-300">
            {movieData?.movie_director}
          </div>

          <a className="absolute bottom-2 right-2 kist flex flex-row align-middle items-center gap-2">
            <span className="text-md font-light">RECENTLY WATCHED</span>
          </a>
        </div>
      </>
    </Box>
  );
};
