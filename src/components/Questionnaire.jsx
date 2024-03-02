"use client"

import {useState,useEffect} from "react"

export default function Questionnaire({questions}){

    const [type,setType] = useState(questions.Technical)

    useEffect(()=>{
        console.log(type)
    },[type])
    return(
        <div>
            <div className="pt-32 px-24">
                <h1 className={"text-3xl font-bold underline underline-offset-2"}>Questionnaire</h1>
                {
                    type && (
                        <form >
                            {type?.map((question, index) => (
                                <div className={"my-5"} key={index}>
                                    <label className={"text-xl my-12 font-bold"}>{index+1}.{question?.Question}</label>
                                    <div>
                                        {question?.Options?.map((option, index) => (
                                            <div className={"flex gap-3"} key={index}>
                                                {/*register the question id and answer selected*/}
                                                <input
                                                    className="p-2"
                                                    type="radio"
                                                    value={option}
                                                    name={question?.id}
                                                />
                                                <label className={"text-xl"} >{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {/*{score && <h1 className={"text-2xl font-bold"}>Your score is {score}</h1>}*/}
                            <p onClick={()=>{
                                setType(questions.Mathematical)
                            }
                            } className="bg-gray-500 text-white p-2 m-2 text-end rounded w-max">Next</p>
                        </form>
                    )
                }
            </div>
        {/*    options  */}
        </div>
    )
}