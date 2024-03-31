import React from 'react';
import { ReactComponent as ChatbotIcon } from '../assets/chatbot-icon.svg';

function FloatingChatbotIcon({ onClick }) {
  return (
    <button onClick={onClick} className="floating-chatbot-icon">
      <ChatbotIcon />
    </button>
  );
}

export default FloatingChatbotIcon;
