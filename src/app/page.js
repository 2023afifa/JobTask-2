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
      <div className={`h-screen w-64 bg-blue-900 text-gray-200 p-4 transform fixed left-0 top-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <p className='text-gray-200'>Hello User</p>
      </div>

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

  );
};

export default Home;