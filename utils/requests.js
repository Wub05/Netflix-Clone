const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: "/trending/all/week?api_key=API_KEY", //what gets more attention currently(all->in all categories,Week-> in a current week)
  fetchNetflixOrginals:
    "/discover/tv?api_key=API_KEY&with_networks=213&language=en-US", //213 is the network ID for Netflix in TMDB (4 - BBC)
  fetchTopRatedMovie: "/movie/top_rated?api_key=API_KEY&language=en-US", //this is not limited to Netflix, it means all movies in TMDB
  fetchActionMovies: "/discover/movie?api_key=API_KEY&with_genres=28", //genres-> Id given to movie categories( eg. action, comedy, romance,...)
  fetchComedyMovies: "/discover/movie?api_key=API_KEY&with_genres=35",
  fetchHorrorMovies: "/discover/movie?api_key=API_KEY&with_genres=27",
  fetchRomanceMovies: "/discover/movie?api_key=API_KEY&with_genres=10749",
  fetchDocumentaries: "/discover/movie?api_key=API_KEY&with_genres=99",
  fetchTvShows: "/tv/popular?api_key=API_KEY&language=en-US&page=1",
};
export default requests;
