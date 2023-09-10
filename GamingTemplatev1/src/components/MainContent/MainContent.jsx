import React from "react";
import { Divider } from "@mui/material";

const MainContent = ({}) => {
  const datePosted = new Date().toLocaleDateString();

  return (
    <>
      <div className='flex flex-col mt-10 lg:w-[45%] sm:w-[67%]'>
        <div className=' bg-black flex justify-center rounded'>
          <h1 className='font-bold text-white text-2xl'>News</h1>
        </div>
        <div className='bg-white h-[100vh] rounded'>
          <div className='mt-2'>
            <p className='flex justify-center text-lg'>{datePosted}</p>
          </div>
          <div className='w-[87%] mt-2 ml-14'>
            <Divider sx={{ bgcolor: "black" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
