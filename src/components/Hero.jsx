"use client";
import Link from "next/link";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
export default function Hero() {
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      // setLoading(false);
    }

    getUser();
  }, []);
  return (
    <div className="flex w-full h-screen mb-36">
      <div className="w-full bg-black text-white flex flex-col items-center justify-center">
        <h1 className="justify-center text-center font-bold text-6xl font-mono">
          HELLO <span className="text-green-400 tracking-widest">CODERS!</span>
        </h1>
        <h5 className="font-mono my-6">
          Unleash Your Code Potential: <span className="animate-pulse text-green-500 font-bold tracking-wider text-xl">Personalized Learning</span>, Powered by <span className="animate-pulse text-green-500 font-bold tracking-wider text-xl">AI</span>
        </h5>
        {user && (<Link href="/test">
          <button className="bg-green-500 border-4 border-transparent hover:bg-black hover:border-green-500 duration-300 text-white px-4 py-2 rounded-md mt-4">
            Take Quick Assessment!
          </button>
        </Link>)}
        {!user && (<Link href="/login">
          <button className="bg-green-500 border-4 border-transparent hover:bg-black hover:border-green-500 duration-300 text-white px-4 py-2 rounded-md mt-4">
            Take Quick Assessment!
          </button>
        </Link>)}
      </div>
      {/* <div className="w-1/2 flex justify-center items-center bg-black"> */}
        {/* <img className="" src="/hero_img.png" alt="Developer" /> */}
      {/* </div> */}
    </div>
  );
}
