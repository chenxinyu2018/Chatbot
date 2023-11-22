import React, { useState } from 'react';
import RobotIcon from '../../../assets/icon/robot';
import ChatBubble from '../ChatBubble';
import CurrentTime from '../CurrentTime';
import LoadingIcon from '../../../assets/icon/loading';
import { IChatHistory } from '../../../types/index';
import './index.css';

interface IProps {
  chatItem: IChatHistory;
  isLoading?: boolean;
}

const ChatBotWidget: React.FC<IProps> = (props: IProps) => {
  const { chatItem, isLoading } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

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
        message={
          isLoading ? (
            <>
              <LoadingIcon />
              <LoadingIcon />
              <LoadingIcon />
            </>
          ) : (
            chatItem.message
          )
        }
      ></ChatBubble>
      {chatItem.time && isHovered && (
        <CurrentTime currentTime={chatItem.time} />
      )}
    </div>
  );
};

export default ChatBotWidget;
