import readlineSync from 'readline-sync';

export default () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < 3; i += 1) {
    const number = Math.ceil(Math.random() * 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    switch (answer === correctAnswer) {
      case true: {
        console.log('Correct!');
        break;
      }
      case false: {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      }
      default:
        break;
    }
  }
  return console.log(`Congratulations, ${username}!`);
};
