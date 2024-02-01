import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return
  return (
    <div className="w-40 m-2">
     <img alt="Movie Image" src={IMG_CDN_URL + posterPath}/>
    </div>
  );
};
 
export default MovieCard;
