import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryVideoContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  //console.log(movies.nowPlayingMovies);
  return (
    <div className="bg-black -mt-10 relative z-10">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcomming"} movies={movies.upcommingMovies} />
    </div>
  );
};

export default SecondaryVideoContainer;
