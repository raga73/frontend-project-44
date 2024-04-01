import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const askUser = () => {
  const mathRiddle = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expValue = getRandomNumber();
  const result = [mathRiddle, expValue];
  return result;
};

const rightAnswer = (expValue) => {
  const rightAns = expValue % 2 === 0 ? 'yes' : 'no';
  return rightAns;
};

export default () => {
  checkUserAnswer(askUser, rightAnswer);
};
