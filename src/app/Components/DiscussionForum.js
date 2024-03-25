import React from 'react';
import discussData from "../../../public/post.json";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";


const DiscussionForum = () => {

    return (
        <div>
            {
                discussData.map(post => (<div key={post.id}>

                    <div className='mx-2 lg:mx-5 p-5 shadow-lg flex'>
                        <div className='w-1/12'>
                            <img className='w-6 lg:w-12 rounded-full' src={post.image} />
                        </div>
                        <div className='w-10/12'>
                            <div className='flex mb-3'>
                                <h3 className='font-bold mr-5'>{post.name}</h3>
                                <p className='bg-blue-600 text-gray-200 text-xs font-bold py-1 px-2 rounded-xl'>Sector 1</p>
                            </div>
                            <p className='text-xs lg:text-sm text-justify font-medium mb-3'>{post.content}</p>
                            <div className='flex justify-evenly'>
                                <div className='flex items-center'>
                                    <FaRegHeart className='text-sm lg:text-lg mr-1' />
                                    <p className='text-xs lg:text-sm'>2k</p>
                                </div>
                                <div className='flex items-center'>
                                    <IoEyeOutline className='text-sm lg:text-lg mr-1' />
                                    <p className='text-xs lg:text-sm'>8k</p>
                                </div>
                                <div className='flex items-center'>
                                    <FaRegCommentAlt className='text-sm lg:text-lg mr-1' />
                                    <p className='text-xs lg:text-sm'>1k Comments</p>
                                </div>
                                <div className='flex items-center'>
                                    <IoShareSocialOutline className='text-sm lg:text-lg mr-1' />
                                    <p className='text-xs lg:text-sm'>Share</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/12'>
                            <p className='text-blue-700 text-xs font-semibold text-center'>2 mins ago</p>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default DiscussionForum;