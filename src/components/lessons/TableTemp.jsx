import Link from "next/link";
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export const TableTemp = ({data}) => {
    const [openModal, setOpenModal] = useState(false);
    const [Content, setContent] = useState("");
    const [Examples, setExamples] = useState([]);
    return (


        <div className="relative overflow-x-auto">
            <table className="w-[800px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                </thead>
                <tbody>
                {data?.map((item, index) => (
                    <tr className="bg-white border-2 hover:bg-purple-100 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.topic_heading}
                        </th>
                        <td className="px-6 py-4 text-purple-500 hover:underline">
                            <button onClick={() => {
                                setOpenModal(true)
                                setContent(item.topic_content)
                                setExamples(item.examples)
                            }}>Note</button>

                        </td>
                        <td className="px-6 py-4">
                            <Link href={"/dsa/Beginner"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6 text-purple-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                                </svg>

                            </Link>
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                            {
                                item.youtube_videos.length > 0 && item.youtube_videos.map((d)=>(
                                    <Link href={d}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube" className="w-6 h-6">
                                            <g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
                                                <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                ))
                            }
                        </td><td className="px-6 py-4 flex gap-3">
                            {
                                item.website.length > 0 && item.website.map((d)=>(
                                    <Link href={d}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                        </svg>

                                    </Link>
                                ))
                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal className={"px-32 pt-32 bg-black bg-opacity-20"} show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Note</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {Content}
                        </p>
                        <p className="flex flex-col gap-5 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {Examples && Examples.length>0 && Examples.map((item, index) => (
                                <div className={""}>
                                    <p className={"underline underline-offset-4"}>Example : {index+1}</p>

                                    <p>{item}</p>
                                </div>
                            ))}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setOpenModal(false)}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default TableTemp