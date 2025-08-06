export const netflix_Logo = process.env.REACT_APP_NETFLIX_LOGO;

export const netflix_BgImage =
  "https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";

export const GPT_KEY = process.env.REACT_APP_OPENAI_KEY;

