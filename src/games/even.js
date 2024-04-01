import { randomizer, checkUserAnswer } from '../index.js';

const askingUser = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const expressionValue = () => {
  const expValue = randomizer();
  return expValue;
};

const rightAnswer = (expValue) => {
  const rightAns = expValue % 2 === 0 ? 'yes' : 'no';
  return rightAns;
};

export default () => {
  checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
