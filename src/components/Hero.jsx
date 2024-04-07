export default function Hero() {
  return (
    <div className="flex w-full h-screen mb-36">
      <div className="w-1/2 bg-white flex flex-col items-center justify-center gap-4">
          <h1 className="justify-center text-center font-bold text-6xl font-mono">HELLO Coders!</h1>
          <h5 className="font-mono text-lg">Unleash Your Code Potential: Personalized Learning, Powered by AI</h5>
          <a href="/test">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md mt-4">Take Quick Assessment!</button>
          </a>

      </div>
      <div className="w-1/2 bg-gray-100 items-center bg-white flex justify-center items-center">
          <img className={"w-3/4"} src="/developer_male.jpg" alt="Developer" />
      </div>
    </div>
  );
}