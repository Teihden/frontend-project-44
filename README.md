# Project "Brain games"
[![Actions Status](https://github.com/Teihden/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Teihden/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/214574a61f2bd80cd8b9/maintainability)](https://codeclimate.com/github/Teihden/frontend-project-44/maintainability)

**"Brain games"** is a set of five console games based on the popular mobile brain-pumping apps. Each game asks questions that need to be answered correctly. After three correct answers, the game is considered completed. Incorrect answers end the game and prompt you to play it again. 

Games:
1. <a href="#brain-even">"Checking Parity"</a>
2. <a href="#brain-calc">"Calculator"</a>
3. <a href="#brain-gcd">"Greatest common divisor (GCD)"</a>
4. <a href="#brain-progression">"Arithmetic progression"</a>
5. <a href="#brain-prime">"Is it a prime number?"</a>

<hr>

## Setup

```shell
# Install dependencies
make install
```

## Run

```shell
# Run package
make brain-games
```

## CLI

```shell
# Runs npm-publish with flag (--dry-run)
make publish

# Runs Eslint against source code for quality
make lint
```

<h2 id="brain-even">Brain-even (game: "Checking Parity")</h2>
The essence of the game is this: the user is shown a random number. And he has to answer 'yes' if the number is even, or 'no' if it is odd. In case the user gives the wrong answer, the game ends. You must give the correct answer to three questions in a row.

[![asciicast](https://asciinema.org/a/BJ5qi0OoEdbeaEb4IDF11Xc1c.svg)](https://asciinema.org/a/BJ5qi0OoEdbeaEb4IDF11Xc1c)

<h2 id="brain-calc">Brain-calc (game: "Calculator")</h2>
The essence of the game is this: the user is shown a random mathematical expression, such as 35 + 16, which must be calculated and write down the correct answer.

[![asciicast](https://asciinema.org/a/dDv8YRtM7hlhP7GLYQATQkxVt.svg)](https://asciinema.org/a/dDv8YRtM7hlhP7GLYQATQkxVt)

<h2 id="brain-gcd">Brain-gcd (game: "Greatest common divisor (GCD)")</h2>
The essence of the game is as follows: two random numbers is shown, for example, 25 50. You must calculate and enter the greatest common divisor of these numbers.

[![asciicast](https://asciinema.org/a/zsiBNVAEzRkv6H4Xzguqe1AxJ.svg)](https://asciinema.org/a/zsiBNVAEzRkv6H4Xzguqe1AxJ)

<h2 id="brain-progression">Brain-progression (game: "Arithmetic progression")</h2>
Show the player a series of numbers that form an arithmetic progression, replacing any of the numbers with two dots. The player must determine that number.  The length can be generated randomly, but contains no less than 5 and no more than 10 numbers.

[![asciicast](https://asciinema.org/a/MezGEP6gQOTkw7Al3n2Kelrdo.svg)](https://asciinema.org/a/MezGEP6gQOTkw7Al3n2Kelrdo)

<h2 id="brain-prime">Brain-prime (game: "Is it a prime number?")</h2>
The essence of the game is this: the user is shown a random number. And he has to answer 'yes' if the number is prime, or 'no' if it is not.

[![asciicast](https://asciinema.org/a/eHQoqtXxuCOzsleCC2SajJ2lZ.svg)](https://asciinema.org/a/eHQoqtXxuCOzsleCC2SajJ2lZ)
