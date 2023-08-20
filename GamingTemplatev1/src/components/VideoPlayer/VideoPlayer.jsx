import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({}) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className='flex flex-1 justify-center pt-10 pb-5'>
        <h1 className='text-2xl font-bold text-white'>Highlights</h1>
      </div>
      <div className='flex flex-1 justify-center'>
        <div className='w-[642px] border justify-center'>
          <YouTube
            videoId='eGTILv7NijU?si=8NKLyKYmPMDguvJ-'
            opts={opts}
            onReady={(event) => console.log("Video is ready!")}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;