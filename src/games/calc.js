import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const calculation = (firstNumber, mathOperation, secondNumber) => {
  const mathSigns = ['+', '-', '*'];
  switch (mathOperation) {
    case mathSigns[0]:
      return firstNumber + secondNumber;
    case mathSigns[1]:
      return firstNumber - secondNumber;
    case mathSigns[2]:
      return firstNumber * secondNumber;
    default:
      return Error('Wrong maths symbol!');
  }
};

const mathRiddle = 'What is the result of the expression?';

const askUser = () => {
  const mathSigns = ['+', '-', '*'];
  const signRandom = mathSigns.at(getRandomNumber(0, mathSigns.length - 1));
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const rightAnswer = calculation(firstNumber, signRandom, secondNumber);
  return [`${firstNumber} ${signRandom} ${secondNumber}`, rightAnswer];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
