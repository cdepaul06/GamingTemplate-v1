import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/";

const App = () => {
  return (
    <>
      <div className='relative min-h-screen'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 z-10 pt-10'>
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default App;
