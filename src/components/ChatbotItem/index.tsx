import React, { useState } from 'react';
import { RobotIcon, LoadingIcon } from '../IconComponents';
import ChatBubble from '../ChatBubble';
import CurrentTime from '../CurrentTime';
import { IChatHistory } from '../../../types/index';
import './index.scss';

interface IProps {
  chatItem: IChatHistory; // A single chat record
  isLoading?: boolean; // Loading flag
}

/**
 * Chatbot Item component.
 *
 * @returns {JSX.Element} The rendered component
 */
const ChatbotItem: React.FC<IProps> = (props: IProps) => {
  const { chatItem, isLoading } = props;
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  /**
   * @description Handle mouse entering event
   */
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  /**
   * @description Handle mouse leaving event
   */
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="chatbotItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RobotIcon />
      <ChatBubble
        isChatbot={true}
        message={isLoading ? <LoadingIcon /> : chatItem.message}
      ></ChatBubble>
      {chatItem.time && isHovered && (
        <CurrentTime currentTime={chatItem.time} />
      )}
    </div>
  );
};

export default ChatbotItem;
