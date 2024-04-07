"use client"

import { Inter } from "next/font/google";
import './globals.css';
import { createContext, useState } from 'react'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const ProblemContext = createContext(null);

// export const metadata = {
//   title: "CodeChamp.AI",
//   description: "AI Personalised DSA learrning platform",
// };


export default function RootLayout({ children }) {
  const [contextValues, setContextValues] = useState({
    level: '',
    title: '',
    question: '',
    input: '',
    output: ''
  });

  const updateVariables = (newValue) => {
    console.log("value setting", newValue)
    setContextValues(prevValues => ({
      ...prevValues,
      ...newValue
    }));
  };


  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <ProblemContext.Provider value={{ contextValues, updateVariables }}>
          {children}
        </ProblemContext.Provider>
      </body>
    </html>
  );
}
