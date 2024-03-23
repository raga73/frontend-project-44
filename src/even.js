import readlineSync from 'readline-sync';
const checkEven = () => {
  console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name ? ');
    console.log(`Hello, ${name}!`); 
let totalResult = 0;
while (totalResult !== 3) {
    let rightAnswer;
const currentNumber = Math.floor(Math.random() * 100);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(`${'Question: '}${currentNumber}`);
currentNumber % 2 === 0 ? rightAnswer = 'yes' : rightAnswer = 'no';
const userAnswer = readlineSync.question('Your answer: ');
if ( userAnswer === rightAnswer) {
    console.log('Correct!');
    totalResult += 1;
} else {
   console.log(`'${userAnswer}'${' is wrong answer ;(. Correct answer was '}'${rightAnswer}'\n${"Let's try again, "}${name}!`);
return;
}
}
console.log(`${'Congratulations, '}${name}!`);
}
export {checkEven};
