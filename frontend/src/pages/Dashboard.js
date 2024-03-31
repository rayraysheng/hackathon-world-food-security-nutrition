// Dashboard.js
import React, { useState } from 'react';
import Chatbot from '../components/Chatbot.js';
import FloatingChatbotIcon from '../components/FloatingChatbotIcon';
import Modal from 'react-modal';
import Annotation from '../components/Annotation';
import GraphFilter from '../components/GraphFilter';
import '../style/Dashboard.css';
import Sidebar from '../components/Sidebar.js';
import HeaderNavBar from '../components/HeaderNavBar.js'; // Import your header navigation bar component

import Annotation from '../components/Annotation';
import GraphFilter from '../components/GraphFilter';

Modal.setAppElement('#root'); // Avoid screen reader issues

function Dashboard() {
  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);

  const handleOpenChatbotModal = () => setIsChatbotModalOpen(true);
  const handleCloseChatbotModal = () => setIsChatbotModalOpen(false);

  return (

    <div className="dashboard-container">
      {/* Header Navigation Bar */}
      <HeaderNavBar />
      
      {/* Middle Content */}
      <div className="middle-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="graphfilter-container">
          <GraphFilter />
        </div>
        <div>
          <Annotation content="This is an annotation!" position="top">
            {/* Content to be annotated */}
          </Annotation>
        </div>
      </div>

      {/* Floating Chatbot Icon */}
      <GraphFilter />

      <div>
        <Annotation content="This is an annotation!" position="top">
          {/* Content to be annotated */}
        </Annotation>
      </div>

      <FloatingChatbotIcon onClick={handleOpenChatbotModal} />

      {/* Chatbot Modal */}
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
