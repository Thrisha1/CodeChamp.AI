"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  const handleSignUp = async () => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null);
  };

  console.log({ loading, user });

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-purple-400 w-full h-screen">
        <div className="flex justify-center items-center space-x-1 text-3xl text-purple-700">
          <svg
            fill="none"
            className="w-10 h-10 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>

          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
          <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
            You're already logged in
          </h1>
          <button
            onClick={handleLogout}
            className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="flex">
      <div className="h-screen w-1/2">
      </div>
      <div className="h-screen w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-600 px-6">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 w-full px-4 py-3 rounded-md border border-purple-400 bg-purple-100 text-purple-800 placeholder-purple-400 focus:outline-none focus:border-purple-600"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 w-full px-4 py-3 rounded-md border border-purple-400 bg-purple-100 text-purple-800 placeholder-purple-400 focus:outline-none focus:border-purple-600"
          />
          <button
            onClick={handleSignUp}
            className="w-full mb-2 px-4 py-3 rounded-md bg-purple-500 text-white hover:bg-purple-600 focus:outline-none"
          >
            Sign Up
          </button>
          <button
            onClick={handleSignIn}
            className="w-full px-4 py-3 rounded-md bg-purple-700 text-white hover:bg-purple-800 focus:outline-none"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}
