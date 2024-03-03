export default function Hero() {
  return (
    <div className="flex w-full h-screen" style={{ backdropFilter: 'blur(5px)' }}>
      <div className="w-2/3 bg-gradient-to-br from-blue-500 via-green-400 to-white flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold font-mono">HELLO coders!</h1>
        <h5 className="font-mono">Discover our website's features. Elevate your coding journey now!</h5>
        <button className="bg-blac text-white px-4 py-2 rounded-md mt-4">LET'S EXPLORE</button>
      </div>
      <img src="/output.png" alt="Developer" className="w-1/3 object-cover bg-gradient-to-br from-green-400 via-white-400 to-blue-400" />
    </div>
  );
}
