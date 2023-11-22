/**
 * @description Chat message data type
 * @param isChatbot whether it is a response from chatbot."
 * @param message message
 * @param isLoading The answer is loading.
 * @param time The time when the message is sent.
 */ 
export interface IChatHistory {
  isChatbot: boolean;
  message: string;
  isLoading?: boolean;
  time?: string;
}
