import { checkUserAnswer } from '../index.js';
import { getRandomNumber } from '../utils.js';

const askingUser = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const expressionValue = () => {
  const expValue = getRandomNumber();
  return expValue;
};

const rightAnswer = (expValue) => {
  const rightAns = expValue % 2 === 0 ? 'yes' : 'no';
  return rightAns;
};

export default () => {
  checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
