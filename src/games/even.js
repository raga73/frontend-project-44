import {randomizer} from "/home/raga/frontend-project-44/src/index.js";
import {checkUserAnswer} from "/home/raga/frontend-project-44/src/index.js";

const askingUser = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const expressionValue = () => {
  const expValue = randomizer();
  return expValue;
};

const rightAnswer = (expValue) => {
  const rightAns = expValue % 2 === 0 ? rightAns = 'yes' : rightAns = 'no';
  return rightAns;
};

const checkEven = () => {
checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
export {checkEven};
