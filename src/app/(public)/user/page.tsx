"use client";

import React, { useEffect, useState } from "react";
import HomeNavbar from "./components/homeNavbar";
import CustomerHome from "./home/customer";
import Learn from "./home/Learn";
import Modal from "./components/Modal";
import useTokenStore, { useUserDetails } from "@/app/tokenstore";
import { useRouter } from "next/navigation";


const page = () => {
  // debugger;
  const [isModalOpen, setModalOpen] = useState(false);

  const isUserDataCompleted = useUserDetails((state) => state.isUserDataComplete);

  const router = useRouter();

  useEffect(() => {
    // Open the modal when the page loads
    setModalOpen(true);
  }, []);

  const token = useTokenStore((state) => state.token);

  if (token === "") {
    console.log(token);
    console.log("I am here");
    router.push("/");
  }

  useEffect(() => {
    if (isUserDataCompleted) {
      setModalOpen(false);
    }
  }, [isUserDataCompleted]);

  const closeModal = () => setModalOpen(false);
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Welcome to the User Page!</h2>
        <p className="text-gray-700">Intuition name</p>
        <input type="text" />
        <form>
          {/* Institution Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="institution-name"
            >
              Institution Name
            </label>
            <input
              type="text"
              id="institution-name"
              placeholder="Enter institution name"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone-number"
              placeholder="Enter phone number"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Grade */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="grade"
            >
              Grade
            </label>
            <input
              type="text"
              id="grade"
              placeholder="Enter your grade"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Academic Background */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="academic-background"
            >
              Academic Background
            </label>
            <select
              id="academic-background"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="arts">BICT</option>
              <option value="science">MBA</option>
            </select>
          </div>

          {/* Optional Subject */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="optional-subject"
            >
              Semester
            </label>
            <select
              id="optional-subject"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="first">First</option>
              <option value="Second">Second</option>
              <option value="third">Third</option>
              <option value="fourth">Fourth</option>
              <option value="fifth">Fifth</option>
              <option value="sixth">Sixth</option>
              <option value="seventh">Seventh</option>
              <option value="eight">Eight</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={closeModal}
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <HomeNavbar />
      <CustomerHome />
      <Learn />

    </div>
  );
};

export default page;
