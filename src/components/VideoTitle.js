import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-10 absolute text-white bg-gradient-to-t from-black">
      <h2 className="font-semibold text-sm md:text-3xl font-serif">{title}</h2>
      <p className="hidden md:inline-block font-thin w-1/2">{overview}</p>
      <div className="p-2">
        <button className=" w-20 md:w-32 p-2 m-1.5 bg-gray-500 text-white rounded-lg font-mono hover:bg-black bg-opacity-30">
          {" "}
          ▶️ Play
        </button>
        <button className="w-30 md:w-32 p-2 m-1.5 bg-gray-500 text-white rounded-lg font-mono hover:bg-black bg-opacity-30">
          {" "}
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
