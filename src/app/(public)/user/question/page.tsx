"use client";
import axios from "axios";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import Chats from "../learn/components/chats";
import {usePastPaperStore} from "@/app/tokenstore";

const Question = () => {
  const { pastPapers } = usePastPaperStore();


  const questions = [
    {
      id: 1,
      question: "What is the speed of light?",
      answer:
        "The speed of light is approximately 299,792 kilometers per second (km/s) in a vacuum.",
    },
    {
      id: 2,
      question: "What is SSR?",
      answer: "SSR stands for Server-Side Rendering.",
    },
    {
      id: 3,
      question: "What is CSR?",
      answer: "CSR stands for Client-Side Rendering.",
    },
    {
      id: 4,
      question: "What is Newton's first law of motion",
      answer:
        "Newton's first law of motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.",
    },
    {
      id: 5,
      question: "What is Next.js?",
      answer: "Next.js is a React framework for production.",
    },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState<Record<number, boolean>>(
    {}
  );
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pastPapers.length);
    setCurrentQuestion(pastPapers[randomIndex]);
  }, []);

  const toggleAnswer = (id: number) => {
    setVisibleAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const downloadAsPDF = () => {
    const doc = new jsPDF();
    pastPapers.forEach((qa, index) => {
      doc.text(`${index + 1}. ${qa.question}`, 10, 10 + index * 20);
      doc.text(`Answer: ${qa.answer}`, 10, 20 + index * 20);
    });
    doc.save("questions-answers.pdf");
  };

  const handleGenerateNew = () => {
    const randomIndex = Math.floor(Math.random() * pastPapers.length);
    setCurrentQuestion(pastPapers[randomIndex]);
  };
  const togglePopup = async () => {
    setIsPopupVisible((prev) => !prev);
    console.log("Popup toggled!");

    try {
    
      const response = await axios.post("api", {
        key: "value", 
      });
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error hitting API:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center px-[128px] mt-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[24px] mb-4">Random Question</h1>
        {currentQuestion && (
          <div className="p-6 border border-gray-300 rounded-md shadow-md text-center">
            <p className="font-semibold text-lg mb-2">
              {currentQuestion.question}
            </p>
            <span className="text-gray-600">{currentQuestion.answer}</span>
          </div>
        )}
        <button
          onClick={handleGenerateNew}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Generate New Question
        </button>
      </div>
      <div>
        <div className=" mt-[64px] p-4 border-gray border-2 rounded-lg w-full shadow-lg">
        <button
                onClick={togglePopup}
                className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition absolute right-[150px] "
              >
                +
              </button>
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 className="text-[32px] font-semibold flex justify-center">
              Question paper
            </h1>
            <br />
            {pastPapers.map(({ id, question, answer }) => (
              <div key={id} style={{ marginBottom: "20px" }}>
                <h3
                  className=" font-bold"
                  onClick={() => toggleAnswer(id)}
                  style={{ cursor: "pointer" }}
                >
                  {id}.{question}
                </h3>
                {visibleAnswers[id] && <p>{answer}</p>}
              </div>
            ))}
            <button
              onClick={downloadAsPDF}
              className="bg-slate-400 p-4 rounded-lg text-white"
            >
              Download as PDF
            </button>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-md font-semibold mb-4">Added to your learning deck</h2>
            <button
              onClick={togglePopup}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* <Chats /> */}
    </div>
  );
};

export default Question;
