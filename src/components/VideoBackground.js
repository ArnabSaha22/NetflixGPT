import useMovieTrailer from "../custom hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ movieId }) => {
  const selector = useSelector((store) => store.movies?.trailerVideo?.key);

  //Fetch the trailer video and update the store with the trailer video data using the below custom hook
  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          selector 
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;


/**
 * 
 * <div className="w-screen">
      <iframe
        className=" w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + selector + "?si=-wnax0chlQ2owfy4"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
 * 
 */