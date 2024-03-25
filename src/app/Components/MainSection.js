import React from 'react';
import DiscussionForum from './DiscussionForum';
import MarketStories from './MarketStories';

const MainSection = () => {
    return (
        <div className='lg:flex'>
            <div className='lg:w-3/4'>
                <div className='hidden lg:block'>
                    <h1 className='text-xl text-blue-500 font-bold bg-gray-200 p-3'>Discussion Forum</h1>
                </div>
                <DiscussionForum></DiscussionForum>
            </div>

            <div className='lg:w-1/4'>
                <div className='hidden lg:block'>
                    <h1 className='text-xl text-blue-500 font-bold bg-gray-200 p-3'>Market Stories</h1>
                </div>
                <MarketStories></MarketStories>
            </div>
        </div>
    );
};

export default MainSection;