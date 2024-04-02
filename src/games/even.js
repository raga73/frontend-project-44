import checkUserAnswer from '../index.js';
import { getRandomNumber, checkEven } from '../utils.js';

export const mathRiddle = 'Answer "yes" if the number is even, otherwise answer "no".';

const askUser = () => {
  const mathExpression = getRandomNumber();
  const rightAns = checkEven(mathExpression);
  const result = [mathExpression, rightAns];
  return result;
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
