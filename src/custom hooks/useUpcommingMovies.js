import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/moviesSlice";

//Custom hook to access Upcomming movies for the main page.
const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcommingMovies);
  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcommingMovies(json.results));
  };
  useEffect(() => {
    if (!upcomingMovies) getUpcommingMovies();
  }, []);
};

export default useUpcommingMovies;
