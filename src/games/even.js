import checkUserAnswer from '../index.js';
import { getRandomNumber, checkEven } from '../utils.js';

export const mathRiddle = 'Answer "yes" if the number is even, otherwise answer "no".';

const askUser = () => {
  const mathExpression = getRandomNumber();
  return [mathExpression, checkEven(mathExpression)];
  };

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
