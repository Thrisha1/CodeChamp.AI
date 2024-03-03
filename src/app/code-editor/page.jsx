"use client"

import CodeEditor from "@/components/CodeEditor";
import  Navbar  from "@/components/Navbar";

export default function page(){

    const getCode = async (a) => {
        console.log("received data from client",a)
        const res = await fetch("http://localhost:3001/api/codeEditor",{
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(a)
        })

    }
    return(
        <div>
            <Navbar/>
            <CodeEditor getCode={getCode} />
        </div>
    )
}

