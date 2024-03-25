import React, { useState } from 'react';
import DiscussionForum from './DiscussionForum';
import MarketStories from './MarketStories';

const MainSection = () => {
    const [activeButton, setActiveButton] = useState('discussion');

    const handleActiveButton = (button) => {
        setActiveButton(button);
    };

    return (

        <div>

            <div className='block lg:hidden'>
                <div className="flex justify-around py-3 bg-blue-900 text-gray-200 font-semibold">

                    <button onClick={() => handleActiveButton('discussion')} className={activeButton === 'discussion' ? 'activebutton underline' : 'inactivebutton'}>Discussion Forum</button>


                    <button onClick={() => handleActiveButton('market')} className={activeButton === 'market' ? 'activebutton underline' : 'inactivebutton'}>Market Stories</button>

                </div>
                <div className="font-medium">
                    {activeButton === "discussion" && (
                        <div>
                            <DiscussionForum></DiscussionForum>
                        </div>
                    )}
                    {activeButton === "market" && (
                        <div>
                            <MarketStories></MarketStories>
                        </div>
                    )}
                </div>
            </div>

            <div className='hidden lg:block'>
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
            </div>

        </div>

    );
};

export default MainSection;