"use client";
import { Button, Progress } from "antd";
import React, { useState } from "react";
import jsPDF from "jspdf";
import Chat from "./components/chat";
import Image from "next/image";
import PQ from "../../../../../public/image/Paperbanner.png";
import ReactCardFlip from "react-card-flip";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState({ question: "", answer: "" });

  const cards = [
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building UIs.",
    },
    {
      id: 2,
      question: "What is Next.js?",
      answer: "A React framework for building web apps.",
    },
  ];

  const openModal = (card: any) => {
    setCurrentCard(card);
    setIsModalOpen(true);
    setIsFlipped(false); // Reset flip state
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsFlipped(false); // Reset flip state
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLearnClick = () => {
    setIsModalVisible(true);
    setIsFlipped(false); // Reset to front when modal opens
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // const questions = [
  //   {
  //     id: 1,
  //     question: "What is the speed of light?",
  //     answer:
  //       "The speed of light is approximately 299,792 kilometers per second (km/s) in a vacuum.",
  //   },
  //   {
  //     id: 2,
  //     question: "What is SSR?",
  //     answer: "SSR stands for Server-Side Rendering.",
  //   },
  //   {
  //     id: 3,
  //     question: "What is CSR?",
  //     answer: "CSR stands for Client-Side Rendering.",
  //   },
  //   {
  //     id: 4,
  //     question: "What is Newton's first law of motion",
  //     answer:
  //       " Newton's first law of motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.",
  //   },
  //   {
  //     id: 5,
  //     question: "What is Next.js?",
  //     answer:
  //       "Next.js is a React framework for production. Next.js is a React framework for production. Next.js is a React framework for production. Next.js is a React framework for production. Next.js is a React framework for production. Next.js is a React framework for production. Next.js is a React framework for production.",
  //   },
  // ];

  // const [visibleAnswers, setVisibleAnswers] = useState<Record<number, boolean>>(
  //   {}
  // );

  // const toggleAnswer = (id: number) => {
  //   setVisibleAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  // };

  // const downloadAsPDF = () => {
  //   const doc = new jsPDF();

  //   questions.forEach((qa, index) => {
  //     doc.text(`${index + 1}. ${qa.question}`, 10, 10 + index * 20);
  //     doc.text(`Answer: ${qa.answer}`, 10, 20 + index * 20);
  //   });

  //   doc.save("questions-answers.pdf");
  // };
  return (
    <div>
      <div>
        <Image src={PQ} alt={""} />
      </div>
      <div className="mx-[128px] my-10">
        {/* Progress bar */}
        <div className="flex items-center justify-center">
          <div className="flex gap-4 items-center">
            <div>
              {" "}
              <Progress type="circle" percent={75} />
            </div>
            <div>
              <div>Card</div>
              <div>Due Card</div>
              <div>
                <Button onClick={handleLearnClick}>Learn</Button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {isModalVisible && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Card Details</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-lg font-semibold text-gray-700"
                >
                  X
                </button>
              </div>

              {/* Card inside the modal */}
              <div className="mt-6">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                  {/* Front Side */}
                  <div className="w-full h-48 bg-blue-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md ">
                    <p>Card Front: Click to Learn</p>
                    <button
                      onClick={handleFlip}
                      className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      Flip to Back
                    </button>
                    <div className="flex gap-2 mt-5">
                      <div>1st</div>
                      <div>2nd</div>
                      <div>3rd</div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="w-full h-48 bg-green-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md">
                    <p>Card Back: This is the answer or content.</p>
                    <button
                      onClick={handleFlip}
                      className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      Flip Back to Front
                    </button>
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          </div>
        )}
        {/* pdf below question and answer ko tala xa */}
        {/* <div>
          <div className="w-1/2 mt-[64px] p-4 border-gray border-2 rounded-lg">
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
              <h1 className="text-[32px] font-semibold">Science</h1>
              <br />
              {questions.map(({ id, question, answer }) => (
                <div key={id} style={{ marginBottom: "20px" }}>
                  <h3
                    onClick={() => toggleAnswer(id)}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    {id}.{question}
                  </h3>
                  {visibleAnswers[id] && <p>{answer}</p>}
                </div>
              ))}
              <button
                onClick={downloadAsPDF}
                className="bg-slate-400 p-4 rounded-lg text-white"
                // style={{ marginTop: "20px", padding: "10px 20px" }}
              >
                Download as PDF
              </button>
            </div>
          </div>
          <div className="fixed bottom-4 right-4 mb-4 mr-4 w-[500px] bg-white shadow-lg rounded-lg overflow-auto">
            <Chat />
          </div>
        </div> */}

        {/* list of cards */}
        <div className="p-6 bg-gray-100 min-h-screen mt-[64px]">
          <h1 className="text-2xl font-bold text-center mb-6">Cards</h1>
          <div className="flex flex-col flex-wrap gap-4 justify-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg"
                onClick={() => openModal(card)}
              >
                <h3 className="text-lg font-medium">{card.question}</h3>
                <p className="text-gray-500 text-sm mt-2">3 months ago</p>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-11/12 max-w-md relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  ✖
                </button>
                <h2 className="text-xl font-bold text-center mb-4">Try it</h2>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                  {/* Front Side */}
                  <div className="text-center">
                    <p className="text-gray-700">{currentCard.question}</p>
                    <button
                      onClick={handleFlip}
                      className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Show answer
                    </button>
                  </div>

                  {/* Back Side */}
                  <div className="text-center">
                    <p className="text-gray-700">{currentCard.answer}</p>
                    <button
                      onClick={handleFlip}
                      className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Go back
                    </button>
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
