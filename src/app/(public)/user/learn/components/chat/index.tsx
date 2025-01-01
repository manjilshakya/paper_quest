import { useState, useEffect } from "react";
import { io } from "socket.io-client";

let socket: any;

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io("http://localhost:4000");

    // socket.on("receiveMessage", (newMessage) => {
    //   setMessages((prevMessages) => [...prevMessages, newMessage]);
    // });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      //   setMessages((prevMessages) => [...prevMessages, message]);
      setMessage("");
    }
  };

  return (
    <div className="h-[600px] flex flex-col justify-between p-4 bg-gray-100 font-sans">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-semibold text-center mb-4">Chat App</h1>
        <div className="overflow-y-auto max-h-[400px] bg-gray-50 p-3 rounded-lg shadow-inner">
          {messages.map((msg, index) => (
            <p
              key={index}
              className="mb-2 p-2 bg-gray-200 rounded-lg shadow-md"
            >
              {msg}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
}
