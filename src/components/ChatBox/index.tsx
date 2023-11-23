import React, { useEffect, useState, useRef } from 'react';
import {
  SendBtnIcon,
  CloseIcon,
  ChatbotIcon,
  NoMessageIcon,
} from '../IconComponents';
import { mockChatList, MockResponses } from '../../mock';
import { ChatbotItem, UserItem, ResponseSelector } from '../index';
import { IChatHistory } from '../../../types/index';
import { getCurrentTime } from '../../utils';
import {
  MIN_SIZE,
  MAX_SIZE,
  INITIAL_HEIGHT,
  DEBOUNCE_INTERVAL,
  TEXTAREA_PLACEHOLDER,
  TITLE,
  INITIAL_MARGIN_TOP,
  LOADING_TIME,
  RESPONSE_TIME,
} from './config';
import './index.scss';

interface IProps {
  isChatOpen: boolean; // Indicates whether the chat window is open or closed.
  setIsChatOpen: Function; // Method to control the visibility of the chat window.
}

/**
 * Chatbox Component
 *
 * @returns {JSX.Element} The rendered chatbox component
 */
const ChatBox: React.FC<IProps> = (props: IProps) => {
  const { isChatOpen, setIsChatOpen } = props;
  const [chatHistory, setChatHistory] = useState<IChatHistory[]>(mockChatList);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatHistoryRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<any>(null);

  /**
   * @description Adjusts the height of the textarea within a scalable range.
   */
  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (
        textareaRef.current &&
        textareaRef.current.scrollHeight > MIN_SIZE &&
        textareaRef.current.scrollHeight < MAX_SIZE
      ) {
        // Set the textarea height based on content height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        textareaRef.current.style.marginTop = `-${
          textareaRef.current.scrollHeight - INITIAL_HEIGHT
        }px`;
      }
    };

    if (textareaRef.current) {
      textareaRef.current.addEventListener('input', () => {
        // Debounce event
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          adjustTextareaHeight();
        }, DEBOUNCE_INTERVAL);
      });

      return () => {
        clearTimeout(timerRef.current);
        textareaRef.current?.removeEventListener('input', adjustTextareaHeight);
      };
    }
  }, [textareaRef.current]);

  /**
   * @description Generate the response messages.
   */
  useEffect(() => {
    const lastChat = chatHistory[chatHistory.length - 1];

    if (!lastChat.isChatbot) {
      setIsLoading(true);
      // Step 1: Display loading state
      setTimeout(() => {
        setChatHistory([
          ...chatHistory,
          { isLoading: true, isChatbot: true, message: '' },
        ]);
      }, LOADING_TIME);

      // Step 2: Find the corresponding response from mock data
      setTimeout(() => {
        setIsLoading(false);
        let responseMessage = MockResponses.get(lastChat.message);
        if (!responseMessage) {
          responseMessage = MockResponses.get('');
        }
        setChatHistory([
          ...chatHistory,
          {
            isLoading: false,
            isChatbot: true,
            message: responseMessage,
            time: getCurrentTime(),
          },
        ]);
      }, RESPONSE_TIME);
    }
  }, [chatHistory]);

  /**
   * @description Scrolls the chat list to the bottom after chat update.
   */
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTo({
        top: chatHistoryRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistory]);

  /**
   * @description Handles changes in the input text field.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} e - The event object.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  /**
   * @description Handles sending a message in the chat.
   * @param {string} message - The message to be sent.
   */
  const handleSendMessage = (message?: string) => {
    let messageText = message || inputText;
    if (messageText.trim() !== '' && !isLoading) {
      setChatHistory([
        ...chatHistory,
        { isChatbot: false, message: messageText, time: getCurrentTime() },
      ]);

      setInputText('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.marginTop = `${INITIAL_MARGIN_TOP}px`;
      }
    }
  };

  /**
   * @description Handles the key press event for the textarea.
   * @param {React.KeyboardEvent<HTMLTextAreaElement>} e - The event object.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  /**
   * @description Selects a message to send.
   * @param {string} message - The message to be sent.
   */
  const handleSelectMessage = (message: string) => {
    if (!isLoading) {
      setInputText(message);
      handleSendMessage(message);
    }
  };

  return (
    <>
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-top">
            <div className="chat-title">
              <div className="chat-title-icon">
                <ChatbotIcon />
              </div>
              <span>{TITLE}</span>
            </div>
            <div
              className="chat-close"
              onClick={() => {
                setIsChatOpen(!isChatOpen);
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div ref={chatHistoryRef} className="chat-history">
            {chatHistory.map((chatItem, index) =>
              chatItem.isChatbot ? (
                <ChatbotItem
                  key={index}
                  chatItem={chatItem}
                  isLoading={chatItem.isLoading}
                />
              ) : (
                <UserItem key={index} chatItem={chatItem} />
              )
            )}
          </div>
          <ResponseSelector handleSelectMessage={handleSelectMessage} />
          <div className="chat-bottom">
            <textarea
              ref={textareaRef}
              className="chat-input"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={TEXTAREA_PLACEHOLDER}
            />

            <div className="chat-btn" onClick={() => handleSendMessage()}>
              {inputText.length && !isLoading ? (
                <SendBtnIcon />
              ) : (
                <NoMessageIcon />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
