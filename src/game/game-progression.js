import startGame from '../index.js';

export default () => {
  const gameTerms = 'What number is missing in the progression?';
  const getQuestion = () => {
    function getLengthOfProgression(minLength, maxLength) {
      return Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    }

    const lengthOfProgression = getLengthOfProgression(5, 10);
    const differenceOfProgression = Math.ceil(Math.random() * 20);
    const firstTermOfProgression = Math.ceil(Math.random() * 20);
    const indexOfMissingTerm = Math.floor(Math.random() * lengthOfProgression);
    const progression = [];

    for (let index = 0; index < lengthOfProgression; index += 1) {
      progression[index] = firstTermOfProgression + differenceOfProgression * index;
    }

    progression[indexOfMissingTerm] = '..';

    return progression.join(' ');
  };

  const getCorrectAnswer = (value) => {
    const array = value.split(' ');
    const indexOfLastTerm = array.length - 1;
    const indexOfMissingTerm = array.indexOf('..');
    let correctAnswer = 0;

    if (indexOfMissingTerm === 0) {
      const differenceOfProgression = +array[2] - +array[1];
      correctAnswer = +array[1] - differenceOfProgression;
    } else if (indexOfMissingTerm === indexOfLastTerm) {
      const differenceOfProgression = +array.at(-2) - +array.at(-3);
      correctAnswer = +array.at(-2) + differenceOfProgression;
    } else {
      correctAnswer = (+array[indexOfMissingTerm + 1] + +array[indexOfMissingTerm - 1]) / 2;
    }

    return correctAnswer.toString();
  };

  startGame(gameTerms, getQuestion, getCorrectAnswer);
};
