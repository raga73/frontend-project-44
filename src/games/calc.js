import checkUserAnswer from '../index.js';
import { getRandomNumber, calculation } from '../utils.js';

export const mathRiddle = 'What is the result of the expression?';

const askUser = () => {
  const mathSigns = ['+', '-', '*'];
  const signRandom = mathSigns.at(getRandomNumber(0, mathSigns.length - 1));
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const mathExpression = `${firstNum} ${signRandom} ${secondNum}`;
  const rightAns = calculation(firstNum, signRandom, secondNum);
  const result = [mathExpression, rightAns];
  return result;
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
