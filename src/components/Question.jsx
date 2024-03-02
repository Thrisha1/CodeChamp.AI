// pages/index.js
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Question = () => {
  const topics = [
    { title: 'Basic' },
    { title: 'Array' },
    { title: 'String' },
    { title: 'Linked List' },
    { title: 'Recursion' }
  ];


  const [showSubCardIndex, setShowSubCardIndex] = useState(null);

  const Card = ({ title, index }) => {
    const toggleSubCard = () => {
      setShowSubCardIndex(showSubCardIndex === index ? null : index);
    };

    return (
      <div className="w-full p-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md" onClick={toggleSubCard}>
          <h2 className="text-lg font-semibold">{title}</h2>
          {showSubCardIndex === index && (
            <>
              <SubCard level="Beginner" />
              <SubCard level="Intermediate" />
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Topics</h1>
      <div className="flex flex-wrap">
        {topics.map((topic, index) => (
          <Card key={index} index={index} title={topic.title} />
        ))}
      </div>
    </div>
  );
};

export default Question;
