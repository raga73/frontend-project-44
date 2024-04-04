import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const mathRiddle = 'What number is missing in the progression?';

const getProgressionHiddenElement = (progression, hiddenNumberSymbol = '..') => {
  const hiddenNumberIndex = progression.indexOf(hiddenNumberSymbol);
  if (hiddenNumberIndex < (progression.length / 2)) {
    return progression[hiddenNumberIndex + 1]
    - (progression[hiddenNumberIndex + 2] - progression[hiddenNumberIndex + 1]);
  }
  return (progression[hiddenNumberIndex - 1]
      - progression[hiddenNumberIndex - 2]) + progression[hiddenNumberIndex - 1];
};

const askUser = () => {
  const progression = [];
  const progressionLength = getRandomNumber(5, 10);
  const hiddenNumberIndex = getRandomNumber(0, progressionLength - 1);
  const progressionStep = getRandomNumber();
  const progressionFirstNumber = getRandomNumber();
  progression[0] = progressionFirstNumber;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  progression[hiddenNumberIndex] = '..';
  return [progression.join(' '), getProgressionHiddenElement(progression)];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
