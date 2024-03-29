import Image from 'next/image'

export const Header = () => {
    return (
        <div className="w-full flex justify-between bg-gradient-to-r from-purple-800 to-purple-300 h-max my-10 rounded-xl ">
           <div className="p-20 ">
               <p className=" text-xl font-bold text-white tracking-widest"> Welcome Back User...</p>
               <p className="text-gray-300">Stay Updated</p>
           </div>
            <div className="p-5">
                <Image src="/student.png" alt="Picture of the author" width={200} height={200} />
            </div>
        </div>
    )
}

export default Header
