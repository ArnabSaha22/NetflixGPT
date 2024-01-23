import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryVideoContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  //console.log(movies.nowPlayingMovies);
  return (
    <div >
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    </div>
  );
};

export default SecondaryVideoContainer;
