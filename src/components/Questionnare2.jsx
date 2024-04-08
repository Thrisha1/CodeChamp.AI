"use client";
import React, { useEffect, useState } from "react";
import Questionnaire from "../../syllabus_dsa/questionsPrep.json";
import Modals from "@/components/Modal";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Questionnare2({ func, result }) {
  const router = useRouter();
    const supabase = createClientComponentClient();

  const [optionSelected, setOptionSelected] = useState("");
  const [currentQns, setCurrentQns] = useState({});
  const [topic, setTopic] = useState("");
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

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

  const [resultData, setResultData] = useState(
      [
        { "topic": "Variables, data types, and operators", "mark": 0 },
        { "topic": "Control flow (if statements, loops)", "mark": 0 },
        { "topic": "Functions and recursion", "mark": 0 },
        { "topic": "Arrays and strings", "mark": 0 },
        { "topic": "Arrays", "mark": 0 },
        { "topic": "Linked Lists (Singly and Doubly)", "mark": 0 },
        { "topic": "Stacks and Queues", "mark": 0 },
        { "topic": "Sorting algorithms (Bubble sort, Insertion sort, Selection sort)", "mark": 0 },
        { "topic": "Searching algorithms (Linear search, Binary search)", "mark": 0 },
        { "topic": "Trees (Binary trees, Binary search trees, AVL trees, Red-black trees)", "mark": 0 },
        { "topic": "Graphs (Representation, traversal algorithms like BFS and DFS)", "mark": 0 },
        { "topic": "Heaps (Min heap, Max heap)", "mark": 0 },
        { "topic": "Hash tables", "mark": 0 },
        { "topic": "Sorting algorithms (Merge sort, Quick sort)", "mark": 0 },
        { "topic": "Searching algorithms (Hashing)", "mark": 0 },
        { "topic": "Graph algorithms (Shortest path algorithms like Dijkstra's, Minimum Spanning Tree algorithms like Prim's and Kruskal's)", "mark": 0 },
        { "topic": "Dynamic Programming", "mark": 0 },
        { "topic": "Greedy algorithms", "mark": 0 },
        { "topic": "Recursion and backtracking", "mark": 0 },
        { "topic": "Divide and conquer", "mark": 0 },
        { "topic": "Bit manipulation", "mark": 0 }
      ]

  );

    useEffect(() => {
        async function getUser() {
            const {
                data: {user},
            } = await supabase.auth.getUser();
            return user;
        }
        getUser().then((data) => {
            setUser(data);
            console.log("user", data);
        })
    }, []);

  useEffect(() => {
    console.log("optionSelected", optionSelected);
    console.log("topic", topic);
  }, [optionSelected,topic]);

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

  //  when answer is submitted the mark of the resultData for the particular topic is updated
    if(result !== undefined && result !== "error"){
      let topicIndex = resultData.findIndex((r) => r.topic === topic);
      // const latest_result = resultArray.pop();
      // console.log("latest_result", latest_result);
      console.log("topicIndex", topicIndex);
      if (result?.data?.correct === true) {
        resultData[topicIndex].mark = resultData[topicIndex].mark + 1;
      }
      setResultData(resultData);
    }

  }, [result]);

  useEffect(() => {
    console.log("resultArray", resultArray);
    console.log("resultData", resultData);
    // console.log("conceptual", conceptual);
    // console.log("logical", logical);
    // console.log("errorHandling", errorHandling);
    // console.log("syntax", syntax);
  }, [resultArray, conceptual, logical, errorHandling, syntax, resultData]);

  function handleSubmit() {
    setSubmit(!Submit);
    func({ currentQns, optionSelected,topic });
    console.log("currentQns", currentQns);
    console.log("option Selected", optionSelected);
  }

  const itemsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const nextBatch = Questionnaire.map((ind)=>{
      ind.questions.slice(
              startIndex,
              startIndex + itemsPerPage
          );
  })

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


    const { data: calculation_data, error } = await supabase
      .from("student_test_data")
      .update({
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
        topic_result: resultData
      })
        .eq("email", user?.email);

    if (error) {
      console.log("error is : ", error);
      return
    }

    // console.log("calculation_data", calculation_data);

    router.push("/dashboard");
  }

    const [step1, setStep1] = useState(false);

  return (
    <div className="w-full bg-black">
      <div className="w-3/4 mx-10">
      <p className="text-3xl font-bold text-center p-5 text-green-500">
        Questionnaire : Basics of DSA
      </p>
      {Questionnaire.map((ques, index) => (
        <div>
            <div className="flex justify-between w-full bg-gray-500 items-center m-2">

                <p className="text-2xl font-bold text-white p-5 ">{index+1}. {ques.topic}</p>
                <svg onClick={()=>{
                    setStep1(!step1)
                }
                } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6 text-white bg-black rounded-full mr-3 p-1">
                    {
                        step1 ? (
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        ) : (
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        )
                    }
                </svg>
            </div>
            {ques.questions.map((q, index) => {
                    return step1 && (
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
                                                        setTopic(ques.topic)
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
                                                setTopic(ques.topic)
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
                    )
            })
            }
        </div>
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
        {/*<button*/}
        {/*  onClick={async (e) => {*/}
        {/*    e.preventDefault();*/}
        {/*    setStartIndex(startIndex + itemsPerPage);*/}
        {/*  }}*/}
        {/*  className="group bg-green-500 text-white px-5 py-2 rounded-md my-5 flex gap-2"*/}
        {/*>*/}
        {/*  <span>Try Next 10 Questions</span>*/}
        {/*  <svg*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    fill="none"*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*    stroke-width="1.5"*/}
        {/*    stroke="currentColor"*/}
        {/*    className="w-6 h-6 group-hover:translate-x-2 duration-300"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      stroke-linecap="round"*/}
        {/*      stroke-linejoin="round"*/}
        {/*      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"*/}
        {/*    />*/}
        {/*  </svg>*/}
        {/*</button>*/}
      </div>
    </div>
    </div>
  );
}

function Result({ correct, optionSelected }) {
  useEffect(() => {
    // console.log("correct", correct);
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
