"use client";

import React, { useState } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import MainSection from './Components/MainSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="flex">
      <div className={`h-screen w-64 bg-blue-900 text-gray-200 p-4 transform fixed left-0 top-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
        <div>
          <p className='text-gray-200'>Hello User</p>
          <hr></hr>
          <h2 className='mt-10 text-lg font-semibold'>Discussion Forum</h2>
          <h2 className='my-3 text-lg font-semibold'>Market Stories</h2>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className={`flex-1 transition-all ${isOpen ? 'ml-64' : 'ml-0'} duration-300 ease-in-out`}>
          <div className='flex items-center'>
            <div className='bg-blue-900 h-20'>
              <button className="w-auto h-20" onClick={toggleSidebar}>
                <BiSolidRightArrow className='text-gray-200' />
              </button>
            </div>
            <MainSection />
          </div>
        </div>
      </div>

      <div className='block lg:hidden'>
        <div className="relative">
          <div className='flex items-center'>
            <div className={`flex-1 transition-all ${isOpen ? 'ml-64' : 'ml-0'} duration-300 ease-in-out bg-blue-900 h-20 absolute`}>
              <button className="w-auto h-20" onClick={toggleSidebar}>
                <BiSolidRightArrow className='text-gray-200' />
              </button>
            </div>
            <MainSection />
          </div>
        </div>
      </div>

    </div>

  );
};

export default Home;