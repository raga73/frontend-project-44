import { randomizer, checkUserAnswer } from '../index.js';

const askingUser = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const expressionValue = () => {
  const expValue = `${randomizer()} ${randomizer()}`;
  return expValue;
};

const rightAnswer = (expValue) => {
  let maxDivisor = 1;
  const arrayOfNumers = expValue.split(' ');
  const [firstNum, secondNum] = arrayOfNumers;
  if (Number(firstNum) === 0 || Number(secondNum) === 0) {
    return maxDivisor.toString();
  }
  for (let i = 1; i <= firstNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
     maxDivisor = i;
    }
  }
  return maxDivisor.toString();
};

export default () => {
  checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
