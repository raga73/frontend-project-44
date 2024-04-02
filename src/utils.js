export const getRandomNumber = (min = 0, max = 10) => {
  const currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return currentNumber;
};

export const checkEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};