/**
 * @description Get the current time in HH:MM format
 * @returns {string} The current time
 */
export const getCurrentTime = () => {
  const formatTimeElement = (timeElement: number) => {
    return timeElement < 10 ? '0' + timeElement : timeElement.toString();
  };

  const currentHour = formatTimeElement(new Date().getHours());
  const currentMinutes = formatTimeElement(new Date().getMinutes());

  return `${currentHour}:${currentMinutes}`;
};
