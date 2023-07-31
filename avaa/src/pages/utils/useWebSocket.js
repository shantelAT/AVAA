// utils/useWebSocket.js

import { useState, useEffect } from 'react';

const useWebSocket = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000'); 
    
    ws.onopen = () => {
      setSocket(ws);
    };
    
    ws.onmessage = (event) => {
      const response = event.data;
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'chatbot' }]);
    };
    
    return () => {
      ws.close();
    };
  }, []);
  
  const sendMessage = (message) => {
    if (socket) {
      socket.send(message);
      setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    }
  };
  
  return { messages, sendMessage };
};
 
export default useWebSocket;