import React from 'react';
import cs from 'classnames';
import './index.scss';

interface IProps {
  isChatbot: boolean;
  message: string | JSX.Element;
}

const ChatBubble: React.FC<IProps> = (props: IProps) => {
  const { isChatbot, message } = props;

  return (
    <div className={cs('chat-bubble', { 'is-user': !isChatbot })}>
      {message}
    </div>
  );
};

export default ChatBubble;
