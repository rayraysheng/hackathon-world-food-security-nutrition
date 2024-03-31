import React, { useState } from 'react';
import Chatbot from '../components/Chatbot.js';
import FloatingChatbotIcon from '../components/FloatingChatbotIcon';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Avoid screen reader issues

function Dashboard() {
  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);

  const handleOpenChatbotModal = () => setIsChatbotModalOpen(true);
  const handleCloseChatbotModal = () => setIsChatbotModalOpen(false);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Other dashboard content */}

      <FloatingChatbotIcon onClick={handleOpenChatbotModal} />

      <Modal
        isOpen={isChatbotModalOpen}
        onRequestClose={handleCloseChatbotModal}
        contentLabel="Chatbot Modal"
        className="chatbot-modal"
        overlayClassName="chatbot-modal-overlay"
      >
        <Chatbot />
        <button onClick={handleCloseChatbotModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Dashboard;
