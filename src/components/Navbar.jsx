import React from "react";

const Navbar = () => {
  return (
    <header className="antialiased bg-gradient-to-br from-green-900 via-green-500 to-green-400">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img src="/c.svg" alt="Logo" className="h-8 w-8" />
            <text className="text-white font-bold">CODEchampAI</text>
          </div>
          <div className="flex gap-3">
            <ul className="flex gap-4">
              <li>
                <a href="#" className="text-white hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">Contact Us</a>
              </li>
            </ul>
            <select className="bg-black px-6 py-1 text-white rounded-lg">
              <option>English</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Arabic</option>
            </select>
            <button className="border-2 border-black hover:bg-black hover:text-white duration-300 ease-in-out px-6 py-1 rounded-lg ml-4">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
