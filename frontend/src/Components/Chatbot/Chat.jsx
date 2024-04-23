import React, { useState, useRef } from "react";
import "./Chat.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const sendMessage = () => {
    const text = inputValue.trim();
    if (!text) return;

    // Add user message to the chatbox
    setMessages([...messages, { sender: "You", message: text }]);
    setInputValue("");

    // Send message to Flask API
    fetch("http://localhost:8080/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        const botResponse = data.answer;
        // Add bot response to the chatbox
        setMessages([...messages, { sender: "Bot", message: botResponse }]);
        inputRef.current.focus(); // Keep input focused for continuous typing
      })
      .catch((error) => {
        console.error("Error:", error);
        inputRef.current.focus();
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="container">
      <div className="chatbox">
        <div className="chatbox__messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "Bot" ? "message--bot" : "message--user"
              }`}
            >
              <strong>{msg.sender}: </strong> {msg.message}
            </div>
          ))}
        </div>
        <div className="chatbox__footer">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
