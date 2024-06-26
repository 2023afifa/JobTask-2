import React from 'react';
import marketData from "../../../public/story.json";

const MarketStories = () => {
    return (
        <div>
            {
                marketData.map(story => (<div key={story.id}>
                    <div className='mx-8 mt-2 mb-8'>
                        <img className='mb-3' src={story.image} />
                        <h3 className='mb-1 font-bold'>{story.title}</h3>
                        <p className='text-xs'>{story.content}</p>
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default MarketStories;