import readlineSync from 'readline-sync';

export default (askUser, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name ? ');
  console.log(`Hello, ${name}!`);
  const [mathRiddle] = askUser();
  console.log(mathRiddle);
  for (let i = 0; i < 3; i += 1) {
    const [, mathExpression] = askUser();
    const rightAns = rightAnswer(mathExpression);
    console.log(`${'Question: '}${mathExpression}`);
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
