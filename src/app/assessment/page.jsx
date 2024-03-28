import React from 'react'
import Questionnaire from '../../components/Questionnaire'

export default async function page() {
    const data = await getData();
    console.log("data", data)
    return (
        <div className="main-content  ">
            <div>
                <Questionnaire questions={data}/>
            </div>
        </div>

    )
}

// fetch data from /api/gemini using getData function
async function getData() {
    try {
        const res = await fetch("http://localhost:3000/api/questions-api", {
            // next: { revalidate: 1000 },
            // cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here, like displaying an error message to the user
    }
}


