import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const mathRiddle = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let maxDivisor = 1;
  if (firstNumber === 0 || secondNumber === 0) {
    return firstNumber + secondNumber;
  }
  for (let i = 1; i <= firstNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      maxDivisor = i;
    }
  }
  return maxDivisor;
};

const askUser = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  return [`${firstNumber} ${secondNumber}`, findGreatestCommonDivisor(firstNumber, secondNumber)];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
