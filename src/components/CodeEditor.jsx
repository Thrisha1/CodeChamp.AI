"use client";
import React, { useState } from 'react';

export default function CodeEditor() {
  // State variables
  const [language, setLanguage] = useState('c++');
  const [code, setCode] = useState('');
  const [defaultInput, setDefaultInput] = useState('123');

  // Event handlers
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleDefaultInputChange = (event) => {
    setDefaultInput(event.target.value);
  };

  // Function to log the collected information and reset values
  const handleSubmit = () => {
    const formData = {
      language: language,
      code: code,
      defaultInput: defaultInput
    };
    console.log(formData);

    // Reset values
    setLanguage('c++');
    setCode('');
    setDefaultInput('');
  };

  return (
    <main className="flex w-full h-screen">
      <div className="w-1/2 h-[500] overflow-scroll">
        <div className="p-5">
          {/* Problem statement */}
          <h2 className="text-xl font-semibold mb-4">Problem Statement</h2>
          <p>
            Here goes the problem statement... Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Atque enim architecto sapiente dolor hic nemo, numquam obcaecati eveniet? Non blanditiis error,
            neque officiis eos eius eum commodi doloribus porro quia.
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-gray-300 relative h-[500px]">
        <div className="bg-gray-100 flex items-center justify-between px-4 py-2">
          {/* Change theme dropdown */}
          <div>
            <label htmlFor="theme" className="mr-2">Change theme:</label>
            <select name="theme" id="theme" className="border border-gray-300 rounded-md px-2 py-1" onChange={handleLanguageChange} value={language}>
              <option value="dracula">Dracula</option>
              <option value="material">Material</option>
              <option value="night">Night</option>
            </select>
          </div>
          {/* Language dropdown */}
          <div>
            <label htmlFor="lan" className="mr-2">Language:</label>
            <select name="lan" id="lan" className="border border-gray-300 rounded-md px-2 py-1" onChange={handleLanguageChange} value={language}>
              <option value="c++">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>
        {/* Code editor textarea */}
        <textarea
          className="w-full h-[500px] border border-gray-300 p-4 bg-gray-100 shadow-xl"
          placeholder="Enter your code here..."
          onChange={handleCodeChange}
          value={code}
        ></textarea>
        {/* Default input textarea */}
        
        <div className="absolute bottom-0 right-0 mb-8 mr-4">
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Run
          </button>
          <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
