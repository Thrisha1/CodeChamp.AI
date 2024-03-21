"use client";
import React,{useState} from "react";
import TableTemp from "./TableTemp";


function Table ({data}) {

    const[step, setStep] = useState(false)
    const[step1, setStep1] = useState(false)

return (
        <div className="flex flex-col items-center gap-y-7 ">
           <div className="flex bg-purple-100 w-[1000px] p-2 items-center justify-between text-lg border-2 border-purple-400">
                <div className="flex gap-3">
                    <p className=" font-bold">Step 1 :</p>
                    <p>Learn the basics</p>
                </div>
               <svg onClick={()=>{
                     setStep(!step)
               }
               } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                   {
                          step ? (
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                          ) : (
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                          )
                   }
               </svg>

           </div>
            {
                step && (
                <div
                className="flex bg-purple-100 w-[900px] p-2 items-center justify-between text-lg hover:border-[1px] hover:border-purple-400">
                <div className="flex gap-3">
                    <p className=" font-semibold">Step 1.1 :</p>
                    <p>Practice</p>
                </div>
                    <svg onClick={()=>{
                        setStep1(!step1)
                    }
                    } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        {
                            step1 ? (
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            ) : (
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            )
                        }
                    </svg>
            </div>
                )}

            {
                step1 && (
                <div>
                    <TableTemp data={data} />
                </div>
                )}

        </div>
    )
}


export default Table
