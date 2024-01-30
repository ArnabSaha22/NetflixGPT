import Header from "./Header";
import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryVideoContainer from "./SecondaryVideoContainer";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useUpcommingMovies from "../custom hooks/useUpcommingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const selector = useSelector((store) => store.gpt.showGptSearch);
  //console.log(selector);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  return (
    <div>
      <Header />
      {selector ? (
        <GptSearchPage />
      ) : (
        <>
          <MainVideoContainer />
          <SecondaryVideoContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

/**
 *
 */
