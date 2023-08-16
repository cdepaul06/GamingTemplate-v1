import { useState, useEffect } from "react";
import { mainImage } from "./constants";
import Navigation from "./components/Navigation/";

const App = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0.25);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='relative min-h-screen'>
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          style={{
            opacity: opacity,
            transition: "opacity 3s ease-out",
          }}
          className='absolute w-full h-full object-cover sm:w-full sm:h-full sm:flex sm:flex-grow'
        />
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 z-10 pt-10'>
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default App;
