"use client";
import React, { useState } from "react";
import Card from "../components/Card";
import SectionWrapper from "@/app/(public)/home/components/SectionWrapper";

const course = [
  {
    title: "LeetCode's Interview Crash Course",
    subtitle: "Data Structures and Algorithms",
    chapters: 13,
    items: 149,
    progress: "0%",
  },
  {
    title: "JavaScript Mastery Course",
    subtitle: "Advanced Concepts and Patterns",
    chapters: 10,
    items: 120,
    progress: "25%",
  },
  {
    title: "React.js Fundamentals",
    subtitle: "Building Interactive UIs",
    chapters: 8,
    items: 85,
    progress: "50%",
  },
  {
    title: "React.js Fundamentals",
    subtitle: "Building Interactive UIs",
    chapters: 8,
    items: 85,
    progress: "50%",
  },
  {
    title: "React.js Fundamentals",
    subtitle: "Building Interactive UIs",
    chapters: 8,
    items: 85,
    progress: "50%",
  },
  {
    title: "React.js Fundamentals",
    subtitle: "Building Interactive UIs",
    chapters: 8,
    items: 85,
    progress: "50%",
  },
  {
    title: "React.js Fundamentals",
    subtitle: "Building Interactive UIs",
    chapters: 8,
    items: 85,
    progress: "50%",
  },
];
const Learn = () => {
  const [showAll, setShowAll] = useState(false);

  // Slice the courses to show only 5 when `showAll` is false
  const displayedCourses = showAll ? course : course.slice(0, 5);
  return (
    <div className="lg:mx-[128px]">
      <h1 className="text-[32px] font-semibold">Learn</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {displayedCourses.map((courseItem, index) => (
          <Card
            key={index}
            title={courseItem?.title}
            subtitle={courseItem?.subtitle}
            chapters={courseItem?.chapters}
            items={courseItem?.items}
            progress={courseItem?.progress}
          />
        ))}
      </div>
      {course.length > 5 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Learn;
