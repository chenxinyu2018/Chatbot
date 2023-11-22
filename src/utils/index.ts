/**
 * @description Get the current time in HH:MM format
 * @returns {string} The current time
 */
export const getCurrentTime = () => {
  const currentHour = `${
    new Date().getHours() < 10
      ? '0' + new Date().getHours().toString()
      : new Date().getHours().toString()
  }`;
  const currentMinutes = `${
    new Date().getMinutes() < 10
      ? '0' + new Date().getMinutes().toString()
      : new Date().getMinutes().toString()
  }`;

  return `${currentHour}:${currentMinutes}`;
};
