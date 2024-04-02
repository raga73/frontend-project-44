import checkUserAnswer from '../index.js';
import { getRandomNumber, checkPrimeNumber } from '../utils.js';

export const mathRiddle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const askUser = () => {
  const number = getRandomNumber();
  return [`${number}`, checkPrimeNumber(number)];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
