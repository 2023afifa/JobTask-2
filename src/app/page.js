import React from 'react';
import DiscussionForum from './Components/DiscussionForum';
import MarketStories from './Components/MarketStories';
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Home = () => {
  return (
    <div>

      <div className='flex gap-5'>
        <div className="drawer w-auto">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center">
            <label htmlFor="my-drawer"><IoMdArrowDroprightCircle className='text-blue-800 text-3xl ml-3' /></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>

            </ul>
          </div>
        </div>
        <div className='w-3/4'>
          <h1 className='text-xl text-blue-500 font-bold bg-gray-200 p-3'>Discussion Forum</h1>
          <DiscussionForum></DiscussionForum>
        </div>

        <div className='w-1/4'>
          <h1 className='text-xl text-blue-500 font-bold bg-gray-200 p-3'>Market Stories</h1>
          <MarketStories></MarketStories>
        </div>
      </div>

    </div>
  );
};

export default Home;