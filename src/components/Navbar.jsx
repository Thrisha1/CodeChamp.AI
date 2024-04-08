"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
const Navbar = () => {
  const [user, setUser] = useState({});
  const router = useRouter();
  const supabase = createClientComponentClient();
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      // console.log("user", user);
    }
    getUser();
  }, []);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null);
  };
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
                <Link
                  href="/"
                  className="text-white  hover:text-green-500 duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-white  hover:text-green-500 duration-300"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <a href="#" className="text-white  hover:text-green-500 duration-300">
                  Contact Us
                </a>
              </li> */}
            </ul>
            <select className="bg-green-500 px-6 py-1  text-white rounded-lg">
              <option>English</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Arabic</option>
            </select>
            {!user && (
              <div>
                <Link
                  href="/login"
                  className="border-2 border-green-500 hover:bg-green-500 duration-300 ease-in-out px-6 py-1  text-white rounded-lg ml-4"
                >
                  Log In
                </Link>
              </div>
            )}
            {user && (
              <div className="flex text-white justify-center items-center">
                <h1>Welcome back {user?.email}!</h1>
                <button
                  onClick={handleLogout}
                  className="border-2 border-green-500 hover:bg-green-500 duration-300 ease-in-out px-6 py-1  text-white rounded-lg ml-4"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
