import React from "react";

import Navigation from "./components/Navigation/";
import VideoPlayer from "./components/VideoPlayer";
import MainContent from "./components/MainContent/";

const App = ({}) => {
  return (
    <>
      <div className='relative min-h-screen'>
        <div>
          <Navigation />
        </div>
        <div className='flex justify-center'>
          <VideoPlayer />
        </div>
        <div className='flex justify-center'>
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default App;
