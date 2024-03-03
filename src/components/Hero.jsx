export default function Hero() {
    return (
      <div className="flex w-full h-screen mb-36">
        <div className="w-1/2 bg-white flex flex-col items-center justify-center">
            <h1 className="justify-center text-center font-bold text-6xl font-mono">HELLO coders!</h1>
            <h5 className="font-mono">Discover our website's features. Elevate your coding journey now!</h5>
            <a href="/assessment">
  <button className="bg-blue-900 text-white px-4 py-2 rounded-md mt-4">LET'S EXPLORE</button>
</a>

        </div>
        <div className="w-1/2 bg-gray-100 items-center">
            <img src="/developer_male.jpg" alt="Developer" />
        </div>
      </div>
    );
  }
  