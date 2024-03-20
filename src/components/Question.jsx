"use client";

import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import dsa from "../../syllabus_dsa/dsa.json";
import { ProblemContext } from "../app/layout";
import {useRouter} from "next/navigation"

const Question = ({level}) => {
    const router = useRouter();
  const [showSubCardIndex, setShowSubCardIndex] = useState(null);

  const toggleSubCard = (index) => {
    setShowSubCardIndex(showSubCardIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Topics</h1>
      <div className="flex flex-wrap">
        {Object.keys(dsa).map((topic, index) => (
          <Card
            key={index}
            title={dsa[topic].heading}
            index={index}
            subtopics={dsa[topic]}
            showSubCardIndex={showSubCardIndex}
            toggleSubCard={toggleSubCard}
            level = {level}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, index, subtopics, showSubCardIndex, toggleSubCard, level }) => {
  return (
    <div className="w-3/4 p-4">
      <div
        className="bg-gray-200 p-4 rounded-lg shadow-md"
        onClick={() => toggleSubCard(index)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        {showSubCardIndex === index && (
          <>
              {level === "Beginner" && subtopics.beginner &&
                  subtopics.beginner.map((subtopic, subIndex) => (
                      <SubCard
                          key={subIndex}
                          level="Beginner"
                          title={subtopic.title}
                          question={subtopic.question}
                          input={subtopic.input}
                          output={subtopic.output}
                      />
                  ))
              }
              {level === "Intermediate" && subtopics.intermediate &&
                  subtopics.intermediate.map((subtopic, subIndex) => (
                      <SubCard
                          key={subIndex}
                          level="Intermediate"
                          title={subtopic.title}
                          question={subtopic.question}
                          input={subtopic.input}
                          output={subtopic.output}
                      />
                  ))}
              {level === "Expert" && subtopics.advanced &&
                  subtopics.advanced.map((subtopic, subIndex) => (
                      <SubCard
                          key={subIndex}
                          level="Advanced"
                          title={subtopic.title}
                          question={subtopic.question}
                          input={subtopic.input}
                          output={subtopic.output}
                      />
                  ))}


          </>
        )}
      </div>
    </div>
  );
};

const SubCard = ({ key, level, title, question, input, output }) => {
  const { contextValues, updateVariables } = useContext(ProblemContext);
  // const { level, title } = contextValues; // Destructure level and title from contextValues

  const handleUpdateContext = () => {
    // Example of updating context values
    updateVariables({
      level: level,
      title: title,
      question: question,
      input: input,
      output: output,
    });
  };
  // Use the context provider to wrap the content of SubCard
  return (
    <div className="bg-white w-full p-4 mt-4 flex justify-between items-center">
      <div className=" p-4 rounded-lg gap-5 flex flex-col w-full">
        <h2 className="text-lg font-semibold">{title}</h2>
          <div className="w-full flex gap-20">
            <h2 className="text-sm text-gray-500 font-semibold"> Level: {level}</h2>
            <h2 className="text-sm text-gray-500 font-semibold"> Attempts: 3124</h2>

          </div>
      </div>
        <Link href="/code_editor">
          <button
            onClick={() => {
              handleUpdateContext();
            }}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Solve
          </button>
        </Link>
    </div>
  );
};

export default Question;
