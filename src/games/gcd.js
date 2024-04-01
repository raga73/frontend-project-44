import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const askUser = () => {
  const mathRiddle = 'Find the greatest common divisor of given numbers.';
  const expValue = `${getRandomNumber()} ${getRandomNumber()}`;
  const result = [mathRiddle, expValue];
  return result;
};

const rightAnswer = (expValue) => {
  let maxDivisor = 1;
  const arrayOfNumers = expValue.split(' ');
  const [firstNum, secondNum] = arrayOfNumers;
  if (Number(firstNum) === 0 || Number(secondNum) === 0) {
    return (Number(firstNum) + Number(secondNum)).toString();
  }
  for (let i = 1; i <= firstNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      maxDivisor = i;
    }
  }
  return maxDivisor.toString();
};

export default () => {
  checkUserAnswer(askUser, rightAnswer);
};
