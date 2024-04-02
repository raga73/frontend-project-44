import readlineSync from 'readline-sync';

export default (askUser, mathRiddle, roundsQuantity = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name ? ');
  console.log(`Hello, ${name}!`);
  console.log(mathRiddle);
  for (let i = 1; i <= roundsQuantity; i += 1) {
    const [mathExpression, rightAnswer] = askUser();
    console.log(`${'Question: '}${mathExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}'${' is wrong answer ;(. Correct answer was '}'${rightAnswer}'.\n${"Let's try again, "}${name}!`);
      return;
    }
  }
  console.log(`${'Congratulations, '}${name}!`);
};
