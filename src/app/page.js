"use client";

import React, { useState } from 'react';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import MainSection from './Components/MainSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="flex">
      <div className={`h-screen w-64 bg-blue-800 text-white p-4 transform fixed left-0 top-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <p className='text-gray-200'>Hello User</p>
      </div>

      <div className={`flex-1 p-4 transition-all ${isOpen ? 'ml-64' : 'ml-0'} duration-300 ease-in-out`}>
        <button className="" onClick={toggleSidebar}>
          <IoMdArrowDroprightCircle className='text-blue-800 text-3xl ml-3' />
        </button>

        <div className=''>
          <MainSection />
        </div>
      </div>
    </div>

  );
};

export default Home;