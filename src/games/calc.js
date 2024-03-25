import {randomizer} from "/home/raga/frontend-project-44/src/index.js";
import {checkUserAnswer} from "/home/raga/frontend-project-44/src/index.js";

const askingUser = () => {
    console.log('What is the result of the expression?');
};

const expressionValue = () => {
    const mathSigns = ['+', '-', '*'];
    const min = 0;
    const max = 2;
    const signRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    const expValue = `${randomizer()} ${mathSigns.at(signRandom)} ${randomizer()}`
    return expValue;
};

const rightAnswer = (expValue) => {
    let rightAns;
    const mathSigns = ['+', '-', '*'];
     const arr = expValue.split(' ');
     const firstNum = parseInt(arr[0]);
     const secondNum = parseInt(arr[2]);
     switch (arr[1]) {
        case mathSigns[0]:
            rightAns = firstNum + secondNum;
            break;
        case mathSigns[1]:
            rightAns = firstNum - secondNum;
            break;
        case mathSigns[2]:
            rightAns = firstNum * secondNum;
            break;
     }
   return rightAns.toString();
  };

const calc = () => {
    checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
export {calc};