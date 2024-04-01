import { checkUserAnswer } from '../index.js';
import { getRandomNumber } from '../utils.js';

const askingUser = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const expressionValue = () => {
  const expValue = `${getRandomNumber()}`;
  return expValue;
};

const rightAnswer = (expValue) => {
  const stack = [];
  for (let i = 1; i <= Number(expValue); i += 1) {
    if (Number(expValue) % i === 0) {
      stack.push(i);
    }
  }
  const rightAns = stack.length === 2 ? 'yes' : 'no';
  return rightAns;
};

export default () => {
  checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
