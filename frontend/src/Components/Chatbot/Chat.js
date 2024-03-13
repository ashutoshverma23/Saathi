import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = async () => {
        if (newMessage.trim() !== '') {
            // Update the server endpoint as needed
            const apiUrl = 'http://localhost:5000/api/chat';
            const response = await axios.post(apiUrl, { message: newMessage });
            const chatbotReply = response.data.reply;

            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setMessages([...messages, { text: chatbotReply, sender: 'chatbot' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatInterface;
