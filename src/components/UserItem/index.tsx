import React, { useState } from 'react';
import { UserIcon } from '../IconComponents';
import './index.scss';
import ChatBubble from '../ChatBubble';
import { IChatHistory } from '../../../types/index';
import CurrentTime from '../CurrentTime';

interface IProps {
  chatItem: IChatHistory; // A single chat record
}

/**
 * Component for user's question in the chat list
 *
 * @param {IProps} props - The props passed to the component
 * @returns {JSX.Element} - The rendered component
 */
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
