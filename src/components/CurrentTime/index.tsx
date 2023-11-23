import React from 'react';
import './index.scss';

interface IProps {
  currentTime?: string; // The current time to be displayed
}

/**
 * Displays the current time when hovering over a chat message
 *
 * @param {IProps} props - The props of the component
 * @returns {JSX.Element} The rendered component
 */
const CurrentTime: React.FC<IProps> = (props: IProps) => {
  const { currentTime } = props;

  return (
    <div className='current-time'>
      {currentTime}
    </div>
  );
};

export default CurrentTime;
