import {randomizer} from "/home/raga/frontend-project-44/src/index.js";
import {checkUserAnswer} from "/home/raga/frontend-project-44/src/index.js";

const askingUser = () => {
    console.log('Find the greatest common divisor of given numbers.');
};

const expressionValue = () => {
    const expValue = `${randomizer()} ${randomizer()}`
    return expValue;
};

const rightAnswer = (expValue) => {
    let firstNumDividers = [];
    let secondNumDividers = [];
    let commonDividers = [];
     const arr = expValue.split(' ');
     const firstNum = parseInt(arr[0]);
     const secondNum = parseInt(arr[1]);
for (let i = 1; i <= firstNum; i += 1) {
    if (firstNum % i === 0) {
        firstNumDividers.push(i);
    }
}
for (let j = 1; j <= secondNum; j += 1) {
    if (secondNum % j === 0) {
        secondNumDividers.push(j);
    }
}
   for (const index1 of firstNumDividers) {
    if (secondNumDividers.includes(index1)) {
        commonDividers.push(index1);
    }
   }
   let maxDivider = 1;
   for (const divider of commonDividers) {
    if (divider > maxDivider) {
        maxDivider = divider;
    }
   }
   return maxDivider.toString();
  };

  const gcd = () => {
    checkUserAnswer(expressionValue, askingUser, rightAnswer);
    };
    export {gcd};