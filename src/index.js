import readlineSync from 'readline-sync';

export const checkUserAnswer = (expressionValue, askingUser, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name ? ');
  console.log(`Hello, ${name}!`);
  askingUser();
  for (let i = 0; i < 3; i += 1) {
    const expValue = expressionValue();
    const rightAns = rightAnswer(expValue);
    console.log(`${'Question: '}${expValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAns) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}'${' is wrong answer ;(. Correct answer was '}'${rightAns}'.\n${"Let's try again, "}${name}!`);
      return;
    }
  }
  console.log(`${'Congratulations, '}${name}!`);
};
