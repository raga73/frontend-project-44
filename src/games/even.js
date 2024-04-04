import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const isNumberEven = (number) => {
  const result = number % 2 === 0;
  return result;
};

const mathRiddle = 'Answer "yes" if the number is even, otherwise answer "no".';

const askUser = () => {
  const mathExpression = getRandomNumber();
  return [mathExpression, isNumberEven(mathExpression) === true ? 'yes' : 'no'];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
