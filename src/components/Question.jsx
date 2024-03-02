// pages/index.js
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Question = () => {
  const [showSubCardIndex, setShowSubCardIndex] = useState(null);

  const toggleSubCard = (index) => {
    setShowSubCardIndex(showSubCardIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Topics</h1>
      <div className="flex flex-wrap">
        <Card title="Basic" index={0} prompt1="Prompt 1 for Basic" prompt2="Prompt 2 for Basic" showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="Array" index={1} prompt1="Prompt 1 for Array" prompt2="Prompt 2 for Array" showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="String" index={2} prompt1="Prompt 1 for String" prompt2="Prompt 2 for String" showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="Linked List" index={3} prompt1="Prompt 1 for Linked List" prompt2="Prompt 2 for Linked List" showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="Recursion" index={4} prompt1="Prompt 1 for Recursion" prompt2="Prompt 2 for Recursion" showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
      </div>
    </div>
  );
};

const Card = ({ title, index, prompt1, prompt2, showSubCardIndex, toggleSubCard }) => {
  const startIndex = index * 2 + 1;
  const endIndex = startIndex + 1;

  return (
    <div className="w-full p-4">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md" onClick={() => toggleSubCard(index)}>
        <h2 className="text-lg font-semibold">{title}</h2>
        {showSubCardIndex === index && (
          <>
            <SubCard level={startIndex} prompt={prompt1} />
            <SubCard level={endIndex} prompt={prompt2} />
          </>
        )}
      </div>
    </div>
  );
};

const SubCard = ({ level, prompt }) => {
  return (
    <div className="w-full p-4 mt-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Prompt: {prompt}</h2>
        <h2 className="text-lg font-semibold">Level: {level}</h2>
        <Link href='/code-editor'>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Solve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Question;
