
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import useWebSocket from '@/pages/utils/useWebSocket';


// function Chatbot() {

const Chatbot = () => {
    const [userInput, setUserInput] = React.useState('');
    const { messages, sendMessage } = useWebSocket();
          
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
    <>
      <div>
      <h1 style={{ color: 'white' }}>Chatbot</h1>
      <div id="chat-container">
        <div id="chat-log" style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
          {messages.map((message, index) => (
            <div key={index}>{`${message.sender}: ${message.text}`}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ margin: '0px,0px,100px,0px' }}>
          <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </div>
      <div style={{ marginTop: '20px' }}>
        {/* <h2>Chatbot Replies in Paragraph Format</h2> */}
        <p>
          {messages
            .filter((message) => message.sender === 'chatbot')
            .map((message, index) => message.text)
            .join(' ')}
        </p>
      </div>
      </div>
    </>
  );
}

export default Chatbot;
