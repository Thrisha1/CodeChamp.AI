"use client"

// pages/index.js

import Link from 'next/link';
import React, { useState, createContext } from 'react';
import dsa from "../../syllabus_dsa/dsa.json";

// Create the context outside of the component
export const ProblemContext = createContext();

const Question = () => {

  const [showSubCardIndex, setShowSubCardIndex] = useState(null);

  const toggleSubCard = (index) => {
    setShowSubCardIndex(showSubCardIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Topics</h1>
      <div className="flex flex-wrap">
        {Object.keys(dsa).map((topic, index) => (
          <Card key={index} title={dsa[topic].heading} index={index} subtopics={dsa[topic]} showSubCardIndex={showSubCardIndex} toggleSubCard={toggleSubCard} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, index, subtopics, showSubCardIndex, toggleSubCard }) => {
  return (
    <div className="w-full p-4">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md" onClick={() => toggleSubCard(index)}>
        <h2 className="text-lg font-semibold">{title}</h2>
        {showSubCardIndex === index && (
          <>
            {subtopics.beginner && subtopics.beginner.map((subtopic, subIndex) => (
              <SubCard key={subIndex}
                level="Beginner"
                title={subtopic.title}
                question={subtopic.question}
                input={subtopic.input}
                output={subtopic.output} />
            ))}
            {subtopics.intermediate && subtopics.intermediate.map((subtopic, subIndex) => (
              <SubCard key={subIndex}
                level="Intermediate"
                title={subtopic.title}
                question={subtopic.question}
                input={subtopic.input}
                output={subtopic.output} />
            ))}
            {subtopics.advanced && subtopics.advanced.map((subtopic, subIndex) => (
              <SubCard key={subIndex}
                level="Advanced"
                title={subtopic.title}
                question={subtopic.question}
                input={subtopic.input}
                output={subtopic.output} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const SubCard = ({ level, title, question, input, output }) => {
  // Use the context provider to wrap the content of SubCard
  return (
    <ProblemContext.Provider value={{ key:"hi" }}>
      <div className="w-full p-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Level: {level}</h2>
          <h2 className="text-lg font-semibold">Title: {title}</h2>
          <Link href='/code-editor'>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Solve
            </button>
          </Link>
        </div>
      </div>
    </ProblemContext.Provider>
  );
};

export default Question;
