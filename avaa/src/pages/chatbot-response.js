// pages/chatbot-paragraph.js
import React from "react";
import useWebSocket from './utils/useWebSocket';
import React, { useState, useEffect } from 'react';
import useWebSocket from '../utils/useWebSocket';
import Navbar from "@/components/Navbar";

const ChatbotParagraph = () => {
  const [userInput, setUserInput] = useState('');
  const { messages, sendMessage } = useWebSocket();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(userInput);
    setUserInput('');
  };

  const scrollToBottom = () => {
    const chatLog = document.getElementById('chat-log');
    chatLog.scrollTop = chatLog.scrollHeight;
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div id="chat-container">
        <div id="chat-log" style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
          {messages.map((message, index) => (
            <div key={index}>{`${message.sender}: ${message.text}`}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Chatbot Replies in Paragraph Format</h2>
        <p>
          {messages
            .filter((message) => message.sender === 'chatbot')
            .map((message, index) => message.text)
            .join(' ')}
        </p>
      </div>
    </div>
  );
};

export default ChatbotParagraph;
