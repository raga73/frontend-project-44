import { randomizer, checkUserAnswer } from '../index.js';

const askingUser = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const expressionValue = () => {
  const expValue = `${randomizer()} ${randomizer()}`;
  return expValue;
};

const rightAnswer = (expValue) => {
  const firstNumDividers = [];
  const secondNumDividers = [];
  const commonDividers = [];
  const arr = expValue.split(' ');
  const firstNum = Number(arr[0]);
  const secondNum = Number(arr[1]);
  for (let i = 1; i <= firstNum; i += 1) {
    if (firstNum % i === 0) {
      firstNumDividers.push(i);
    }
  }
  for (let j = 1; j <= secondNum; j += 1) {
    if (secondNum % j === 0) {
      secondNumDividers.push(j);
    }
  }
  for (const index1 of firstNumDividers) {
    if (secondNumDividers.includes(index1)) {
      commonDividers.push(index1);
    }
  }
  let maxDivider = 1;
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
