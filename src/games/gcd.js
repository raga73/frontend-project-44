import { randomizer, checkUserAnswer } from '../index.js';

const askingUser = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const expressionValue = () => {
  const expValue = `${randomizer()} ${randomizer()}`;
  return expValue;
};

const rightAnswer = (expValue) => {
  let maxDivider = 1;
  const arrayOfNumers = expValue.split(' ');
  const [firstNum, secondNum] = arrayOfNumers;
  if (firstNum === 0 || secondNum === 0) {
    return maxDivider.toString();
  }
  const commonDividers = [];
  for (let i = 1; i <= firstNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      commonDividers.push(i);
    }
  }
  for (const divider of commonDividers) {
    if (divider > maxDivider) {
      maxDivider = divider;
    }
  }
  return maxDivider.toString();
};

export default () => {
  checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
