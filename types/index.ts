/**
 * @description Data type for chat history
 * @param isChatbot Flag indicating whether it's a response from the chatbot
 * @param message Content of the message
 * @param isLoading Flag indicating whether the response is currently loading
 * @param time Time when the message was sent
 */
export interface IChatHistory {
  isChatbot: boolean;
  message: string;
  isLoading?: boolean;
  time?: string;
}
