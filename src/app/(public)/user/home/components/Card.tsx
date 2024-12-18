import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ title, subtitle, chapters, items, progress }: any) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/user/question");
  };
  return (
    <div className="w-80 p-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg text-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <h1 className="mt-4 text-2xl font-bold">{subtitle}</h1>
      <div className="flex items-center mt-6 space-x-4">
        <div className="text-center">
          <p className="text-3xl font-semibold">{chapters}</p>
          <p className="text-sm">Chapters</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold">{items}</p>
          <p className="text-sm">Items</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold">{progress}</p>
          <p className="text-sm">Progress</p>
        </div>
      </div>
      <button
        className="mt-6 p-4 bg-white text-purple-700 rounded-full shadow-lg"
        onClick={handleRedirect}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-6.586 4.243a1 1 0 01-1.492-.864V8.453a1 1 0 011.492-.864l6.586 4.243a1 1 0 010 1.728z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;
