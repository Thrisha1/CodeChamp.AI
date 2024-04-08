"use client"

import SideBar from '../../components/dashboard/Sidebar'
import Navbar from "@/components/Navbar";
import Header from "@/components/dashboard/Header";
import CourseCard from "@/components/dashboard/CourseCard";
import {useEffect, useState} from "react";
import supabase from "@/supabase";

export const page = () => {

    const [results, setResults] = useState({})

    useEffect(()=>{

        async function getData() {

            let { data: student_test_data, error } = await supabase
                .from('student_test_data')
                .select('*')

            if(error)
            {
                console.log("error is : ", error)
                return error;
            }
            return student_test_data;
        }

        getData().then(r => {
            console.log("data is : ", r[0]);
            setResults(r[0]);
        });
    },[])
    
    return (
        <div className="h-screen overflow-hidden bg-black font-mono text-white">
            <Navbar />
            <div className="h-full pb-32 flex items-center">
                <SideBar />
                <div className="w-full mr-20 flex flex-col justify-center items-center">
                    <Header />
                    <div className="flex justify-around w-full">
                        <div>
                            <p className="text-2xl font-bold py-5">Courses For You...</p>
                            <CourseCard data={""} text="Introduction to DSA" src="/calender.png" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold py-5">Your Progress...</p>
                            <CourseCard data={results} text="Results of Test" src="/progress.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
