"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Dsa from "../../../public/dsa.webp"

export default function page() {
  const router = useRouter();
  return (
    <div className="bg-black h-screen">
      <div className="h-98 px-8 py-12 rounded-lg row-md ">
        <h1 className="text-3xl font-semibold text-center mb-8 text-white">
          Rate Your Skills
        </h1>
        <div className="w-max flex justify-between">
          <div className=" bg-green-200  text-black flex-1 p-6 rounded-lg shadow-md mr-4 hover:translate-y-3 duration-500">
            <div
              onClick={() => {
                alert(
                  "Congradualtions on getting started.Now lets go for a test run!!"
                );
                router.push("/test");
              }}
            >
                <Image className="mb-12 rounded-lg" width={300} height={300} src={Dsa}  />
              <h2 className="text-xl font-semibold mb-4">Basics of DSA</h2>
              <p className="text-gray-700">
                Rate your level of skills here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
