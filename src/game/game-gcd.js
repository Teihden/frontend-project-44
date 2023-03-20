import startGame from '../index.js';

export default () => {
  const gameTerms = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const number1 = Math.ceil(Math.random() * 100);
    const number2 = Math.ceil(Math.random() * 100);
    const expression = `${number1} ${number2}`;

    return expression;
  };

  const getCorrectAnswer = (value) => {
    const array = value.split(' ');
    const minNumber = Math.min(...array);
    const maxNumber = Math.max(...array);

    const getGCD = (maxNum, minNum) => {
      if (maxNum % minNum === 0) {
        return minNum;
      }
      const remainder = maxNum % minNum;
      return getGCD(minNum, remainder);
    };

    const correctAnswer = getGCD(maxNumber, minNumber);

    return correctAnswer.toString();
  };

  startGame(gameTerms, getQuestion, getCorrectAnswer);
};
