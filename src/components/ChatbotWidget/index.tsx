import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dialog from '../ChatBox';
import HelperIcon from '../../../assets/icon/helper';
import CloseIcon from '../../../assets/icon/close';
import './index.css';

const ChatBotWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  // Toggle the chat window open or closed
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Using ReactDOM.createPortal to render the chatbox outside the document flow
  return ReactDOM.createPortal(
    <div className="chat-container">
      {/* Chatbox */}
      <Dialog isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      {/* Toggle chatbox window open/close button. */}
      <div
        className={isChatOpen ? 'chat-button-grey chat-button' : 'chat-button'}
        onClick={toggleChat}
      >
        {isChatOpen ? <CloseIcon /> : <HelperIcon />}
      </div>
    </div>,
    document.body
  );
};

export default ChatBotWidget;
