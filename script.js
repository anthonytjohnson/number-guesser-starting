let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const compareGuesses = (userGuess, compGuess, targNum) => {
  const userScore = Math.abs(userGuess - targNum);
  const compScore = Math.abs(compGuess - targNum);
  return userScore <= compScore;
}

const updateScore = (winner) => {
  winner === 'human' ? humanScore += 1 : computerScore += 1;
}

const advanceRound = () => currentRoundNumber += 1;

