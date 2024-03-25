import React from 'react';
import DiscussionForum from './DiscussionForum';
import MarketStories from './MarketStories';

const MainSection = () => {
    return (
        <div className='flex gap-5'>
            <div className='w-3/4'>
                <h1 className='text-xl text-blue-500 font-bold bg-gray-200 p-3'>Discussion Forum</h1>
                <DiscussionForum></DiscussionForum>
            </div>

            <div className='w-1/4'>
                <h1 className='text-xl text-blue-500 font-bold bg-gray-200 p-3'>Market Stories</h1>
                <MarketStories></MarketStories>
            </div>
        </div>
    );
};

export default MainSection;