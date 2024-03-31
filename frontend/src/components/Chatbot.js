import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../style/App.css';

function Chatbot() {
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null); // Ref for scrolling to bottom

  // Function to scroll chat history to bottom
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom when chat history updates
  }, [chatHistory]);

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return; // Prevent sending empty messages

    setChatHistory([...chatHistory, { sender: 'user', message: inputMessage }]); // Add user's message to chat history

    try {
      // Make HTTP POST request to backend API endpoint
      const response = await axios.post('http://localhost:8080/api/chatbot', { message: inputMessage });
      const botResponse = response.data.message;

      // Add bot's response to chat history
      setChatHistory(prevHistory => [...prevHistory, { sender: 'bot', message: botResponse }]);

      // Clear input field after sending message
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chatbot-dashboard">
      <div className="chat-history">
        {chatHistory.map((item, index) => (
          <div key={index} className={`message ${item.sender === 'user' ? 'user-message' : 'bot-message'}`}>
            <p className="message-content">{item.message}</p>
          </div>
        ))}
        {/* Empty div for scrolling to bottom */}
        <div ref={chatEndRef} />
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
