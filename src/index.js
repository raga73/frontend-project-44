import readlineSync from 'readline-sync';
const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name ? ');
    console.log(`Hello, ${name}!`);
    return name;
};
export  {greeting};

const randomizer = () => {
    const currentNumber = Math.floor(Math.random() * 10);
    return currentNumber;
};
export {randomizer};

const byeBye = (name) => {
    console.log(`${'Congratulations, '}${name}!`);
};
export {byeBye};

const checkUserAnswer = (expressionValue, askingUser, rightAnswer) => { 
   const name = greeting();
    let roundQuantity = 0;
  while (roundQuantity !== 3) { 
  const expValue = expressionValue();
  askingUser();
  const rightAns = rightAnswer(expValue);
  console.log(`${'Question: '}${expValue}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if ( userAnswer === rightAns) {
    console.log('Correct!');
    roundQuantity += 1;
  } else {
   console.log(`'${userAnswer}'${' is wrong answer ;(. Correct answer was '}'${rightAns}'.\n${"Let's try again, "}${name}!`);
   return;
  }
  }
  byeBye(name);
  };
export {checkUserAnswer};