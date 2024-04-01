import { randomizer, checkUserAnswer } from '../index.js';

const askingUser = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const expressionValue = () => {
  const expValue = `${randomizer()}`;
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
