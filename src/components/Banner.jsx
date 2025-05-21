import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import { Button } from "./Button";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    //Immediately Invoked async function expression.
    (async () => {
      try {
        //await... pauses the execution until the promise(axios.get()) resolves
        const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("Unable to fetch Netflix Originals...", error);
      }
    })(); //()-> call or invoke the function automatically
  }, []);
  //trunctate function
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[40vh] max-w-full"
      style={{
        //url to access movie images(like,posters/backdrops)
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="pt-[35vh] pb-[10vh] ml-[3vw]">
        <h1 className="text-5xl text-white text-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="flex justify-start items-center gap-14 py-5 ml-5">
          <Button btn_title="Play" />
          <Button btn_title="My List" />
        </div>
        <h1 className="max-w-[35vw] text-white text-sm bg-[#9592928c] rounded-lg   p-2 mb-4">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="h-[10vh] bg-fadeOut" />
    </div>
  );
};

export default Banner;
