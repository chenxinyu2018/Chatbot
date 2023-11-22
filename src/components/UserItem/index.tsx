import React, { useState } from 'react';
import UserIcon from '../../../assets/icon/user';
import './index.css';
import ChatBubble from '../ChatBubble';
import { IChatHistory } from '../../../types/index';
import CurrentTime from '../CurrentTime';

interface IProps {
  chatItem: IChatHistory;
}

const UserItem: React.FC<IProps> = (props: IProps) => {
  const { chatItem } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="userItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {chatItem.time && isHovered && (
        <CurrentTime currentTime={chatItem.time} />
      )}
      <ChatBubble isChatbot={false} message={chatItem.message}></ChatBubble>
      <UserIcon />
    </div>
  );
};

export default UserItem;
