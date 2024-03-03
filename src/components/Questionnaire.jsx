"use client"

import { useState } from "react";
import { useForm } from 'react-hook-form';

export default function Questionnaire({ questions }) {
    const { register, handleSubmit, reset } = useForm();
    const [score, setScore] = useState(0); // Keep track of the total score
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0); // Keep track of the current category index
    const [submitted, setSubmitted] = useState(false); // Keep track of whether the form has been submitted

    const calculateScore = (data) => {
        let totalScore = 0;
        Object.keys(data).forEach((key) => {
            const [category, index] = key.split('-');
            const question = questions[category][index];
            if (data[key] === question.Answer) {
                totalScore++;
            }
        });
        setScore(totalScore);
    };

    const onSubmit = (data) => {
        calculateScore(data);
        setSubmitted(true);
    };

    const handleNextClick = () => {
        reset(); // Reset the form data
        setSubmitted(false); // Reset the submitted state
        setCurrentCategoryIndex(prevIndex => prevIndex + 1);
    };

    const currentCategory = Object.keys(questions)[currentCategoryIndex] || ""; // Ensure currentCategory is defined
    const isLastCategory = currentCategoryIndex === Object.keys(questions).length - 1;

    return (
        <div className="pt-32 px-24">
            <h1 className="text-3xl font-bold underline underline-offset-2">Questionnaire</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {currentCategory && questions[currentCategory].map((question, index) => (
                    <div key={index} className="my-5">
                        <label className="text-xl my-12 font-bold">{index + 1}. {question.Question}</label>
                        {question.Options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex gap-3">
                                <input
                                    className="p-2"
                                    type="radio"
                                    value={option}
                                    {...register(`${currentCategory}-${index}`)}
                                />
                                <label className="text-xl">{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleNextClick}
                    disabled={!currentCategory} // Disable the "Next" button if no category is selected
                    className="bg-gray-500 text-white p-2 m-2 text-end rounded w-max"
                >
                    {isLastCategory ? 'Submit' : 'Next'}
                </button>
                {submitted && (
                    <div>
                        <p>Total Score: {score}</p>
                    </div>
                )}
            </form>
        </div>
    );
}
