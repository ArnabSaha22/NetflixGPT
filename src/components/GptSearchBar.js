import React from "react";
import lang from "../utils/Languages";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageSelected = useSelector((store) => store.lang.selectLanguage);
  //console.log(languageSelected)
  return (
    <div>
      <form className="pt-40 pl-96">
        {languageSelected === "en" ? (
          <>
            <input
              type="text"
              className="h-10 w-1/2 rounded-xl p-2 m-1.5 shadow-md focus:ring-red-800"
              placeholder={lang.gptSearchBarPlaceholder.eng.text}
            />
            <button className="h-10 w-24 rounded-xl bg-red-900 text-white">
              {lang.gptSearchBarPlaceholder.eng.search}🔍
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="h-10 w-1/2 rounded-xl p-2 m-1.5 shadow-md focus:ring-red-800"
              placeholder={lang.gptSearchBarPlaceholder.hindi.text}
            />
            <button className="h-10 w-20 rounded-xl bg-red-900 text-white">
              {lang.gptSearchBarPlaceholder.hindi.search}🔍
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
