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
      <div className='flex flex-1 justify-center mt-10'>
        <div className='w-[642px] h-[392px] justify-center'>
          <YouTube videoId='eGTILv7NijU?si=8NKLyKYmPMDguvJ-' opts={opts} />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
