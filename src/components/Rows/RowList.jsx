import React from "react";
import Row from "./Row";
import requests from "../../utils/requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED " fetchUrl={requests.fetchTopRatedMovie} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV SHOWS" fetchUrl={requests.fetchTvShows} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
