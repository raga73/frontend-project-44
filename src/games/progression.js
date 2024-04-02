import checkUserAnswer from '../index.js';
import { getRandomNumber, getProgressionHiddenElement } from '../utils.js';

export const mathRiddle = 'What number is missing in the progression?';

const askUser = () => {
  const pr = [];
  const prLength = getRandomNumber(5, 10);
  const hidNumInd = getRandomNumber(0, prLength - 1);
  const progressionStep = getRandomNumber();
  const progressionFirstNumber = getRandomNumber();
  pr[0] = progressionFirstNumber;
  for (let i = 1; i < prLength; i += 1) {
    pr[i] = pr[i - 1] + progressionStep;
  }
  pr[hidNumInd] = '..';
  return [pr.join(' '), `${getProgressionHiddenElement(pr)}`];
};

export default () => {
  checkUserAnswer(askUser, mathRiddle);
};
