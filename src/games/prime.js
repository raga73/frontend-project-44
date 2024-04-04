import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const isPrimeNumber = (number) => {
  const stack = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      stack.push(i);
    }
  }
  return stack.length === 2;
};

const mathRiddle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const askUser = () => {
  const number = getRandomNumber();
  return [number, isPrimeNumber(number) === true ? 'yes' : 'no'];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
