"use client"
import React, {useEffect, useState} from "react";
import Questionnare2 from "@/components/Questionnare2";

export default function page() {
    const [result, setResult] = useState({})
    useEffect(()=>{
        console.log("result", result)
    },[result])

    const getDatas = (a) => {
        // result = await getData(a)
        // console.log("data",a)
        getData(a).then((getDataResponse) => {
            console.log("getDataResponse", getDataResponse)
            if(getDataResponse === undefined)
            {
                alert("The Answer is not submitted due to an error, please try again.")
                return setResult("error")
            }
            setResult(getDataResponse)
        })
    }

    return (
        <div>
            <Questionnare2 func={getDatas} result={result}/>

        </div>
    )
}

// use api to send the data and get response

async function getData(a) {
    const res = await fetch("http://localhost:3000/api/validate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(a),
    });
    try {
         // Parse response as JSON
        // console.log("responseData", responseData)
        return await res.json();
    } catch (error) {
        console.error("Error parsing response:", error);
        // Handle error if response cannot be parsed as JSON
    }
}
