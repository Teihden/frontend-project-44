# Project "Brain games"
[![Actions Status](https://github.com/Teihden/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Teihden/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/214574a61f2bd80cd8b9/maintainability)](https://codeclimate.com/github/Teihden/frontend-project-44/maintainability)

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
```

```shell
# Runs Eslint against source code for quality
make lint
```

## Brain-even (game: "Checking Parity")
The essence of the game is this: the user is shown a random number. And he has to answer 'yes' if the number is even, or 'no' if it is odd. In case the user gives the wrong answer, the game ends. You must give the correct answer to three questions in a row.
[![asciicast](https://asciinema.org/a/BJ5qi0OoEdbeaEb4IDF11Xc1c.svg)](https://asciinema.org/a/BJ5qi0OoEdbeaEb4IDF11Xc1c)

## Brain-calc (game: "Calculator")
The essence of the game is this: the user is shown a random mathematical expression, such as 35 + 16, which must be calculated and write down the correct answer.
[![asciicast](https://asciinema.org/a/dDv8YRtM7hlhP7GLYQATQkxVt.svg)](https://asciinema.org/a/dDv8YRtM7hlhP7GLYQATQkxVt)

## Brain-calc (game: "Greatest common divisor (GCD)")
The essence of the game is as follows: two random numbers is shown, for example, 25 50. You must calculate and enter the greatest common divisor of these numbers.
[![asciicast](https://asciinema.org/a/zsiBNVAEzRkv6H4Xzguqe1AxJ.svg)](https://asciinema.org/a/zsiBNVAEzRkv6H4Xzguqe1AxJ)

## Brain-calc (game: "Arithmetic progression")
Show the player a series of numbers that form an arithmetic progression, replacing any of the numbers with two dots. The player must determine that number.  The length can be generated randomly, but contains no less than 5 and no more than 10 numbers.
[![asciicast](https://asciinema.org/a/MezGEP6gQOTkw7Al3n2Kelrdo.svg)](https://asciinema.org/a/MezGEP6gQOTkw7Al3n2Kelrdo)
