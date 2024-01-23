import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({posterPath}) => {
  return (
    <div>
     <img alt="Movie Image" src={IMG_CDN_URL + posterPath}/>
    </div>
  );
};
 
export default MovieCard;
