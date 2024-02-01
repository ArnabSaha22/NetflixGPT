import React from "react";
import lang from "../utils/Languages";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageSelected = useSelector((store) => store.lang.selectLanguage);
  const searchText = useRef();
  const dispatch = useDispatch();

  //Search movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 10 movies, comma seperated";

    //Make an API call to GPT API and get movie results.
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults) return;
    const gptMoviesList = gptResults.choices[0]?.message?.content.split(", ");
    //console.log(gptMoviesList);

    //For each movie will call the Search API of TMDB and will find out the results of that movie
    //Since searchMovieTMDB is an async function so here a Promise Array will be returned
    const promiseArray = gptMoviesList.map((movie) => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray); //Extracting the result from the promises
    //console.log(tmdbResult);
    dispatch(
      addGptMovieResult({ movieNames: gptMoviesList, movieResults: tmdbResult })
    );
  };

  return (
    <div>
      <form className="pt-40 pl-96" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="h-10 w-1/2 rounded-xl p-2 m-1.5 shadow-md focus:ring-red-800"
          placeholder={
            languageSelected === "en"
              ? lang.gptSearchBarPlaceholder.eng.text
              : lang.gptSearchBarPlaceholder.hindi.text
          }
        />
        <button
          className="h-10 w-24 rounded-xl bg-red-900 text-white"
          onClick={handleGptSearchClick}
        >
          {languageSelected === "en"
            ? lang.gptSearchBarPlaceholder.eng.search
            : lang.gptSearchBarPlaceholder.hindi.search}{" "}
          🔍
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
