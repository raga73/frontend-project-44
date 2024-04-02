import checkUserAnswer from '../index.js';
import { getRandomNumber } from '../utils.js';

const askUser = () => {
  const mathRiddle = 'What number is missing in the progression?';
  const progression = [];
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
  const result = [mathRiddle, expValue];
  return result;
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
  checkUserAnswer(askUser, rightAnswer);
};
