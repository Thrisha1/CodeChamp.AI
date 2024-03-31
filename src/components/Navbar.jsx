import React from "react";

const Navbar = () => {
  return (
    <header className="antialiased bg-black">
      <nav className="px-4 lg:px-6 py-2.5 bg-dark-blue items-center">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>

            <text className="text-green-400 font-bold">CODEchampAI</text>
          </div>
          <div className="flex gap-6 items-center">
            <ul className="flex gap-4">
              <li>
                <a href="#" className="text-white  hover:text-green-500 duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white  hover:text-green-500 duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white  hover:text-green-500 duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
            <select className="bg-green-500 px-6 py-1  text-white rounded-lg">
              <option>English</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Arabic</option>
            </select>
            <button className="border-2 border-green-500 hover:bg-green-500 duration-300 ease-in-out px-6 py-1  text-white rounded-lg ml-4">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
