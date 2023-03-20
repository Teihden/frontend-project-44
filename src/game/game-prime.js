import startGame from '../index.js';

export default () => {
  const gameTerms = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => {
    const number = Math.ceil(Math.random() * 100);
    return number;
  };

  const getCorrectAnswer = (value) => {
    if (value < 2) {
      return 'no';
    }

    for (let divider = 2; divider <= value / 2; divider += 1) {
      if (value % divider === 0) {
        return 'no';
      }
    }

    return 'yes';
  };

  startGame(gameTerms, getQuestion, getCorrectAnswer);
};
