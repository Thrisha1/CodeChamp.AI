import Image from 'next/image'
import ChartModal from "@/components/dashboard/ChartModal";
import Link from "next/link";

export const CourseCard = ({text, src, data}) => {
    return (
        <div
            className="flex h-40 items-center justify-center w-72 border-[5px] rounded-xl border-green-700 bg-green-200 p-5 text-black font-semibold">
            <div className="flex flex-col justify-around h-full">
                <p>{text}</p>
                {
                    (data !== "") ? (
                        <ChartModal data={data}/>
                    ) : (

                        <Link href={"/lessons"} className="bg-green-600 text-white px-5 py-2 rounded-md text-sm w-20">View</Link>
                    )
                }
            </div>
            <div>
                <Image src={src} alt="Picture of the author" width={100} height={100}/>
            </div>
        </div>
    )
}

export default CourseCard
