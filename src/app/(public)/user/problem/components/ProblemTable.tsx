import React from "react";

const ProblemTable = () => {
  // Sample data for the table
  const problems = [
    {
      id: 1,
      title: "2872. Maximum Number of K-Divisible Components",
      examType: "NEB",
      year: "2022",
      difficulty: "Hard",
      difficultyColor: "text-red-500",
    },
    {
      id: 2,
      title: "1. Two Sum",
      examType: "SEE",
      year: "2021",
      difficulty: "Easy",
      difficultyColor: "text-green-500",
    },
    {
      id: 3,
      title: "2. Add Two Numbers",
      examType: "BLE",
      year: "2020",
      difficulty: "Medium",
      difficultyColor: "text-yellow-500",
    },
  ];

  return (
    <div className="p-6">
      {/* Filters Section */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select className="border border-gray-300 rounded px-4 py-2 text-sm">
          <option value="" disabled selected hidden>
            Exam Type
          </option>
          <option value="SEE">SEE</option>
          <option value="BLE">BLE</option>
          <option value="NEB">NEB</option>
        </select>

        <select className="border border-gray-300 rounded px-4 py-2 text-sm">
          <option value="" disabled selected hidden>
            Difficulty
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select className="border border-gray-300 rounded px-4 py-2 text-sm">
          <option value="" disabled selected hidden>
            Year
          </option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>

        <input
          type="text"
          placeholder="Search questions"
          className="border border-gray-300 rounded px-4 py-2 text-sm flex-grow sm:flex-grow-0 sm:max-w-xs"
        />
      </div>

      {/* Table Section */}
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-sm text-gray-600">
            <th className="p-4 text-left">SN</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-center">Exam Type</th>
            <th className="p-4 text-center">Difficulty</th>
            <th className="p-4 text-center">Year</th>
            <th className="p-4 text-center">PDF</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr
              key={problem.id}
              className="border-b last:border-b-0 hover:bg-gray-50"
            >
              {/* Serial Number */}
              <td className="p-4 text-center">{index + 1}</td>

              {/* Title */}
              <td className="p-4 text-left font-medium text-gray-800">
                {problem.title}
              </td>

              {/* Exam Type */}
              <td className="p-4 text-center text-gray-600">
                {problem.examType}
              </td>

              {/* Difficulty */}
              <td
                className={`p-4 text-center font-semibold ${problem.difficultyColor}`}
              >
                {problem.difficulty}
              </td>

              {/* Year */}
              <td className="p-4 text-center text-gray-600">{problem.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemTable;
