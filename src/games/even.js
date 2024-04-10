import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const isNumberEven = (number) => { return !(number % 2); };

const mathRiddle = 'Answer "yes" if the number is even, otherwise answer "no".';

const askUser = () => {
  const mathExpression = getRandomNumber();
  const rightAnswer = isNumberEven(mathExpression) ? 'yes' : 'no';
  return [mathExpression, rightAnswer];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
