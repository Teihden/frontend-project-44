import startGame from '../index.js';

export default () => {
  const gameTerms = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => {
    const number = Math.ceil(Math.random() * 100);
    return number;
  };

  const getCorrectAnswer = (value) => {
    const correctAnswer = value % 2 === 0 ? 'yes' : 'no';
    return correctAnswer;
  };

  startGame(gameTerms, getQuestion, getCorrectAnswer);
};
