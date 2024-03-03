import React, { useState } from "react";

export default function Popup ({ error, successMessage, showContent, hideContent }) {
  return (
    <>
      {/* {error && (
        <div className="bg-red-100 p-4 mt-2 border border-red-500 rounded-md">
          {error}
        </div>
      )} */}
      {/* Display error message */}
      {/* {successMessage && (
        <div className="bg-green-100 p-4 mt-2 border border-green-500 rounded-md">
          {successMessage}
        </div>
      )} */}
      {/* Display success message */}
      {showContent && (
        <div className="absolute left-0 bottom-6 w-3/4 p-6 bg-white border border-gray-400 rounded-b-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Submission Result</h2>
            <button
              onClick={hideContent}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p>compiled result:</p>
        </div>
      )}
    </>
  );
};
