import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMoviesTrailers : (state, action ) =>{
      state.trailerVideo = action.payload;
    }
  },
});
export const { addNowPlayingMovies, addMoviesTrailers } = moviesSlice.actions;
export default moviesSlice.reducer;
