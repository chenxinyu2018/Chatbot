import React from 'react';
import './index.css';

interface IProps {
  isChatbot: boolean;
  message: string | JSX.Element;
}

const ChatBubble: React.FC<IProps> = (props: IProps) => {
  const { isChatbot, message } = props;

  return (
    <div className={isChatbot ? 'chat-bubble' : 'chat-bubble is-chatbot'}>
      {message}
    </div>
  );
};

export default ChatBubble;
