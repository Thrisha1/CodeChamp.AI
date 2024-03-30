import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
export default async function Hero() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="flex w-full h-screen mb-36">
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <h1 className="justify-center text-center font-bold text-6xl font-mono">
          HELLO coders!
        </h1>
        <h5 className="font-mono">
          Unleash Your Code Potential: Personalized Learning, Powered by AI
        </h5>
        {user ? (
          <Link href="/test">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md mt-4">
              Take Quick Assessment!
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md mt-4">
              Take Quick Assessment!
            </button>
          </Link>
        )}
      </div>
      <div className="w-1/2 bg-gray-100 items-center">
        <img src="/developer_male.jpg" alt="Developer" />
      </div>
    </div>
  );
}
