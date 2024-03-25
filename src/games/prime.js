import {randomizer} from "/home/raga/frontend-project-44/src/index.js";
import {checkUserAnswer} from "/home/raga/frontend-project-44/src/index.js";

const askingUser = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const expressionValue = () => {
    const expValue = `${randomizer()}`
    return expValue;
};

const rightAnswer = (expValue) => {
    let rightAns;
    let stack = [];
    for (let i = 1; i <= parseInt(expValue); i += 1) {
        if (parseInt(expValue) % i === 0) {
            stack.push(i);
        }
    }
    stack.length === 2 ? rightAns = 'yes' : rightAns = 'no';
    return rightAns;
  };

const checkPrime = () => {
    checkUserAnswer(expressionValue, askingUser, rightAnswer);
};
export {checkPrime};