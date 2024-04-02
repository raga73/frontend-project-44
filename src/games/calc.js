import checkUserAnswer from '../index.js';
import { getRandomNumber, calculation } from '../utils.js';

export const mathRiddle = 'What is the result of the expression?';

const askUser = () => {
  const mathSigns = ['+', '-', '*'];
  const signRandom = mathSigns.at(getRandomNumber(0, mathSigns.length - 1));
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const rightAns = calculation(firstNum, signRandom, secondNum);
  return [`${firstNum} ${signRandom} ${secondNum}`, rightAns];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
