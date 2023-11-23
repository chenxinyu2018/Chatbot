import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChatBox from '../ChatBox';
import { HelperIcon, CloseIcon } from '../IconComponents';
import cs from 'classnames';
import './index.scss';

/**
 * ChatBot Widget component.
 *
 * @returns {JSX.Element} The rendered component
 */
const ChatBotWidget: React.FC = () => {
  // State to manage the open/close state of the chat window
  const [isChatOpen, setIsChatOpen] = useState(false);

  /**
   * Toggle the chat window open or closed
   */
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return ReactDOM.createPortal(
    <div className="chat-container">
      <ChatBox isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      {/* Toggle button for opening/closing the chatbox */}
      <div
        className={cs('chat-button', { 'chat-button-grey': isChatOpen })}
        onClick={toggleChat}
      >
        {isChatOpen ? <CloseIcon /> : <HelperIcon />}
      </div>
    </div>,
    document.body
  );
};

export default ChatBotWidget;
