"use client"

import CodeEditor from "@/components/CodeEditor";
import  Navbar  from "@/components/Navbar";

export default function page(){

    const data = async () =>{
        const res = await fetch('http://localhost:3000/api/codeEditor')
        // console.log("testing",res.json())
    }
    data();

    const getCode = (a) => {
        console.log("received data from client",a)
    }
    return(
        <div>
            <Navbar/>
            <CodeEditor getCode={getCode} />
        </div>
    )
}