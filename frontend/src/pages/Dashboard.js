import React, { useState } from 'react';
import Chatbot from '../components/Chatbot.js';
import FloatingChatbotIcon from '../components/FloatingChatbotIcon';
import Modal from 'react-modal';
import Annotation from '../components/Annotation';
import GraphFilter from '../components/GraphFilter';

Modal.setAppElement('#root'); // Avoid screen reader issues

function Dashboard() {
  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);

  const handleOpenChatbotModal = () => setIsChatbotModalOpen(true);
  const handleCloseChatbotModal = () => setIsChatbotModalOpen(false);

  const [isAnnotationModalOpen, setIsAnnotationModalOpen] = useState(false);
  const handleOpenAnnotationModal = () => setIsAnnotationModalOpen(true);
  const handleCloseAnnotationModal = () => setIsAnnotationModalOpen(false);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Other dashboard content */}

      <GraphFilter />

      <div>
        {/* Button to open the annotation modal */}
        <button onClick={handleOpenAnnotationModal}>Add Annotation</button>
      </div>

      {/* Annotation Modal */}
      <Modal
        isOpen={isAnnotationModalOpen}
        onRequestClose={handleCloseAnnotationModal}
        contentLabel="Annotation Modal"
        className="annotation-modal"
        overlayClassName="annotation-modal-overlay"
      >
        {/* Content inside the annotation modal */}
        <Annotation content="This is an annotation!" position="top">
        </Annotation>
        <button onClick={handleCloseAnnotationModal}>Close</button>
      </Modal>

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
