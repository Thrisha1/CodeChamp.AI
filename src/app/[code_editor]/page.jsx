"use client"

import {useState} from "react"
import CodeEditor from "@/components/CodeEditor";
import  Navbar  from "@/components/Navbar";
import {useRouter} from "next/navigation"

export default function page({params}) {

    // const [ Response, setResponse ] = useState()
    let response = {};
    console.log("params",params.code_editor)

    const getCode = async (a) => {
        console.log("received data from client", a)
        const res = await fetch("http://localhost:3001/api/codeEditor", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(a)
        })
        try {
            const responseData = await res.json(); // Parse response as JSON
            const result = JSON.parse(responseData);
            response = result
            console.log("result", response)
        } catch (error) {
            console.error("Error parsing response:", error);
            // Handle error if response cannot be parsed as JSON
        }

    }
    return (
        <div>
            <Navbar/>
            <CodeEditor getCode={getCode} result={response}/>
        </div>
    )
}


