import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original"; //base url for posters and banners

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]); //run only when new fetchUrl is detected!

  //function handles the movie Trailer
  const handleMovieTrailer = (movie) => {
    trailerUrl
      ? setTrailerUrl("")
      : movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
          (url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get("v");
            setTrailerUrl(videoId);

            /* 
         # new URL(url) → Creates a URL object
         # search → Gets the query string part (e.g., ?v=abcd1234)
         # new URLSearchParams(...) → Parses that query string into key-value pairs
             */
          }
        );
  };
  //options for youtube property
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className=" text-white">
      <h1 className="ml-3">{title}</h1>
      <div className="row_posters scrollbar-hide max-h-[100%]">
        {movies?.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleMovieTrailer(movie)}
            src={`${base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }
            alt=${movie?.original_name || movie?.name}`}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      {/*youtube video plays here */}
      <div className="p-10">
        {trailerUrl && (
          <Youtube videoId={trailerUrl} opts={opts} className="shadow-lg" />
        )}
      </div>
    </div>
  );
};

export default Row;
