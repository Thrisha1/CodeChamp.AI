import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="antialiased bg-purple-400">
      <nav className="px-4 lg:px-6 py-2.5 bg-dark-blue items-center">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img src="/c.svg" alt="Logo" className="h-8 w-8" />
            <text className="text-white font-bold">CODEchampAI</text>
          </div>
          <div className="flex gap-3 items-center">
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="text-white  hover:text-blue-500">Home</Link>
              </li>
              <li>
                <a href="/" className="text-white  hover:text-blue-500">About Us</a>
              </li>
              <li>
                <a href="/" className="text-white  hover:text-blue-500">Contact Us</a>
              </li>
            </ul>

            {/*<select className="bg-blue-700 px-6 py-1  text-white rounded-lg">*/}
            {/*  <option>English</option>*/}
            {/*  <option>Hindi</option>*/}
            {/*  <option>Telugu</option>*/}
            {/*  <option>Arabic</option>*/}
            {/*</select>*/}
            <Link href={"/dashboard"} className="border-2 border-blue-500 hover:bg-blue-500 duration-300 ease-in-out px-6 py-1  text-white rounded-lg ml-4">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
