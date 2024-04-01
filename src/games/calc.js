import { checkUserAnswer } from '../index.js';
import { getRandomNumber } from '../utils.js';

const askingUser = () => {
  console.log('What is the result of the expression?');
};

const expressionValue = () => {
  const mathSigns = ['+', '-', '*'];
  const signRandom = getRandomNumber(0, mathSigns.length - 1);
  const expValue = `${getRandomNumber()} ${mathSigns.at(signRandom)} ${getRandomNumber()}`;
  return expValue;
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
  checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
