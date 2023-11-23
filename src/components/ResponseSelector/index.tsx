import React from 'react';
import { MockMessageList } from '../../mock';
import './index.scss';

interface IProps {
  handleSelectMessage?: Function; // Callback function after selecting a common question
}

/**
 * Component for selecting common questions
 *
 * @param {Object} props - The props passed to the component
 * @returns {JSX.Element} The rendered component
 */
const ResponseSelector: React.FC<IProps> = (props: IProps) => {
  const { handleSelectMessage } = props;

  return (
    <div className="selector-container">
      <div className="selector-content">
        {MockMessageList.map((mockMessage, index) => {
          return (
            <span
              key={index}
              className="selector-item"
              onClick={() => {
                handleSelectMessage && handleSelectMessage(mockMessage.message);
              }}
            >
              {mockMessage.message}
            </span>
          );
        })}
        <span className="last-item">&nbsp;</span>
      </div>
    </div>
  );
};

export default ResponseSelector;
