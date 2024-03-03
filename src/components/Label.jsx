"use client"


import React, { useState } from 'react';
import Head from 'next/head';

const RatingPage = () => {
    const [likeCount, setLikeCount] = useState(0);
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);


  const handleClick = (index) => {
    if (index === 0 || index === lastClickedIndex + 1) {
      setLikeCount(likeCount + 1);
      setLastClickedIndex(index);
    } else {
      // Reset the counter if the clicked index is not consecutive
      setLikeCount(0);
      setLastClickedIndex(-1);
    }
  }; 
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-300 to-pink-200">
      <Head>
        <title>Rate Your Skills</title>
        <meta name="description"content="Rate your skills in different areas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-98 px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-8">Rate Your Skills</h1>
        <div className=" h-50 flex justify-between">
          <div className=" h-50 bg-blue-400 flex-1 p-6 rounded-lg shadow-md mr-4">
            <h2 className="text-xl font-semibold text-white mb-4">Beginner</h2>
            <p className="text-gray-700">Rate your beginner-level skills here</p>
        
          </div>
          <div className="bg-pink-400 flex-1 p-6 rounded-lg shadow-md mx-2">
            <h2 className="text-xl font-semibold text-white mb-4">Intermediate</h2>
            <p className="text-gray-700">Rate your intermediate-level skills here</p>
        
          </div>
          <div className="bg-blue-400 flex-1 p-6 rounded-lg shadow-md ml-4">
            <h2 className="text-xl font-semibold text-white mb-4">Expertise</h2>
            <p className="text-gray-700">Rate your expertise-level skills here</p>
    
          </div>
        </div>
         <div>
         <h1 className="text-center text-bold mt-7">OR</h1>
         </div>
         <div>
            <p className="text-3xl font-semibold text-center mt-8 mb-8">RATE YOUR CODING SKILLS OUT OF {likeCount}/10</p>
         </div>
         <div div className = "flex justify-center">
        
         {[...Array(10).keys()].map((index) => (
            <svg
              key={index}
              onClick={() => handleClick(index)}
              className={`h-10 w-10 fill-current ${index <= lastClickedIndex ? 'text-yellow-500' : 'text-gray-400'} cursor-pointer`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3.07l1.9 5.704H18l-4.405 3.203L14.931 17l-4.45-3.093L6.1 17l1.436-5.023L3 8.774h5.1L10 3.071zm0 1.919L8.81 7.603H5.802l3.061 2.196-.965 3.38L10 11.251l2.1 1.928-.966-3.38L14.198 7.6h-3.008L10 4.989z"
                clipRule="evenodd"
              />
            </svg>
              ))}
              </div> 
      </main>
    </div>
  );
};

export default RatingPage;
