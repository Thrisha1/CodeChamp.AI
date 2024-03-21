import Link from "next/link";

export const TableTemp = ({data}) => {
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
                            <Link href={"/lessons/1"}>Notes</Link>
                        </td>
                        <td className="px-6 py-4">
                            <Link href={"/lessons/1"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6 text-purple-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                                </svg>

                            </Link>
                        </td>
                        <td className="px-6 py-4">
                            <Link href={"/lessons/1"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube" className="w-6 h-6">
                                    <g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
                                        <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                                    </g>
                                </svg>
                            </Link>
                        </td>
                    </tr>
                ))}
                <tr className="hover:bg-purple-100 border-2 dark:bg-gray-800 dark:border-gray-700 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        User Input / Output
                    </th>
                    <td className="px-6 py-4 text-purple-500 hover:underline">
                        <Link href={"/lessons/1"}>Notes</Link>
                    </td>
                    <td className="px-6 py-4">
                        <Link href={"/lessons/1"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6 text-purple-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                            </svg>

                        </Link>
                    </td>
                    <td className="px-6 py-4">
                        <Link href={"/lessons/1"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube" className="w-6 h-6">
                                <g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
                                    <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                                </g>
                            </svg>
                        </Link>
                    </td>
                </tr>
                <tr className="hover:bg-purple-100 border-2 dark:bg-gray-800 dark:border-gray-700 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        User Input / Output
                    </th>
                    <td className="px-6 py-4 text-purple-500 hover:underline">
                        <Link href={"/lessons/1"}>Notes</Link>
                    </td>
                    <td className="px-6 py-4">
                        <Link href={"/lessons/1"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6 text-purple-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                            </svg>

                        </Link>
                    </td>
                    <td className="px-6 py-4">
                        <Link href={"/lessons/1"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube" className="w-6 h-6">
                                <g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
                                    <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                                </g>
                            </svg>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}

export default TableTemp