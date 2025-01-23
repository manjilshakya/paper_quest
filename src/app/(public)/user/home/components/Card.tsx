import {useRouter} from "next/navigation";
import React from "react";
import axios from "axios";
import useTokenStore, {usePastPaperStore} from "@/app/tokenstore";
import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {PastPaper} from "@/app/Models/Types";

const Card = ({pastPaperId,title, subtitle, chapters, items, progress}: any) => {
    const router = useRouter();
    const token = useTokenStore((state) => state.token);
    const setPastPaper = usePastPaperStore((state) => state.setPastPapers);

    const handleRedirect = async () => {
        try {
            const {data} = await axios.get(`http://localhost:5030/api/pastpaper/${pastPaperId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            setPastPaper(data);

            const pastPaper = usePastPaperStore.getState();
            if (pastPaper) {
                router.push('/user/question');
            }
        } catch (err: any) {
            console.error(err);
        }
    };


    return (
        <div className="w-[300px] p-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg text-white">
            <h2 className="text-lg font-semibold">{title}</h2>
            <h1 className="mt-4 text-2xl font-bold">{subtitle}</h1>
            <div className="flex items-center mt-6 space-x-4">
                <div className="text-center">
                    <p className="text-xl font-semibold">{chapters}</p>
                    <p className="text-sm">Chapters</p>
                </div>
                <div className="text-center">
                    <p className="text-xl font-semibold">{items}</p>
                    <p className="text-sm">Items</p>
                </div>
                <div className="text-center">
                    <p className="text-xl font-semibold">{progress}</p>
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
