import {randomizer} from "/home/raga/frontend-project-44/src/index.js";
import {checkUserAnswer} from "/home/raga/frontend-project-44/src/index.js";

const askingUser = () => {
    console.log('What number is missing in the progression?');
};

const expressionValue = () => {
    let progression = [];
    const min = 0;
    const minProgressionLength = 5;
    const maxProgressionLength = 10;
    const progressionLength = Math.floor(Math.random() * (maxProgressionLength - minProgressionLength + 1)) + minProgressionLength;
    const hiddenNumberIndex = Math.floor(Math.random() * ((progressionLength - 1) - min + 1)) + min;
    const progressionStep = randomizer();
    const progressionFirstNumber = randomizer();
    progression[0] = progressionFirstNumber;
    for (let i = 1; i < progressionLength; i += 1) {
        progression[i] = progression[i - 1] + progressionStep; 
    }
    progression[hiddenNumberIndex] = '..';
    let expValue = progression.join(' ');
    return expValue;
    
};

const rightAnswer = (expValue) => {
    let rightAns;
const progressionWithHiddenNumber = expValue.split(' ');
const index = progressionWithHiddenNumber.indexOf('..');
if (index < (progressionWithHiddenNumber.length / 2)) {
    rightAns = parseInt(progressionWithHiddenNumber[index + 1]) - (parseInt(progressionWithHiddenNumber[index + 2]) - parseInt(progressionWithHiddenNumber[index + 1]));
} else {
    rightAns = (parseInt(progressionWithHiddenNumber[index - 1]) - parseInt(progressionWithHiddenNumber[index - 2])) + parseInt(progressionWithHiddenNumber[index - 1]);
}
return rightAns.toString();
  };
 
  const progression = () => {
    checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
export {progression};