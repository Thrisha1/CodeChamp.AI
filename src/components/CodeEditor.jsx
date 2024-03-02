// CodeEditor.jsx
import React, { useState } from 'react';

export default function CodeEditor({ getCode }) {
  // State variables
  const [codeData, setCodeData] = useState({
    language: "java",
    code: "",
    input: "123"
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const [darkMode, setDarkMode] = useState(false); // Set default dark mode to false

  // Event handlers
  const handleLanguageChange = (event) => {
    setCodeData({ ...codeData, language: event.target.value });
  };

  const handleCodeChange = (event) => {
    setCodeData({ ...codeData, code: event.target.value });
  };

  const handleDefaultInputChange = (event) => {
    setCodeData({ ...codeData, input: event.target.value });
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(null); // Clear previous error
    setLoading(true); // Set loading state

    try {
      console.log(codeData);
      await getCode(codeData); // Log the codeData object
      setSuccessMessage("Code submitted successfully!"); // Set success message
    } catch (error) {
      console.error('Error:', error);
      setError(error.message); // Set error state
    } finally {
      setLoading(false); // Reset loading state
    }
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
            <select name="lan" id="lan" className="border border-gray-300 rounded-md px-4 py-1 mr-8" onChange={handleLanguageChange} value={codeData.language}>
              <option value="c++">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
          </div>
          <img onClick={toggleDarkMode} src='/eye.png' alt='icon' className='w-8 ' />
        </div>
        {/* Code editor textarea */}
        <textarea
          className={`w-full h-[500px] border border-gray-300 p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-xl`}
          placeholder="Enter your code here..."
          onChange={handleCodeChange}
          value={codeData.code}
        ></textarea>
        {/* Default input textarea */}
        <div className="absolute bottom-0 right-0 mb-16 mr-4">
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            {loading ? 'Loading...' : 'Run'} {/* Show loading text when loading */}
          </button>
          <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Submit
          </button>
          {error && <div className="bg-red-100 p-4 mt-2 border border-red-500 rounded-md">{error}</div>} {/* Display error message */}
          {successMessage && <div className="bg-green-100 p-4 mt-2 border border-green-500 rounded-md">{successMessage}</div>} {/* Display success message */}
        </div>
      </div>
    </main>
  );
}
