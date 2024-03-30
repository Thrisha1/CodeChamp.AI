'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser(){
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)
        }

        getUser();
    }, [])


    const handleSignUp = async () => {
        const res = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        setUser(res.data.user)
        router.refresh();
        setEmail('')
        setPassword('')
    }

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password
        })
        setUser(res.data.user)
        router.refresh();
        setEmail('')
        setPassword('')
    }

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        setUser(null)
    }

    console.log({loading, user})

    if (loading){
        return <h1>loading..</h1>
    }

    if (user){
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
        )
    }

    return (
        <main className="h-screen flex items-center justify-center bg-purple-300 p-6">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4 w-full p-3 rounded-md border border-purple-700 bg-white text-black placeholder-purple-300 focus:outline-none focus:border-purple-500"
            />
            <input 
              type="password" 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 w-full p-3 rounded-md border border-purple-700 bg-white text-black placeholder-purple-300 focus:outline-none focus:border-purple-500"
            />
            <button 
              onClick={handleSignUp}
              className="w-full mb-2 p-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none"
            >
              Sign Up
            </button>
            <button 
              onClick={handleSignIn}
              className="w-full p-3 rounded-md bg-purple-700 text-white hover:bg-purple-600 focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </main>
      );
      

}