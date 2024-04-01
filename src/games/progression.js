import { checkUserAnswer } from '../index.js';
import { getRandomNumber } from '../utils.js';

const askingUser = () => {
  console.log('What number is missing in the progression?');
};

const expressionValue = () => {
  const progression = [];
  const min = 0;
  const progLength = getRandomNumber(5, 10);
  const hiddenNumberIndex = getRandomNumber(0, progLength - 1);
  const progressionStep = getRandomNumber();
  const progressionFirstNumber = getRandomNumber();
  progression[0] = progressionFirstNumber;
  for (let i = 1; i < progLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  progression[hiddenNumberIndex] = '..';
  const expValue = progression.join(' ');
  return expValue;
};

const rightAnswer = (expValue) => {
  let rightAns;
  const prHid = expValue.split(' ');
  const index = prHid.indexOf('..');
  if (index < (prHid.length / 2)) {
    rightAns = Number(prHid[index + 1]) - (Number(prHid[index + 2]) - Number(prHid[index + 1]));
  } else {
    rightAns = (Number(prHid[index - 1]) - Number(prHid[index - 2])) + Number(prHid[index - 1]);
  }
  return rightAns.toString();
};

export default () => {
  checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
