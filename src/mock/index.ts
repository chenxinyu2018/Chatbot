import { getCurrentTime } from '../utils';

// Mock chat history
export const mockChatList = [
  {
    isChatbot: true,
    message: 'Can I assist you with any question or concerns you might have?',
    time: getCurrentTime(),
  },
];

// Mock quick input options
export const MockMessageList = [
  {
    isChatbot: true,
    message: 'Is the free plan available?',
  },
  {
    isChatbot: true,
    message: 'Do you generate leads?',
  },
  {
    isChatbot: true,
    message: 'How do I upgrade my plan?',
  },
  {
    isChatbot: true,
    message: 'Is there a mobile app available?',
  },
  {
    isChatbot: true,
    message: 'Do you offer customer support?',
  },
];

// Mock response
const MockResponses = new Map();
MockResponses.set(
  'Is the free plan available?',
  'Yes, we offer a free plan with basic features to get you started. You can upgrade to a paid plan for more advanced functionality.'
);
MockResponses.set(
  'Do you generate leads?',
  'Yes, our platform can help generate leads through various engagement and conversion tools.'
);
MockResponses.set(
  'How do I upgrade my plan?',
  'You can upgrade your plan by visiting the account settings section within the platform and selecting the desired subscription tier.'
);
MockResponses.set(
  'Is there a mobile app available?',
  'Yes, we provide a mobile app for on-the-go access and management of your account.'
);
MockResponses.set(
  'Do you offer customer support?',
  'Absolutely, we offer customer support through multiple channels including live chat, email, and phone support to assist you with any inquiries or issues.'
);
MockResponses.set(
  '',
  'Thank you for reaching out. Please give me a moment to look into this for you.'
);
export { MockResponses };
