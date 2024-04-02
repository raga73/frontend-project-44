import checkUserAnswer from '../index.js';
import { getRandomNumber, findGreatestCommonDivisor } from '../utils.js';

const mathRiddle = 'Find the greatest common divisor of given numbers.';

const askUser = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const mathExpression = `${firstNum} ${secondNum}`;
  const rightAns = findGreatestCommonDivisor(firstNum, secondNum);
  const result = [mathExpression, rightAns];
  return result;
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
