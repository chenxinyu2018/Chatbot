import React from 'react';
import './index.scss';

interface IProps {
  isChatbot: boolean; // Flag indicating whether the message is from the chatbot
  message: string | JSX.Element; // Content of the message
}

/**
 * ChatBubble component.
 *
 * @param {IProps} props - The props of the component
 * @returns {JSX.Element} The rendered component
 */
const ChatBubble: React.FC<IProps> = (props: IProps) => {
  const { isChatbot, message } = props;

  return (
    <div className={!isChatbot ? 'is-user chat-bubble' : 'chat-bubble'}>
      {message}
    </div>
  );
};

export default ChatBubble;
