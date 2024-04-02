import checkUserAnswer from '../index.js';
import { getRandomNumber } from '../utils.js';

const askUser = () => {
  const mathRiddle = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const expValue = `${getRandomNumber()}`;
  const result = [mathRiddle, expValue];
  return result;
};

const rightAnswer = (number) => {
  const stack = [];
  for (let i = 1; i <= Number(number); i += 1) {
    if (Number(number) % i === 0) {
      stack.push(i);
    }
  }
  const result = stack.length === 2 ? 'yes' : 'no';
  return result;
};

export default () => {
  checkUserAnswer(askUser, rightAnswer);
};
