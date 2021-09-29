let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const checkGuess = (userGuess) => {
  if(userGuess < 0 || userGuess > 9) {
    window.alert("please make a guess between 0 and 9");
  }
}

const compareGuesses = (userGuess, compGuess, targNum) => {
  checkGuess(userGuess);
  const userScore = Math.abs(userGuess - targNum);
  const compScore = Math.abs(compGuess - targNum);
  return userScore <= compScore;
}

const updateScore = (winner) => {
  winner === 'human' ? humanScore += 1 : computerScore += 1;
}

const advanceRound = () => currentRoundNumber += 1;

