import checkUserAnswer from '../index.js';
import { getRandomNumber, findGreatestCommonDivisor } from '../utils.js';

const mathRiddle = 'Find the greatest common divisor of given numbers.';

const askUser = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  return [`${firstNum} ${secondNum}`, `${findGreatestCommonDivisor(firstNum, secondNum)}`];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
