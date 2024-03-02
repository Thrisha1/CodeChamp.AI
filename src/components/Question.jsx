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
        <Card title="Basic" index={0} showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="Array" index={1} showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="String" index={2} showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="Linked List" index={3} showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        <Card title="Recursion" index={4} showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
      </div>
    </div>
  );
};

const Card = ({ title, index, showSubCardIndex, toggleSubCard }) => {
  const startIndex = index * 2 + 1;
  const endIndex = startIndex + 1;

  return (
    <div className="w-full p-4">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md" onClick={() => toggleSubCard(index)}>
        <h2 className="text-lg font-semibold">{title}</h2>
        {showSubCardIndex === index && (
          <>
            <SubCard level={startIndex} />
            <SubCard level={endIndex} />
          </>
        )}
      </div>
    </div>
  );
};

const SubCard = ({ level }) => {
  return (
    <div className="w-full p-4 mt-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
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
