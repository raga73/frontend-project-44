import checkUserAnswer from '../index.js';
import { getRandomNumber, checkEven } from '../utils.js';

const askUser = () => {
  const mathRiddle = 'Answer "yes" if the number is even, otherwise answer "no".';
  const mathExpression = getRandomNumber();
  const result = [mathRiddle, mathExpression];
  return result;
};

export default () => {
  checkUserAnswer(askUser, checkEven);
};
