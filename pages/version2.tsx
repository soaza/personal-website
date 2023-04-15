import React from "react";
import { Box } from "../components/Box";
import { useQuery } from "react-query";
import axios from "axios";

export const HomePage = () => {
  const { data } = useQuery("todos", async () => {
    const res = await axios.get("/api/spotify");
    console.log(res.data);
    return res.data;
  });

  return (
    <div className="grid grid-cols-3 h-screen p-[10%] grid-rows-3 justify-center items-center gap-4">
      {[...Array(9)].map((i) => (
        <Box />
      ))}
    </div>
  );
};

export default HomePage;
