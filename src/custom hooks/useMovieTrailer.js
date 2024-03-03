import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addMoviesTrailers } from "../utils/moviesSlice";
import { useEffect } from "react";
//Custom Hook to acces the movie trailer on the main page
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const nowPlayingTrailer = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);
    dispatch(addMoviesTrailers(trailer));
  };

  useEffect(() => {
    if (!nowPlayingTrailer) getMovieVideos();
  }, []);
};

export default useMovieTrailer;
