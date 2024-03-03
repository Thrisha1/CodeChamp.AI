import React from 'react'
import Questionnaire from '../../components/Questionnaire'

export default async function page() {
    const data = await getData();
    console.log("data",data)
    return (
        <div className="main-content  ">
            <div >

                <Questionnaire questions={data}/>
            </div>
        </div>

    )
}

// fetch data from /api/gemini using getData function
async function getData() {
    const res = await fetch("http://localhost:3001/api/questions-api")
    const responseData = await res.json()
    return responseData;
}

