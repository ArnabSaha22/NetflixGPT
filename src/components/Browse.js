import Header from "./Header";
import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryVideoContainer from "./SecondaryVideoContainer";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useUpcommingMovies from "../custom hooks/useUpcommingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  return (
    <div>
      <Header />
      <MainVideoContainer />
      <SecondaryVideoContainer />
    </div>
  );
};

export default Browse;

/**
 *
 */
