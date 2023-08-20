import React from "react";

import Navigation from "./components/Navigation/";
import VideoPlayer from "./components/VideoPlayer";

const App = ({}) => {
  return (
    <>
      <div className='relative min-h-screen'>
        <Navigation />
        <VideoPlayer />
      </div>
    </>
  );
};

export default App;
