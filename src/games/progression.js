import checkUserAnswer from '../index.js';
import getRandomNumber from '../utils.js';

const mathRiddle = 'What number is missing in the progression?';

const getProgression = (
  firstElement = getRandomNumber(),
  progressionLength = getRandomNumber(5, 10),
  progressionStep = getRandomNumber(),
) => {
  const progression = [];
  progression[0] = firstElement;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  return [progression, progressionStep];
};

const askUser = () => {
  const [progression, progressionStep] = getProgression();
  const hiddenNumberIndex = getRandomNumber(0, progression.length - 1);
  progression[hiddenNumberIndex] = '..';
  let rightAnswer;
  if (hiddenNumberIndex < (progression.length / 2)) {
    rightAnswer = progression[hiddenNumberIndex + 1] - progressionStep;
  } else {
    rightAnswer = progression[hiddenNumberIndex - 1] + progressionStep;
  }
  return [progression.join(' '), rightAnswer];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
