import React from "react";

const Chats = () => {
  return (
    <div>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="bg-blue-600 text-white py-4 px-6 shadow-md">
          <h2 className="text-lg font-semibold">Chatbox</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-400 rounded-full h-8 w-8"></div>
            <div className="bg-gray-200 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-800">
                Hello! How can I help you today?
              </p>
            </div>
          </div>

          <div className="flex items-end justify-end space-x-3">
            <div className="bg-blue-500 text-white rounded-lg px-4 py-2">
              <p className="text-sm">
                Hi, I need some assistance with my order.
              </p>
            </div>
            <div className="flex-shrink-0 bg-gray-400 rounded-full h-8 w-8"></div>
          </div>
        </div>

        <div className="border-t border-gray-300 bg-white p-4">
          <form className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chats;
