"use client";
import React, { useState } from 'react';

export default function CodeEditor() {
  // State variables
  const [language, setLanguage] = useState('c++');
  const [code, setCode] = useState('');
  const [defaultInput, setDefaultInput] = useState('123');
  const [darkMode, setDarkMode] = useState(false); // Set default dark mode to true

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

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to log the collected information and reset values
  const handleSubmit = () => {
    const formData = {
      language: language,
      code: code,
      defaultInput: defaultInput
    };
    console.log(formData);
  };

  // Function to reset state variables to default values
  const handleReset = () => {
    setLanguage('c++');
    setCode('');
    setDefaultInput('');
  };

  return (
    <main className="flex w-full h-screen relative">
      <div className="w-1/2 h-[700px] overflow-scroll">
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
      <div className="w-1/2 bg-gray-300 relative h-[700px]">
        <div className="bg-gray-100 flex items-center justify-end px-4 py-2">
          {/* Button to toggle dark mode */}
          {/* Language dropdown */}
          <div>
            <label htmlFor="lan" className="mr-2">Language:</label>
            <select name="lan" id="lan" className="border border-gray-300 rounded-md px-4 py-1 mr-8" onChange={handleLanguageChange} value={language}>
              <option value="c++">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
          </div>
          <img onClick={toggleDarkMode}  src='/eye.png' alt='icon' className='w-8 '>
          </img>
        </div>
        {/* Code editor textarea */}
        <textarea
          className={`w-full h-[500px] border border-gray-300 p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-xl`}
          placeholder="Enter your code here..."
          onChange={handleCodeChange}
          value={code}
        ></textarea>
        {/* Default input textarea */}
        
        <div className="absolute bottom-0 right-0 mb-16 mr-4">
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Run
          </button>
          <button onClick={handleReset} className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
