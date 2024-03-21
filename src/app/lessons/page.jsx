"use client";

import {useEffect, useState} from "react";
import supabase from "@/supabase";

const page = () => {
    const [Lessons,setLessons] = useState([])

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
                // if(res.error) {
                    setLessons(data.lessons.result)
                // }
                
            })
        })

    },[])

    return (
        <div>
            <h1>Lessons</h1>
        </div>
    )
}

export default page