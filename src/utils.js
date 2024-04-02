export const getRandomNumber = (min = 0, max = 10) => {
  const currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return currentNumber;
};

export const checkEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

export const getProgressionHiddenElement = (pr, hiddenNumberSymbol = '..') => {
  const hidNumInd = pr.indexOf(hiddenNumberSymbol);
  let rightAns;
  if (hidNumInd < (pr.length / 2)) {
    rightAns = Number(pr[hidNumInd + 1]) - (Number(pr[hidNumInd + 2]) - Number(pr[hidNumInd + 1]));
  } else {
    rightAns = (Number(pr[hidNumInd - 1]) - Number(pr[hidNumInd - 2])) + Number(pr[hidNumInd - 1]);
  }
  return rightAns;
};

export const calculation = (firstNum, mathOperation, secondNum) => {
  const mathSigns = ['+', '-', '*'];
  let rightAns;
  switch (mathOperation) {
    case mathSigns[0]:
      rightAns = firstNum + secondNum;
      break;
    case mathSigns[1]:
      rightAns = firstNum - secondNum;
      break;
    case mathSigns[2]:
      rightAns = firstNum * secondNum;
      break;
    default:
      break;
  }
  return rightAns.toString();
};

export const findGreatestCommonDivisor = (firstNum, secondNum) => {
  let maxDivisor = 1;
  if (firstNum === 0 || secondNum === 0) {
    return (firstNum + secondNum).toString();
  }
  for (let i = 1; i <= firstNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      maxDivisor = i;
    }
  }
  return maxDivisor.toString();
};

export const checkPrimeNumber = (number) => {
  const stack = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      stack.push(i);
    }
  }
  const result = stack.length === 2 ? 'yes' : 'no';
  return result;
};
