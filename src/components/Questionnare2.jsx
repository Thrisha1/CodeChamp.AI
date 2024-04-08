"use client";
import { useEffect, useState } from "react";
import Questionnaire from "../../syllabus_dsa/questionsPrep.json";
import Modals from "@/components/Modal";
import supabase from "@/supabase";
import { useRouter } from "next/navigation";

export default function Questionnare2({ func, result }) {
  const router = useRouter();

  const [optionSelected, setOptionSelected] = useState("");
  const [currentQns, setCurrentQns] = useState({});
  const [resultArray, setResultArray] = useState([]);
  const [Count, setCount] = useState(0);
  const [Submit, setSubmit] = useState(false);

  // scores for each category
  const [conceptual, setConceptual] = useState(0);
  const [logical, setLogical] = useState(0);
  const [errorHandling, setErrorHandling] = useState(0);
  const [syntax, setSyntax] = useState(0);

  // actual number of questions in each category
  const conceptualQuestions = 10;
  const logicalQuestions = 10;
  const syntaxQuestions = 10;
  const errorQuestions = 10;

  // actual number of questions attended by student as state
  const [conceptualAttended, setConceptualAttended] = useState(0);
  const [logicalAttended, setLogicalAttended] = useState(0);
  const [errorAttended, setErrorAttended] = useState(0);
  const [syntaxAttended, setSyntaxAttended] = useState(0);



  useEffect(() => {
    console.log("optionSelected", optionSelected);
  }, [optionSelected]);

  useEffect(() => {
    console.log("result", result);
    if (result !== undefined && result !== "error") {
      setResultArray([...resultArray, result?.data]);

      // increment the number of questions attended by student
      if (result?.data?.category === "Conceptual") {
        setConceptualAttended(conceptualAttended + 1);
      }
      if (result?.data?.category === "Logical") {
        setLogicalAttended(logicalAttended + 1);
      }
      if (result?.data?.category === "Error") {
        setErrorAttended(errorAttended + 1);
      }
      if (result?.data?.category === "Syntax") {
        setSyntaxAttended(syntaxAttended + 1);
      }
      //     if result is correct, increment the score for the category
      if (result?.data?.correct === true) {
        if (result?.data?.category === "Conceptual") {
          setConceptual(conceptual + 1);
        } else if (result?.data?.category === "Logical") {
          setLogical(logical + 1);
        } else if (result?.data?.category === "Error") {
          setErrorHandling(errorHandling + 1);
        } else if (result?.data?.category === "Syntax") {
          setSyntax(syntax + 1);
        }
      }

    }
    setSubmit(false);
  }, [result]);

  useEffect(() => {
    console.log("resultArray", resultArray);
    // console.log("conceptual", conceptual);
    // console.log("logical", logical);
    // console.log("errorHandling", errorHandling);
    // console.log("syntax", syntax);
  }, [resultArray, conceptual, logical, errorHandling, syntax]);

  function handleSubmit() {
    setSubmit(!Submit);
    func({ currentQns, optionSelected });
    console.log("currentQns", currentQns);
    console.log("option Selected", optionSelected);
  }

  const itemsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const nextBatch = Questionnaire.questions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  async function calculation() {
    //     calculate the percentage of each category
    const conceptualPercentage = (conceptual / conceptualAttended) * 100;
    const logicalPercentage = (logical / logicalAttended) * 100;
    const syntaxPercentage = (syntax / syntaxAttended) * 100;
    const errorPercentage = (errorHandling / errorAttended) * 100;

    const data = [
      {
        name: "Conceptual",
        Questions_attempted: conceptualAttended,
        Correct_answers: conceptual,
      },
      {
        name: "Logical",
        Questions_attempted: logicalAttended,
        Correct_answers: logical,
      },
      {
        name: "Syntax",
        Questions_attempted: syntaxAttended,
        Correct_answers: syntax,
      },
      {
        name: "Error",
        Questions_attempted: errorAttended,
        Correct_answers: errorHandling,
      },
    ];



    console.log("data", data);

    const { data: calculation_data, error } = await supabase
      .from("student_test_data")
      .update({
        name: "thrisha",
        test_data: {
          mark_array: data,
        },
        percentages: [
          {
            value: conceptualPercentage,
            label: "conceptual",
          },
          {
            value: logicalPercentage,
            label: "logical",
          },
          {
            value: syntaxPercentage,
            label: "syntax",
          },
          {
            value: errorPercentage,
            label: "error",
          },
        ],
        attempeted_questions_data: { resultArray },
      })
        .eq("name", "thrisha");

    if (error) {
      console.log("error is : ", error);
      return error;
    }

    // console.log("calculation_data", calculation_data);

    router.push("/dashboard");
  }

  return (
    <div className="w-full bg-black">
      <div className="w-3/4 mx-10">
      <p className="text-3xl font-bold text-center p-5 text-green-500">
        Questionnaire : Basics of DSA
      </p>
      {nextBatch.map((q, index) => (
        <form key={index}>
          <div
            className={`my-5 bg-black text-white p-10 w-full border-4 rounded-xl ${
              q && q?.correct === true ? "border-green-500" : "border-white"
            }`}
          >
            <label className="text-xl flex mb-5 font-bold">
              {index + 1}. {q.question}
            </label>
            {q?.options?.map((option, optionIndex) => (
              <div key={optionIndex} className="flex gap-3 py-2 items-center">
                {q.type === "mcq" && (
                  <div className={"flex items-center gap-3"}>
                    <input
                      className="p-2  "
                      type="radio"
                      name={q.question}
                      value={option}
                      onChange={(e) => {
                        setOptionSelected(e.target.value);
                        setCurrentQns(q);
                      }}
                    />
                    <label className="text-xl">{option}</label>
                  </div>
                )}
              </div>
            ))}
            {q.type === "textInput" && (
              <div className="flex gap-3 py-2 items-center">
                <input
                  className="p-2 rounded-lg text-black"
                  type="text"
                  onChange={(e) => {
                    setOptionSelected(e.target.value);
                    setCurrentQns(q);
                    console.log("currentQns", q);
                  }}
                />
              </div>
            )}
            {resultArray.findIndex((r) => r?.question === q.question) !== -1 ? (
              <Result
                optionSelected={optionSelected}
                correct={resultArray.find((r) => r?.question === q.question)}
              />
            ) : null}
            <div className="w-3/4 flex justify-between pt-10">
              {resultArray.findIndex((r) => r?.question === q.question) !==
              -1 ? (
                <>
                  <button
                    disabled
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    View Results
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="bg-purple-500 text-white p-2 rounded-md"
                  >
                    {Submit ? "Loading.." : "Submit"}
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      ))}
      <div className="w-full flex justify-between">
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("resultArray", resultArray);

            await calculation();
          }}
          className="group bg-green-500 text-white px-5 py-2 rounded-md my-5 flex gap-2"
        >
          <span>Finish the test</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:translate-x-2 duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            setStartIndex(startIndex + itemsPerPage);
          }}
          className="group bg-green-500 text-white px-5 py-2 rounded-md my-5 flex gap-2"
        >
          <span>Try Next 10 Questions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:translate-x-2 duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
}

function Result({ correct, optionSelected }) {
  useEffect(() => {
    console.log("correct", correct);
  }, [correct]);
  return (
    <>
      <div className={"text-xl border-2 border-green-500 w-max px-6 py-1 mt-5"}>
        {correct?.correct === true ? (
          <p className={"text-green-500"}>Correct</p>
        ) : (
          <p className={"text-red-500"}>Incorrect</p>
        )}
      </div>
      {correct && <Modals correct={correct} optionSelected={optionSelected} />}
    </>
  );
}

async function getData(a) {
  const res = await fetch("http://localhost:3000/api/finalResult", {
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
