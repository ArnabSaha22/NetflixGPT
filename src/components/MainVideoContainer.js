import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainVideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies); //access the movies from the store
  if (!movies) return; //if movies are not present the early return
  const mainMovie = movies[10];
  //console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainVideoContainer;
