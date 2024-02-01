import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const selector = useSelector((store) => store.gpt.searchedMovies);
  //console.log(selector);
  const { searchedMovieNames, searchedMovieResults } = selector;
  if (!searchedMovieNames || !searchedMovieResults) return null;

  return (
    <div className=" p-4">
      {searchedMovieNames.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={searchedMovieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
