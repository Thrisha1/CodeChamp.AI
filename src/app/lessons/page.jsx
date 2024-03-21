"use client";

import {useState,useEffect} from "react";
import supabase from "@/supabase";
import Table from "@/components/lessons/Table";

const page = () => {

    const[lessons, setLessons] = useState({})

    async function geminiLessonRequest(data){
        const res = await fetch("http://localhost:3000/api/lessons-api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return await res.json();
    }

    async function fetchData() {
        let { data: student_test_data, error } = await supabase
            .from('student_test_data')
            .select('*')

        if(error) return console.log("Error fetching student_test_data", error);

        // console.log("student_test_data", student_test_data)
        return student_test_data[0]
    }

    useEffect(()=>{
        console.log("Entered Lessons page")
        fetchData().then((data)=>{
            console.log("Data", data)
            geminiLessonRequest(data).then((res)=>{
                console.log("res", res)
                console.log("typeof res", res.result)
                setLessons(res.result)
            })
        })

    },[])

    return (
        <div className="m-10">
            <h1 className="text-center text-2xl font-bold pb-10">Lessons</h1>
            <Table data={lessons} />
        </div>
    )
}

export default page