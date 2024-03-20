import Navbar from "@/components/Navbar";
import Question from "@/components/Question";

export default function page({params}) {
    return (
        <div>
            <Navbar/>
            <Question level={params.level}/>
        </div>
    )

}