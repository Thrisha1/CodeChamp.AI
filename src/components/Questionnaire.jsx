"use client"

import { useState, useEffect } from "react";
import {useForm} from 'react-hook-form'

export default function Questionnaire({ questions }) {
    const [type, setType] = useState('Technical'); // Set initial type to Technical
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0); // Keep track of current category index

    useEffect(() => {
        console.log(type);
    }, [type]);

    const handleNextClick = () => {
        const categories = Object.keys(questions);
        const nextIndex = currentCategoryIndex + 1;
        if (nextIndex < categories.length) {
            setCurrentCategoryIndex(nextIndex);
            setType(categories[nextIndex]);
        }
    };

    const handleCategoryClick = (category) => {
        setType(category);
    };

    let isLastCategory = currentCategoryIndex === Object.keys(questions).length - 1;

    function handleSubmit() {
        isLastCategory = Object.keys(questions).length - 1;
        console.log()
    }

    return (
        <div>
            <div className="pt-32 px-24">
                <h1 className={"text-3xl font-bold underline underline-offset-2"}>Questionnaire</h1>
                {questions[type] && (
                    <form>
                        {questions[type].map((question, index) => (
                            <div className={"my-5"} key={index}>
                                <label className={"text-xl my-12 font-bold"}>{index + 1}.{question?.Question}</label>
                                <div>
                                    {question?.Options?.map((option, index) => (
                                        <div className={"flex gap-3"} key={index}>
                                            {/* register the question id and answer selected */}
                                            <input
                                                className="p-2"
                                                type="radio"
                                                value={option}
                                                name={question?.id}
                                            />
                                            <label className={"text-xl"}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </form>
                )}
                <div>
                    <button onClick={isLastCategory ? handleSubmit : handleNextClick} className="bg-gray-500 text-white p-2 m-2 text-end rounded w-max">
                        {isLastCategory ? 'Submit' : 'Next'}
                    </button>
                </div>
                {/*<div>*/}
                {/*    {Object.keys(questions).map(category => (*/}
                {/*        <p onClick={() => handleCategoryClick(category)} key={category} className="bg-gray-500 text-white p-2 m-2 text-end rounded w-max">*/}
                {/*            {category}*/}
                {/*        </p>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
