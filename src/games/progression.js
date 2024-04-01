import { randomizer, checkUserAnswer } from '../index.js';

const askingUser = () => {
  console.log('What number is missing in the progression?');
};

const expressionValue = () => {
  const progression = [];
  const min = 0;
  const minLength = 5;
  const maxLength = 10;
  const progLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const hiddenNumberIndex = Math.floor(Math.random() * ((progLength - 1) - min + 1)) + min;
  const progressionStep = randomizer();
  const progressionFirstNumber = randomizer();
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
