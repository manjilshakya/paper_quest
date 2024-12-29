"use client";
import React, { useState } from "react";
import Card from "./components/Card";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default calendar styles
import styled from "styled-components";
import Study from "./components/Study";
import ProblemTable from "./components/ProblemTable";

const StyledCalendarWrapper = styled.div`
  padding-right: 16px;
  .react-calendar {
    border: none;
    box-shadow: none;
    width: 100%;
  }

  .react-calendar__tile {
    background: transparent;
    border: none;
    text-align: center;
    font-size: 14px;
    color: #4a4a4a;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #dcdcdc;
      color: black;
    }
  }

  .react-calendar__tile--now {
    background: #6a5acd;
    color: white;
    font-weight: bold;
  }

  .react-calendar__tile--active {
    background: #9370db;
    color: white;
    font-weight: bold;
  }

  .react-calendar__navigation button {
    background: transparent;
    border: none;
    font-size: 16px;
    color: #6a5acd;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      color: #4a4a4a;
    }
  }

  .react-calendar__month-view__weekdays {
    background: #f4f4f4;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    color: #4a4a4a;
  }
`;

const Problem = () => {
  const cardData = [
    { id: 1, title: "Card 1", description: "Description for Card 1" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 4, title: "Card 4", description: "Description for Card 4" },
    { id: 5, title: "Card 5", description: "Description for Card 5" },
    { id: 6, title: "Card 6", description: "Description for Card 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [date, setDate] = useState(new Date());
  const cardsPerPage = 4;

  const next = () => {
    if (currentIndex + cardsPerPage < cardData.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };
  return (
    <div className="my-[64px]">
      <div className="flex">
        <div className="w-[80%] ml-[128px] mr-[32px]">
          <div className="grid grid-cols-4">
            {cardData
              .slice(currentIndex, currentIndex + cardsPerPage)
              .map((card) => (
                <div key={card.id} className="flex-1 mx-2">
                  <Card title={card.title} description={card.description} />
                </div>
              ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button
              onClick={next}
              disabled={currentIndex + cardsPerPage >= cardData.length}
              className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="mt-[64px]">
            <Study />
          </div>
          <div className="mt-[64px]">
            <ProblemTable />
          </div>
        </div>

        {/* Sidebar (20%) */}
        <div className="w-[20%]  flex justify-center">
          <div>
            <StyledCalendarWrapper className="shadow-lg   ">
              <Calendar value={date} className="rounded-lg" />
            </StyledCalendarWrapper>
          </div>
        </div>
      </div>
      {/* <div>
        <Study />
      </div> */}
    </div>
  );
};

export default Problem;
