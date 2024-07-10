"use client";
import React, { useState } from 'react';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = {
      role: "user",
      content: input
    };

    // Construct the payload for the backend API
    const newMessages = [...messages, userMessage];
    const payload = {
      messages: newMessages,
      useRag: true, 
      llm: "gpt-3.5-turbo",
      similarityMetric: "cosine"
    };

    // Add user message to the state
    setMessages(newMessages);
    setInput("");

    // Call the backend API
    try {
      const response = await fetch('http://localhost:3000/api/Chat', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.text(); // Assuming your backend returns JSON
      const assistantMessage = {
        role: "assistant",
        content: data // Adjust according to the actual structure of the response
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        role: "assistant",
        content: "There was an error getting a response from the server."
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 p-4 w-full">
        <label className="text-white text-2xl font-bold">Maxeon</label>
        <button id="icon" onClick={toggleChat} className="text-white md:hidden">
          <span className="material-icons-outlined">menu</span>
        </button>
      </nav>

      {/* Popup chat window */}
      <div className="fixed bottom-4 right-4">
        {/* Chat open button */}
        {!isChatOpen && (
          <button
            id="chat-open-button"
            className="p-2 bg-blue-500 rounded-full"
            onClick={toggleChat}
          >
            <img src="assets/images/Sparrow Bird.png" alt="Sparrow Bird" />
          </button>
        )}

        {/* Chat close button */}
        {isChatOpen && (
          <div className="relative w-120 h-120"> {/* Increased size */}
            <button
              id="chat-close-button"
              className="p-2 bg-red-500 rounded-full absolute right-0"
              onClick={toggleChat}
            >
              <span className="material-icons-outlined text-white">close</span>
            </button>

            {/* Chat window */}
            <div className="chat-window bg-white shadow-lg rounded-lg p-4 mt-4 h-full">
              <div className="message-box mb-4 h-80 overflow-y-auto flex flex-col">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded max-w-xs ${
                      message.role === "user"
                        ? "bg-blue-300 text-black self-end text-right" // Adjusted background and text color
                        : "bg-gray-300 text-black self-start text-left" // Adjusted background and text color
                    }`}
                  >
                    {message.content}
                  </div>
                ))}
              </div>
              <div className="input-box flex items-center space-x-4">
                <div className="write-reply flex-grow">
                  <input
                    className="inputText border border-gray-300 rounded p-2 w-full text-black"
                    type="text"
                    placeholder="Write a reply..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                </div>
                <div className="send-button">
                  <button
                    type="submit"
                    className="send-message bg-blue-500 text-white p-2 rounded-full"
                    onClick={handleSendMessage}
                  >
                    <span className="material-icons-outlined">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
