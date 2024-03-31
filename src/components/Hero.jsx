export default function Hero() {
  return (
    <div className="flex w-full h-screen mb-36">
      <div className="w-full bg-black text-white flex flex-col items-center justify-center">
        <h1 className="justify-center text-center font-bold text-6xl font-mono">
          HELLO <span className="text-green-400 tracking-widest">CODERS!</span>
        </h1>
        <h5 className="font-mono my-6">
          Unleash Your Code Potential: <span className="animate-pulse text-green-500 font-bold tracking-wider text-xl">Personalized Learning</span>, Powered by <span className="animate-pulse text-green-500 font-bold tracking-wider text-xl">AI</span>
        </h5>
        <a href="/test">
          <button className="bg-green-500 border-4 border-transparent hover:bg-black hover:border-green-500 duration-300 text-white px-4 py-2 rounded-md mt-4">
            Take Quick Assessment!
          </button>
        </a>
      </div>
      {/* <div className="w-1/2 flex justify-center items-center bg-black"> */}
        {/* <img className="" src="/hero_img.png" alt="Developer" /> */}
      {/* </div> */}
    </div>
  );
}
