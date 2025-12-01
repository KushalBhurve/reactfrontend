import React, { useState } from "react";
import { VortexContainer } from "../components/ui/vortex";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

const ChatbotPage = () => {
  const placeholders = [
    "What's the weather like?",
    "Tell me a joke.",
    "What is the meaning of life?",
    "Can you help me with a task?",
    "What is your name?",
  ];

  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (value) => {
    if (value.trim() === "") return;

    const userMessage = { text: value, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { text: "This is a simulated response.", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="w-full h-screen bg-black">
      <VortexContainer
        backgroundColor="black"
        range={12}
        speed={1}
        hue={270}
        className="flex items-center flex-col justify-end px-4 py-10 h-full"
      >
        <div className="flex-grow w-full max-w-4xl mx-auto flex flex-col justify-end">
          <div className="flex-grow w-full rounded-lg bg-black bg-opacity-50 backdrop-blur-md p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`${
                    message.sender === "user"
                      ? "bg-purple-800"
                      : "bg-gray-700"
                  } text-white rounded-lg py-2 px-4 max-w-xs`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-4">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </VortexContainer>
    </div>
  );
};

export default ChatbotPage;
