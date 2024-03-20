"use client"

import {useEffect, useState} from "react";
import { useForm } from 'react-hook-form';
import {useRouter} from 'next/navigation'
import Link from "next/link";

export default function Questionnaire({ questions }) {
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [LastCategory, setLastCategory] = useState(false)
    const [optionSelected, setOptionSelected] = useState([])
    const [AnswerArray, setAnswerArray] =   useState([])
    const [Level, setLevel] = useState(" ")

    function calculate_mark() {
        let score = 0
        for(let i=0; i< optionSelected.length; i++) {
            console.log(optionSelected[i], AnswerArray[i])
            if(optionSelected[i] === AnswerArray[i]) {
                score++;
            }
        }
        setScore(score)
        if(score > 6)
        {
            setLevel("Expert")
        }
        else if (score > 2 && score <= 6)
        {
            setLevel("Intermediate")
        }
        else{
            setLevel("Beginner")
        }
    }

    useEffect(()=>{
        if(optionSelected.length  === 8){
            calculate_mark()
        }
    },[optionSelected])

    useEffect(()=>{
        let ansArray = [];
        Object.keys(questions).forEach((category)=>{
            questions[category]?.map((q)=>{
                ansArray = [...ansArray,q.Answer]
            })
        })
        setAnswerArray(ansArray)
    },[])


    if(questions === undefined) {
        return <div>Loading...</div>
    }

    const categories = Object.keys(questions);

    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        let submitted_answer = []
        Object.keys(data).map((d)=>{
            submitted_answer = [...submitted_answer,data[d]]
        })
        setOptionSelected([...optionSelected, ...submitted_answer ])
        if (count < categories.length - 1) {
            setCount(count + 1)
        }
        else{
            setLastCategory(true)
        }
        reset();
    };

    return (
        <div className="pt-32 px-24">
            <h1 className="text-3xl font-bold underline underline-offset-2">Questionnaire</h1>
            {
                !LastCategory ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {questions[categories[count]].map((question, index) => {

                            return (
                                <div key={index} className="my-5">
                                    <label className="text-xl my-12 font-bold">{index + 1}. {question.Question}</label>
                                    {question.Options.map((option, optionIndex) => (
                                        <div key={optionIndex} className="flex gap-3">
                                            <input
                                                className="p-2"
                                                type="radio"
                                                value={option}
                                                {...register(`${categories[count]}-${index + 1}`)}
                                            />
                                            <label className="text-xl">{option}</label>
                                        </div>
                                    ))}
                                </div>
                            )
                        })}
                        <button
                            className="bg-gray-500 text-white p-2 m-2 text-end rounded w-max"
                        >
                            Next
                        </button>

                    </form>
                ):(
                    <div className={"h-[20rem] flex justify-center items-center font-bold flex-col gap-4 text-xl"}>
                        <h1>Thank you for taking the questionnaire</h1>
                        <h1 className={"text-green-600"}>Your score is : {score} </h1>
                        {
                            Level === "Beginner" ?(
                                <h1>You are a {Level} in DSA. keep on going maan...</h1>
                            ):
                            (
                            <h1>You are an {Level} in DSA. keep on going maan...</h1>
                            )
                        }
                        <Link href={`/dsa/${Level}`}>
                            <button className="border-2 p-2">Learn DSA</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

