import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8FCFC] px-5 text-center">
      
      <h1 className="text-8xl font-extrabold text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-slate-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700">
          Back To Home
        </button>
      </Link>
    </div>
  );
}