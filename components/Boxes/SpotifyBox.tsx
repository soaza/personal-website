import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { ISpotifyRecentlyPlayedTrack } from "../../common/interfaces";

export const SpotifyBox = () => {
  const { data } = useQuery<{
    recentlyPlayedTrack: ISpotifyRecentlyPlayedTrack;
  }>("spotify-recently-played", async () => {
    const res = await axios.get("/api/spotify");
    return res.data;
  });

  return (
    <div className="text-white flex flex-col gap-4">
      <img
        src={data?.recentlyPlayedTrack.track.album.images[0].url}
        className="w-full h-full absolute top-0  left-0 rounded-3xl opacity-20 -z-10"
      />

      {/*
      <svg
        version="1.1"
        id="mdi-spotify"
        width="24"
        fill="white"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg> */}

      <div className="text-5xl font-bold">
        {data?.recentlyPlayedTrack.track.name}
      </div>

      <div className="text-3xl text-orange-300">
        {data?.recentlyPlayedTrack.track.album.name}
      </div>

      <a href={data?.recentlyPlayedTrack.track.uri}>
        <svg
          className="absolute bottom-2 right-2  "
          version="1.1"
          id="mdi-spotify"
          width="40"
          height="40"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </a>
    </div>
  );
};
