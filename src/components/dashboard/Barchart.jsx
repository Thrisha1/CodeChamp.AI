import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: "Page A",
        CorrectAnswer: 4000,
        QuestionsAttempted: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        CorrectAnswer: 3000,
        QuestionsAttempted: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        CorrectAnswer: 2000,
        QuestionsAttempted: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        CorrectAnswer: 2780,
        QuestionsAttempted: 3908,
        amt: 2000
    }
];

export default function Barchart({std_baro_data}) {
    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={std_baro_data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="Correct_answers" fill="#82ca9d"/>
                <Bar dataKey="Questions_attempted" fill="#8884d8"/>
            </BarChart>
            <div className={"flex flex-col justify-center items-center my-4"}>
                <div className={"border-2 border-gray-300 w-max px-5 py-2"}>
                    <p className={"text-[#8884d8]"}>CorrectAnswer = Correct Answer</p>
                    <p className={"text-[#82ca9d]"}>QuestionsAttempted = Questions Attempted</p>
                </div>
            </div>
        </div>
    );
}
