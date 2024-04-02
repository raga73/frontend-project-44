import checkUserAnswer from '../index.js';
import { getRandomNumber } from '../utils.js';

const askUser = () => {
  const mathRiddle = 'What is the result of the expression?';
  const mathSigns = ['+', '-', '*'];
  const signRandom = getRandomNumber(0, mathSigns.length - 1);
  const expValue = `${getRandomNumber()} ${mathSigns.at(signRandom)} ${getRandomNumber()}`;
  const result = [mathRiddle, expValue];
  return result;
};

const rightAnswer = (expValue) => {
  let rightAns;
  const mathSigns = ['+', '-', '*'];
  const mathExpression = expValue.split(' ');
  const [firstNum, mathSign, secondNum] = mathExpression;
  switch (mathSign) {
    case mathSigns[0]:
      rightAns = Number(firstNum) + Number(secondNum);
      break;
    case mathSigns[1]:
      rightAns = Number(firstNum) - Number(secondNum);
      break;
    case mathSigns[2]:
      rightAns = Number(firstNum) * Number(secondNum);
      break;
    default:
      break;
  }
  return rightAns.toString();
};

export default () => {
  checkUserAnswer(askUser, rightAnswer);
};
